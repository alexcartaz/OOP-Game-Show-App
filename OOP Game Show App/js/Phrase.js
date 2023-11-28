/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

/* 
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

function createLiLetterNode(letter){
    let li = document.createElement('li');
    /*
    li.innerHTML = letter;
    if('letter'===' '){
        li.classList.add('space');
    }else{
        li.classList.add('hide');
        li.classList.add('letter');
        li.classList.add(letter);
    }
    */
    return li;
}

class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    addPhraseToDisplay(){
        let phraseChars = this.phrase.split('');
        let ul = document.querySelector('#phrase').firstChild;
        let li = createLiLetterNode(phraseChars[0]);
        console.log(ul);
        console.log(li);
        ul.appendChild(li);
        phraseChars.shift();
        phraseChars.map((l) => {
            let children = ul.children;
            let referenceNode = children[children.length-1];
            referenceNode.parentNode.insertBefore(createLiLetterNode(l), referenceNode.nextSibling);
        })

    }

    checkLetter(letter){
        if(this.phrase.indexOf(letter)===-1) return false;
        return true;
    }

    showMatchedLetter(letter){
        let boardLetters = document.querySelectorAll('.letter');
        boardLetters.map((l) => {
            if(l.innerHTML === letter){
                l.classList.add('show');
                l.classList.remove('hide');
            }
        });

    }
} 