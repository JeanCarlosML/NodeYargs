const fs = require("fs");
const colors = require("colors");

const listarArchivo = (base, limite = 10) => {
  console.log("============================".green);
  console.log(`==tabla de ${base}==`.green);
  console.log("============================".green);
  let data = "";
  for (let index = 0; index <= limite; index++) {
    data += `${base} * ${index} = ${base * index} \n`;
  }
  console.log(data);
};

const crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    let data = "";
    if (typeof base !== "number") {
      reject("La base no es un numero");
      return;
    }
    if (typeof limite !== "number") {
      reject("El limite no es un numero");
      return;
    }
    for (let index = 0; index <= limite; index++) {
      data += `${base} * ${index} = ${base * index} \n`;
    }
    fs.writeFile(
      `./tablas/Tabla-${base}-limite [${limite}].txt`,
      data,
      (err) => {
        if (err) reject(err);
        else resolve(`./tablas/Tabla-${base}.txt`);
      }
    );
  });
};

module.exports = {
  crearArchivo,
  listarArchivo,
};
