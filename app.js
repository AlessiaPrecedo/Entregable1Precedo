
class Usuario {
  constructor(nombre, email, password) {
    this.nombre = nombre;
    this.email = email;
    this.password = password;
  }
}

// referencias al DOM
const formulario = document.getElementById('formulario');
const inputNombre = document.getElementById('nombre');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');

let usuarios = [];

// cargar usuarios del localStorage
if (localStorage.getItem('usuarios')) {
  try {
    usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  } catch (error) {
    localStorage.removeItem("usuarios");
  }
}

const guardarUsuario = () => {
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
};

// función de validación
function validarCampos(nombre, email, password) {
  if (!nombre || !email || !password) {
    Swal.fire("Error", "Todos los campos son obligatorios", "error");
    return false;
  }

  const existe = usuarios.some(user => user.email === email);
  if (existe) {
    Swal.fire("Error", "El email ya está registrado", "error");
    return false;
  }

  return true;
}

formulario.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombre = inputNombre.value.trim();
  const email = inputEmail.value.trim();
  const password = inputPassword.value;

  if (!validarCampos(nombre, email, password)) return;

  const nuevoUsuario = new Usuario(nombre, email, password);

  // Intentar registrar en la API primero
  try {
    const response = await fetch("https://68a26ba9c5a31eb7bb1ce796.mockapi.io/api/v1/usuario", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoUsuario)
    });

    if (!response.ok) {

      throw new Error("Error al registrar en la API");
    }

    // SI LA API RESPONDE CON ÉXITO, ENTONCES:

    usuarios.push(nuevoUsuario);

    guardarUsuario();

    Swal.fire("Éxito", `Usuario ${nuevoUsuario.nombre} registrado correctamente ✅`, "success");


    formulario.reset();
  } 
  catch (error) {

    Swal.fire("Error", `No se pudo registrar en la API. Por favor, intente de nuevo. ❌`, "error");

  }
});
