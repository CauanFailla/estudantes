const div_conteudo =  document.querySelector('.conteudo-lembretes')
let conjuntoLembretes = []
let conjuntoLembretesRotineiro = []
class Lembrete {
    constructor(n,dia,mes,ano,horas,minutos,segundos) {
        this.nome = n
        this.data = [dia,mes,ano]
        this.horário = [horas,minutos,segundos]
    }
}

class LembreteRotineiro extends Lembrete {
    constructor(n,seg,ter,quar,quin,sex) {
        super(n)
        this.segunda = seg
        this.terça = ter
        this.quarta = quar
        this.quinta = quin
        this.sexta = sex
        this.visual = document.createElement('div')
        this.cont_visual = document.createElement('div')
        this.criaçãoVisual()
        this.diaAt = new Date()
        this.acessoAtualizar = true
    }
    criaçãoVisual() {
        div_conteudo.appendChild(this.visual)
        this.visual.setAttribute('class','lembrete')
        let tit = document.createElement('h1')
        tit.innerHTML = this.nome
        this.visual.appendChild(tit)
        this.visual.appendChild(this.cont_visual)
    }
    
    remover() {
        conjuntoLembretesRotineiro.map((a,i)=>{
            if (a.nome == this.nome) {
                conjuntoLembretesRotineiro.splice(i,1)
            }
        })
        this.visual.remove()
        
    }

    atualizandoLembreteRotineiro = setInterval(() => {
        let tempoAtual = new Date()
        if (this.diaAt.getDay() != tempoAtual.getDay()) {
            this.acessoAtualizar = true
            this.diaAt = tempoAtual.getDay()
        }
        if (this.acessoAtualizar) {
            this.cont_visual.innerHTML = ''
            console.log(conjuntoLembretesRotineiro)
            switch (tempoAtual.getDay()) {
                case 1:
                    this.segunda.map((d)=>{
                        this.cont_visual.innerHTML += d + '<br>'
                    })
                    this.acessoAtualizar = false
                    break;
                case 2:
                    this.terça.map((d)=>{
                        this.cont_visual.innerHTML += d + '<br>'
                    })
                    this.acessoAtualizar = false
                    break
                case 3:
                    this.quarta.map((d)=>{
                        this.cont_visual.innerHTML += d + '<br>'
                    })
                   
                    this.acessoAtualizar = false
                    break
                case 4:
                    this.visual.innerHTML = this.quinta
                    this.acessoAtualizar = false
                    break
                case 5:
                    this.visual.innerHTML = this.sexta
                    this.acessoAtualizar = false
                default:
                    console.log('Dia atual não programavel!!!')
                    this.acessoAtualizar = false
                    break;
            }
        }
    }, 10);  
  
}
export {Lembrete,LembreteRotineiro,conjuntoLembretesRotineiro,conjuntoLembretes}