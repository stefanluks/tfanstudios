import tfan from './tfan.js';
import PageController from '../paginas/pages_controll.js';


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
    const btnNavs = document.querySelectorAll('#btn-nav');
    PageController.init();
    pageController.SetupNavigation();    
}
