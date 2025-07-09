export default class TelaObject {
    constructor(titulo) {
        this.titulo = titulo || "Tfan Studios";
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
        if(this.titulo) document.title = this.titulo;
        this.tela.innerHTML = this.conteudo;
        
        if(this.script){
            if(document.body.querySelector("#jogos-script")){
                let cod = document.body.querySelector("#jogos-script");
            }else{
                document.body.appendChild(this.script);
            }
            carregarJogos();
        }
    }
}