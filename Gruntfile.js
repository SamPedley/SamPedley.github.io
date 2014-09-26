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
          "css/main-unprefixed.css": "_sass/main.scss"
        }
      }
    },

    autoprefixer: {
      global: {
        src: "css/main-unprefixed.css",
        dest: "css/main.css"
      }
    },

    uglify: {
      my_target: {
        files: {
          'js/global.js': ['_js/global.js']
        }
      }
    },

    shell: {
      jekyllServe: {
        command: "jekyll serve --baseurl="
      },
      jekyllBuild: {
        command: "jekyll build --config _config.yml"
      }
    },

    watch: {
      options: {
        livereload: true
      },
      site: {
        files: ["index.html", "_layouts/*.html", "_posts/*.md",'_posts/*.markdown', "_projects/*.md", "_includes/*.html"],
        tasks: ["shell:jekyllBuild"],
        livereload: true
      },
      css: {
        files: ["_sass/*.scss","_sass/*.sass","_sass/*.css"],
        tasks: ["sass", "autoprefixer", "shell:jekyllBuild"]
      },
      svg: {
        files: ["_svg/*.svg"],
        tasks: ["svgstore", "shell:jekyllBuild"]
      },
      js: {
        files: ["_js/*.js"],
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
          "_includes/svg-defs.svg": ["_svg/*.svg"]
        }
      }
    }

  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask("serve", ["shell:jekyllServe"]);
  grunt.registerTask("default", ["sass", "autoprefixer", "shell:jekyllBuild", "watch", "svgstore", "uglify"]);

};
