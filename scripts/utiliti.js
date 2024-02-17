// function play() {
//     // console.log("play start now!");
//     const homeSection =document.getElementById('home-scree');
//     homeSection.classList.add('hidden');
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
    
// }


// if (playerPressed === expectedAlphabet)
// {
//     console.log('You get a point!');

    
//     const currentScoreElement = document.getElementById('current-score');
//     const currentScoreText =currentScoreElement.innerText;
//     // console.log(currentScoreText);
//     const currentScore = parseInt(currentScoreText);
//     // console.log(currentScore);
//     const newScore = currentScore + 1;
//     currentScoreElement.innerText = newScore;

//     // console.log('You pressed expected Alphabet',expectedAlphabet);
//     removeBgColorById(expectedAlphabet);
//     continueGame();
// }
// else
// {
//     console.log('You loss a life :(');
//     const currentLifeElement = document.getElementById('current-life');
//     const currentLifeText =currentLifeElement.innerText;
//     // console.log(currentScoreText);
//     const currentLife = parseInt(currentLifeText);
//     // console.log(currentScore);
//     const newLife = currentLife - 1;
//     currentLifeElement.innerText = newLife;
// }
function continueGame() {
    const alphabet =getARandomAlphabet();
    // console.log('your alphabet',alphabet);
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    setBgColorById(alphabet);

    
}



function play() {
    hideElementById('home-scree');
    hideElementById('score');
    showElementById('play-ground');
    setElementValueById('current-life',5); 
    setElementValueById('current-score',0);
    continueGame();
    setBgColorById();

    
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('score');
    const lastScore = getElementValueById('current-score');
    // console.log(lastScore);
    setElementValueById('game-score',lastScore);

    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBgColorById(currentAlphabet); 


    
}