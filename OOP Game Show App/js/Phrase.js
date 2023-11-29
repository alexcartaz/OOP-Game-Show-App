/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

/* 
refernce segment for how HTML looks to generate board:

<div id="phrase" class="section">
    <ul>
        <li class="hide letter h">h</li>
        <li class="hide letter o">o</li>
        <li class="hide letter w">w</li>
        <li class="space"> </li>
        <li class="hide letter a">a</li>
        <li class="hide letter r">r</li>
        <li class="hide letter e">e</li>
        <li class="space"> </li>
        <li class="hide letter y">y</li>
        <li class="hide letter o">o</li>
        <li class="hide letter u">u</li>
    </ul>
</div>
*/

// dynamically creates li elements for the above HTML structure
function createLiCharNode(char){
    let li = document.createElement('li');
    li.innerHTML = char;
    if(char===' '){
        li.classList.add('space');
    }else{
        li.classList.add('hide');
        li.classList.add('letter');
        li.classList.add(char);
    }
    return li;
}

class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    // generates HTML to render board based on the randomly selected phrase
    addPhraseToDisplay(){

        // convert phrase to array of its component characters
        let phraseChars = this.phrase.split('');

        // grab board container
        let ul = document.querySelector('#phrase ul');

        // clear board
        ul.innerHTML = '';

        // create an element for each character and create list
        phraseChars.map((char) => {
            let li = createLiCharNode(char);
            ul.appendChild(li);
        })

    }

    // is letter in phrase
    checkLetter(letter){
        if(this.phrase.toLowerCase().indexOf(letter)===-1) return false;
        return true;
    }

    // update board styling
    showMatchedLetter(letter){

        let boardLetters = document.querySelectorAll('.letter');

        //map over each board element and change the styling of the passed letter
        boardLetters.forEach((node) => {
            if(node.innerHTML.toLowerCase() === letter){
                node.classList.add('show');
                node.classList.remove('hide');
            }
        });

    }
} 