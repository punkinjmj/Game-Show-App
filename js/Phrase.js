class Phrase {
   constructor(phrase) {
    this.phrase = phrase.toLowerCase();
   } 

   addPhraseToDisplay() {
    const phraseContainer = document.querySelector('#phrase ul');
    phraseContainer.innerHTML = '';
    for (const char of this.phrase) {
      const li = document.createElement('li');
      if (char === ' ') {
        li.className = 'space';
        li.textContent = ' ';
      } else {
        li.className = `hide letter ${char}`;
        li.textContent = char;
      }
      phraseContainer.appendChild(li);
    }
  }

    checkLetter(letter) {
      return this.phrase.includes(letter);
    }


    showMatchedLetter(letter) {
      const matchedLetters = document.querySelectorAll(`.${letter}`);
      matchedLetters.forEach(match => {
        match.classList.remove('hide');
        match.classList.add('show');
      });
    }
  }