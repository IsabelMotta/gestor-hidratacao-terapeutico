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
        
