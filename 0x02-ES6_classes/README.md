# 0x02. ES6 classes


## Resources
### Read or watch:

* [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [Metaprogramming](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/#symbolspecies)


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

* Install Jest using: `npm install --save-dev jest`
* Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
* Install ESLint using: `npm install --save-dev eslint`


## Files
[package.json](./package.json)

[babel.config.js](./babel.config.js)

[.eslintrc.js](./.eslintrc.js)

### Finally…
Don’t forget to run `npm install` from the terminal of your project folder to install all necessary project dependencies.


### to test with ESLint
> npx eslint 0-promise.js


## Tasks

## [0. You used to attend a place like this at some point](./0-classroom.js)
Implement a class named `ClassRoom`:

* Prototype: `export default class ClassRoom`
* It should accept one attribute named `maxStudentsSize` (Number) and assigned to `_maxStudentsSize`
```
$ npm run dev 0-main.js 
10
```

## [1. Let's make some classrooms](./1-make_classrooms.js)
Import the `ClassRoom` class from `0-classroom.js`.

Implement a function named `initializeRooms`. It should return an array of 3 `ClassRoom` objects with the sizes 19, 20, and 34 (in this order).
```
 npm run dev 1-main.js 
[
  ClassRoom { _maxStudentsSize: 19 },
  ClassRoom { _maxStudentsSize: 20 },
  ClassRoom { _maxStudentsSize: 34 }
]
```

## [2. A Course, Getters, and Setters](./2-hbtn_course.js)
Implement a class named `HolbertonCourse`:

* Constructor attributes:
        name (String)
        length (Number)
        students (array of Strings)
* Make sure to verify the type of attributes during object creation
Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
* Implement a getter and setter for each attribute.
```
$ npm run dev 2-main.js 
ES6
HolbertonCourse {
  _name: 'Python 101',
  _length: 1,
  _students: [ 'Bob', 'Jane' ]
}
TypeError: Name must be a string
    ...
TypeError: Length must be a number
    ...
```
