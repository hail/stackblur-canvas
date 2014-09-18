module.exports = function(grunt) {
  appDir = '.';

  demoBower = [
    'underscore/underscore.js',
    'backbone/backbone.js',
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
    }

    // uglify: {
    //
    // },

    // watch: {
    //
    // },
  });

  matchdep = require('matchdep');
  matchdep.filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('buildDemo', ['bowercopy:demo', 'copy:demo']);

};
