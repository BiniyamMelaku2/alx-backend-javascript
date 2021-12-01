# 0x04. Typescript

## Resources
Read or watch:

* [TypeScript in 5 minutes](./https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
* [TypeScript documentation](./https://www.typescriptlang.org/docs/handbook/basic-types.html)

## Configuration Files
Please use these files for the following tasks

* [package.json](./)
* [.eslintrc.js](./)
* [tsconfig.json](./)
* [webpack.config.js](./)

## Tasks

## [0. Creating an interface for a student](./)
Copy the following configuration files (provided above) into the `task_0` directory: `package.json`, `.eslintrc.js`, `tsconfig.json`, `webpack.config.js`

Write your code in the `main.ts` file:

* Write an interface named Student that accepts the following elements: `firstName(string)`, `lastName(string)`, `age(number)`, and `location(string)`
* Create two students, and create an array named `studentsList` containing the two variables
* Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
* Each row should contain the first name of the student and the location

#### Requirements:
* When running, Webpack should return `No type errors found`.
* Every variable should use TypeScript when possible.

## [1. Let's build a Teacher interface](./)
Create a directory task_1 and copy these configuration files into this folder: package.json, tsconfig.json, webpack.config.js

firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initialized
fullTimeEmployee(boolean) this attribute should always be defined
yearsOfExperience(number) this attribute is optional
location(string) this attribute should always be defined
Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute
Example:
```
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"
```
