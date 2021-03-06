//-------------------------------------------------------------
//Criação de variaveis
let inputNovaTarefa = document.getElementById("inputNovaTarefa")
let buttonNovaTarefa = document.getElementById("buttonNovaTarefa")

let cardToDo = document.getElementById('cardToDo')
let cardDoing = document.getElementById('cardDoing')
let cardDone = document.getElementById('cardDone')

let listaDoing = {nome: "listaDoing", proximo: "listaDone", ImagemBotao: "Imagens/certo.png", itens: []}
let listaDone = {nome: "listaDone", proximo: "listaToDo", ImagemBotao: "Imagens/turn.png", itens: []}
let listaToDo = {nome: "listaToDo", proximo: "listaDoing", ImagemBotao: "Imagens/seta.png", itens: []}

let qtdTarefas = 0
//-------------------------------------------------------------
// Renderizando as tarefas na tela e relacionando listas com os cards referentes
let relacionamentoListaComCard = [
    {lista: listaToDo, card: cardToDo},
    {lista: listaDoing, card: cardDoing},
    {lista: listaDone, card: cardDone}
]

function renderizarTela(){
    relacionamentoListaComCard.forEach(
        relacionamento => {
            renderizarLista(relacionamento.lista, relacionamento.card)
        }
    )
}
//-------------------------------------------------------------
//Funções de excluir, adicionar e mover tarefas entre os cards
function moverParaLista (item, origem, destino){
    let itemAtual = encontrarItem(item, origem)
    excluir(item, origem)
    adicionarItem(itemAtual, destino)
    
    renderizarTela()
}

function excluir (item, lista){
    let itemAtual = encontrarItem(item, lista)
    lista.itens.splice(lista.itens.indexOf(itemAtual), 1)
    
    renderizarTela()
}

function adicionarItem (item, lista) {
    lista.itens.push(item)
}

const encontrarItem = (id, lista) => (
    lista.itens.find(item => item.id == id)
)
//-------------------------------------------------------------
//Rederizando na tela, juntamente com os estilos
function renderizarLista(lista, card){
    let htmlGerado = ""
    lista.itens.forEach(
        tarefa => {
            htmlGerado += `
            <li id="${lista.nome}${tarefa.id}" style="font-size: 20px; font-family: Arial; " class="list-group-item d-flex justify-content-between align-items-center">
                ${tarefa.nome}
                <div>
                    <img src = "${lista.ImagemBotao}"alt="Fazer" onclick = "moverParaLista(${tarefa.id}, ${lista.nome}, ${lista.proximo})" style="position: absolute; left: 370px;"/>
                    <img src = "Imagens/negativ.png" onclick = "excluir (${tarefa.id}, ${lista.nome})" style="position: absolute; left: 400px; " />
                </div>
            </li>
            `
        }
    )
    card.innerHTML = htmlGerado
}

renderizarTela()
//----------------------------------------------------------
// evento de click para adicionar as tarefas nos cards
buttonNovaTarefa.addEventListener('click', (e) => {
    if (inputNovaTarefa.value == "") return;

    qtdTarefas++
    let novaTarefa = {
        id: qtdTarefas,
        nome: inputNovaTarefa.value
    }
    
    adicionarItem(novaTarefa, listaToDo)
    renderizarTela()
    inputNovaTarefa.value = ""
})

//----------------------------------------------------------  
//Ação de abrir o modal   
function acaomodal(){
    let modal = document.querySelector('.Modal')
    modal.style.display='block'    
}
function fecharmodal(){
    let modal = document.querySelector('.Modal')
    modal.style.display='none'
}
//----------------------------------------------------------
//Ação de colocar em dark mode
let btn = document.getElementById("btndark")

btndark.addEventListener("change", (e)=>{
    document.body.classList.toggle("dark", e.target.checked)
})
//----------------------------------------------------------










