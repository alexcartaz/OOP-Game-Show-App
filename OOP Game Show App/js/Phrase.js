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

    addPhraseToDisplay(){
        let phraseChars = this.phrase.split('');
        let ulContainer = document.querySelector('#phrase');
        let ul = document.createElement('ul');
        phraseChars.map((char) => {
            let li = createLiCharNode(char);
            ul.appendChild(li);
        })

        //console.log(ul)
        ulContainer.innerHTML = '';
        ulContainer.appendChild(ul);

    }

    checkLetter(letter){
        if(this.phrase.toLowerCase().indexOf(letter)===-1) return false;
        return true;
    }

    showMatchedLetter(letter){
        let boardLetters = document.querySelectorAll('.letter');

        boardLetters.forEach((node) => {
            if(node.innerHTML.toLowerCase() === letter){
                node.classList.add('show');
                node.classList.remove('hide');
            }
        });

    }
} 