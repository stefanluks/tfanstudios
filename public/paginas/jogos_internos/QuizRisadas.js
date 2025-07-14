import TelaObject from "../../../componentes/objetos/tela.object.js";

const QuizRisadas = new TelaObject("Tfan Studios | Quiz de Risadas", "jogo_interno", false);
QuizRisadas.SetTela(document.getElementById("app-tfan"));
QuizRisadas.CriarConteudo(
    `
    <div class="container d-flex align-items-center justify-content-between flex-column">
      <div class="w-100 box-game-info bg bg-dark tex d-flex justify-content-center">
        <div id="btn-voltar" class="btn-game-item">
          <i class="bi bi-arrow-left"></i>
        </div>
        <h1 class="w-50 text-center text-light">Quiz de Risadas de One Piece</h1>
        <div id="game-page-btns" class="btns d-flex justify-content-center">
          <div id="unity-fullscreen-button">
            <i class="bi bi-arrows-fullscreen"></i>
          </div>
          <div id="btn-sound" class="btn-game-item">
            <i class="bi bi-music-note-beamed"></i>
          </div>
        </div>
      </div>
    `
);

let script = document.createElement("script");
script.id = "jogo-interno-script";
script.text = `
    var btnVoltar = document.querySelector("#btn-voltar");

    btnVoltar.addEventListener("click", () => {
      window.location.href = "/";
    })
    
`;


QuizRisadas.SetScript(script);

export default QuizRisadas;