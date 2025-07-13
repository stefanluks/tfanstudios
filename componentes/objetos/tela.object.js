import PageController from "../../public/paginas/pages_controll.js";

export default class TelaObject {
    constructor(titulo, nome, htmlObject=false) {
        this.htmlObject = htmlObject;
        this.titulo = titulo || "Tfan Studios";
        this.nome = nome || "home";
    }

    CriarConteudo(conteudo) {
        this.conteudo = conteudo;
    }

    SetScript(script) {
        this.script = script;
    }

    SetTela(tela) {
        this.tela = tela;
    }

    Renderizar(){
        console.log("Renderizando tela: " + this.nome);
        if(this.titulo) document.title = this.titulo;
        if(!this.htmlObject) this.tela.innerHTML = this.conteudo;
        else{
            this.tela.innerHTML = "";
            this.tela.appendChild(this.conteudo);
        }
        if(this.script){
            switch(this.nome){
                case "home":
                    if(document.body.querySelector("#home-script")){
                        let cod = document.body.querySelector("#home-script");
                    }
                    else{
                        document.body.appendChild(this.script);
                    }
                    break;
                case "jogos":
                    if(document.body.querySelector("#jogos-script")){
                        let cod = document.body.querySelector("#jogos-script");
                    }else{
                        document.body.appendChild(this.script);
                    }
                    break;
                case "adm":
                    if(document.body.querySelector("#adm-script")){
                        let cod = document.body.querySelector("#adm-script");
                    }else{
                        document.body.appendChild(this.script);
                    }
                    break;
                case "CriarCapas":
                    if(document.body.querySelector("#criar-capas-script")){
                        let cod = document.body.querySelector("#criar-capas-script");
                    }else{
                        document.body.appendChild(this.script);
                    }
                    break;
                case "jogo_interno":
                    if(document.body.querySelectorAll("#jogo-interno-script").length > 0){
                        let codigos = document.body.querySelectorAll("#jogo-interno-script");
                        codigos.forEach(cod => { cod.remove(); });
                    }
                    document.body.appendChild(this.script);
                    break;
                default:
                    console.warn("Script não definido para a tela: " + this.nome);
                    break;
            }
        }
    }

    Redirecionar(pagina) {
        PageController.loadPage(pagina);
    }
}