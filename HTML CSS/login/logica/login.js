let dialogo = document.getElementById("dialogo-registro");
let btnGuardar = document.getElementById("btn-guardar");
let btnCancelar = document.getElementById("btn-cancelar");
let btnRegistrar = document.getElementById("btn-registrar");
let txtNombre = document.getElementById("txt-nombre");
let txtCorreo = document.getElementById("txt-correo");
let txtContrasena = document.getElementById("txt-contrasena");
let listaUsuarios = document.getElementById("lista-usuarios");
let contenedorUsuarios = document.getElementById("usuarios");

const gestionUsuario = new GestionUsuario();

function cancelar() {
  dialogo.close();
}

function limpiarFormulario() {
  document.getElementById("frm-registro").reset();
}

btnRegistrar.addEventListener("click", (e) => {
  console.log(e);
  dialogo.showModal();
});

btnGuardar.addEventListener("click", (e) => {
  e.preventDefault();
  const usuario = new Usuario(
    txtNombre.value,
    txtCorreo.value,
    txtContrasena.value
  );
  gestionUsuario.registrarUsuario(usuario);
  limpiarFormulario();
});

btnCancelar.addEventListener("click", cancelar);
