function hideElementById(eleementId){
    const element = document.getElementById(eleementId)
    element.classList.add('hidden')
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function getRendomAlphabet (){
    const randomAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // get a random aplhabet from the array
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = randomAlphabets[index];
    console.log('alphabt to press : ' ,alphabet);

    // we have to return the value cause the user will need it
    return alphabet;

}

function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-amber-400')

}


// keyboard event
function keyboardHandler(keys){
    const playerPressedKey = keys.key;
    
    const currentAlphabetElement =  document.getElementById('currentAlphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    console.log('expected is ' , playerPressedKey,  expectedAlphabet);

    if(playerPressedKey === expectedAlphabet){
        console.log('you got a point');
    }
    else{
        console.log('you are wrong');
    }
}

// keypressed
document.addEventListener('keyup', keyboardHandler);