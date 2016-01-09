class CoffeeGame {

	constructor(options) {
		this.canvas = options['canvas'];
		this.installStory();
		this.resumeStory(options);
		this.prompt = "";
		this.choices = ['',''];
		this.
	}

	installStory() {
		this.story = [
			{'prompt' : 'starting prompt',
				'options': [['path 1', 'path 1 response'], ['path 2', 'path 2 response']
			}

		]
	}

	resumeStory(options) {
		//set index from options
	}

	// loadPrompt() {
	// 	this.prompt = this.story[this.chapter]['prompt'];
	// }

	move(choice) {
		this.prompt = this.options[choice][1];
		this.choices = [];
		//server will send new prompt
	}

}