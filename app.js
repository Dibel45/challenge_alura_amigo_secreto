// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    //Validar que el campo no esté vacío
    if (nombreAmigo === "") {
        alert("Inserte nombres de tus amigos");
        return;
    }

    //Agregar el nombre al array
    amigos.push(nombreAmigo);

    //Actualizar lista visual
    actualizarLista();

    //Limpiar los campos de entrada
    inputAmigo.value = "";
    inputAmigo.focus();

}

//Funcion para actualizar la lista visual
function actualizarLista() {
    const listaAmigoUl = document.getElementById("listaAmigos");
    listaAmigoUl.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigoUl.appendChild(li);
    })
}

//Funcion para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No existen amigos para sortear. Agrega nombres de tus amigos para sortear.")
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;

}

//Asignar lo eventos a los botones
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo)
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
});