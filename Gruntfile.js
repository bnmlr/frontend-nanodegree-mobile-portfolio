module.exports = function(grunt) {
	//load-grunt-tasks plugin looks at node modules folder
	//automatically loads grunt tasks based on dependences
	//so you don't have to grunt.load.task for each task
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		//concat task concatenates all js files into one. 
		//don't actually need for this project
		concat:{
			dist: {
				src: 'js/*.js'
				dest: 'dist/js/app.js'
			}
		}

	});

	grunt.registerTask('default', [
			'concat'
		]);
}
