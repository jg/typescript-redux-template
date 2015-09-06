module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-ts');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-webpack-loader');

  grunt.initConfig({
    ts: {
      build: {
        src: ['ts/**/*.ts', 'ts/**/*.tsx'],
        outDir: '_build/es6',
        reference: 'ts/references.ts',
        options: {
          additionalFlags: '--jsx react',
          target: 'es6',
          compiler: './node_modules/typescript/bin/tsc'
        }
      }
    },

    webpack: {
      dev: {
        entry: './_build/es6/main.js',
        output: {
          path: '_build/es5',
          filename: 'bundle.js'
        },
        module: {
          loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
          ]
        },
        resolve: {
          modulesDirectories: ['node_modules', 'vendor']
        },
      }
    },

    clean: {
      lib: {
        files: '_build'
      }
    },

    watch: {
      typescript: {
        files: ['**/*.ts', '**/*.tsx'],
        tasks: ['build']
      }
    }
  });

  grunt.registerTask('build', ['ts:build', 'webpack']);

  grunt.registerTask('default', ['build', 'watch']);
};
