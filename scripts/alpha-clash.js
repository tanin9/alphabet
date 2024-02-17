function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;

    // console.log('player pressed:' , playerPressed );
    if ( playerPressed === 'Escape')
    {
        gameOver();
    }
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed,expectedAlphabet);


if (playerPressed === expectedAlphabet)
{
    console.log('You get a point!');

    const currentScore = getElementValueById('current-score');
    // console.log(currentScore);
    const updatedScore = currentScore + 1;
    setElementValueById('current-score',updatedScore);

    removeBgColorById(expectedAlphabet);
    continueGame();
}
else
{
    console.log('You loss a life :(');
    const currentLife = getElementValueById('current-life');
    // console.log(currentLife);
    const updatedLife = currentLife - 1;
    setElementValueById('current-life',updatedLife);
    if (updatedLife === 0)
    {
        gameOver();
    }
    

}
}

document.addEventListener('keyup',handleKeyboardButtonPress)

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setElementValueById(elementId,value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId) 
{

    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
    
}

function hideElementById(elementId) {
    const element =document.getElementById(elementId);
    element.classList.add('hidden');
    
}
function showElementById(elementId) {
    const element =document.getElementById(elementId);
    element.classList.remove('hidden');
}





function getARandomAlphabet() {
        const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
        const alphabets = alphabetString.split('');
        const randomNumber = Math.random()*25;
        const index = Math.round(randomNumber);
        const alphabet = alphabets[index];
        return alphabet;


}

function setBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
    
}
function removeBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
    
}


// function getARandomAlphabet() {
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     // console.log(alphabets);


//     const randomNumber = Math.random()*25;
//     const index = Math.round(randomNumber);
//     // console.log(index);
//     const alphabet = alphabets[index];
//     // console.log(index,alphabet);
//     return alphabet;
// }