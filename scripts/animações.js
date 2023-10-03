let velocidadeMovContNavegação = 2
let velocidadeRotContNavegação = 15
function animação1Navegação(cont,btn,acessoBtn) {
    let c = 0
    let animC = setInterval(() => {
        acessoBtn = false
        c += velocidadeMovContNavegação
        cont.style.transform = `translateY(${c}%)`
        if (c >= 90) {
            acessoBtn = true
            clearInterval(animC)
            let cr = 180
            let animrotate = setInterval(() => {
                cr -= velocidadeRotContNavegação
                btn.style.transform = `rotate(${cr}deg)`
                cr<=0?clearInterval(animrotate):console.log('nada')
            }, 5);
        }
    }, 5);
}

function animação2Navegação(cont,btn,acessoBtn) {
    let c = 90
    let animB = setInterval(() => {
        acessoBtn = false
        c -= velocidadeMovContNavegação
        cont.style.transform = `translateY(${c}%)`
        if (c <= 0) {
            acessoBtn = true
            clearInterval(animB)
            cont.style.transform = 'translateY(0%)'
            let cr = 0
            let animrotate = setInterval(() => {
                cr += velocidadeRotContNavegação
                btn.style.transform = `rotate(${cr}deg)`
                cr==180?clearInterval(animrotate):console.log('nada')
            }, 5);
        }
    }, 5);
}

export {animação1Navegação,animação2Navegação}