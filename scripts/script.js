// Bron: https://codepen.io/miguelznunez/pen/GRmLxPQ, https://codepen.io/shooft/pen/VwJXNEg*/
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});


// Dit is de javascript voor de tab-shortcut, bron ChatGPT: voeg een shortcut toe op de n-toets, wanneer een gebruiker op N drukt, dan moet het id-theme veranderen naar de volgende: verander de radio button checked naar de radio button eronder:
// Functie om naar volgende radio button te gaan
function selectNextRadio() {
    const radios = document.querySelectorAll('input[name="theme"]');
    let selectedIndex = Array.from(radios).findIndex(radio => radio.checked);
    
    // Deselecteer de huidige geselecteerde radio button en selecteert de volgende
    radios[selectedIndex].checked = false;
    let nextIndex = (selectedIndex + 1) % radios.length;
    radios[nextIndex].checked = true;
}

// Listen voor de Tab Key event
document.addEventListener('keydown', function(event) {
    if (event.key === 'n' || event.key === 'N') {
        event.preventDefault(); // Voorkom dat default tab gedrag in de browser is ingesteld
        playMusic("../sound-effects/sound-effect-button.mp3");
        selectNextRadio(); // Roep de functie aan
    }
});

// Ophalen van de button 
const formButton = document.getElementById("theme-form")

// Functie maken voor het afspelen van het geluid --> vorig jaar gemaakt
function playMusic(audioFilePath) {
    const audio = new Audio(audioFilePath);
    audio.play();
}

// Event toevoegen aan de knop (linken met html)
formButton.addEventListener("click", function () {
    playMusic("sound-effects/sound-effect-button.mp3");
})

