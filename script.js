let segundos = 0;
 let intervalo = null;
   

           function toggleCronometro() {
            const btn = document.getElementById('btn-controle');

            if (intervalo) {

                 clearInterval(intervalo);
                 intervalo = null;
                 btn.innerText = "Retomar o ciclo";
                 btn.style.backgroundColor = "#556b2f";    
            } 
            
            else {

                intervalo = setInterval(atualizarTempo, 1000);
                btn.innerText = "Pausar ciclo";
                btn.style.backgroundColor = "#8b4513";
                                                   }
           }

           function atualizarTempo() {
            segundos++;

            const h = Math.floor(segundos / 3600);
            const m = Math.floor( (segundos % 3600) / 60);
            const s = segundos % 60;

            const tempoFormatado = (h < 10 ? "0" + h : h) + ":" +
                                   (m < 10 ? "0" + m : m) + ":" +
                                   (s < 10 ? "0" + s : s);

            document.getElementById('display-tempo').innerText = tempoFormatado;                       
           }
        
           function atualizarDashboard(quantidade) {

    const totalElemento = document.getElementById('total-itens');
    if (totalElemento) {
        totalElemento.innerText = quantidade;
    }

    const agora = new Date();
    const dataFormatada = agora.toLocaleTimeString('pt-BR', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    
    const dataElemento = document.getElementById('data-atualizacao');
    if (dataElemento) {
        dataElemento.innerText = `Hoje às ${dataFormatada}`;
    }
}


let ciclosConcluidos = 0; 

const alertSound = document.getElementById('alert-sound');
let contadorCiclos = 0;


function playAlert() {
    alertSound.play().catch(error => {
        console.log("O som precisa de uma interação prévia do utilizador.");
    });
} 

function finalizarCiclo() {
    
    ciclosConcluidos++;

    
    const totalElemento = document.getElementById('total-itens');
    if (totalElemento) {
        totalElemento.innerText = ciclosConcluidos;
    }

   
    const dataElemento = document.getElementById('data-atualizacao');
    if (dataElemento) {
        const agora = new Date();
        const horaFormatada = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        dataElemento.innerText = horaFormatada;
    }

    
    const lista = document.getElementById('lista-historico');
    if (lista) {
        const novoItem = document.createElement('li');
        novoItem.classList.add('history-item'); // Mantém o estilo que você criou
        const horaLog = new Date().toLocaleTimeString('pt-BR');
        novoItem.innerHTML = `<span>Ciclo #${ciclosConcluidos}</span> — <span>Concluído às ${horaLog}</span>`;
        
        
        lista.prepend(novoItem);

        
        const msgVazia = document.querySelector('.empty-msg');
        if (msgVazia) msgVazia.remove();
    }


    const som = document.getElementById('alert-sound');
    if (som) {
        som.play().catch(e => console.log("Aguardando interação para tocar som"));
    }
}


function adicionarAoHistorico() {
    const lista = document.getElementById('lista-historico');
    const novoItem = document.createElement('li');
    const agora = new Date().toLocaleTimeString('pt-BR');
    
    novoItem.innerText = `Hidratação concluída às ${agora}`;
    lista.prepend(novoItem); 
}


let totalConcluido = 0;

function registrarConcluido() {
    
    totalConcluido++;
    document.getElementById('total-itens').innerText = totalConcluido;

    
    const agora = new Date();
    const horario = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById('data-atualizacao').innerText = horario;


    const lista = document.getElementById('lista-historico');
    const novoItem = document.createElement('li');
    novoItem.classList.add('history-item'); 
    novoItem.innerHTML = `<span>Ciclo ${totalConcluido}</span> <span>${horario}</span>`;
    
    lista.prepend(novoItem);

    const msgVazia = document.querySelector('.empty-msg');
    if (msgVazia) msgVazia.remove();

    
    tocarAlerta(); 
}

function limparHistorico() {
    
    const lista = document.getElementById('lista-historico');
    if (lista) {
        lista.innerHTML = '<li class="empty-msg">Nenhum ciclo concluído ainda.</li>';
    }

  
    ciclosConcluidos = 0;

   
    const totalElemento = document.getElementById('total-itens');
    if (totalElemento) {
        totalElemento.innerText = "0";
    }

    const dataElemento = document.getElementById('data-atualizacao');
    if (dataElemento) {
        dataElemento.innerText = "--/--/--";
    }
    
    console.log("Histórico limpo com sucesso!");
}