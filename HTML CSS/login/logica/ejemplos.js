console.log("hola todos"); //tipo string
console.log(true, false); //tipo boleano
console.log(1 + 1); //tipo numero
console.log(Infinity); //tipo numero
console.log(10.2); //tipo decimal
console.log(NaN); //comprobacion de numero
console.log(undefined); //sin definir
console.log(null); // variable sin valor
console.log(Symbol); // variable inmutable

let numero = 0;
// inicio , condicion, incremento
console.log("inicio");
while (numero < 10) {
  //debugger;
  numero = numero + 1;
  console.log(numero);
  //numero++
}
console.log("fin");

//for

for (let n = 1; n <= 10; n++) {
  console.log(n);
}

/*objetos*/
//declaracion de objetos literal
let usuario = {
  nombre: "jhon",
  apellido: "mendez",
  edad: 45,
  correo: "jhon@gmail.com",
};

let producto = {
  nombre: "computador",
  precio: 1500000,
  marca: "lenovo",
};
usuario.contrasena = "123";
usuario.informacion = function () {
  console.log("informcion usuario");
};
usuario.telefonos = {
  casa: 5465465,
  movil: 3214878,
};
console.log(usuario);
console.log(producto);

class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  saludar() {
    console.log(`hola soy ${this.nombre} y tengo ${this.edad} a;os`);
  }
}

let p = new Persona("jhon", "mendez", 45);
console.log(p);

let p2 = new Persona("javier", "mendez", 55);
console.log(p2);

p.saludar();
p2.saludar();

/*estructura de datos
colecciones: arrays, maps, list, conjuntos...
*/

let arrayNumeros = [12, 5, 7, 8, 6, 30, 45];
arrayNumeros.length;

for (let i = 0; i < arrayNumeros.length; i++) {
  console.log(arrayNumeros[i]);
}

let arrayMixto = ["jhon", 45, true, [1, 2, 3], {}];
arrayMixto;

let persona1 = {
  nombre: "jhon",
  apellido: "mendez",
  telefonos: [3214715669, 7767002],
  correos: {
    gmail: "jhon@gmail.com",
    outlook: "jhon@outlook.com",
  },
};
let persona2 = {
  nombre: "maria",
  apellido: "ramirez",
};

let personas = [persona1, persona2];
console.log(personas);
console.log(personas[1].apellido);

console.log(personas[0].telefonos[1]);
console.log(personas[0].correos.outlook);

let arrayFrutas = ["🥑", "🍌", "🍍", "🍉", "🍓"];
arrayFrutas;

arrayFrutas.push("🥭");
arrayFrutas;
arrayFrutas.pop();
arrayFrutas;
arrayFrutas.unshift("🍓");
arrayFrutas;

arrayFrutas.includes("🍕");
arrayFrutas.includes("🥑");

arrayFrutas[arrayFrutas.indexOf("🥑")] = "🍗";
arrayFrutas;

//filter

arrayFrutas.filter((fruta) => fruta == "🍓");
arrayFrutas.find((fruta) => fruta == "🍓");

arrayFrutas;
let frutasAcompanamiento = arrayFrutas.map((fruta) => fruta + "🍟");
frutasAcompanamiento;
