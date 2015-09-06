module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        ts: {
            build: {
                src: ['ts/**/*.ts', 'ts/**/*.tsx'],
                out: 'js/bundle.js',
                outDir: 'js',
                reference: 'ts/references.ts',
                options: {
                    additionalFlags: '--jsx react',
                    failOnTypeErrors: false,
                    module: 'commonjs',
                    target: 'es5',
                    compiler: './node_modules/typescript/bin/tsc'
                }
            }
        },
        watch: {
            typescript: {
                files: ['**/*.ts', '**/*.tsx'],
                tasks: ['ts:build']
            }
        }
    });
  grunt.registerTask('default', ['ts:build', 'watch']);
};
