"use strict";

class Client {
	installRendering() {
		this.promptContainer = document.createElement("prompt-container");
		this.choicesContainer = document.createElement("choices-container");
		var gameContainer = document.getElementById("game_container");
		gameContainer.appendChild(this.promptContainer);
		gameContainer.appendChild(this.choicesContainer);

		gameContainer.innerText = "Coffee Man";
	}

	constructor(options) {
		this.installRendering();
		this.installInput();
		this.installGame()
	}

	installGame() {

	}

	installInput() {
		
	}
}