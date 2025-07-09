import TelaObject from "../../../componentes/objetos/tela.object.js";

let url = window.location.href + "public/paginas/jogos/jogos.json";
const Jogos = new TelaObject("Tfan Studios | Todos os Jogos", "jogos");
Jogos.CriarConteudo(
    `<div class="container">
    <div id="jogos" class="w-100 d-flex align-items-center justify-content-center flex-wrap">
        <div class="card m-2" style="width: 350px;" aria-hidden="true">
            <div class="img-card-loading"></div>
            <div class="card-body">
                <h5 class="card-title placeholder-glow">
                    <span class="placeholder col-6"></span>
                </h5>
                <p class="card-text placeholder-glow">
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-6"></span>
                    <span class="placeholder col-8"></span>
                </p>
                <a class="btn w-100 btn-primary disabled placeholder col-6" aria-disabled="true"></a>
            </div>
        </div>
        <div class="card m-2" style="width: 350px;" aria-hidden="true">
            <div class="img-card-loading"></div>
            <div class="card-body">
                <h5 class="card-title placeholder-glow">
                    <span class="placeholder col-6"></span>
                </h5>
                <p class="card-text placeholder-glow">
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-6"></span>
                    <span class="placeholder col-8"></span>
                </p>
                <a class="btn w-100 btn-primary disabled placeholder col-6" aria-disabled="true"></a>
            </div>
        </div>
        <div class="card m-2" style="width: 350px;" aria-hidden="true">
            <div class="img-card-loading"></div>
            <div class="card-body">
                <h5 class="card-title placeholder-glow">
                    <span class="placeholder col-6"></span>
                </h5>
                <p class="card-text placeholder-glow">
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-6"></span>
                    <span class="placeholder col-8"></span>
                </p>
                <a class="btn w-100 btn-primary disabled placeholder col-6" aria-disabled="true"></a>
            </div>
        </div>
        <div class="card m-2" style="width: 350px;" aria-hidden="true">
            <div class="img-card-loading"></div>
            <div class="card-body">
                <h5 class="card-title placeholder-glow">
                    <span class="placeholder col-6"></span>
                </h5>
                <p class="card-text placeholder-glow">
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-6"></span>
                    <span class="placeholder col-8"></span>
                </p>
                <a class="btn w-100 btn-primary disabled placeholder col-6" aria-disabled="true"></a>
            </div>
        </div>
        <div class="card m-2" style="width: 350px;" aria-hidden="true">
            <div class="img-card-loading"></div>
            <div class="card-body">
                <h5 class="card-title placeholder-glow">
                    <span class="placeholder col-6"></span>
                </h5>
                <p class="card-text placeholder-glow">
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-6"></span>
                    <span class="placeholder col-8"></span>
                </p>
                <a class="btn w-100 btn-primary disabled placeholder col-6" aria-disabled="true"></a>
            </div>
        </div>
        <div class="card m-2" style="width: 350px;" aria-hidden="true">
            <div class="img-card-loading"></div>
            <div class="card-body">
                <h5 class="card-title placeholder-glow">
                    <span class="placeholder col-6"></span>
                </h5>
                <p class="card-text placeholder-glow">
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-6"></span>
                    <span class="placeholder col-8"></span>
                </p>
                <a class="btn w-100 btn-primary disabled placeholder col-6" aria-disabled="true"></a>
            </div>
        </div>
    </div>`
);

let script = document.createElement("script");
script.id = "jogos-script";
script.type = "text/javascript";
script.text = `
function carregarJogos() {
    let url = window.location.href + "public/paginas/jogos/jogos.json";
    let jogosContainer = document.getElementById("jogos");
    setTimeout(() => {
        jogosContainer.innerHTML = "";
        fetch(url).then(data => { return data.json(); })
        .then(jogos => {
            jogos.forEach(jogo => {
                let card = document.createElement("div");
                card.className = "card m-2";
                card.style.width = "350px";
                let img = document.createElement("img");
                img.src = jogo.img;
                img.className = "card-img-top";
                img.alt = jogo.nome;
                card.appendChild(img);
                let body = document.createElement("div");
                body.className = "card-body";
                let title = document.createElement("h5");
                title.className = "card-title";
                title.textContent = jogo.nome;
                body.appendChild(title);
                let desc = document.createElement("p");
                desc.className = "card-text";
                desc.style.height = "100px";
                desc.style.overflow = "hidden";
                desc.textContent = jogo.descricao;
                if(jogo.desenvolvimento !== undefined && jogo.desenvolvimento) {
                    let devBadge = document.createElement("span");
                    devBadge.className = "badge bg-warning text-dark"; 
                    devBadge.textContent = "Em desenvolvimento";
                    desc.appendChild(devBadge);
                }
                body.appendChild(desc);
                if(jogo.interno !== undefined && jogo.interno) {
                    let btnJ = document.createElement("div");
                    btnJ.className = "btn btn-primary w-100";
                    btnJ.textContent = "Jogar";
                    btnJ.onclick = () => {
                        console.log("Carregando jogo:", jogo.nome);
                        let url_module = window.location.href + jogo.link;
                        import(url_module).then(module => {
                            if (module.default && typeof module.default.Renderizar === 'function') {
                                module.default.Renderizar();
                            } else {
                                console.error("O módulo não possui uma função Renderizar.");
                            }
                        }).catch(error => {
                            console.error("Erro ao carregar o jogo:", error);
                        });
                    };
                    body.appendChild(btnJ);
                }else{
                    let link = document.createElement("a");
                    link.className = "btn btn-primary w-100";
                    link.href = jogo.link;
                    link.textContent = "Jogar";
                    body.appendChild(link);
                }
                card.appendChild(body);
                jogosContainer.appendChild(card);
            });
        }).catch(error => {
            console.error("Erro ao carregar os jogos:", error);
        });
    }, 1000);
}`;

Jogos.SetScript(script);

export default Jogos;