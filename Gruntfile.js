  "use strict";

module.exports = function(grunt) {


  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    sass: {
      global: {
        options: {
          style: "compressed",
          banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        files: {
          "public/css/main-unprefixed.css": "_src/_scss/main.scss",
          "_includes/critical.css": "_src/_scss/critical.scss"
        }
      }
    },

    autoprefixer: {
      global: {
        src: "public/css/main-unprefixed.css",
        dest: "public/css/main.css"
      },
      single_file:{
        src: "_includes/critical.css",
        dest: "_includes/critical.css"
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      my_target: {
        files: {
          'public/js/global.js': ['_src/_js/global.js'],
          'public/js/jQuery_fitVids.js': ['_src/_js/jquery.js','_src/_js/fitVids.js']
        }
      }
    },

    imagemin: {
      dynamic: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: '_src/_img/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'public/img'                  // Destination path prefix
        }]
      }
    },

    shell: {
       jekyllServe: {
        command: [
                'jekyll serve --baseurl=',
            ].join('&&')
       },
      jekyllBuild: {

         command: [
                'jekyll build --config _config.yml',
            ].join('&&')
      }
    },
    watch: {
      options: {
        livereload: true
      },
      site: {
        files: ["_layouts/**/*.html",'_posts/*.markdown'],
        tasks: ["shell:jekyllBuild"],
        livereload: true
      },
      css: {
        files: ["_src/_scss/**/*.scss",],
        tasks: ["sass", "autoprefixer", "shell:jekyllBuild"]
      },
      svg: {
        files: ["_src/_svg/*.svg"],
        tasks: ["svgstore", "shell:jekyllBuild"]
      },
      js: {
        files: ["_src/_js/*.js"],
        tasks: ["uglify", "shell:jekyllBuild"]
      }
    },

    svgstore: {
      options: {
        prefix : "shape-",
        cleanup: false,
        svg: {
          style: "display: none;"
        }
      },
      default: {
        files: {
          "_includes/svg-defs.svg": ["_src/_svg/*.svg"]
        }
      }
    }

  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask("serve", ["shell:jekyllServe"]);
  grunt.registerTask("img", ["imagemin"]);
  grunt.registerTask("build", ["sass", "autoprefixer","uglify", "svgstore","shell:jekyllBuild"]);
  grunt.registerTask("default", ["sass", "autoprefixer","uglify", "svgstore", "shell:jekyllBuild","watch"]);


};
