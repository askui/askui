if (typeof analytics !== 'undefined' && typeof analytics.trackLink !== 'undefined') {
    var cardPicture = document.getElementById('github-try-out-image');
    var cardButton = document.getElementById('github-try-out-button');
    analytics.trackLink(cardPicture, 'Clicked Gitpod Try Out Repository', {});
    analytics.trackLink(cardButton, 'Clicked Gitpod Try Out Repository', {});
}
