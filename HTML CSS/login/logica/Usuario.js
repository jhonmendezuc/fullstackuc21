class Usuario {
  constructor(nombre, correo, contrasena) {
    this.nombre = nombre;
    this.correo = correo;
    this.contrasena = contrasena;
  }
}

class GestionUsuario {
  constructor() {
    this.usuarios = [];
    console.log("gestion de usuarios array creado");
  }

  registrarUsuario(usuario) {
    this.usuarios.push(usuario);
    alert("Usuario registrado con éxito");
    dialogo.close();
    this.mostrarUsuarios();
  }

  mostrarUsuarios() {
    let lista = document.createElement("li");
    console.log(contenedorUsuarios);
    this.usuarios.forEach((usuario) => {
      lista.textContent = `nombre: ${usuario.nombre} - correo:${usuario.correo}`;
      contenedorUsuarios.appendChild(lista);
    });
  }
}
