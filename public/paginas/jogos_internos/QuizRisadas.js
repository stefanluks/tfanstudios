import TelaObject from "../../../componentes/objetos/tela.object.js";

const QuizRisadas = new TelaObject("Tfan Studios | Quiz de Risadas", "jogo_interno");
QuizRisadas.SetTela(document.getElementById("app-tfan"));
QuizRisadas.CriarConteudo(
    `<div class="container text-center">
        <div class="row">
            <div class="col-12">
                <h1>Quiz de Risadas</h1>
                <p>Advinhe o nome do personagem pela risada caracteristicas dos personagens.</p>
            </div>
            <span class="alert alert-info col-12">
                Jogo em desenvolvimento, em breve será lançado!
            </span>
            <div class="bg bg-dark text-white p-3 rounded col-12">
                Contagem para o lançamento: <span id="countdown"></span>
            </div>
        </div>
    </div>`
);

let script = document.createElement("script");
script.id = "jogo-interno-script";
script.text = `
    const countdownElement = document.getElementById("countdown");
    const launchDate = new Date("2025-07-12T00:00:00Z"); // Data de lançamento do jogo
    function updateCountdown() {
        const now = new Date();
        const timeRemaining = launchDate - now;

        if (timeRemaining <= 0) {
            countdownElement.textContent = "O jogo já foi lançado!";
            clearInterval(countdownInterval);
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownElement.textContent = \`\${days} dias, \${hours} horas, \${minutes} minutos, \${seconds} segundos\`;
    }

    updateCountdown(); // Atualiza imediatamente
    const countdownInterval = setInterval(updateCountdown, 1000); // Atualiza a cada segundo
`;


QuizRisadas.SetScript(script);

export default QuizRisadas;