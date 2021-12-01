console.log('first day in typescript');
//explicitly describe this object’s shape using an interface declaration:
interface User {
  name: string;
  id: number;
}
//declare that a JavaScript object conforms to the shape of your new interface by 
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: "Hayes",
  lastName: "doja",
  age: 23,
  location: "Wyoming",
};
const student2: Student = {
  firstName: "Edward",
  lastName: "lust",
  age: 33,
  location: "ottawa",
};

let studentsList: Student[] = [student1, student2];
console.log(studentsList);

const table = document.createElement('table');
const tbody = document.createElement('tbody');
  
studentList.forEach((obj) => {
  const row = document.createElement('tr');
  const cellName = document.createElement('td');
  const cellLocation = document.createElement('td');
  cellName.textContent = obj.firstName;
  cellLocation.textContent = obj.location;
  row.appendChild(cellName);
  row.appendChild(cellLocation);
  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
