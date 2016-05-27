module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    browserify: {
      dist: {
        options: {
          transform: [
            ['babelify', {
              presets: ['es2015', 'react']
            }]
          ],
          watch: true
        },
        files: {
          './dist/app.js': ['./src/js/app.js']
        }
      }
    },
    less: {
      development: {
        options: {
          compress: true
        },
        files: {
          './dist/styles.css': './src/less/styles.less',
        }
      }
    },

    uglify: {
      options: {
        mangle: true
      },
      build: {
        files: {
          './dist/app.min.js': ['./dist/app.js']
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 1337,
          hostname: 'localhost',
          livereload: 9000,
          middleware: function(connect, options) {
            var middlewares = [];

            if(!Array.isArray(options.base)) {
              options.base = [options.base];
            }
            middlewares.push(require('grunt-connect-proxy/lib/utils').proxyRequest);

            options.base.forEach(function(base) {
              middlewares.push(connect.static(base));
            });

            return middlewares;
          }
        },
        proxies: [{
          context: ['/api'],
          host: '127.0.0.1',
          port: 1338
        }]
      }
    },

    watch: {
      scripts: {
        files: ['./src/js/**/*.js'],
        options: {
          livereload: {
            port: 9000
          }
        }
      },
      styles: {
        files: ['./src/less/*.less'],
        tasks: ['less'],
        options: {
          livereload: {
            port: 9000
          }
        }
      },
      watch: {
        files: ['*.html'],
        options: {
          livereload: {
            port: 9000
          }
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'browserify', 'configureProxies:server', 'connect', 'watch']);
  grunt.registerTask('build', ['less', 'browserify', 'uglify']);
};
