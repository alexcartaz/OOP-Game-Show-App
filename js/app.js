/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// init all possible phrases
let phrases = [
    "the dog ate my homework",
    "life goes on",
    "pull my finger",
    "back to the future",
    "dammit Spock"
]

// instantiate a new instance of the Game class to initiate the game's functionality.
let game;

// "Start Game" button listener
document.querySelector("#btn__reset").addEventListener('click', (e) =>{
    game = new Game(phrases);
    game.startGame();
});

// listen for key guess inputs

// clicks
document.querySelector("#qwerty").addEventListener('click', (e) => {
    if(e.target.classList.contains('key')){
        let char = e.target.innerHTML;
        let button = e.target;
        game.handleInteraction(char, button);
    };
});

// keyboard
document.body.addEventListener('keyup', (e) => {
    // if user pressed a key and is a letter
    if(/[a-zA-Z]/.test(e.key)){
        let char = e.key.toLowerCase();
        let button = document.querySelector(`#${char}Key`);
        game.handleInteraction(char, button);
    };
});
