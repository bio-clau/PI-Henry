//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
require('dotenv').config({path: './.env'})
const server = require('./src/app.js');
const { conn, Types, Pokemon } = require('./src/db.js');
const axios = require('axios')
// Syncing all the models at once.
const port = process.env.PORT || 3001;


conn.sync({ force: true }).then( async () => {
  const typeRta = await axios.get('https://pokeapi.co/api/v2/type');
  const createData = typeRta.data.results.map(t => {
    let ret = {name: t.name}
    return ret
  })
  await Types.bulkCreate(createData)

  var reqApi = []
  var poke = [];
  for (let i = 1; i < 41; i++) {
    reqApi.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`))
  }
  return Promise.all(reqApi)
  .then(rta => {
    rta.map(r => {
      let detPoke = {
        name: r.data.name.toUpperCase(),
        id: r.data.id,
        types: r.data.types.map(t=>t.type.name),
        img: r.data.sprites.other.home.front_default,
        miniImg:r.data.sprites.front_default,
        strength: r.data.stats[1].base_stat
      };
      poke.push(detPoke)
    })
    global.pokeList = poke;
    server.listen(port, () => {
      console.log(`%s listening at ${port}`); // eslint-disable-line no-console
    });
  })
  .catch(error => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  })
});
