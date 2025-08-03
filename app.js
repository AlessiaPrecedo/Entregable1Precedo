// Función constructora de Producto
// app.js

// Función constructora
/*function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

// Lista de productos
const productos = [
  new Producto("Remera", 5000),
  new Producto("Pantalón", 10000),
  new Producto("Zapatillas", 15000),
  new Producto("Camisa", 10000),
  new Producto("Short", 12000),
  new Producto("Buzo", 13000)
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const contenedor = document.getElementById("productos");

function mostrarProductos() {
  productos.forEach((producto, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio}</p>
      <button onclick="agregarAlCarrito(${index})">Agregar al carrito</button>
    `;
    contenedor.appendChild(div);
  });
}
function agregarAlCarrito(index) {
  const producto = productos[index];
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function mostrarCarrito() {
  const lista = document.getElementById("carrito");
  lista.innerHTML = "";

  carrito.forEach(prod => {
    const item = document.createElement("li");
    item.textContent = `${prod.nombre} - $${prod.precio}`;
    lista.appendChild(item);
  });

  const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);
  document.getElementById("total").textContent = `Total: $${total}`;
}

mostrarProductos();
mostrarCarrito();

function vaciarCarrito() {
  carrito = [];
  localStorage.removeItem("carrito");
  mostrarCarrito();
}
*/
// Función constructora de productos

/*function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

// Lista de productos
const productos = [
  new Producto("Remera", 5000),
  new Producto("Pantalón", 10000),
  new Producto("Zapatillas", 15000),
  new Producto("Camisa", 10000),
  new Producto("Short", 12000),
  new Producto("Buzo", 13000)
];

// Carrito con localStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Mostrar productos en pantalla
function mostrarProductos() {
  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";

  productos.forEach((producto, index) => {
    const div = document.createElement("div");
     div.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio}</p>
      <button onclick="agregarAlCarrito(${index})">Agregar al carrito</button>
    `;
    contenedor.appendChild(div);
  });
}

// Agregar producto al carrito
function agregarAlCarrito(index) {
  const producto = productos[index];
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

// Mostrar contenido del carrito
function mostrarCarrito() {
  const lista = document.getElementById("carrito");
  lista.innerHTML = "";

  carrito.forEach(prod => {
    const item = document.createElement("li");
    item.textContent = `${prod.nombre} - $${prod.precio}`;
    lista.appendChild(item);
  });

  const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);
  document.getElementById("total").textContent = `Total: $${total}`;
}

// Vaciar carrito
function vaciarCarrito() {
  carrito = [];
  localStorage.removeItem("carrito");
  mostrarCarrito();
}

// Inicializar
mostrarProductos();
mostrarCarrito();

const input = document.getElementById("numero");
localStorage.setItem("numero", input.value); */


function Usuario(nombre, email, password){
  this.nombre = nombre;
  this.email = email;
  this.password = password;
}


const formulario = document.getElementById('formulario');
const mensaje = document.getElementById('mensaje');
let title = document.getElementById('title');
title.innerHTML = "<em>¡Bienvenido!<strong>Registrate</strong></em>";

let usuarios = [];

if (localStorage.getItem('usuarios')) {
  try {
    usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  } catch (error) {
    console.error("Error localStorage:", error);
    localStorage.removeItem("usuarios");
  }
}

let guardarUsuario = () => {
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

formulario.addEventListener('submit', function (env) {
  env.preventDefault();


  const nombre = document.getElementById ('nombre').value.trim();
  const email = document.getElementById ('email').value.trim();
  const password = document.getElementById ('password').value;

  const nuevoUsuario = new Usuario(nombre, email, password);

  usuarios.push(nuevoUsuario);
  guardarUsuario();
  formulario.reset();

  mensaje.innerHTML = `<style>
  p {
    color: black;
    font-size: 30px;
    text-align: center;
  }
    div{
   display: flex;
flex-direction: column;
        justify-content: center;
        width: 500px;
        height: 400px;
        margin-left: 30%;
        background: rgba(255, 163, 142, 0.35);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(19, 18, 18, 0.1);
</style>
  <em>
  <p>Usuario ${nuevoUsuario.nombre} registrado exitosamente.</p>
  </em>
  `;
})