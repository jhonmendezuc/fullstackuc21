import { readFileSync } from "node:fs";
//import { readFile } from "node:fs";
import { readFile } from "node:fs/promises";

/*operaciones asincronas*/
/*
readFile("./archivkos/usuarios.txt", "utf-8", (err, datos) => {
  if (err) {
    console.log("error al leer el archivo");
    return;
  }
  console.log("operacion5, archivo leido...", datos);
}); */

/*operaciones asincrnoas con promesas*/

readFile("./archivos/usuarios.txt", "utf-8")
  .then((datos) => {
    console.log("operacion5, archivo leido...", datos);
  })
  .catch((err) => {
    console.log("error al leer el archivo");
    return;
  })
  .finally(() => {
    console.log("fin del proceso");
  });

/*async await*/

async function leerArchivo() {
  try {
    const archivo = await readFile("./archsivos/usuarios.txt", "utf-8");
    console.log("operacion5, archivo leido async await...", archivo);
  } catch (error) {
    console.log("error al leer el archivo async await");
  }
}

leerArchivo();

/*operaciones sincronas*/
console.log("operacion1 - lectura de una tabla"); //3 10m ...
console.log("operacion2 - lectura de un documento"); //2 5m ...
const archivo = readFileSync("./archivos/usuarios.txt", "utf-8");
console.log("operacion3", archivo);
console.log("operacion4 - lectura de un archivo"); // 1 1s ...
