function play (){
    hideElementById('home_screen')
    showElementById('play_ground')
    continueGame();
}

function continueGame (){
    const alphabet = getRendomAlphabet();
    const currentAlphabetScreen = document.getElementById('currentAlphabet');
    currentAlphabetScreen.innerText = alphabet;
}