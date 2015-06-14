'use strict';

module.exports = function(grunt) {
  // Load Tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test'    );

  // Task Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      dev: {
        src: ['Gruntfile.js',
              'routes/**/*.js',
              'test/**/*.js',
              '*.js'
             ]
      },
      options: {
        // Base Options
        eqeqeq:  true,
        globals: {},
        maxerr:  20,
        // Environments
        node:    true,
        mocha:   true
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter:         'spec',
          captureFile:       false,
          quiet:             false,
          clearRequireCache: false
        },
        src: ['test/*_test.js']
      }
    }
  });

  // Registered Tasks
  grunt.registerTask('test',    ['jshint:dev', 'mochaTest']);
  grunt.registerTask('default', ['test'                   ]);
};
