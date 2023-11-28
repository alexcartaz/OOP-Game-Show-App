/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//init all possible phrases
let phrases = [
    "eat fries",
    "go dancing",
    "pull my finger",
    "back to the future",
    "dammit Spock"
]

//instantiate a new instance of the Game class to initiate the game's functionality.
let game = new Game(phrases);

//"Start Game" button listener
document.querySelector("#btn__reset").addEventListener('click', (e) =>{
    game = new Game(phrases);
    game.startGame();
});

//listen for key guess inputs
document.querySelector("#qwerty").addEventListener('click', (e) => {
    if(e.target.classList.contains('key')){
        game.handleInteraction(e);
    };
});