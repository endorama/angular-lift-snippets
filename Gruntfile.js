'use strict'

var path = require('path')

module.exports = function (grunt) {

  grunt.initConfig({
    wrap: {
      files: {
        dest: 'snippets',
        src: [ 'templates/*.js' ]
      },
      header: 'sublime/snippet-header.txt',
      footer: 'sublime/snippet-footer.txt'
    }
  })

  grunt.registerTask('wrap', 'Wraps source files with specified header and footer', function () {
    var data = grunt.config('wrap')
    var files = grunt.file.expand(data.files.src)
    var dest = path.resolve(grunt.template.process(data.files.dest))
    var rawHeader = grunt.file.read(data.header)
    var rawFooter = grunt.file.read(data.footer)
    var sep = grunt.util.linefeed

    files.forEach(function (f) {
      var header = grunt.template.process(rawHeader, {
        data: {
          fileName: f,
          date: grunt.template.today('dd mmmm yyyy')
        }
      })
      var footer = grunt.template.process(rawFooter, {
        data: {
          trigger: path.basename(f, path.extname(f, '.js'))
        }
      })

      var file = path.join(dest, path.basename(f, path.extname(f, '.js')) + '.sublime-snippet')
      var contents = grunt.file.read(f)

      grunt.file.write(file, header + sep + contents + sep + footer)

      var displayF = path.join(data.files.dest, path.relative(dest, file))
      grunt.log.write('Creating file ' + displayF.cyan + '... ')
      grunt.log.ok()
    })

  })
}
