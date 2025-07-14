import TelaObject from "../../../componentes/objetos/tela.object.js";

const Adm = new TelaObject("Tfan Studios - Administração", "adm", true);

let container = document.createElement("div");
container.className = "container";
let h3 = document.createElement("h3");
h3.className = "text-dark fs-2";
h3.textContent = "ADM - FERRAMENTAS";
container.appendChild(h3);
let btnCC = document.createElement("button");
btnCC.id = "btn-criar-capas";
btnCC.className = "btn btn-primary";
btnCC.textContent = "Criar Capas";
btnCC.addEventListener("click", () => {
    Adm.Redirecionar("CriarCapas");
});

container.appendChild(btnCC);

Adm.CriarConteudo(container);

let script = document.createElement("script");
script.id = "adm-script";
script.type = "text/javascript";

Adm.SetScript(script);

export default Adm;