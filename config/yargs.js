const opts = {
  base: {
    demand: true, //Valor obligatorio
    alias: "b",
  },
  limite: {
    alias: "l",
    default: "10",
  },
};
const yargs = require("yargs")
  .command("listar", "Imprime en consola la tabla de multiplicar", opts)
  .command("crear", "Comando para crear archivos", opts)
  .help().argv;

  module.exports = {
      yargs
  }