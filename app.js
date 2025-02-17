// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

// Funcion para agragra amigos
function agregarAmigo() {
    // Captura el valor del campo de entrada 
    const input = document.getElementById("amigo");
    const nombres = input.value.trim();
    // Validar la entrada 
    if (!nombres) {
        alert("Por favor, inserte un nombre.");
        return;
    }
    // actualizar array de amigos 
    amigos.push(nombres);
    // Limpiar el campo de entrada 
    input.value = "";
    // Actualizar el listado de amigos
    actualizarListaAmigos();
}
// Funcion para actualizar la lista de amigos
function actualizarListaAmigos() {
    // Obtener el elemento de la lista de amigos
    const listaAmigos = document.getElementById("listaAmigos");
    // Limpia la lista actual
    listaAmigos.innerHTML = "";
    // Iterar sobre el arreglo de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear un elemento de lista
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}
// Funcion sortear amigos
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if ( amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.")
        return;
    }
    // Generar un indice aleatorio
    const indice = Math.floor(Math.random()* amigos.length);
    // Obtener el amigo sorteado
    const amigoSorteado = amigos[indice];
    // Mostrar el amigo sorteado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpia el resultado anterior
    const li = document.createElement('li');
    li.textContent = `El amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(li);
}