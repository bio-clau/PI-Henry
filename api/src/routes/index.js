const { Router } = require('express');
const {getPoke, getPokeId, postPoke, typePoke} = require('../controllers/controllers')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.route('/type').get(typePoke)
router.route('/pokemons').get(getPoke)
router.route('/pokemons/:idPokemon').get(getPokeId)
router.route('/pokemons').post(postPoke)

module.exports = router;
