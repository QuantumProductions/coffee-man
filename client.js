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
    var choices = this.game.choices;
    this.choicesContainer.innerHTML = "";
    for (var i = 0; i < choices.length; i++) {
        var choice = choices[i];
        var choiceDiv = document.createElement("div");
        var button = document.createElement("button");
        button.className = "btn";
        button.innerHTML = choice[0];
				button.addEventListener("click", this.clicked);
        button.client = this;
        button.id = "choice" + i;
				choiceDiv.appendChild(button);
        this.choicesContainer.appendChild(choiceDiv);
    }
	}

	clicked(event) {
		var target = event.srcElement || event.currentTarget || event.target;
    console.log(target.id); //this will log "choice0"
    var choiceNumber = target.id.replace('choice', '');
    target.client.game.move(choiceNumber);
    target.client.promptContainer.innerText = target.client.game.prompt;
    target.client.renderStory();
	}

	renderStory() {
		this.promptContainer.innerText = this.game.prompt;
		console.log("prompt" + this.game.page.prompt);
		this.installChoices();
	}

	// makeChoice() {
	// 	var choice = 0;//
	// 	this.game.move(choice);
	// 	this.renderStory();
	// }
}