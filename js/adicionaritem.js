import { criarItemDaLista } from "./criaritemdalista.js";
import { verificarListaComprada } from "./verificarlistacomprado.js";
import { verificarListaVazia } from "./verificarlistavazia.js";

const item = document.getElementById("input-item");

const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados")


export function adicionarItem(evento) {
    evento.preventDefault()
    const nomeItem = item.value;
    const itemDaLista = criarItemDaLista(item.value);
    if (nomeItem === "") {
        alert("Digite o nome do produto.")
        return
    } else {
     listaDeCompras.appendChild(itemDaLista);
     verificarListaVazia(listaDeCompras);
     verificarListaComprada(listaComprados);
     item.value = "";
    }
}