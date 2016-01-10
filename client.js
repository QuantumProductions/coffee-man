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
        var choiceDiv = document.createElement("div");
        choiceDiv.id = "choice" + i;
        choiceDiv.innerText = choice[0];
        choiceDiv.addEventListener("click", this.clicked);
        this.choicesContainer.appendChild(choiceDiv);
    }
	}

	clicked(event) {
		var target = event.srcElement || event.currentTarget || event.target;
    console.log(target.id); //this will log "choice0"
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