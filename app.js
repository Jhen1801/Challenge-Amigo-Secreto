/* AMIGO SECRETO - Jhenifer Correa Vasquez*/

//1.Crear un array para almacenar los nombres
let amigos = [];

//2.Implementa una función para agregar amigos
function agregarAmigo() {
    //Capturar el valor del campo de entrada
    let listaAmigos = document.getElementById("amigo");
    let nombre = listaAmigos.value.trim();
    //Validar la entrada y verificar que no quede en blanco
    if (nombre === "") {
        alert('ERROR: Por favor, inserte un nombre válido');
        return;
    }
    //verificar que el nombre no se repita
    if (amigos.includes(nombre)) {
        alert("ERROR: Ese nombre ya fue agregado");
        listaAmigos.value = "";
        return;
    }
    //Si el nombre es válido o no está en blanco, actualizar el array de amigos
    amigos.push(nombre);
    console.log(amigos);
    // Llamar la función para actualizar la lista en el HTML
    actualizarAmigos();
    //Limpiar el campo de entrada
    listaAmigos.value = "";
}

//3. Implementa una función para actualizar la lista de amigos
function actualizarAmigos() {
    //Obtener el elemento de la lista
    let listaAmigos = document.getElementById("listaAmigos");
    //Limpiar la lista existente
    listaAmigos.innerHTML = ""
    //Iterar sobre el arreglo y Agregar elementos a la lista
    for (let amigo of amigos) {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigo;
        listaAmigos.appendChild(nuevoElemento);
    }
    console.log(listaAmigos);
}

//4. Implementa una función para sortear los amigos
function sortearAmigo() {
    //Validar que haya amigos disponibles
    if (amigos.length === 0) {
        resultado.innerHTML = "<p style='color: red;'>ERROR: No hay amigos en la lista</p>";
        return;
    }
    //Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    // Mostrar el resultado en la página
    resultado.innerHTML = `<p>🎉 ¡El amigo secreto es <strong>${amigoSorteado}</strong>! 🎁</p>`;
}