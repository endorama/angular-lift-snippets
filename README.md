# AngularJS Lift Snippets

AngularJS Snippets based on the LIFT (Location, Identify, Flat, T-Dry) principle described by John Papa [here](https://github.com/johnpapa/angularjs-styleguide).

This snippets add some sugar above John Papa's ones:
- [IIFE funciton form](http://jslinterrors.com/use-the-function-form-of-use-strict) to resolve corresponding JSLint error
- [ng-annotate](https://github.com/johnpapa/angularjs-styleguide#minification-and-annotation) ready; just don't type more stuff that what is needed, and be ready to minify using ng-annotate


## Installation

Open Command Palette ( `CLTR+SHIFT+P` ) and use the `Add repository` command to add this repository.  
Via Command Palette install `angular-lift-snippets`.

## Available snippets

You should be in a `.js` file before using this triggers, as they are scoped only for js files

Trigger | Styleguide | Template
--- | --- | ---
ngconfig | [ref](https://github.com/johnpapa/angularjs-styleguide#configuration-1) | [snippets/ngconfig.sublime-snippet](snippets/ngconfig.sublime-snippet)
ngcontroller | [ref](https://github.com/johnpapa/angularjs-styleguide#controllers) | [snippets/ngdirective.sublime-snippet](snippets/ngdirective.sublime-snippet)
ngdirective | [ref](https://github.com/johnpapa/angularjs-styleguide#directives) | [snippets/ngdirective.sublime-snippet](snippets/ngdirective.sublime-snippet)
ngfactory | [ref](https://github.com/johnpapa/angularjs-styleguide#factories) | [snippets/ngfactory.sublime-snippet](snippets/ngfactory.sublime-snippet)
ngfilter | none | [snippets/ngfilter.sublime-snippet](snippets/ngfilter.sublime-snippet)
ngmodule | [ref](https://github.com/johnpapa/angularjs-styleguide#modules) | [snippets/ngmodule.sublime-snippet](snippets/ngmodule.sublime-snippet)
ngprovider | see ngservice | [snippets/ngprovider.sublime-snippet](snippets/ngprovider.sublime-snippet)
ngservice | [ref](https://github.com/johnpapa/angularjs-styleguide#data-services) | [snippets/ngservice.sublime-snippet](snippets/ngservice.sublime-snippet)
ngvalue | none | [snippets/ngvalue.sublime-snippet](snippets/ngvalue.sublime-snippet)

Something is missing, like constants ( https://github.com/johnpapa/angularjs-styleguide#constants )

## Contribution

Feel free to send any hint/contribution you find useful :) Just open an issue or send me a PR.

## LICENSE

tldr; Use this guide. Attributions are appreciated.

(The MIT License)

Copyright (c) 2014 Edoardo Tenani

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.