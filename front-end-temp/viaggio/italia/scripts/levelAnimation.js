var icon = document.querySelector('#openImageIcon');
var popupImage = document.querySelector('#popupFinalImage');

icon.addEventListener('mouseover', function() {
    popupImage.style.display = 'block';
});

icon.addEventListener('mouseout', function() {
    popupImage.style.display = 'none';
});

// Per i dispositivi touch
icon.addEventListener('touchstart', function() {
    popupImage.style.display = 'block';
});

icon.addEventListener('touchend', function() {
    popupImage.style.display = 'none';
});

var colorIcon = document.querySelector('#colorPaletteIcon'); // Sostituisci con il selettore corretto per l'icona della palette dei colori
var colorPopup = document.querySelector('#popupColorImage'); // Sostituisci con il selettore corretto per l'immagine o l'elemento che vuoi mostrare

colorIcon.addEventListener('mouseover', function() {
    colorPopup.style.display = 'block';
});

colorIcon.addEventListener('mouseout', function() {
    colorPopup.style.display = 'none';
});

// Per i dispositivi touch
colorIcon.addEventListener('touchstart', function() {
    colorPopup.style.display = 'block';
});

colorIcon.addEventListener('touchend', function() {
    colorPopup.style.display = 'none';
});
