function retryReinitCookieConsent(retries) {
    if (retries < 3) {
        try {
            CookieConsent.initConsent();
        } catch(e) {
            console.log("Cookiebot is undefined: Retry " + retries);
            setTimeout(() => retryReinitCookieConsent(retries+1), 1000);
        }
    }
}
retryReinitCookieConsent(0);
