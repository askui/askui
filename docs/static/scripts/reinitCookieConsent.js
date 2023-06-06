function rerunCookieConsentScripts(retries) {
    if (retries < 3) {
        try {
            CookieConsent.runScripts();
        } catch(e) {
            console.log("Cookiebot is undefined: Retry " + retries);
            setTimeout(() => retryReinitCookieConsent(retries+1), 1000);
        }
    }
}

window.addEventListener('CookiebotOnConsentReady', function () {
    const iframes = document.getElementsByTagName("iframe");
    if (iframes.length > 0) {
        rerunCookieConsentScripts(0);  
    }
})
