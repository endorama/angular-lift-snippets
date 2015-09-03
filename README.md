# AngularJS Lift Snippets

AngularJS Snippets based on the LIFT (Location, Identify, Flat, T-Dry) principle described by John Papa [here][0].

**Note:** snippets are for Sublime Text editor ( may work in others ).

This snippets add some sugar above John Papa's ones:
- [IIFE funciton form][iife] to resolve corresponding JSLint error
- [ng-annotate][ng-annotate] ready; just don't type more stuff that what is needed, and be ready to minify using ng-annotate


## Installation

Open Command Palette ( `CLTR+SHIFT+P` ) and use the `Add repository` command to add this repository.  
Via Command Palette install `angular-lift-snippets`.


## Available snippets

You should be in a `.js` file before using this triggers, as they are scoped only for js files.

| Trigger | Styleguide | Template |
| ------- | ---------- | -------- |
| ngconfig | [ref][1] | [snippets/ngconfig.sublime-snippet][2] |
| ngcontroller | [ref][3] | [snippets/ngdirective.sublime-snippet][4] |
| ngdirective | [ref][5] | [snippets/ngdirective.sublime-snippet][6] |
| ngfactory | [ref][7] | [snippets/ngfactory.sublime-snippet][8] |
| ngfilter | none | [snippets/ngfilter.sublime-snippet][9] |
| ngmodule | [ref][10] | [snippets/ngmodule.sublime-snippet][11] |
| ngprovider | see ngservice | [snippets/ngprovider.sublime-snippet][12] |
| ngservice | [ref][13] | [snippets/ngservice.sublime-snippet][14] |
| ngvalue | none | [snippets/ngvalue.sublime-snippet][15] |

Something is missing, like constants ( [johnpapa/constants][16] )


## Contribution

Feel free to send any hint/contribution you find useful :) Just open an issue or send me a PR.


## LICENSE

tldr; Use this guide. Attributions are appreciated.

(The MIT License)

Copyright (c) 2014 Edoardo Tenani

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[iife]: http://jslinterrors.com/use-the-function-form-of-use-strict
[ng-annotate]: https://github.com/johnpapa/angularjs-styleguide#minification-and-annotation
[0]: https://github.com/johnpapa/angularjs-styleguide
[1]: https://github.com/johnpapa/angularjs-styleguide#configuration-1
[2]: snippets/ngconfig.sublime-snippet
[3]: https://github.com/johnpapa/angularjs-styleguide#controllers
[4]: snippets/ngdirective.sublime-snippet
[5]: https://github.com/johnpapa/angularjs-styleguide#directives
[6]: snippets/ngdirective.sublime-snippet
[7]: https://github.com/johnpapa/angularjs-styleguide#factories
[8]: snippets/ngfactory.sublime-snippet
[9]: snippets/ngfilter.sublime-snippet
[10]: https://github.com/johnpapa/angularjs-styleguide#modules
[11]: snippets/ngmodule.sublime-snippet
[12]: snippets/ngprovider.sublime-snippet
[13]: https://github.com/johnpapa/angularjs-styleguide#data-services
[14]: snippets/ngservice.sublime-snippet
[15]: snippets/ngvalue.sublime-snippet
[16]: https://github.com/johnpapa/angularjs-styleguide#constants