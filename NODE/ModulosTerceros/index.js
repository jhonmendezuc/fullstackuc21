/* 
modulos terceros: librerias, paquetes, dependencias, biblioteca
gestor de dependencias: 
  - npm: https://www.npmjs.com/ --repositorio de dependencias
  - npm: gestor (instalar,actualizar,eliminar, etc) cada dependencia descargada
  - npx: gestionar la ejecución
*/
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.APP_NAME);
console.log(process.env.SECRET_KEY);
console.log(process.env.AUTOR);
