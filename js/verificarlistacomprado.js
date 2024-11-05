import { verificarListaVazia } from "./verificarlistavazia.js";

const tituloComprado = document.getElementById("titulo-comprados");
const listaDeCompras = document.getElementById("lista-de-compras");

export function verificarListaComprada(lista) {
    if (lista.childElementCount > 2) {
        tituloComprado.style.display = "block";
        verificarListaVazia(listaDeCompras);
    } else {
        tituloComprado.style.display = "none";
        verificarListaVazia(listaDeCompras);
    }
}