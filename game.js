"use strict";

class Game {
	constructor(options) {
		this.chapter = 0;
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
		this.prompt = this.page.prompt;
		this.choices = this.page.options;
	}

	move(choice) {
		this.prompt = this.page.options[choice][1];
		this.choices = [];
	}

	advanceChapter() {
		this.chapter++;
		if (this.chapter < this.story.length) {
			loadPage();
		} else {

		}
	}

}