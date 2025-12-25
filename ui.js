class Ui {
  constructor(game) {
    this.game = game;
    this.scoreBoard1 = document.getElementById("scoreBoard1");
    this.scoreBoard2 = document.getElementById("scoreBoard2");
    this.scoreBoard3 = document.getElementById("scoreBoard3");
    this.scoreBoard4 = document.getElementById("scoreBoard4");
    // game menu
    this.gameMenu = document.getElementById("gameMenu");
    // game over
    this.gameOverScreen = document.getElementById("gameOverScreen");
    // buttons
    this.startButton = document.getElementById("startButton");
    this.startButton.addEventListener("click", () => {
      this.game.start();
    });
    this.fullScreenButton = document.getElementById("fullScreenButton");
    this.fullScreenButton.addEventListener("click", () => {
      this.game.toggleFullScreen();
      this.game.sound.play(this.game.sound.button);
    });
    this.debugButton = document.getElementById("debugButton");
    this.debugButton.addEventListener("click", () => {
      this.game.debug = !this.game.debug;
       this.game.sound.play(this.game.sound.button);
    });
    //  controls
    this.player1Controls = document.getElementById("player1Controls");
    this.player2Controls = document.getElementById("player2Controls");
    this.player3Controls = document.getElementById("player3Controls");
    this.player4Controls = document.getElementById("player4Controls");
    // names
    this.player1Name = document.getElementById("player1Name");
    this.player2Name = document.getElementById("player2Name");
    this.player3Name = document.getElementById("player3Name");
    this.player4Name = document.getElementById("player4Name");
    //  characters
    this.player1Character = document.getElementById("player1Character");
    this.player2Character = document.getElementById("player2Character");
    this.player3Character = document.getElementById("player3Character");
    this.player4Character = document.getElementById("player4Character");
    // messages
    this.message1 = document.getElementById("message1");
    this.message2 = document.getElementById("message2");
  }
  update() {
    this.scoreBoard1.innerText = this.game.player1.name + ": " + this.game.player1.score;
    this.scoreBoard2.innerText = this.game.player2.name + ": " + this.game.player2.score;
    this.scoreBoard3.innerText = this.game.player3.name + ": " + this.game.player3.score;
    this.scoreBoard4.innerText = this.game.player4.name + ": " + this.game.player4.score;
  }
  triggerGameOver(winner) {
    this.game.gameOver = true;
    this.gameOverUi();
    if (winner) {
      this.message1.innerText = winner.name + " wins!";
      // this.message2.innerText = "Winning score " + winner.score;
      this.message2.innerText = "Get time " + this.game.formatTimer() + ' seconds!';
      for (let i = 0; i < this.game.numberOfParticles; i++) {
        const particle = this.game.getParticle();

        if (particle) {
          particle.start(Math.random() * this.game.width, this.game.height * 0.9, 'gold');
        }
      }
    } else {
      this.message1.innerText = "Welcome to the battle arena!";
      this.message2.innerText = "Choose your fighters!";
    }
  }
  gamePlayUi() {
    this.gameMenu.style.display = "none";
    this.startButton.innerText = "Restart";
    this.gameOverScreen.style.display = "none";
  }
  gameOverUi() {
    this.gameMenu.style.display = "block";
    this.startButton.innerText = "Start";
    this.gameOverScreen.style.display = "block";
  }
}
