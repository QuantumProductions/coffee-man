"use strict";

class Story {
	constructor(options, callback) {
		var path = "./story/" + options['chapter'] + ".json";
		var that = this;
		console.log("Path is: " + path);
		loadJSON(path, function(response) {
			callback(response);
		});
		//this.story = 
		//	;

	}
}