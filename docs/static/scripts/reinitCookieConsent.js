function rerunCookieConsentScripts(retries) {

    if (typeof retries === 'undefined') {
        retries = 0;
    }

    if (retries < 3) {
        try {
            CookieConsent.runScripts();
        } catch(e) {
            console.log(`Cookiebot is undefined: Retry ${retries}`);
            setTimeout(() => rerunCookieConsentScripts(retries+1), 1000);
        }
    }
}
