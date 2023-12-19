/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

class Game {
    constructor(phrases) {
        this.missed = 0;
        this.phrases = phrases;
        this.activePhrase = null;
    }

    getRandomPhrase(){
        // return a random phrase
        return this.phrases[getRndInteger(0,this.phrases.length)];
    }

    startGame(){
        // hides the start screen overlay
        document.querySelector('#overlay').style.display = 'none';
        
        // sets active prhase to a new random phrase and adds it to display
        this.activePhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase.addPhraseToDisplay();
    }

    gameOver(outcome){
        
        // this method displays the original start screen overlay
        document.querySelector('.start').style.display = 'block';
        
        // set W/L outcome messages
        let outcomeMessage = {
            'win': 'YOU WON!',
            'lose': 'Sorry, you lost.'
        }

        // display outcome messages
        let outcomeOverlay = document.querySelector('#game-over-message');
        outcomeOverlay.innerHTML = outcomeMessage[outcome];
        outcomeOverlay.classList.add(outcome);

        // reset hearts
        let hearts = document.querySelectorAll('.tries');
        hearts.forEach((li) => {
            li.firstChild.src='images/liveHeart.png';
        });

        // reset keyboard
        let keys = document.querySelectorAll('.key');
        keys.forEach((button) => {
            button.classList.remove('chosen');
            button.classList.remove('wrong');
            button.removeAttribute("disabled");
        });

    }

    removeLife(){
        
        // increments the missed property
        this.missed++;

        // this method removes a life from the scoreboard, by replacing one of the 
        // liveHeart.png images with a lostHeart.png image (found in the images folder)

        // grab array of li elements containing <img> of hearts
        let hearts = document.querySelectorAll('.tries');
        let i = hearts.length-this.missed;
        hearts[i].firstChild.src='images/lostHeart.png';

        // If the player has five missed guesses (i.e they're out of lives), then end the game by calling the gameOver() method.
        if(this.missed === 5){
            this.gameOver('lose');
        }
    }

    handleInteraction(char, button){
        // this method is called whenever the user makes a guess (is this letter in the prhase?)

        // disable the selected letter's onscreen keyboard button
        button.setAttribute("disabled", true);

        // if the phrase does include the guessed letter...
        if(this.activePhrase.checkLetter(char)){
            
            // apply styling
            button.classList.add('chosen');
            
            // update board
            this.activePhrase.showMatchedLetter(char);
            
            // check win condition
            if(this.checkForWin()){
                this.gameOver('win');
            }

        }else{
            // if the phrase does NOT include the guessed letter...

            // apply styling
            button.classList.add('wrong');

            // update life total
            this.removeLife();
        }

    }



    checkForWin(){
        // this method checks to see if the player has revealed all of the letters in the active phrase.
        
        let boardLetters = document.querySelectorAll('.letter');
        let didWin = true;
        
        // if all letters on the board are revealed, the user won
        // eg if even a single letter is hidden, the user did not yet win
        boardLetters.forEach((node) => {
            if(node.classList.contains('hide')) didWin = false;
        });
        return didWin;
    }


} 