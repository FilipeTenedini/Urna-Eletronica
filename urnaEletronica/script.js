// variáveis de controle de interface
let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1--right');
let numeros = document.querySelector('.d-1-3');


//variáveis de controle de ambiente

// em que etapa eu estou agora?
let etapaAtual = 0;
let numero = '';


function comecarEtapa() {
    let etapa = etapas[etapaAtual];
    let numerosQtd = etapa.numeros;
    let numeroHtml = '';

    for (let i=0; i < numerosQtd; i++) {
        if (i===0){
            numeroHtml += '<div class="numero pisca"></div>';
        } else {
            numeroHtml += '<div class="numero"></div>';
        }
        
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;

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
        console.log(candidato);
        descricao.innerHTML = `Nome: ${candidato.nome}<br> Partido: ${candidato.partido}<br>`;
        aviso.style.display = 'block';

        let fotosHtml = '';
        for (let i in candidato.fotos){
            fotosHtml += // aula 6 6:31
        }

    } else {

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
// function branco(){
// };
// function corrige(){
// };
// function confirma(){
// };