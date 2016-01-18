
"use strict";

class Game {
	constructor(options) {
		this.chapter = options["chapter"]; //0;
		console.log("chapter" + this.chapter);
		this.installStory();
		this.loadPage();
	}

	installStory() {
		this.story = new Story().story; //load from options?
	}

	// resumeStory(options) {
	// 	//set index from options
	// }

	loadPage() {
		this.page = this.story[this.chapter];
		console.log(this.chapter);
		console.log(this.story);
		this.prompt = this.page[0];
		this.choices = this.page[1];
	}

	move(choice) {
		this.chapter = choice;
		this.loadPage();
	}

	// advanceChapter() {
	// 	this.chapter++;
	// 	if (this.chapter < this.story.length) {
	// 		loadPage();
	// 	} else {

	// 	}
	//}

}