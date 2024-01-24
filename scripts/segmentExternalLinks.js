function addTrackLink() {
    if (typeof analytics !== 'undefined' && typeof analytics.trackLink !== 'undefined') {
        // Gitpod Try-Out tracking
        var cardPicture = document.getElementById('github-try-out-image');
        var cardButton = document.getElementById('github-try-out-button');
        if (typeof cardPicture !== 'undefined') {
            analytics.trackLink(cardPicture, 'Clicked Gitpod Try Out Repository', {});
        }
        if (typeof cardButton !== 'undefined') {
            analytics.trackLink(cardButton, 'Clicked Gitpod Try Out Repository', {});
        }
        // AskUI-Installer download tracking
        var askuiInstallerDownloadLink = document.getElementById('askui-installer-download-link');
        if (typeof askuiInstallerDownloadLink !== 'undefined') {
            askuiInstallerDownloadLink = askuiInstallerDownloadLink.getElementsByTagName('a')[0];
            analytics.trackLink(askuiInstallerDownloadLink, 'Clicked AskUI-Installer download link', {});
        }
    } else {
        setTimeout(addTrackLink, 1000);
    }
}
addTrackLink();
