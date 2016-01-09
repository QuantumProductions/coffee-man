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
		this.installGame();
		this.renderStory();
	}

	installGame() {
		this.game = new Game();
	}

	installInput() {

	}

	installChoices() {
		var choices = this.game.page.options;
		for (var i = 0; i < choices.length; i++) {
			var choice = choices[i];
			var choiceDiv = document.createElement("choice" + i);
			//choiceDiv.innerText = choice[0];
			choiceDiv.innerHTML= "<p>" + choice[0];
			this.choicesContainer.appendChild(choiceDiv);
		}

	}

	renderStory() {
		this.promptContainer.innerText = this.game.page.prompt;
		this.installChoices();
	}

	makeChoice() {
		var choice = 0;//
		this.game.move(choice);
		this.renderStory();
	}
}