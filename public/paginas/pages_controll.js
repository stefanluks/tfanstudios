import Jogos from '../paginas/jogos/jogos.js';
import Home from '../paginas/home/home.js';
import Adm from '../paginas/administracao/adm.js';
import CriarCapas from '../paginas/administracao/CriarCapas/CriarCapas.js';

import QuizRisadas from '../paginas/jogos_internos/QuizRisadas.js';
import ZombieAtack from '../../componentes/jogos/ZombieAtack/ZombieAtack.js';
import NewbieNinja from "../../componentes/jogos/NewbieNinja/NewbieNinja.js";
import LBSC from "../../componentes/jogos/LBSC/LBSC.js";


const app = document.getElementById('app-tfan');

const PageController = {
    init: function() {
        if (app) {
            app.setAttribute('name', 'Tfan Studios');
            app.setAttribute('version', '1.0.0');
            app.setAttribute('description', 'Plataforma de jogos e entretenimento');
            this.setupNavigation();
            Home.SetTela(app);
            Home.Renderizar();
        }
        this.setupNavigation();
    },

    setupNavigation: function() {
        const btnNavs = document.querySelectorAll('#btn-nav');
        btnNavs.forEach(btn => {
            btn.addEventListener('click', () => {
                const page = btn.getAttribute('page');
                btnNavs.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.loadPage(page);
            });
        });
    },

    loadPage: function(page) {
        switch (page) {
            case 'home':
                Home.SetTela(app);
                Home.Renderizar();
                break;
            case 'jogos':
                Jogos.SetTela(app);
                Jogos.Renderizar();
                break;
            case 'originais':
                // Load the original games page
                break;
            case 'sobre':
                // Load the about page
                break;
            case 'adm':
                Adm.SetTela(app);
                Adm.Renderizar();
                break;
            case 'CriarCapas':
                CriarCapas.SetTela(app);
                CriarCapas.Renderizar();
                break;
            case 'QuizRisadas':
                // Load the QuizRisadas page
                QuizRisadas.SetTela(app);
                QuizRisadas.Renderizar();
                break;
            case 'ZombieAtack':
                // Load the ZombieAtack game
                ZombieAtack.SetTela(app);
                ZombieAtack.Renderizar();
                break;
            case 'NewbieNinja':
                // Load the NewbieNinja game
                NewbieNinja.SetTela(app);
                NewbieNinja.Renderizar();
                break;
            case 'LBSC':
                // Load the Little ball saves christmas
                LBSC.SetTela(app);
                LBSC.Renderizar();
        }
    }
};

export default PageController;