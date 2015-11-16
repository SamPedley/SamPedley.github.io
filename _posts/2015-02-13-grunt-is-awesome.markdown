---
layout: post
title:  "Grunt was Awesome!"
date:   2015-02-13 13:21:00
categories: 
published: true
description: I've offically moved from Grunt to Gulp for all of my front-endie build needs but I'll always cherish the time we spent together. So, here's my final Grunt file for old times sake.
image: /F/img/books/book.jpg
---

Grunt was an awesome tool.  In fact I've used it on just about every project for the past year.  Today's a sad day though, I've started my first major app without my beloved grunt.  I'm moving to Gulp because it seems to be much faster and Gulp is much more code focused rather than config focused like Grunt.  And if we're being honnest it's also because most people in the web community are moving to Gulp and I don't want to get left behind. 

So, here's my last Gruntfile...


{% highlight javascript %}
"use strict";

module.exports = function(grunt) {

  // Set global variables based on project
  var globalConfig = {
    // Set source folder path
    src: 'site/src/',
    // set destination folder path
    dest: 'site/dest/'
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    globalConfig: globalConfig,

    // Using libsass!
    // There are know issues with this version.
    // If you run into issues move to grunt-contrib-sass
    sass: {
      options: {
        outputStyle: "compressed",
        sourceMap: false
      },
      dist: {
        files: {
          "<%= globalConfig.src %>_libs/scss.css": "<%= globalConfig.src %>_scss/main.scss"
       }
      }
    },

    // Autoprefix sass output for browser compatablity
    autoprefixer: {
      global: {
        src: "<%= globalConfig.src %>_libs/scss.css",
        dest: "<%= globalConfig.src %>_libs/scss.css"
      }
    },

    // combines both css and js files
     concat: {
      options: {
        banner: '/*------------------------------------------------------------------------\n|  Last build on: <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT")%>\n------------------------------------------------------------------------*/\n',
      },
      css: {

        src: [ 
          '<%= globalConfig.src %>_libs/_normalize.css',
          //'<%= globalConfig.src %>_libs/_bootstrap.css',
          //'<%= globalConfig.src %>_libs/_bootstrapTheme.css',
          //'<%= globalConfig.src %>_libs/_foundations.css',
          '<%= globalConfig.src %>_libs/scss.css'
          ],
        dest: '<%= globalConfig.dest %>main.css',
      },
      js: {
        src: ['<%= globalConfig.src %>/_js/*.js'],
        dest: '<%= globalConfig.dest %>main.js',
      },
    },

    // Combines and minifies sass and css frameworks [doesn't support banners]
    cssmin: {
      target: {
        files: {'<%= globalConfig.dest %>main.css':['<%= globalConfig.dest %>main.css']
        }
      }
    },

    // combines and minifies javascript
    uglify: {
      options: {
        banner: '/*! <%= grunt.template.today("isoDateTime") %> */'
      },
      my_target: {
        files: {
          '<%= globalConfig.dest %>main.js': ['<%= globalConfig.dest %>main.js']
        }
      }
    },

    // Loslessly compresses all png, jpg and gif images
    imagemin: { 
      dynamic: {
        files: [{
          expand: true,
          cwd: '<%= globalConfig.src %>_img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= globalConfig.dest %>img'
        }]
      }
    },

    // creates a temporary http server at localhost:port#
    connect: {
      options: {
        port: 4000,
        hostname: 'localhost',
        base:'site'
      },
      dist: {
        options: {
            open: true,
            base: 'site',
            livereload: true
        }
      }
    },

    // Watches these files and runs their task on save.
    watch: {
      options: {
        livereload: true
      },
      site: {
        files: ["**/*.php","**/*.html"],
        livereload: true
      },
      css: {
        files: ["<%= globalConfig.src %>_scss/**/*.scss"],
        tasks: ["sass", "autoprefixer","concat:css"]
      },
      svg: {
        files: ["<%= globalConfig.src %>_svg/*.svg"],
        tasks: ["svgstore"]
      },
      js: {
        files: ["<%= globalConfig.src %>_js/*.js"],
        tasks: ["concat:js"]
      },
    },

    // Combines, prefixes and minifies svgs
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
          "<%= globalConfig.dest %>svg-defs.svg": ["<%= globalConfig.src %>_svg/*.svg"]
        }
      }
    }

  });
  // Used inplace of the grunt require statments.
  require('load-grunt-tasks')(grunt);
  // Outputs a summary of what happened in the terimanal. 
  require('time-grunt')(grunt);


  grunt.registerTask("img", ["imagemin"]);
  grunt.registerTask("build", ["sass", "autoprefixer","concat","cssmin","uglify", "svgstore","imagemin"]);
  grunt.registerTask("default", ["sass", "autoprefixer","concat", "svgstore", "connect", "watch"]);

};

{% endhighlight %}

Also, this is all avaliable on Github ... [Here](https://github.com/SamPedley/Boiler-Grunt)