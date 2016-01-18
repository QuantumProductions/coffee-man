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
		//this.renderStory();
	}

	installGame() {
   var url = window.location.href;
	  var chapter = url.split("chapter=")[1];
	  console.log("chapter" + chapter);
	  this.game = new Game({"chapter" : chapter, "client" : this});
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
        button.id = "choice" + choice[1];
				choiceDiv.appendChild(button);
        this.choicesContainer.appendChild(choiceDiv);
    }

    if (choices.length == 0) {
    	var drankDiv = document.createElement("div");
    	drankDiv.id = "drank";
    	this.choicesContainer.appendChild(drankDiv);
    }
	}

	clicked(event) {
		var target = event.srcElement || event.currentTarget || event.target;
    console.log(target.id); //this will log "choice0"
    var choiceNumber = target.id.replace('choice', '');
    target.client.game.move(choiceNumber);
    //target.client.promptContainer.innerText = target.client.game.prompt;
    target.client.renderStory();
	}

	renderStory() {
		this.promptContainer.innerText = this.game.prompt;
		//console.log("prompt" + this.game.prompt);
		this.installChoices();
	}

	// makeChoice() {
	// 	var choice = 0;//
	// 	this.game.move(choice);
	// 	this.renderStory();
	// }
}