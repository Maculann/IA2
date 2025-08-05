const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Ao chegar em casa, você decide explorar mais sobre essa IA. O que você faz primeiro?",
        alternativas: [
            {
                texto: "Pergunto sobre um problema pessoal.",
                afirmacao: "Você decidiu testar a empatia e utilidade emocional da IA. "
            },
            {
                texto: "Peço para ela escrever um texto criativo.",
                afirmacao: "Você se encantou com o potencial artístico da IA."
            }
        ]
    },
    {
        enunciado: "A IA responde de forma surpreendente. Você se pega pensando:",
        alternativas: [
            {
                texto: "Será que um dia ela vai substituir professores e médicos?",
                afirmacao: "Surgiu uma preocupação sobre o impacto no trabalho humano."
            },
            {
                texto: "Como posso aprender a programar algo assim?",
                afirmacao: "Isso despertou sua curiosidade e vontade de aprender tecnologia."
            }
        ]
    },
    {
        enunciado: "Um amigo seu descobre que você está usando essa IA e diz que isso é perigoso. Como você reage?",
        alternativas: [
            {
                texto: "Você pode estar certo, vou tomar cuidado.",
                afirmacao: "Você passou a refletir sobre os limites éticos da IA."
            },
            {
                texto: "A tecnologia não é boa ou má, depende de quem usa.",
                afirmacao: " Você acredita no uso consciente da inovação."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: " Depois de meses usando a IA, você percebe que ela mudou algo em você. O que foi?",
        alternativas: [
            {
                texto: "Me tornei mais independente e curioso.",
                afirmacao: "O contato com a IA ampliou sua forma de pensar."
            },
            {
                texto: "Comecei a desconfiar mais do que é real ou não.",
                afirmacao: " A linha entre o mundo real e o digital ficou mais confusa. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
