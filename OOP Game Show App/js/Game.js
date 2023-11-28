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
        //return a random phrase
        return this.phrases[getRndInteger(0,this.phrases.length)];
    }

    startGame(){
        //hides the start screen overlay
        document.querySelector('#overlay').style.display = 'none';
        
        //sets active prhase to a new random phrase and adds it to display
        this.activePhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase.addPhraseToDisplay();
    }

    gameOver(outcome){
        //this method displays the original start screen overlay
        document.querySelector('.start').style.display = 'block';
        
        let outcomeMessage = {
            'win': 'YOU WON!',
            'lose': 'Sorry, you lost.'
        }
        //and depending on the outcome of the game, updates the overlay h1 element with a 
        //friendly win or loss message, and replaces the overlay’s start CSS class with 
        //either the win or lose CSS class.
        let outcomeOverlay = document.querySelector('#game-over-message');
        outcomeOverlay.innerHTML = outcomeMessage[outcome];
        outcomeOverlay.classList.add(outcome);

        //reset hearts
        let hearts = document.querySelectorAll('.tries');
        hearts.forEach((li) => {
            li.firstChild.src='images/liveHeart.png';
        });

        //reset keyboard
        let keys = document.querySelectorAll('.key');
        keys.forEach((button) => {
            button.classList.remove('chosen');
            button.classList.remove('wrong');
            button.removeAttribute("disabled");
        });

    }

    removeLife(){
        //increments the missed property
        this.missed++;

        //this method removes a life from the scoreboard, by replacing one of the 
        //liveHeart.png images with a lostHeart.png image (found in the images folder)

        //grab array of li elements containing <img> of hearts
        let hearts = document.querySelectorAll('.tries');
        //select the index of the heart to change image of (this approach starts on the right and works its way left)
        let i = hearts.length-this.missed;
        //change full heart img to lost heart img
        hearts[i].firstChild.src='images/lostHeart.png';

        //If the player has five missed guesses (i.e they're out of lives), then end the game by calling the gameOver() method.
        if(this.missed === 5){
            this.gameOver('lose');
        }
    }

    handleInteraction(e){
        //disable the selected letter's onscreen keyboard button
        e.target.setAttribute("disabled", true);

        //if the phrase does NOT include the guessed letter...
        if(this.activePhrase.checkLetter(e.target.innerHTML)){
            //add the chosen CSS class to the selected letter's keybpard button
            e.target.classList.add('chosen');
            this.activePhrase.showMatchedLetter(e.target.innerHTML);
            if(this.checkForWin()){
                this.gameOver('win');
            }
        }else{
            e.target.classList.add('wrong');
            this.removeLife();
        }

        //If the phrase includes the guessed letter, add the chosen CSS class to the 
        //selected letter's keyboard button, call the showMatchedLetter() method on 
        //the phrase, and then call the checkForWin() method. If the player has won 
        //the game, also call the gameOver() method.
        
    }



    checkForWin(){
        //this method checks to see if the player has revealed all of the letters in the active phrase.
        let boardLetters = document.querySelectorAll('.letter');
        let didWin = true;
        boardLetters.forEach((node) => {
            if(node.classList.contains('hide')) didWin = false;
        });
        return didWin;
    }


} 