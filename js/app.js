// Your on step 9 (Almost done)

let game;
const startButton = document.getElementById('btn__reset');

startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        game.handleInteraction(key);
    });
});