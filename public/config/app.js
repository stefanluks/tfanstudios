import tfan from './tfan.js';

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
    btnNavs.forEach(btn => {
        btn.addEventListener('click', () => {
            const page = btn.getAttribute('page');
            btnNavs.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            app.innerHTML = ''; // Clear the app content
            let url = window.location.href+`componentes/paginas/${page}.html`;
            console.log(url); // Debugging log
            fetch(`componentes/paginas/${page}.html`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(html => {
                    app.innerHTML = html; // Load the new page content
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                    app.innerHTML = '<p>Error loading page. Please try again later.</p>';
                });
        });
    });

    btnNavs[0].click(); // Simulate a click on the first button to load the initial page    
}
