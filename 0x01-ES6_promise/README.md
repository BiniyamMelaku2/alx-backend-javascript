# 0x01. ES6 Promises


## Concepts
* [lint (software) - Wikipedia](https://en.wikipedia.org/wiki/Lint_(software))
* [ESLint - Pluggable JavaScript linter](https://eslint.org/)
* [pycodestyle - documentation](https://pycodestyle.pycqa.org/en/latest/)
* [Getting Started with ESLint](https://eslint.org/docs/user-guide/getting-started)
* [JEST Getting Started](https://jestjs.io/docs/getting-started)


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

[utils.js](./utils.js)

[.eslintrc.js](./.eslintrc.js)

### Finally…
Don’t forget to run `npm install` from the terminal of your project folder to install all necessary project dependencies.


## Resources
Read or watch:

* [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [JavaScript Promise: An introduction](https://web.dev/promises/)
* [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
* [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
* [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

## Response Data Format
`uploadPhoto` returns a response with the format
```
{
  status: 200,
  body: 'photo-profile-1',
}
```
`createUser` returns a response with the format
```
{
  firstName: 'Guillaume',
  lastName: 'Salva',
}
```

### to test with ESLint
> npx eslint 0-promise.js


## Tasks
## [0. Keep every promise you make and only make promises you can keep](./0-promise.js)

Return a Promise using this prototype `function getResponseFromAPI()`
```
$ npm run dev 0-main.js 
true
$ npx eslint 0-promise.js
```

## [1. Don't make a promise...if you know you can't keep it](./1-promise.js)
Using the prototype below, return a promise. The parameter is a boolean.

`getFullResponseFromAPI(success)`

When the argument is:

* true:
     resolve the promise by passing an object with 2 attributes:
           `status: 200`
           `body: 'Success'`
* false:
     reject the promise with an error object with the message The fake API is not working currently
     
Try testing it out for yourself
```
$ npm run dev 1-main.js 
Promise { { status: 200, body: 'Success' } }
Promise {
  <rejected> Error: The fake API is not working currently
    ...
    ...
```

## [2. Catch me if you can!](./2-then.js)
Using the function prototype below

`function handleResponseFromAPI(promise)`
Append three handlers to the function:

* When the Promise resolves, return an object with the following attributes
      `status: 200
       body: success`
* When the Promise rejects, return an empty Error object
* For every resolution, log Got a response from the API to the console
```
$ npm run dev 2-main.js 
Got a response from the API
```

## [3. Handle multiple successful promises](./3-all.js)
In this file, import `uploadPhoto` and `createUser` from `utils.js`

Knowing that the functions in `utils.js` return promises, use the prototype below to collectively resolve all promises and log `body firstName lastName` to the console.

`function handleProfileSignup()`

In the event of an error, log `Signup system offline` to the console
```
$ npm run dev 3-main.js 
photo-profile-1 Guillaume Salva
```

## [4. Simple promise](./4-user-promise.js)
Using the following prototype
```
function signUpUser(firstName, lastName) {
}
```
That returns a resolved promise with this object:
```
{
  firstName: value,
  lastName: value,
}
$ npm run dev 4-main.js 
Promise { { firstName: 'Bob', lastName: 'Dylan' } }
```

## [5. Reject the promises](./5-photo-reject.js)
Write and export a function named `uploadPhoto`. It should accept one argument `fileName` (string).

The function should return a Promise rejecting with an Error and the string `$fileName cannot be processed`
```
export default function uploadPhoto(filename) {

}
$ npm run dev 5-main.js 
Promise {
  <rejected> Error: guillaume.jpg cannot be processed
  ..
    ..
```

## [6. Handle multiple promises](./6-final-user.js)
Import `signUpUser` from `4-user-promise.js` and `uploadPhoto` from `5-photo-reject.js`.

Write and export a function named `handleProfileSignup`. It should accept three arguments `firstName` (string), `lastName` (string), and `fileName` (string). The function should call the two other functions. When the promises are all settled it should return an array with the following structure:
```
[
    {
      status: status_of_the_promise,
      value: value or error returned by the Promise
    },
    ...
  ]
$ npm run dev 6-main.js 
Promise { <pending> }
```
