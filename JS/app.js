
let contraseñareal = "javascript";

const login = () => {
  let tieneusuario = false;
let usuario;
  for (let i = 3; i > 0; i--) {
    usuario = prompt("Ingrese su nombre de usuario");
    let contraseña = prompt("Ingrese su contraseña");

    if (contraseña === contraseñareal) {
      tieneusuario = true;
      alert("Inicio de sesión exitoso!");
      break;
    } else {
      alert("Contraseña incorrecta. Te quedan " + i + " intentos.");
    }
  }

  if (!tieneusuario) {
    alert("La cuenta " + usuario + " acaba de ser suspendida por multiples intentos de acceso, porfavor revise su casilla de mail");
  }      
  return tieneusuario
  
};
const playlist = [
{
  nombre: "SHE DONT GIVE A FO",
 duracion: "2:30",
 artista: "Duki",
 
},
{
  nombre: "GASOLINA",
 duracion: "2:55",
 artista: "Daddy Yankee",
 
},
{
  nombre: "NO SOY YO",
 duracion: "2:10",
 artista: "Mesita",
 
},
];
 
 if (login()) {
  
  const nombresCanciones = playlist.map((cancion)=> cancion.nombre)

  alert("Tu Playlist:\n" + nombresCanciones.join("\n"));
let agregarcancion;

  while(true){
agregarcancion = prompt (`Queres agregar otra cancion a la playlist?
\nSI
\nNO
`).toLowerCase();

if (agregarcancion === "si") {
  const nuevacancion = prompt("Escribi el nombre de la canción").toUpperCase();


  if (nombresCanciones.includes(nuevacancion)) {

    alert("Esta canción ya está en tu playlist");
   
   
  } else {
    
    playlist.push({ nombre: nuevacancion });
    alert("Canción agregada a tu playlist");
//  alert("Tu Playlist:\n" + nombresCanciones.join("\n"));{
//        break;
//     }
{
  break;
}
  }
} else if (agregarcancion === "no") {
  break;
}

}
alert("Tu Playlist:\n" + playlist.map((cancion) => cancion.nombre).join("\n"));

}

// let agregarcancion;
// while (true) {
//   agregarcancion = prompt(
//     `Quieres agregar otra canción a la playlist?\nSI\nNO`
//   ).toLowerCase();

//   if (agregarcancion === "si") {
//     const nuevacancion = prompt("Escribe el nombre de la canción");
//     // Aquí podrías agregar la nueva canción a tu playlist
//     playlist.push({ nombre: nuevacancion });
//   } else if (agregarcancion === "no") {
//     break;
//   }
// }
// }

// monedavalida = false;
// while(monedavalida){
// let cambio = prompt (`En que moneda esta el producto que va a comprar:

// \n 1-EURO
// \n 2- DOLAR
// \nEscribir "SALIR" para volver`);

// cambio = cambio.toLowerCase();
    

// if (cambio === "euro" || cambio === "dolar" || cambio === "SALIR" || cambio === "salir"){
//     monedavalida=true;
//     if (cambio === "SALIR" || cambio === "salir") {
//       alert("SALISTE");
//       break;
//     }
//   } else {
//     alert("Ingresar moneda válida");
//   }


// if (monedavalida){

// switch (cambio){
// case "euro":


// do {
//   monto = prompt("Ingresa el valor del producto que deseas convertir");
// } while (isNaN(monto));

// monto = parseFloat(monto);

// if (!isNaN(monto)) {
//   let extra = monto * impuestos;
//   let total = extra + monto;
//   let totalpesos = total * euro;
//   alert("El total a pagar con impuestos incluidos es de\nEN PESOS:\n$" + totalpesos);
//   document.write ("<h3> El total a pagar con impuestos incluidos es de\n <br>EN PESOS:\n$" + totalpesos + " </h3>" )
//   break;
// } else {
//   alert("La entrada no es un número válido.");
// }


// case "dolar":

// do {
//   monto = prompt("Ingresa el valor del producto que deseas convertir");
// } while (isNaN(monto));

// monto = parseFloat(monto);

// if (!isNaN(monto)) {
//   let extra = monto * impuestos;
//   let total = extra + monto;
//   let totalpesos = total * euro;
//   alert("El total a pagar con impuestos incluidos es de\nEN PESOS:\n$" + totalpesos);
//   document.write ("<h3> El total a pagar con impuestos incluidos es de\n <br>EN PESOS:\n$" + totalpesos + " </h3>" )
//   break;
// } else {
//   alert("La entrada no es un número válido.");
// }


// }





// }
// }



