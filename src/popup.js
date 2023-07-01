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
    } else {
        window.location.href = "http://myanimelist.net/panel.php?go=export";
    }

    closePopup();
}


document.addEventListener('DOMContentLoaded', function() {
    showCustomPopup();
});

