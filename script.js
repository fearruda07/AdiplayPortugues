let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let imgQuestao = document.querySelector('.imagemDaQuestao img')  // ADICIONE
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    imagem       : '0',  
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
    

}
const q1 = {
    numQuestao   : 1,
    imagem       : 'superstar.gif',  
    pergunta     : "Em 1970 surge o icone superstar o primeiro tenis com cano baixo inicialmente feito pra as quadras de basquete se tornou viral atraves do jogador....",
    alternativaA : "Bill Russel",
    alternativaB : "Stephen Curry",
    alternativaC : "Abdul-Jabbar",
    alternativaD : "Jerry West",
    correta      : "Abdul-Jabbar",
    
    
}
const q2 = {
    numQuestao   : 2,
    imagem       : '11.jpg',  
    pergunta     : "O EMMNXT tem como objetivo transformar a jornada do consumidor em loja.....",
    alternativaA : "Mais objetiva",
    alternativaB : "Através da tecnica F.A.B",
    alternativaC : "O conectando,engajando e inspirando",
    alternativaD : "Mais divertida",
    correta      : "O conectando,engajando e inspirando",
 
}
const q3 = {
    numQuestao   : 3,
    imagem       : '748.jpg',  
    pergunta     : "O programa especialista running e women foi criado com intuito de...",
    alternativaA : "Transformar vidas",
    alternativaB : "Trazer colaboradores mais capacitados em lojas",
    alternativaC : "Diminuir o turnover",
    alternativaD : "Diminuir a conversão nas lojas",
    correta      : "Trazer colaboradores mais capacitados em lojas",
    
}
const q4 = {
    numQuestao   : 4,
    imagem       : '4dfwd.gif',  
    pergunta     : "O tenis 4dfwd tem uma tecnologia que gera retorno de energia te impulsionando para.. ",
    alternativaA : "Cima economizando passos",
    alternativaB : "Frente economizando passos",
    alternativaC : "Ambos os lados",
    alternativaD : "Para trás reduzindo passos",
    correta      : "Frente economizando passos",
}
const q5 = {
    numQuestao   : 5,
    imagem       : 'logo adi.gif',  
    pergunta     : "Esse logo representa que segmento?",
    alternativaA : "Performance",
    alternativaB : "Originals",
    alternativaC : "Apparel",
    alternativaD : "Performance e Originals",
    correta      : "Performance",
    
}
const q6 = {
    numQuestao   : 6,
    imagem       : 'adi.jpg',  
    pergunta     : "Em que ano nasce oficialmente a Adidas? e em que cidade ela foi instalada inicialmente?",
    alternativaA : "1948 em Oberhausen",
    alternativaB : "1951 em Hanôver",
    alternativaC : "1949 em Lyon (Rhône-Alpes)",
    alternativaD : "1949 em Herzogenarauch",
    correta      : "1949 em Herzogenarauch",
    
}
const q7 = {
    numQuestao   : 7,
    imagem       : 'top-center.jpg',  
    pergunta     : "Em 2022 abriu uma loja conceito com 700m em formato stadium na AV.paulista que loja foi essa?",
    alternativaA : "Top Center",
    alternativaB : "City center",
    alternativaC : "Nomura center",
    alternativaD : "Bourbon center",
    correta      : "Top Center",
    
}
const q8 = {
    numQuestao   : 8,
    imagem       : 'IN STORE.png',  
    pergunta     : "Qual objetivo do programa in store coach?",
    alternativaA : "Ter maior produtividade e rentabilidade junto ao time de vendas",
    alternativaB : "Conhecer os produtos",
    alternativaC : "Aprender sobre a cultura da adidas somente",
    alternativaD : "Aumentar o turnover",
    correta      : "Ter maior produtividade e rentabilidade junto ao time de vendas",
    
}
const q9 = {
    numQuestao   : 9,
    imagem       : 'vende que é gol.png',  
    pergunta     : "Na campanha de incentivo VENDE QUE É GOL tivemos 15 vencedores de lojas BCS, que loja ficou em 1° lugar?",
    alternativaA : "BCS- Porto Alegre",
    alternativaB : "BCS- Foz do Iguaçu,Cataratas",
    alternativaC : "BCS- Brasilia, Iguatemi",
    alternativaD : "BCS- Rio Branco,Via Verde",
    correta      : "BCS- Rio Branco,Via Verde",
  
}
const q10 = {
    numQuestao   : 10,
    imagem       : 'jeans va.gif',  
    pergunta     : "Sabemos que o jeans utiliza muita água em sua confecção, quantos litros é utilizado para confecção de 2 peças de jeans?",
    alternativaA : "500 a 800 litros",
    alternativaB : "1000 litros",
    alternativaC : "6.800 a 8.000 litros",
    alternativaD : "5.000 litros",
    correta      : "6.800 a 8.000 litros",
    
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
imgQuestao.setAttribute('src', 'images/'+q1.imagem)  // ADICIONE
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    imgQuestao.setAttribute('src', 'images/'+questoes[nQuestao].imagem) // ADICIONE
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Obrigado por jogar! Você atingiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'IMPOSSIBLE IS NOTHING'
    }, 8000)

}