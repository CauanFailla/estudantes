import * as animações from "./animações.js"
import * as operações from "./operações.js"
const btnMore_menu = document.querySelector('.btnMore-menu')
const conteudoNavegação = document.querySelector('.cont-navegação')
const tempoAtual_visual = document.querySelector('.dataAtual-visual')
const diaAtual_visual = document.querySelector('.diaAtual-visual')
conteudoNavegação.style.transform = 'translateY(90%)'
setInterval(atualizarTempo,10)
let acessobtnMore = true
let acessoAtualizarTempoMenu = true
let tempoInicial = new Date()
btnMore_menu.addEventListener('click',()=> {
    if (acessobtnMore) {
        if (conteudoNavegação.style.transform == 'translateY(0%)') {
            animações.animação1Navegação(conteudoNavegação,btnMore_menu,acessobtnMore)
        } else {
            animações.animação2Navegação(conteudoNavegação,btnMore_menu,acessobtnMore)
        }
    }
   
})
function atualizarTempo() {
    let dateAtual = new Date()
    if (tempoInicial.getDate() != dateAtual.getDate()) {
        tempoInicial.setDate(dateAtual.getDate()) 
        acessoAtualizarTempoMenu.valueOf = true
    }
    if (acessoAtualizarTempoMenu) {
        switch (dateAtual.getDay()) {
            case 1:
                diaAtual_visual.innerHTML = 'Segunda-Feira'
                acessoAtualizarTempoMenu = false
                break;
            case 2:
                diaAtual_visual.innerHTML = 'Terça-Feira'
                acessoAtualizarTempoMenu = false
                break
            case 3:
                diaAtual_visual.innerHTML = 'Quarta-Feira'
                acessoAtualizarTempoMenu = false
                break
            case 4:
                diaAtual_visual.innerHTML = 'Quinta-Feira'
                acessoAtualizarTempoMenu = false
                break
            case 5:
                diaAtual_visual.innerHTML = 'Sexta-Feira'
                acessoAtualizarTempoMenu = false
                break
            case 6:
                diaAtual_visual.innerHTML = 'Sabado'
                acessoAtualizarTempoMenu = false
                break
            case 0:
                diaAtual_visual.innerHTML = 'Domingo'
                acessoAtualizarTempoMenu = false
                break
            default:
                acessoAtualizarTempoMenu = false
                break;
        }
        console.log(dateAtual.getDay())
        dateAtual.setMonth(1 + dateAtual.getMonth())
        tempoAtual_visual.innerHTML = (`${dateAtual.getDate()<10? '0' +dateAtual.getDate():dateAtual.getDate()} / ${dateAtual.getMonth()<10? '0' +dateAtual.getMonth():dateAtual.getMonth()} / ${dateAtual.getFullYear()}`)
    }
}
operações.conjuntoLembretesRotineiro.push(new operações.LembreteRotineiro('Materias',['itinerarios','portugues'],['clube','inglês','projeto de vida','historia','matematica']))
operações.conjuntoLembretesRotineiro.push(new operações.LembreteRotineiro('cadernos',['portugues','itinerarios'],['inglês','historia','matematica'],['matematica','itinerarios']))