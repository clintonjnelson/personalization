'use strict';

module.exports = function(grunt) {
  // Load Tasks
  grunt.loadNpmTasks('grunt-contrib-clean' );
  grunt.loadNpmTasks('grunt-contrib-copy'  );
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test'    );
  grunt.loadNpmTasks('grunt-webpack'       );

  // Task Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      src: ['build/']
    },
    copy: {
      html: {
        cwd:     'app/',
        expand:  true,
        flatten: false,
        src:     ['**/*.html',
                  '**/*.gif',
                  '**/*.css'
                 ],
        dest:    'build/',
        filter:  'isFile'
      }
    },
    jshint: {
      dev: {
        src: ['Gruntfile.js',
              'app/**/*.js',
              'models/**/*.js',
              'routes/**/*.js',
              'test/**/*.js',
              '*.js'
             ]
      },
      options: {
        // Base Options
        eqeqeq:  true,
        globals: {
          angular: true
        },
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
    },
    webpack: {
      client: {
        entry:  __dirname + '/app/js/client.js',
        output: {
          path: 'build/',
          file: 'bundle.js'
        },
        loaders: [
          { test:   /\.css$/,
            loader: "style-loader!css-loader" }
        ],
        stats: {
          colors: true
        },
        failOnError: false,
        watch:       true,
        keepalive:   true
      },
    }
  });

  // Registered Tasks
  grunt.registerTask('build:dev', ['copy:html', 'webpack:client']);
  grunt.registerTask('test',      ['jshint:dev', 'mochaTest'    ]);
  grunt.registerTask('build',     ['build:dev'                  ]);
  grunt.registerTask('default',   ['test', 'build'              ]);
};
