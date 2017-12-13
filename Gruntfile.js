module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.initConfig({
        jshint: {
            all: ['*.js']
        },
	watch: {
            files: ['Gruntfile.js'],
            tasks: ['jshint']
    	},
	release: {
    	    options: {
         	github: {
        		repo: 'doralteres/node-helloworld',
        		usernameVar: 'GITHUB_USERNAME', //ENVIRONMENT VARIABLE that contains GitHub username
        		passwordVar: 'GITHUB_PASSWORD' //ENVIRONMENT VARIABLE that contains GitHub password
      		}
    	    }
  }
    });
    grunt.registerTask('default', ['jshint']);
    grunt.loadNpmTasks('grunt-release');
};