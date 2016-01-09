"use strict";

class Client {
	installRendering() {
		this.promptContainer = document.createElement("prompt-container");
		this.choicesContainer = document.createElement("choices-container");
		var gameContainer = document.getElementById("game_container");
		gameContainer.appendChild(this.promptContainer);
		gameContainer.appendChild(this.choicesContainer);
	}

	constructor(options) {
		this.installRendering();
		this.installInput();
		this.installGame()
	}

	installGame() {
		this.game = new Game();
		this.promptContainer.innerText = this.game.page.prompt;
		console.log(this.game.page.prompt);
	}

	installInput() {

	}
}