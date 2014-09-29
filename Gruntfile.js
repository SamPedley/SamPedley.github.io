module.exports = function(grunt) {

  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    sass: {
      global: {
        options: {
          style: "compressed"
        },
        files: {
          "dev/F/css/main-unprefixed.css": "dev/_src/_scss/main.scss"
        }
      }
    },

    autoprefixer: {
      global: {
        src: "dev/F/css/main-unprefixed.css",
        dest: "dev/F/css/main.css"
      }
    },

    uglify: {
      my_target: {
        files: {
          'dev/F/js/global.js': ['dev/_src/_js/global.js'],
          'dev/F/js/jQuery_fitVids.js': ['dev/_src/_js/jquery.js','dev/_src/_js/fitVids.js']
        }
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
        files: ["dev/index.html", "dev/_layouts/*.html", "dev/_posts/*.md",'dev/_posts/*.markdown', "dev/_projects/*.md", "dev/_includes/*.html"],
        tasks: ["shell:jekyllBuild"],
        livereload: true
      },
      css: {
        files: ["dev/_src/_scss/*.scss","dev/_src/_scss/*.sass","dev/_src/_scss/*.css"],
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
  grunt.registerTask("build", ["sass", "autoprefixer","uglify", "svgstore","shell:jekyllBuild"]);
  grunt.registerTask("default", ["sass", "autoprefixer","uglify", "svgstore", "shell:jekyllBuild","watch"]);

};
