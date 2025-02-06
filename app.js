/* AMIGO SECRETO - Jhenifer Correa Vasquez - 1148697471 */

//Crear un array para almacenar los nombres
let amigos = [];

//Implementa una función para agregar amigos
function agregarAmigo() {
    //Capturar el valor del campo de entrada
    let nuevoAmigo = document.getElementById('amigo');
    console.log(nuevoAmigo);
    //Validar la entrada
    if (nuevoAmigo == "") {
        alert('ERROR: Por favor, inserte un nombre válido');
        //Limpiar el campo de entrada
        document.getElementById('input-name').setAttribute('Escribe un nombre','true');
    } else {
        //Si el nombre es válido, actualizar el array de amigos
        amigos = nuevoAmigo.push();
        console.log(amigos);
        //Limpiar el campo de entrada
        document.getElementById('input-name').setAttribute('Escribe un nombre','true');
    }
}

