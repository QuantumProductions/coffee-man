
"use strict";

class Game {
	constructor(options) {
		this.chapter = options["chapter"]; //0;
		console.log("chapter" + this.chapter);
		var client = options['client'];
		this.installStory(client);
		//this.loadPage(0); //happens in callback
	}

	installStory(client) {
		var that = this;
		var callback = function(response) {
			console.log("RESPONSE IS" + response);
			that.story = response;
			that.loadPage(0);
			client.renderStory();
		}
		new Story({'chapter' : this.chapter}, callback);
	}

	// resumeStory(options) {
	// 	//set index from options
	// }

	loadPage(pageNumber) {
		console.log("STORY IS" + this.story.length);
		this.page = this.story[pageNumber];
		console.log(this.page);
		console.log(this.story);
		this.prompt = this.page[0];
		this.choices = this.page[1];
		console.log("choices are" + this.page);
	}

	move(choice) {
		this.loadPage(choice);
	}

	// advanceChapter() {
	// 	this.chapter++;
	// 	if (this.chapter < this.story.length) {
	// 		loadPage();
	// 	} else {

	// 	}
	//}

}