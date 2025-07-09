export default class TelaObject {
    constructor(titulo, nome) {
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
        if(this.titulo) document.title = this.titulo;
        this.tela.innerHTML = this.conteudo;
        
        if(this.script){
            if(this.nome=="jogos"){
                if(document.body.querySelector("#jogos-script")){
                    let cod = document.body.querySelector("#jogos-script");
                }else{
                    document.body.appendChild(this.script);
                }
                carregarJogos();
            }
            if(this.nome=="jogo_interno"){
                if(document.body.querySelectorAll("#jogo-interno-script").length > 0){
                    let codigos = document.body.querySelectorAll("#jogo-interno-script");
                    codigos.forEach(cod => { cod.remove(); });
                }
                document.body.appendChild(this.script);
            }
        }
    }
}