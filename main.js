/*const titulo = document.getElementById("Titulo");
titulo.textContent = "Primera parte!";*/

//  funcion
/*const menu = (producto) => {
//objeto
    const producto = {
    remera: 15000,
    pantalon: 30000,
    buzo: 23000,
    cinturon: 13000,
    camisa: 12000
}
}
let Bienvenido = prompt("Bienvenido! colocar 'x' si desea salir o 'a' si desea realizar una compra");

while ( Bienvenido !== 'x'){
 if ( Bienvenido === 'a'){

 } else { 
    alert("Hasta luego")
 }

} /*

 /*
const diccionario = {
  paciencia: "Capacidad de soportar contratiempos con serenidad.",
  humildad:
   "Cualidad de reconocer las propias limitaciones y actuar sin orgullo.",
  curiosidad: "Deseo de aprender o conocer algo nuevo.",
  gratitud: "Actitud de reconocimiento y aprecio por lo recibido.",
 };

 let seek = prompt(`BUSCAR SIGNIFICADO POR PALABRA`);

 switch (seek) {
  case "curiosidad":
  case "humildad":
  case "gratitud":
  case "paciencia":
   alert(diccionario[seek]);
  case "salir":
   break;
  default:
   seek = prompt(`BUSCAR SIGNIFICADO POR PALABRA`);
 }
*/
/*let property = "color"

const silla = {
  patas: "4",
  color: "verde",
material: "vidrio"
}
// no se puede reasignar, un objeto silla{} nuevamente

console.log(silla); 
console.log(silla.patas); 4
console.log(silla[property])  
*/
//rifaaaa

const ValorporUno = 2500;
const valorporDos = 4500;

//objeto dentro un array
const datos = {
  numeros: [],
};

let RestarNum = (numeros, x) => numeros - x;  


//lista para ver la cantidad de numeros
for (let i = 1; i <= 50; i++){                             //datos.numeros[[49]]
  datos.numeros.push(i);
}




let NumElegidos = (numeros, x) => {
numeros = (prompt("Estos son los numeros disponibles: " + datos.numeros.join(' ') + 
" Cuales o cual elegis"))
alert("Numeros seleccionados: " + numeros);
}


let compra =() => {
  let cantidad = (prompt(`¿Cuantos numeros desea comprar?
    1. $${ValorporUno}
    2. $${valorporDos}
    Coloque "c" para salir de esta rifa
  `)) 
  if( cantidad >= 2){
  alert (`El total es $${valorporDos*cantidad}`);
  } else if (cantidad === "c"){
    alert("Hasta luego");
  }
  else {
  alert(`El total es $${ValorporUno*cantidad}`);
}
}
compra();

NumElegidos();










