import { suma, resta } from "./operaciones.mjs";
import Usuario from "./Usuario.mjs";

console.log(suma(2, 3));
console.log(resta(2, 3));

const usuario = new Usuario("jhon@gmail.com", "123456");
console.log(usuario);
