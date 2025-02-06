/* AMIGO SECRETO - Jhenifer Correa Vasquez*/

//1.Crear un array para almacenar los nombres
let amigos = [];

//2.Implementa una función para agregar amigos
function agregarAmigo() {
    //Capturar el valor del campo de entrada
    let listaAmigos = document.getElementById("amigo");
    //Validar la entrada y verificar que no quede en blanco
    if (listaAmigos.value.trim() !== "") {
        //Si el nombre es válido o no está en blanco, actualizar el array de amigos
        amigos.push(listaAmigos.value.trim());
        console.log(amigos);
        //Limpiar el campo de entrada
        listaAmigos.value = "";
    } else {
        //si el nombre es invalido
        alert('ERROR: Por favor, inserte un nombre válido');
    }
}

