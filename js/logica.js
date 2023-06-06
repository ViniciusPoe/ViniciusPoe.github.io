var feitas = 0
var acertadas = 0
var erradas = 0
var pf = 0

function quest() {
    window.location.href = "questoes.html"
}

function home() {
    window.location.href = "home.html"
}

function comecar(mate) {
    localStorage.setItem('divId', mate)
    window.location.href = 'prova.html'
}

document.addEventListener('DOMContentLoaded', function () {
    const mate = localStorage.getItem('divId');
    if (mate) {
        const div = document.getElementById(mate);
        if (div) {
            div.style.display = 'block';
        }
    }
}
)

function sair() {
    window.location.href = 'index.html'
}

function mostrar(mat) {
    var div = document.getElementById(mat)
    var tela = document.getElementsByClassName('materia')
    var telaid = document.getElementsByClassName('mostpro')
    var valor = document.getElementsByClassName('mat')
    if (div.style.display == "none") {
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.style.justifyContent = 'flex-start';
        for (var i = 0; i < tela.length; i++) {
            if (telaid[i].id == mat) {
                telaid[i].style.display = 'inline-block'
                telaid[i].style.height = 'auto'
                telaid[i].style.padding = '40px'
                telaid[i].style.backgroundColor = "rgba(63, 67, 123)";
                valor[i].style.opacity = '100%';
            }
        }

        //div.style.backgroundColor = 'white'
    } else {
        div.style.display = 'none'
        for (var i = 0; i < tela.length; i++) {
            if (telaid[i].id == mat) {
                tela[i].style.backgroundColor = "";
                valor[i].style.opacity = '70%';
            }
        }
    }
}

function correta(mat, questao) {
    var alt = document.querySelectorAll(`input[name="${questao}"]`);
    var div = document.getElementById(questao)
    var res = div.querySelector('.resposta')
    var divm = document.getElementById(mat)
    var correta = document.querySelector(`input[name="${questao}"].correta`);
    var label = correta.parentNode
    var span = ''
    var valorlabel = label.textContent.trim()
    var respcor = "g";
    var refazer = divm.querySelector('.refazer')

    for (var i = 0; i < alt.length; i++) {
        span = alt[i].parentNode.querySelector('span')
        if (alt[i].checked) {
            feitas++
            respcor = alt[i].value;
            for (var j = 0; j < alt.length; j++) {
                if (j != i) {
                    alt[j].disabled = true
                }
            }
            break;
        }
    }
    if (respcor == correta.value) {
        res.innerHTML = 'Parabéns! Você Acertou'
        acertadas++
        for (var i = 0; i < alt.length; i++) {
            if (alt[i].value == respcor) {
                span.classList.remove('incorrect');
                span.classList.add('correct');
            }
        }
    } else {
        res.innerHTML = `Que pena! Você Errou a resposta era: <b>${valorlabel}</b>`
        erradas++
        for (var i = 0; i < alt.length; i++) {
            if (alt[i].value == respcor) {
                span.classList.remove('correct');
                span.classList.add('incorrect');
            }
        }
    }
    if (feitas % 5 == 0) {
        pf++
        refazer.style.display = 'block'
    }
    sessionStorage.setItem('pf', pf)
    sessionStorage.setItem('acertadas', acertadas)
    sessionStorage.setItem('erradas', erradas)
    sessionStorage.setItem('feitas', feitas)
    console.log(acertadas)
    console.log(erradas)
}

function recarregar() {
    window.scrollTo(0, 0)
    location.reload();
}

function login() {
    var inpemail = document.getElementById('email')
    var inpsenha = document.getElementById('senha')
    var email = inpemail.value
    var senha = inpsenha.value
    if (email == 'usuario1@gmail.com' && senha == '123456') {
        window.location.href = 'home.html'
    } else {
        inpemail.value = "";
        inpsenha.value = "";
        window.alert('Usuario ou senha incorretos tente novamente')
        inpemail.parentNode.innerHTML = inpemail.parentNode.innerHTML
        inpsenha.parentNode.innerHTML = inpemail.parentNode.innerHTML
    }
}

feitas = sessionStorage.getItem('feitas')
console.log(feitas)

if (feitas >= 5) {
    pf = sessionStorage.getItem('pf')
    acertadas = sessionStorage.getItem('acertadas')
    erradas = sessionStorage.getItem('erradas')
    var porc = ((acertadas / feitas) * 100).toFixed(2)
    var textc = document.getElementById('certas')
    var texte = document.getElementById('erradas')
    var textp = document.getElementById('porcentagem')
    var textpf = document.getElementById('provas_feitas')
    textc.innerHTML = acertadas
    texte.innerHTML = erradas
    textp.innerHTML = `${porc}%`
    textpf.innerHTML = pf
}


function est() {
    window.location.href = "estatisticas.html"
}