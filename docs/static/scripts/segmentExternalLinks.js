function addTrackLink() {
    if (typeof analytics !== 'undefined' && typeof analytics.trackLink !== 'undefined') {
        var cardPicture = document.getElementById('github-try-out-image');
        var cardButton = document.getElementById('github-try-out-button');
        if (typeof cardPicture !== 'undefined') {
            analytics.trackLink(cardPicture, 'Clicked Gitpod Try Out Repository', {});
        }
        if (typeof cardButton !== 'undefined') {
            analytics.trackLink(cardButton, 'Clicked Gitpod Try Out Repository', {});
        }
    } else {
        setTimeout(addTrackLink, 1000);
    }
}
addTrackLink();
