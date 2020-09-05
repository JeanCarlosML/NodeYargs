const { crearArchivo, listarArchivo } = require("./multiplicar/multiplicar");
const { yargs } = require("./config/yargs");
const colors = require('colors');

let comando = yargs._[0];
switch (comando) {
  case "listar":
    listarArchivo(yargs.base, yargs.limite);
    break;
  case "crear":
    crearArchivo(yargs.base, yargs.limite)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    break;
  default:
    console.log("comando no reconocido");
    break;
}
/* let argv = process.argv ;
let parametro = argv[2];
let base = parseInt(parametro.split("=")[1]) */

/* crearArchivo(base)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  }); */
