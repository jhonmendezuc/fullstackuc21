// 1 obtener datos
// 2 procesar datos
// 3 guardar datos

function obtenerDatos(id, callback) {
  setTimeout(() => {
    const usuario = {
      id,
      nombre: "jhon",
    };
    callback(usuario);
  }, 2000);
}

function procesarDatos(usuario, callback) {
  setTimeout(() => {
    console.log("procesando datos", usuario.nombre);
    callback(usuario.id);
  }, 3000);
}

function guardarDatos(id, callback) {
  setTimeout(() => {
    console.log("guardando datos del usuario ", id);
    callback();
  }, 4000);
}

//obtener datos de un usuario
obtenerDatos(1, function (usuario) {
  procesarDatos(usuario, function (id) {
    guardarDatos(id, function () {
      console.log("proceso completado...");
    });
  });
});
