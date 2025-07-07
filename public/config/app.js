import tfan from './tfan.js';
import Jogos from '../paginas/jogos/jogos.js';
import Home from '../paginas/home/home.js';

const app = document.getElementById('app-tfan');
if (app) {
    app.setAttribute('name', tfan.name);
    app.setAttribute('version', tfan.version);
    app.setAttribute('description', tfan.description);
    app.setAttribute('adsense-client', tfan.adsense.client);
    app.setAttribute('adsense-slot', tfan.adsense.slot);
    app.setAttribute('adsense-format', tfan.adsense.format);
    app.setAttribute('adsense-responsive', tfan.adsense.responsive);
    app.setAttribute('google-analytics-tracking-id', tfan.googleAnalytics.trackingId);
    app.setAttribute('google-analytics-anonymize-ip', tfan.googleAnalytics.anonymizeIp);
    app.setAttribute('theme-primary-color', tfan.theme.primaryColor);
    app.setAttribute('theme-secondary-color', tfan.theme.secondaryColor);
    app.setAttribute('theme-background-color', tfan.theme.backgroundColor);
    app.setAttribute('theme-text-color', tfan.theme.textColor);
    app.setAttribute('features-enable-ads', tfan.features.enableAds);
    app.setAttribute('features-enable-analytics', tfan.features.enableAnalytics);
    app.setAttribute('features-enable-dark-mode', tfan.features.enableDarkMode);
}   

window.onload = () => {
    // Initialize the app with the Home page
    Home.SetTela(app);
    Home.Renderizar();
    const btnNavs = document.querySelectorAll('#btn-nav');
    btnNavs.forEach(btn => {
        btn.addEventListener('click', () => {
            const page = btn.getAttribute('page');
            btnNavs.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            console.log(`Loading page: ${page}`);
            loadPage(page);
        });
    });

    // btnNavs[0].click(); // Simulate a click on the first button to load the initial page    
    

    function loadPage(page) {
        switch (page) {
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
            default:
                Home.SetTela(app);
                Home.Renderizar();
        }
    }
}
