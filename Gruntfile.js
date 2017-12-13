module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.initConfig({
        jshint: {
            all: ['*.js']
        },
	watch: {
            files: ['Gruntfile.js'],
            tasks: ['jshint']
    	}
    });
    grunt.registerTask('default', ['jshint']);
};