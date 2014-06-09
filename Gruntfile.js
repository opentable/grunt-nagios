module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    mochaTest:{
      options: {
        reporter: 'spec'
      },
      tests:{
        src: ['test/tests.js']
      }
    },
    nagios: {
      'test-command': { 
        options: {
          user: 'someone',
          password: 'somwhere',
          server: '127.0.0.1:8888',
          grouptype: 'host',
          group: 'ln-01',
          command: 29,
          nohttps: true
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.registerTask('test', ['jshint', 'start-server', 'nagios:test-command', 'mochaTest']);
  grunt.registerTask('default', ['test']);
  grunt.loadTasks('tasks');
  grunt.loadTasks('test/tasks');
};