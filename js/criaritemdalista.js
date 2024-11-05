import { excluirItem } from "./excluiritem.js";
import { editarItem } from "./editaritem.js";
import { verificarListaComprada } from "./verificarlistacomprado.js";

const listaComprados = document.getElementById("lista-comprados")
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;

export function criarItemDaLista(item) {
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("item-lista-container");
    itemDaLista.appendChild(containerItemLista);

    const containerNomeDoItem = document.createElement("div");
    containerNomeDoItem.classList.add("container-nome-compra");
    containerItemLista.appendChild(containerNomeDoItem);

    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("checkbox-container");
    containerNomeDoItem.appendChild(containerCheckbox);

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox-input");
    checkboxInput.id = "checkbox-" + contador++

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado")

    checkboxLabel.addEventListener("click", function(evento) {
        const checkboxInput = evento.currentTarget.querySelector(".checkbox-input");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo")

        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
            listaComprados.appendChild(itemDaLista);
        } else {
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista)
        }
        verificarListaComprada(listaComprados);
    })
    containerCheckbox.appendChild(checkboxLabel);
    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);

    const nomeDoItem = document.createElement("p")
    nomeDoItem.id = "item-titulo";
    nomeDoItem.innerText = item;
    containerNomeDoItem.appendChild(nomeDoItem);

    const containerBotoes = document.createElement("div");
    containerBotoes.classList.add("botoes-espaco")
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("botao-acao");

    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/editar.svg";
    imagemEditar.alt = "Editar";

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("botao-acao");

    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/excluir.svg";
    imagemRemover.alt = "Remover";

    botaoRemover.addEventListener("click", function() {
        excluirItem(itemDaLista);
    })

    botaoEditar.addEventListener("click", function() {
        const novoNome = prompt();
        if (novoNome === "") {
            alert("Digite o nome do novo produto.")
        } else if (checkboxCustomizado.classList.contains("checked") == true) {
            alert("Não foi possível alterar, produto ja comprado.")
        }
        else {
            nomeDoItem.innerText = novoNome;
            itemData.innerText = `Atualizado: ${new Date().toLocaleDateString("pt-BR", {weekday: "long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", {hour: "numeric", minute: "numeric"})}`;
        }
    })

    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);

    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);

  
    containerItemLista.appendChild(containerBotoes);

    const itemData = document.createElement("p")
    itemData.innerText = `${new Date().toLocaleDateString("pt-BR", {weekday: "long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", {hour: "numeric", minute: "numeric"})}`;
     itemData.classList.add("item-lista-texto");

     itemDaLista.appendChild(itemData);
     
     return itemDaLista;
}