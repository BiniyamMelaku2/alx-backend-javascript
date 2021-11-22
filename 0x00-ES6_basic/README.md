# 0x00. ES6 Basics

## Concepts
* [lint (software) - Wikipedia](https://en.wikipedia.org/wiki/Lint_(software))
* [ESLint - Pluggable JavaScript linter](https://eslint.org/)
* [pycodestyle - documentation](https://pycodestyle.pycqa.org/en/latest/)


## Resources
### Read or watch:

* [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp)
* [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
* [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
* [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
* [Javascript ES6 — Iterables and Iterators](https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4)


## Setup
Install NodeJS 12.11.x
(in your home directory):

```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

## Install Jest, Babel, and ESLint
in your project directory:

* Install Jest using: npm install --save-dev jest
* Install Babel using: npm install --save-dev babel-jest @babel/core @babel/preset-env
* Install ESLint using: npm install --save-dev eslint

## Configuration files
package.json
Click to show/hide file contents

babel.config.js
Click to show/hide file contents

.eslintrc.js
Click to show/hide file contents

### Finally…
Don’t forget to run npm install from the terminal of your project folder to install all necessary project dependencies.

## Tasks

[0. Const or let?](0-constants.js)
Modify

* function taskFirst to instantiate variables using const
* function taskNext to instantiate variables using let
```
~$ 
~$ npm run dev 0-main.js 
I prefer const when I can. But sometimes let is okay
~$ 
```
