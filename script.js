var imputnovatarefa = window.document.getElementById('novatarefa')
var btnaddtarefa = window.document.getElementById('btnaddtarefa')
var listatarefas = window.document.getElementById('listatarefas')


btnaddtarefa.addEventListener('click', (e) => {
    var tarefa = {
        nome: imputnovatarefa.value,
        id: gerarid(),

    }
    adicionartarefa(tarefa)
})


function gerarid() {
    return Math.floor(Math.random() * 3000)
}

function adicionartarefa(tarefa) {
    var li = criartagli(tarefa)
    listatarefas.appendChild(li)
    imputnovatarefa.value = ''

}

function criartagli(tarefa) {
    var li = document.createElement('li')
    li.id = tarefa.id
    var span = document.createElement('span')
    var div = document.createElement('div')
    var btnfazer = document.createElement('button')
    
    span.classList.add('textotarefa')
    li.classList.add('list-group-item')
    span.innerHTML = tarefa.nome
    
    var btnexluir = document.createElement('button')
    btnexluir.classList.add('btnacao')
    btnexluir.innerHTML = `<img src="negativ.png " alt=" negativo">`
    btnexluir.setAttribute('onclick', 'excluir('+tarefa.id+')')

    btnfazer.classList.add('btnacao')
    btnfazer.innerHTML = `<img src="seta.png "alt="seta">`
    btnfazer.setAttribute('onclick','passar('+tarefa.id+')')





    div.appendChild(btnfazer)
    div.appendChild(btnexluir)

    li.appendChild(span)
    li.appendChild(div)
    return li
}

function excluir(idtarefa){
    var confirmação = window.confirm('Tem certeza que quer excluir está tarefa?')
    if(confirmação){
        let li = document.getElementById(''+ idtarefa+'')
        if(li){
            listatarefas.removeChild(li)
        }
    }
}

function passar(idtarefa){
    var lidoig = document.getElementById('btndoing')
    if(li){
        listatarefas.appendChild()
    }


}




