document.addEventListener('DOMContentLoaded', function() {
    var iconContainers = document.querySelectorAll('.mode-title-container');
    var dropdownMenu = document.querySelector('#dropdownHeaderMenu');
    var pageContainer = document.querySelector('#pageContentContainer');
    var dropdownImage = dropdownMenu.querySelector('.mode-icon');
    var menuIcon = document.getElementById('menuIcon');
    var menuContainer = document.getElementById('writtenModesDropdownContainer');
    var menu = document.querySelector('.dropdown-header-menu');
    var menuIsOpen = false;

    var hideDropdownMenu = function() {
        /* Verifica se il mouse è ancora sopra #dropdownMenu prima di nasconderlo */
        if (!dropdownMenu.matches(':hover')) {
            menu.classList.add('closing');
            menuIsOpen = false;
            setTimeout(function() {
                if (!menuIsOpen) {
                    dropdownMenu.style.display = 'none'; /* Nasconde completamente il menu a tendina */
                    pageContainer.style.filter = 'none'; /* Rimuove il filtro di sfocatura */
                }
            }, 500); // 500ms è la durata della tua animazione
        }
    };

    iconContainers.forEach(function(iconContainer) {
        iconContainer.addEventListener('mouseenter', function() {
            if (!menuIsOpen) {
                dropdownMenu.style.display = 'block'; 
                pageContainer.style.filter = 'blur(5px)'; /* Applica un filtro di sfocatura al contenuto della pagina */
                menu.classList.remove('closing');
                menuIsOpen = true;

            /* Cambia l'immagine nel menu a tendina in base all'elemento su cui il mouse è passato sopra */
                var iconLabel = iconContainer.querySelector('.mode-title').textContent;
                if (iconLabel === 'Creator') {
                    dropdownImage.src = '../images/IconaCreatore4.png';
                    dropdownImage.dataset.link = '../creatore/creatore.html';
                } else if (iconLabel === 'Duel') {
                    dropdownImage.src = '../images/IconaDuello3.png';
                    dropdownImage.dataset.link = '../duello/duello.html';
                } else if (iconLabel === 'Daily Challenge') {
                    dropdownImage.src = '../images/IconaSfidaGiornaliera2.png';
                    dropdownImage.dataset.link = '../daily_challenge/sfida_giornaliera.html';
                } else if (iconLabel === 'Journey') {
                    dropdownImage.src = '../images/IconaViaggioGame1.png';
                    dropdownImage.dataset.link = '../viaggio/viaggio.html';
                }
            }
        });

        iconContainer.addEventListener('mouseleave', hideDropdownMenu);
    });
    /* Nasconde #dropdownMenu quando il mouse esce da esso */
    dropdownMenu.addEventListener('mouseleave', hideDropdownMenu);

    /* Cambia la posizione della finestra quando l'immagine nel menu a tendina viene cliccata */
    dropdownImage.addEventListener('click', function() {
        window.location.href = dropdownImage.dataset.link;
    });


    menuIcon.addEventListener('click', function() {
        // Se il menu è aperto
        if (menuContainer.classList.contains('menu-container-open')) {
            // Chiudi il menu
            menuContainer.classList.remove('menu-container-open');
            // Rimuovi la classe 'change' dall'icona del menu
            menuIcon.classList.remove('change');
        } else {
            // Altrimenti, apri il menu
            menuContainer.classList.add('menu-container-open');
            // Aggiungi la classe 'change' all'icona del menu
            menuIcon.classList.add('change');
        }
    });

    window.addEventListener('resize', function() {
        var dropdownMenu = document.getElementById('dropdownHeaderMenu');
        var dropdownContainer = document.getElementById('writtenModesDropdownContainer');
        if (window.innerWidth < 900) {
            dropdownMenu.style.display = 'none';
        }
    });

    window.addEventListener('resize', function() {
        var dropdownContainer = document.getElementById('writtenModesDropdownContainer');
        if (window.innerWidth > 900) {
            dropdownContainer.style.display = 'none';
        } 
    });

    window.addEventListener('scroll', function() {
        var header = document.querySelector('header');
        var dropdown = document.querySelector('.dropdown-header-menu');
        if (window.scrollY > 0) {
            header.classList.add('semi-transparent');
            dropdown.style.backgroundColor = 'rgba(100, 100, 100, 0.6)';
        } else {
            header.classList.remove('semi-transparent');
            dropdown.style.backgroundColor = 'rgba(100, 100, 100, 1)';
        }
    });
    
    
    
});
