// variáveis de controle de interface
let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1--right');
let numeros = document.querySelector('.d-1-3');
let votoTodos = document.querySelector('.nuloBranco')

// comecarEtapa();
//variáveis de controle de ambiente

// em que etapa eu estou agora?
let etapaAtual = 0;
let numero = '';
let branco = false

function comecarEtapa() {
    let etapa = etapas[etapaAtual];
    let numerosQtd = etapa.numeros;
    let numeroHtml = '';
    branco = false;
    numero = '';


    for (let i=0; i < numerosQtd; i++) {
        if (i===0){
            numeroHtml += '<div class="numero pisca"></div>';
        } else {
            numeroHtml += '<div class="numero"></div>';
        }
        
    }



    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
    votoTodos.style.display = 'none';
}


function atualizaInterface(){
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=> {
        if (item.numero == numero){
            return true;
        } else {
            return false;
        }
        
    });
    if (candidato.length > 0) {
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.nome}<br> Partido: ${candidato.partido}<br>`;
        aviso.style.display = 'block';

        let fotosHtml = '';
        for (let i in candidato.fotos){
            if (candidato.fotos[i].small){
                fotosHtml += `<div class="d-1-img small"><img src="./images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;
            }else {
                fotosHtml += `<div class="d-1-img"><img src="./images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;              
            }
            
        }
        lateral.innerHTML = fotosHtml;
    } else { 
        votoTodos.innerHTML = 'VOTO NULO';
        votoTodos.style.display = 'flex'
        aviso.style.display = 'block';
    }
    
};


function clicou(n) {
    let elNumero = document.querySelector('.numero.pisca')
    if (elNumero !== null){
        elNumero.innerHTML = n;
        numero += n;

        elNumero.classList.remove('pisca');
        if (elNumero.nextElementSibling !== null){
            elNumero.nextElementSibling.classList.add('pisca');
        } else{
            atualizaInterface();
        }
        
    }
};
function emBranco(){
        numero = '';
        branco = true;
        numeros.innerHTML = '';
        votoTodos.innerHTML = 'VOTO EM BRANCO';
        votoTodos.style.display = 'flex';
        aviso.style.display = 'block';
        lateral.innerHTML = '';
        descricao.innerHTML = '';

};
function confirma(){
    let etapa = etapas[etapaAtual];
    let votado = false
    if (branco === true) {        
        console.log('Confirmando voto em branco');
        votado = true;
    } else if (numero.length == etapa.numeros){        
        console.log('Confirmando como: '+numero)
        votado = true;
    }

    if (votado && etapaAtual+1 < etapas.length){        
        etapaAtual++;
        comecarEtapa();
    } else {
        zerarTela();
        votoTodos.innerHTML = 'FIM';
        votoTodos.style.display = 'flex';

        setTimeout(() => document.location.reload(), 5000)
    }
};

function zerarTela() {
    seuVotoPara.innerHTML = '';
    cargo.innerHTML = '';
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = '';
    votoTodos.innerHTML = '';
}


comecarEtapa();