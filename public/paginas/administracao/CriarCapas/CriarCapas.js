import TelaObject from "../../../../componentes/objetos/tela.object.js";

const CriarCapas = new TelaObject("Tfan Studios - Administração", "CriarCapas");

CriarCapas.CriarConteudo(`
    <div class="container text-center my-4 py-2">
        <div class="row">
            <div class="col-3">
                <div id="ferramentas" class="container">
                    <h3 class="text-dark fs-2">FERRAMENTAS</h3>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Background
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="tag d-flex align-items-center justify-content-between w-100 p-2 rounded bg bg-dark">
                                        <h4 class="text-light fs-5mx-2 ">Cor de Fundo</h4>
                                        <input id="bg_cor_1" class="mx-2 form-control w-25" type="color" name="cor_bg" id="cor_bg" value="#ffffff">
                                    </div>
                                    <div class="tag d-flex align-items-center justify-content-between w-100 p-2 rounded bg bg-dark">
                                        <h4 class="my-2 fs-5 text-light" for="cor_bg">Gradiente</h4>
                                        <input id="bg_gradient" type="checkbox" class="w-100 my-1 btn btn-primary">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Ferramentas de Texto
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <button id="btn-new-text-box" class="btn btn-primary my-1">
                                        <i class="bi bi-textarea"></i>
                                    </button>
                                    <button id="btn-" class="btn btn-primary my-1">
                                        <i class="bi bi-type-bold"></i>
                                    </button>
                                    <button id="btn-" class="btn btn-primary my-1">
                                        <i class="bi bi-highlighter"></i>
                                    </button>
                                    <button id="btn-" class="btn btn-primary my-1">
                                        <i class="bi bi-type text-danger"></i>
                                    </button>
                                    <button id="btn-" class="btn btn-primary my-1">
                                        <i class="bi bi-text-left"></i>
                                    </button>
                                    <button id="btn-" class="btn btn-primary my-1">
                                        <i class="bi bi-text-center"></i>
                                    </button>
                                    <button id="btn-" class="btn btn-primary my-1">
                                        <i class="bi bi-text-right"></i>
                                    </button>
                                    <button id="btn-" class="btn btn-primary my-1">
                                        <i class="bi bi-justify"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item" id="dark-box">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item’s accordion body.</strong> It is hidden by default,
                                    until the
                                    collapse plugin adds the appropriate classes that we use to style each element.
                                    These classes
                                    control the overall appearance, as well as the showing and hiding via CSS
                                    transitions. You can
                                    modify any of this with custom CSS or overriding our default variables. It’s also
                                    worth noting
                                    that just about any HTML can go within the <code>.accordion-body</code>, though the
                                    transition
                                    does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col d-flex align-items-center justify-content-center bg bg-dark border" style="height: 500px;">
                <canvas id="render" class="border"></canvas>
            </div>
        </div>
    </div>
`);


let script = document.createElement("script");
script.id = "criar-capas-script";
script.type = "text/javascript";
script.text = `
    const darkBox = document.getElementById("dark-box");
    const dimensao = { w: 350, h: 200 };
    const render = document.getElementById("render");
    const ctx = render.getContext("2d");
    const botoes = [];
    render.width = dimensao.w;
    render.height = dimensao.h;
    const TextBox = {
        editando: false,
        input: null,
        text_cor: "red",
        texto: "",
    }
    const bg_config = {
        bg_gradient: document.getElementById("bg_gradient"),
        bg_cor_1: document.getElementById("bg_cor_1"),
        gradient: false,
        bg_solid: "white",
        gradient_colors: [],
    }
    
    Start();
    function Start(){
        bg_config.gradient = bg_config.bg_gradient.checked;
        bg_config.bg_gradient.addEventListener("click", () => {
            bg_config.gradient = bg_config.bg_gradient.checked;
        });
        bg_config.bg_cor_1.addEventListener("change", () => {
            if(!bg_config.gradient){
                bg_config.bg_solid = bg_cor_1.value;
            }
        });
        botoes.push(document.getElementById("btn-new-text-box"));
        botoes.forEach(btn => {
            btn.addEventListener("click", () => {
                TextBox.editando = true;
                let func = btn.id.split("btn-")[1];
                
                let input = document.createElement("input");
                input.className = "form-control";
                input.addEventListener("change", ()=>{
                    TextBox.texto = input.value;
                });
                TextBox.input = input;
                darkBox.appendChild(TextBox.input);
            });
        })
        Update();
    }
    
    function Update(){
        ctx.fillStyle = bg_config.bg_solid;
        ctx.fillRect(0, 0, dimensao.w, dimensao.h);
        if(TextBox.editando){
            ctx.fillStyle = TextBox.text_cor;
            ctx.font = "Arial 20"
            ctx.fillText(TextBox.texto, dimensao.w/2, dimensao.h/2);
        }
        requestAnimationFrame(Update);
    }
`;

CriarCapas.SetScript(script);

export default CriarCapas;