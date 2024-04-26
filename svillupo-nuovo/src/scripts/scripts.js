
//Import
import * as f from'./functions.js';
import{ matrix, thinButtonsMap } from './data.js';
import { defaultSquarebuttonsColor, defaultThinbuttonsColor,rows,cols } from './constants.js';

// Funzione per gestire l'evento di caricamento del documento
document.addEventListener("DOMContentLoaded", function() {
    const buttonGrid = document.getElementById("buttonGrid");

    //carica le combinazioni di colori
    f.loadColorCombinations();
    
    // Crea una griglia di bottoni quadrati e bottoni sottili a seconda del numero di righe e colonne
    for (let i = 0; i < rows; i++) {
        // Crea una riga della matrice
        let row = [];

        // Crea un div per la riga
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("square-row");

        // Crea i bottoni quadrati e i bottoni sottili orizzontali per una riga
        for (let j = 0; j < cols; j++) {
            // Crea un a per il bottone quadrato
            const buttonContainer = document.createElement("a");
            buttonContainer.classList.add("square-button-container");
    
            // Crea un bottone quadrato
            const button = document.createElement("button");
            button.classList.add("square-button");

            // Imposta il colore di default per il bottone quadrato
            button.style.backgroundColor = defaultSquarebuttonsColor;

            // Assegna una coppia di attributi al bottone che contiene le sue coordinate
            button.setAttribute('data-row', i);
            button.setAttribute('data-col', j);

            // Assegna un ID al bottone che contiene le sue coordinate
            button.id = 'square-' + i + '-' + j;
    
            // Aggiungi il bottone al suo a
            buttonContainer.appendChild(button);
            // Aggiungi il a al div della riga
            rowDiv.appendChild(buttonContainer);

            // Aggiungi il bottone alla matrice
            row.push(button);

            // Aggiungi un ascoltatore di eventi per il clic del mouse sui bottoni quadrati per la loro colorazione
            button.addEventListener('click', f.handleSquareButtonMouseClick);
            
            // Crea un bottone sottile orizzontale se non è l'ultima colonna
            if (j < cols - 1) {
                //crea un a per il bottone sottile
                const thinButtonContainer = document.createElement("a");
                thinButtonContainer.classList.add("vertical-button-container");
    
                // Crea un bottone sottile
                const thinButton = document.createElement("button");
                thinButton.classList.add("vertical-thin-button");


                // Assegna un ID al bottone sottile in base alle coordinate dei bottoni quadrati adiacenti
                thinButton.id = 'v-border-' + i + '-' + j +'-' + i + '-' + (j + 1);

                // Imposta il colore di default per il bottone sottile
                thinButton.style.backgroundColor = defaultThinbuttonsColor;

                // Aggiungi il bottone sottile alla mappa
                thinButtonsMap.set(thinButton.id, thinButton);

                // Assegna due coppie di attributi per indicare le coordinate dei bottoni quadrati adiacenti
                thinButton.setAttribute('data-row1', i);
                thinButton.setAttribute('data-col1', j);
                thinButton.setAttribute('data-row2', i);
                thinButton.setAttribute('data-col2', j + 1);

                // Assegna i gestori degli eventi al bottone sottile
                thinButton.addEventListener('mouseover', f.handleMouseOver);
                thinButton.addEventListener('mousedown', f.handleMouseDown);

                // Assegna i gestori degli eventi al thinButtonContainer, in modo tale che il bottone viene premuto anche se si preme il container
                thinButtonContainer.addEventListener('mousedown', f.handleMouseDownEvent);
                thinButtonContainer.addEventListener('mouseover', f.handleMouseOverEvent);
        
                // Aggiungi il bottone sottile al suo a
                thinButtonContainer.appendChild(thinButton);

                // Aggiungi il a al div della riga
                rowDiv.appendChild(thinButtonContainer);
            }
        }

        // Aggiungi la riga alla matrice
        matrix.push(row);

        // Aggiungi il div della riga al div della griglia
        buttonGrid.appendChild(rowDiv);
    
        // Crea un div per i bottoni sottili orizzontali se non è l'ultima riga
        if (i < rows - 1) {
            // Crea un div per i bottoni sottili orizzontali
            const horizontalThinButtonsDiv = document.createElement("div");
            horizontalThinButtonsDiv.classList.add("thin-row");
    
            // Crea i bottoni sottili orizzontali per una riga
            for (let j = 0; j < cols; j++) {
                //crea un a per il bottone sottile
                const thinButtonContainer = document.createElement("a");
                thinButtonContainer.classList.add("horizontal-button-container");
    
                // Crea un bottone sottile
                const thinButton = document.createElement("button");
                thinButton.classList.add("horizontal-thin-button");

                // Assegna un ID al bottone sottile in base alle coordinate dei bottoni quadrati adiacenti
                thinButton.id = 'h-border-' + i + '-' + j + '-' + (i + 1) + '-' + j;
                
                // Imposta il colore di default per il bottone sottile
                thinButton.style.backgroundColor = defaultThinbuttonsColor;

                // Aggiungi il bottone sottile alla mappa
                thinButtonsMap.set(thinButton.id, thinButton);

                // Assegna due coppie di attributi per indicare le coordinate dei bottoni quadrati adiacenti
                thinButton.setAttribute('data-row1', i);
                thinButton.setAttribute('data-col1', j);
                thinButton.setAttribute('data-row2', i + 1);
                thinButton.setAttribute('data-col2', j);

                // Assegna i gestori degli eventi al bottone sottile
                thinButton.addEventListener('mouseover', f.handleMouseOver);
                thinButton.addEventListener('mousedown', f.handleMouseDown);

                // Assegna i gestori degli eventi al thinButtonContainer in modo tale che il bottone viene premuto anche se si preme il container
                thinButtonContainer.addEventListener('mousedown', f.handleMouseDownEvent);
                thinButtonContainer.addEventListener('mouseover', f.handleMouseOverEvent);
                
    
                // Aggiungi il bottone sottile al suo a
                thinButtonContainer.appendChild(thinButton);

                // Aggiungi il a al div dei bottoni sottili orizzontali
                horizontalThinButtonsDiv.appendChild(thinButtonContainer);
            }
    
            // Aggiungi il div dei bottoni sottili orizzontali al div della griglia
            buttonGrid.appendChild(horizontalThinButtonsDiv);
        }
    }

    //crea la palette dei colori
    let colorButtonsArea = document.getElementById('colorButtonsArea');

    // Utilizza un Set per tenere traccia dei colori unici
    let uniqueColors = new Set();

    // Leggi il file CSV e crea un nuovo pulsante per ogni colore unico
    fetch('../../color-combinations.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n').slice(1);
            rows.forEach(row => {
                const cols = row.split(',');
                const color = cols[0].toLowerCase().trim();

                // Se il colore non è già nel Set, crea un nuovo pulsante per il colore e aggiungilo all'area dei pulsanti dei colori
                if (!uniqueColors.has(color)) {
                    uniqueColors.add(color);
                    let colorButton = document.createElement('button');
                    colorButton.classList.add('color-button');
                    colorButton.id = color + 'Button';
                    colorButton.style.backgroundColor = color;
                    colorButton.textContent = color.charAt(0).toUpperCase() + color.slice(1); // Capitalize the color name
                    colorButtonsArea.appendChild(colorButton);
                }
            });
        
        // Aggiungi un ascoltatore di eventi a ciascun pulsante di colore
        let colorButtons = document.getElementsByClassName('color-button');
        for (let i = 0; i < colorButtons.length; i++) {
            colorButtons[i].addEventListener('click', f.selectColor);
        }
    });
    
        
    // Imposta il flag quando il mouse viene premuto
    document.addEventListener('mousedown', f.handleMouseClick);
    
    // Aggiungi un gestore di eventi per il rilascio del clic
    document.addEventListener("mouseup", f.handleMouseUp);
    
    

    // Quando selezioni "Modalità di selezione"
    document.getElementById('selectButton').addEventListener('click', f.setSelectionMode);

    //Quando selezioni modalità di gioco
    document.getElementById('playButton').addEventListener('click', f.setPlayMode);
 
    // Aggiungi un ascoltatore di eventi al pulsante reset
    document.getElementById('resetAllButton').addEventListener('click', f.resetAll);

    // Aggiungi un ascoltatore di eventi al pulsante reset color
    document.getElementById('resetColorButton').addEventListener('click', f.resetColor);  
    
    // Aggiungi un ascoltatore di eventi al pulsante salva
    document.getElementById('saveConfigButton').addEventListener('click', f.saveThinButtonConfig);
    
    // Aggiungi un ascoltatore di eventi al pulsante carica
    document.getElementById('loadConfigButton').addEventListener('click', f.loadThinButtonConfig);

    // Aggiungi un event listener al bottone "Salva Configurazione" per salvare la matrice quando il bottone viene cliccato
    document.getElementById('saveColorConfig').addEventListener('click', f.saveMatrixAsJson);

    //aggiungi un event listener al bottone "scarica configurazione" per salvare la configurazione iniziale in un file json
    document.getElementById('downloadConfig').addEventListener('click',f.convertCsvToJsonAndDownload);
});


