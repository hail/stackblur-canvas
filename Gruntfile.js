module.exports = function(grunt) {
  appDir = '.';

  demoBower = [
    'underscore/underscore.js',
    'backbone/backbone.js',
    'jquery/dist/jquery.js'
  ];

  demoJS = [
    'stackblur.js'
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    appDir: appDir,

    bowercopy: {
      options: {
        clean: false
      },

      demo: {
        options: {
          destPrefix: 'demo/javascript'
        },
        src: demoBower
      }
    },

    copy: {
      demo: {
        src: demoJS,
        dest: 'demo/javascript/'
      }
    },

    watch: {
      demo: {
        files: demoJS,
        options: {
          livereload: true
        },
        tasks: ['buildDemo']
      }
    }

    // uglify: {
    //
    // }

  });

  matchdep = require('matchdep');
  matchdep.filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('buildDemo', ['bowercopy:demo', 'copy:demo']);

  grunt.registerTask('dev', ['buildDemo', 'watch']);

};
