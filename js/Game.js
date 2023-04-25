class Game {
    constructor() {
      this.missed = 0;
      this.phrases = [
        new Phrase("Life is like a box of chocolates"),
        new Phrase("May the Force be with you"),
        new Phrase("There is no try only do or do not"),
        new Phrase("Not all who wander are lost"),
        new Phrase("with great power comes great responsibility")
      ];
      this.activePhrase = null;
    }
  
    startGame() {
      const overlay = document.getElementById("overlay");
      overlay.style.display = "none";
  
      this.activePhrase = this.getRandomPhrase();
      this.activePhrase.addPhraseToDisplay();
    }
  
    getRandomPhrase() {
      const randomIndex = Math.floor(Math.random() * this.phrases.length);
      return this.phrases[randomIndex];
    }
  
    handleInteraction(button) {
      const letter = button.textContent;
      button.disabled = true;
  
      if (this.activePhrase.checkLetter(letter)) {
        button.classList.add("chosen");
        this.activePhrase.showMatchedLetter(letter);
        if (this.checkForWin()) {
          this.gameOver(true);
        }
      } else {
        button.classList.add("wrong");
        this.removeLife();
      }
    }
  
    checkForWin() {
        const phraseLetters = this.activePhrase.phrase.split("");
        const matchedLetters = document.querySelectorAll('.show, .space');
        return phraseLetters.length === matchedLetters.length;
    }
  
    removeLife() {
      const hearts = document.querySelectorAll(".tries img");
      const heart = hearts[this.missed];
      heart.src = "images/lostHeart.png";
      this.missed += 1;
  
      if (this.missed === 5) {
        this.gameOver(false);
      }
    }
  
    gameOver(gameWon) {
      const overlay = document.getElementById("overlay");
      const gameOverMessage = document.getElementById("game-over-message");
      overlay.style.display = "";
      overlay.classList.remove("start", "win", "lose");
      if (gameWon) {
        gameOverMessage.textContent = "Congratulations, you won!";
        overlay.classList.add("win");
      } else {
        gameOverMessage.textContent = "Sorry, better luck next time!";
        overlay.classList.add("lose");
      }
  
      this.resetGameboard();
    }
  
    resetGameboard() {
      const phraseList = document.querySelector("#phrase ul");
      phraseList.innerHTML = "";
  
      const keys = document.querySelectorAll(".key");
      keys.forEach(key => {
        key.disabled = false;
        key.classList.remove("chosen", "wrong");
      });
  
      const hearts = document.querySelectorAll(".tries img");
      hearts.forEach(heart => {
        heart.src = "images/liveHeart.png";
      });
  
      this.missed = 0;
    }
  }