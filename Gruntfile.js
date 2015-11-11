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
          "dev/F/css/main-unprefixed.css": "dev/_src/_scss/main.scss",
          "dev/_includes/critical.css": "dev/_src/_scss/critical.scss"
        }
      }
    },

    autoprefixer: {
      global: {
        src: "dev/F/css/main-unprefixed.css",
        dest: "dev/F/css/main.css"
      },
      single_file:{
        src: "dev/_includes/critical.css",
        dest: "dev/_includes/critical.css"
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      my_target: {
        files: {
          'dev/F/js/global.js': ['dev/_src/_js/global.js'],
          'dev/F/js/jQuery_fitVids.js': ['dev/_src/_js/jquery.js','dev/_src/_js/fitVids.js']
        }
      }
    },

    imagemin: {
      dynamic: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'dev/_src/_img/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'dev/F/img'                  // Destination path prefix
        }]
      }
    },

    shell: {
       jekyllServe: {
        command: [
                'cd dev',
                'jekyll serve --baseurl=',
            ].join('&&')
       },
      jekyllBuild: {

         command: [
                'cd dev',
                'jekyll build --config _config.yml',
            ].join('&&')
      }
    },
    watch: {
      options: {
        livereload: true
      },
      site: {
        files: ["dev/_layouts/**/*.html",'dev/_posts/*.markdown'],
        tasks: ["shell:jekyllBuild"],
        livereload: true
      },
      css: {
        files: ["dev/_src/_scss/**/*.scss",],
        tasks: ["sass", "autoprefixer", "shell:jekyllBuild"]
      },
      svg: {
        files: ["dev/_src/_svg/*.svg"],
        tasks: ["svgstore", "shell:jekyllBuild"]
      },
      js: {
        files: ["dev/_src/_js/*.js"],
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
          "dev/_includes/svg-defs.svg": ["dev/_src/_svg/*.svg"]
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
