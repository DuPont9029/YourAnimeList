

function showCustomPopup() {
    var popup = document.getElementById('custom-popup');
    popup.style.display = 'block';
}

function closePopup() {
    var popup = document.getElementById('custom-popup');
    popup.style.display = 'none';
}

function handleConfirmation(choice) {
    if (choice === 'yes') {
        // L'utente ha confermato di aver già scaricato il file XML
        // Continua l'elaborazione
        // ...

        // Crea o aggiorna il cookie con una durata di 5 ore
        var now = new Date();
        var expiry = new Date(now.getTime() + 5 * 60 * 60 * 1000); // 5 ore in millisecondi
        document.cookie = 'myCookie=1; expires=' + expiry.toUTCString() + '; path=/';
    } else {
        window.location.href = "http://myanimelist.net/panel.php?go=export";
    }

    closePopup();
}

function checkCookie() {
    var cookies = document.cookie.split(';');
    var found = false;

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf('myCookie=') === 0) {
            found = true;
            break;
        }
    }

    return found;
}

document.addEventListener('DOMContentLoaded', function() {
    var cookieExists = checkCookie();

    if (!cookieExists) {
        showCustomPopup();
    }
});
