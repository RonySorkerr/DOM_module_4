function play (){
    hideElementById('home_screen')
    showElementById('play_ground')
    continueGame();
}

function continueGame (){
    const alphabet = getRendomAlphabet();
    const currentAlphabetScreen = document.getElementById('currentAlphabet');
    currentAlphabetScreen.innerText = alphabet;

    setBackgroundColor(alphabet);
}


// keyboard event
function keyboardHandler(keys) {
    const playerPressedKey = keys.key;

    const currentAlphabetElement = document.getElementById('currentAlphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    console.log('expected is ', playerPressedKey, expectedAlphabet);

    if (playerPressedKey === expectedAlphabet) {

        const currentScore = getTextElementById('currentScore');
        console.log('current score is ' , currentScore);





        // const scoreCard = document.getElementById('currentScore');
        // const currentScore = scoreCard.innerText;
        // const score = parseInt(currentScore);

        // console.log('score is', score);

        // const newScore = score + 1;
        // scoreCard.innerText = newScore;



        // removeBackgroundColor(playerPressedKey);
        // continueGame();
        // console.log('right key pressed');
    }
    else {
        // const remainingChances = document.getElementById('remainingLife');
        // const remainingChance = remainingChances.innerText;
        // const chances = parseInt(remainingChance);

        // const newChance = chances - 1;

        // remainingChances.innerText = newChance;
    }
}

// keypressed
document.addEventListener('keyup', keyboardHandler);