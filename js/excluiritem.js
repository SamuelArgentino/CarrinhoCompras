import { verificarListaComprada } from "./verificarlistacomprado.js";
import { verificarListaVazia } from "./verificarlistavazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const listacomprados = document.getElementById("lista-comprados");

const excluirItem = (elemento) => {
    let confirmacao = confirm("Tem certeza que deseja excluir esse item?")

    if (confirmacao) {
        elemento.remove();
        verificarListaVazia(listaDeCompras);
        verificarListaComprada(listacomprados);
    }
}

export { excluirItem };