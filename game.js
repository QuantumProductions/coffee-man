"use strict";

class Game {

	constructor(options) {
		this.canvas = options['canvas'];
		this.installStory();
		this.loadPage();
	}

	installStory() {
		this.story = [
			{'prompt' : 'starting prompt',
				'options': [['path 1', 'path 1 response'], ['path 2', 'path 2 response']]
			},
			{'prompt' : 'second prompt',
				'options': [['path 1', 'path 1 response'], ['path 2', 'path 2 response']]
			},

		]
	}

	// resumeStory(options) {
	// 	//set index from options
	// }

	loadPage() {
		this.page = this.story[this.chapter];
	}

	move(choice) {
		this.prompt = this.options[choice][1];
		this.choices = [];
		//server will send new prompt
	}

	advanceChapter() {
		this.chapter++;
		if (this.chapter < this.story.length) {
			loadPage();
		} else {

		}
	}

}