// Seletores
const textoDigitado = document.getElementById("textoDigitado")
const buscarPalavra = document.querySelector("#buscarPalavra")
const substituirPalavra = document.getElementById("substituirPalavra")
const trocarbtn = document.getElementById("trocar")
const trocarTodosbtn = document.getElementById("trocarTodos")

// eventos
// eventListener(interação, função)
trocarbtn.addEventListener('click', trocarTexto)
trocarTodosbtn.addEventListener('click', trocarTodosTexto)

// functions
function trocarTexto(){
    let textoDigitadoValor = textoDigitado.value;
    let buscarPalavraValor = buscarPalavra.value;
    let substituirPalavraValor = substituirPalavra.value;

    var textoFormatado = textoDigitadoValor.replace(buscarPalavraValor, substituirPalavraValor);
    textoDigitado.value = textoFormatado;
    
}

function trocarTodosTexto(){
    let textoDigitadoValor = textoDigitado.value;
    let buscarPalavraValor = buscarPalavra.value;
    let substituirPalavraValor = substituirPalavra.value;

    var textoFormatado = textoDigitadoValor.replaceAll(buscarPalavraValor, substituirPalavraValor);
    textoDigitado.value = textoFormatado;

}