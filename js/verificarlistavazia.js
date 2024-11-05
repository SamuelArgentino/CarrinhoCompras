const mensagemListaVazia = document.getElementById("mensagem-lista-vazia");

export function verificarListaVazia(lista) {
    if (lista.childElementCount === 3) {
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}