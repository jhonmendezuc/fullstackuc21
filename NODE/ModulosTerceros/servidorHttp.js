import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

/* ip(127.0.0.1)-host(localhost)*/

//puerto
const port = process.env.PORT;

//path,ruta = http://localhost:3500/tareas
//peticion respuesta
app.get("/tareas", (solitud, respuesta) => {
  console.log("obtener tareas");
  respuesta.send("obtener tareas");
});

//servidor de aplicaciones está esuchando..
try {
  app.listen(port, () => {
    console.log(`servidor ejecut
      andose en el puerto ${port} ...`);
  });
} catch (error) {
  console.log(error);
}
