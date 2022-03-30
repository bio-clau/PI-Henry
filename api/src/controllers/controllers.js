const axios = require("axios");
const {cloudinary} = require('../utils/coudinary');
const { Op } = require('sequelize');
const { Pokemon, Types } = require("../db");
const { v4: uuidv4 } = require('uuid'); 
// GET https://pokeapi.co/api/v2/pokemon
// GET https://pokeapi.co/api/v2/pokemon/{id}
// GET https://pokeapi.co/api/v2/pokemon/{name}
// GET https://pokeapi.co/api/v2/type

const getPokeName = async (name) => {
  let detPoke
  let prefix
  let types
  let pokemon = await Pokemon.findAll({where: {name: name.toUpperCase()}})
  // console.log(pokemon)
  if(pokemon.length>0){
    prefix = pokemon[0].dataValues
    types = pokemon.dataValues.types.map(t=> t.dataValues.name)
  }else {
    pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    prefix = pokemon.data
    types = pokemon.data.types.map(t=>t.type.name)
  }
  detPoke = {
    name: prefix.name.toUpperCase(),
    height: prefix.height,
    weight: prefix.weight,
    id: prefix.id,
    health: prefix.stats? prefix.stats[0].base_stat : prefix.health,
    strength: prefix.stats? prefix.stats[1].base_stat : prefix.strength,
    defense: prefix.stats? prefix.stats[2].base_stat : prefix.defense,
    velocity: prefix.stats? prefix.stats[5].base_stat : prefix.velocity,
    types: types,
    img: prefix.sprites? prefix.sprites.other.home.front_default : prefix.img,
  };
  return detPoke;
};


exports.getPoke = async (req, res, next) => {
  //imagen, nombre, tipos(electrico, Fuego, agua, etc), fuerza
  //limitamos a 40 pokemones totales
  let {name} = req.query
  if(/\d/.test(name)) return res.status(404).json('Request failed with status code 404')
  let newPokes=[]
  try{
    if(name) {
      newPokes = await getPokeName(name);
      return res.status(200).json(newPokes);
    } else{
      let r = await Pokemon.findAll({
        include: Types
      });
      r.map(poke=> {
        // console.log(poke.dataValues)
        let newPoke={...poke.dataValues}
        newPoke.types=poke.dataValues.types.map(t=> t.dataValues.name)
        newPokes.push(newPoke)
      })
      poke = [...pokeList, ...newPokes];
    }
  return res.status(200).json(poke);
  } catch (err) {
    next(err);
  }
};

exports.getPokeId = async (req, res, next) => {
  try {
    let detPoke;
    const { idPokemon } = req.params;
    if (/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(idPokemon)) {
      //busco en DB
      let pokeID = await Pokemon.findByPk(idPokemon,{
        include: Types
      });
      detPoke={...pokeID.dataValues}
      detPoke.types=pokeID.dataValues.types.map(t=> t.dataValues.name)
    } else {
      //busco en API
      const pokemon = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
      );
      detPoke = {
        name: pokemon.data.name.toUpperCase(),
        height: pokemon.data.height,
        weight: pokemon.data.weight,
        id: pokemon.data.id,
        health: pokemon.data.stats[0].base_stat,
        strength: pokemon.data.stats[1].base_stat,
        defense: pokemon.data.stats[2].base_stat,
        velocity: pokemon.data.stats[5].base_stat,
        types: pokemon.data.types.map(t=>t.type.name),
        img: pokemon.data.sprites.other.home.front_default,
      };
    }
    if (!detPoke) return res.status(404).json("Pokemon not found");

    res.status(200).json(detPoke);
  } catch (err) {
    next(err);
  }
};

exports.postPoke = async (req, res, next) => {
  try {
    let { name, health, strength, defense, velocity, height, weight, image, types } =
      req.body;
      if(name){
        name=name.toUpperCase()
      }
      let result ={}
      if(image){
        result = await cloudinary.uploader.upload(image);
        if (!result) {
          return res.status(503).json('Upload failed');
        }
      } else {
        result = {
          url:'https://res.cloudinary.com/tropura/image/upload/v1648488517/default_qgta43.jpg', 
          public_id:'default_qgta43'}
      }
      const poke = await Pokemon.create({
          id:uuidv4(),
          name,
          health,
          strength,
          defense,
          velocity,
          height,
          weight,
          img: result.url,
          public_id: result.public_id,
      });
      let pokeDB = await Pokemon.findByPk(poke.toJSON().id)
      let typeDB = await Types.findAll({
        where: {
          name: {
            [Op.or]:types
          }
        }
      })
      pokeDB.addTypes(typeDB)
      res.status(201).json({
        name: poke.toJSON().name,
        id: poke.toJSON().idDB,
        health: poke.toJSON().health,
        strength: poke.toJSON().strength,
        defense: poke.toJSON().defense,
        velocity: poke.toJSON().velocity,
        height: poke.toJSON().height,
        weight: poke.toJSON().weight,
        img: poke.toJSON().img,
        types: typeDB.map(t=>t.name)
      })
  } catch (err) {
    next(err)
  }
};


exports.typePoke = async (req, res, next) => {
    const typesDB = await Types.findAll()
    res.status(200).json(typesDB)
}