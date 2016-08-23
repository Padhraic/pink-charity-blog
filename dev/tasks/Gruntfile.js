/* Generated for pink-charity-blog */
module.exports = function (grunt) {
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  // 1. All configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //watch
    watch: {
      css: {
        files: '../src/css/**/*.css',
        tasks: ['copy:css'],
        options: {
          livereload: true,
        },
      },
      js: {
        files: '../src/js/**/*.js',
        tasks: ['copy:js'],
        options: {
          livereload: true,
        },
      },
      php: {
        files: '../../**/*.php',
        options: {
          livereload: true,
        },
      },
      images: {
        files: '../src/images/**/*.{png,jpg,gif,svg}',
        tasks: ['copy:images'],
        options: {
          livereload: true,
        },
      },
      fonts: {
        files: '../src/fonts/**/*',
        tasks: ['copy:fonts'],
        options: {
          livereload: true,
        },
      },
    },
    // end watch

    // ftp deploy
    'ftp-deploy': {
      build: {
        auth: {
          host: 'ftp1.reg365.net',
          port: 21,
          authKey: 'key1'
        },
        src: '../../production',
        dest: '/web/wp-content/themes/pink-charity-blog',
        exclusions: ['**/production/**', '**/dev/**', '**/.git/**', '**/.gitignore/**']
      }
    },
    // end ftp deploy

    
    //auto prefixer
    autoprefixer: {
      options: {
        browsers: ['last 8 version', 'ie 8', 'ie 7']
      },
      // just prefix the specified file
      single_file: {
        options: {
          // Target-specific options go here.
        },
        src: '../../static/css/style.css',
        dest: '../../static/css/style.css'
      }
    },
    //end auto prefixer
    //css min
    cssmin: {
      minify: {
        expand: true,
        cwd: '../../static/css',
        src: ['*.css', '!*.min.css'],
        dest: '../../static/css',
        ext: '.css',
        report: 'gzip'
      }
    },
    // end ccs min
     
    //notify
    notify: {
      done: {
        options: {
          title: 'Done!', // optional
          message: 'Whatever you were doing is done!', //required
        }
      },
      distStart: {
        options: {
          title: ' Prepping for distribution!', // optional
          message: 'Get ready for the awesome...', //required
        }
      },
      distDone: {
        options: {
          title: "All packaged up!", // optional
          message: "pink-charity-blog is ready to be distributed ", //needed escaping!
        }
      },
      sassDone: {
        options: {
          title: ' Ta-da!!!', // optional
          message: 'Sass has compiled successfully ', //required
        }
      },
      initStart: {
        options: {
          title: 'Initializing project', // optional
          message: '...', //required
        }
      },
      initDone: {
        options: {
          title: 'Initialization done!', // optional
          message: 'Run : "grunt watch" and get to work!', //required
        }
      },
    },
    //endnotify
    //Bower copy
    bowercopy: {
      libs: {
        options: {
            destPrefix: '../../static/js'
        },
        files: {
            'modernizr.js': 'modernizr/modernizr.js',
            'jquery.js': 'jquery/jquery.js',
        }
      }
    },
    //end Bower copy
    //copy
    copy: {
      css: {
        files: [
          // includes files within path
          {expand: true, cwd: '../src/css', src: ['*.css','*.css.map'], dest: '../../static/css', filter: 'isFile'},
        ]
      },
      js: {
        files: [
          // includes files within path
          {expand: true, cwd: '../src/js', src: ['*.js'], dest: '../../static/js', filter: 'isFile'},
        ]
      },
      images: {
        files: [
          // includes files within path
          {expand: true, cwd: '../src/images', src: ['**/*.{png,jpg,gif,svg}'], dest: '../../static/images', filter: 'isFile'},
        ]
      },
      fonts: {
        files: [
          // includes files within path
          {expand: true, cwd: '../src/fonts', src: ['**/*'], dest: '../../static/fonts', filter: 'isFile'},
        ]
      },
      production:{
        files:[
          //include all files except dev and production
          {expand: true, cwd: '../..', src:['**/*','!**/production/**','!**/dev/**','!**/.git/**','!**/.gitignore'], dest: '../../production'}
        ]
      },
      macserver:{
        files:[
          //include all files except dev and production
          {expand: true, cwd: '../..', src:['**/*','!**/production/**','!**/dev/**'], dest: '../../../../../wwwroot/lovelilly/wp-content/themes/pink-charity-blog'}
        ]
      }
    },
    //end copy


    //Image min
    imagemin: {                         
      dynamic: {                         
        files: [{
          expand: true,                  
          src: ['../../static/images/**/*.{png,jpg,gif}'],
          dest: '../../static/images'
        }]
      }
    },
    //end image min

    // make a zipfile
    compress: {
      production: {
        options: {
          archive: '../../production/pinkcharityblog.zip'
        },
        files: [
          { src: ['../../**/*',  '!../../dev/**', '!../../production/**'] },
        ]
      }
    }
    // end make a zipfile
    
  }); //end grunt package configs
  
  //Asset pipelines
  grunt.registerTask('prepJS',     [ 'copy:js' ]);
  grunt.registerTask('prepStyles', [ 'copy:css', 'cssmin' ]);
  grunt.registerTask('prepImages', [ 'copy:images', 'imagemin:dynamic' ]);
  grunt.registerTask('prepFonts',  [ 'copy:fonts' ]);

  //RUN ON START
  grunt.registerTask('init',       ['notify:initStart', 'bowercopy', 'copy:js', 'copy:images', 'copy:css','notify:initDone']);

  //RUN FOR PRODUCTION 
  grunt.registerTask('prod',       ['notify:distStart', 'bowercopy', 'prepJS', 'prepImages', 'prepStyles', 'prepFonts'/*, 'compress:production'*/, 'copy:production', 'copy:macserver','ftp-deploy:build', 'notify:distDone']);
  
  //DEFAULT
  grunt.registerTask('default', []);
};
