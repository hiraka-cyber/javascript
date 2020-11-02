alert('Hello World');

console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning')

//var,let,const
let age = 30;
age = 31;
console.log(age);

const age = 30;
console.log(age);

let score = 10;
console.log(score);

//Strung,Numbers,Boolean,null,undefined,Symbol
const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

//Cocatenation
console.log('My name is' + name +'and I am' +age);
//Teplate String
console hello='My name is ${name} and I am ${age}';
console.log(hello);

const s = 'Hello World';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(''));

const s = 'technology,conmputers,it,code';
console.log(s.split(','));

//Arrays - variable that hold multiple values

/* multi
line
ccomnet
 */

 const numbers = new Array(1,2,3,4,5);
 console.log(numbers);

 const fruits = ['apples'.'oranges','pears',10,true]
 console.log(fruits);
 console.log(fruits[1]);

 fruits[3] = 'grapes';
 fruits.push('mangos');
 fruits.unshift('strawberries');
 fruits.pop();
 console.log(Array,isArray('hello'));
 console.log(fruits,indexOf('oranges'));
 console.log(fruits);

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies:['music','movies','sports'],
  address:{
    street:'50 main st',
    city:'Boston',
    stete:'MA'
  }
}

console.log();
console.log(person.adress.city);

const {firstName,lastName,address:{city}} = person;
console.log(city);

person.email = 'john@gmail.com';
console.log(email);

const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Dentist appt',
    isCompleted: false
  }
]:

console.log(todos[1].text);
const todoJSON.stringify(todos);
console.log(todoJSON);

//for
for (let i = 0; i <= 10; i++) {
console.log('for loop number:${i}');
}


//while
let i = 0;
while(i < 10){
  console.log('While loop Number: ${i}');
  i++;
}

for (let i = 0; i < todos.length; i++){
  console.log(todos[i].text)
}

for(let todo of todos){
  console.log(todo[i].text);
  console.log(todo[i].id);
}

//foreach,map,filter
todos.forEach(funstion(todo){
  console.log(todo.text);
});

const todoText = todo.map(funstion(todo){
  return todo.text;
});
console.log(todoText);

const todoCompleted = todo.filter(funstion(todo){
  return todo.isCompleted === true;
}).map(function(todo){
  return todo.text;
});
console.log(todoCompleted);

const x = 10;
const y = 4;
if(x == 10){
  console.log('x is 10');
}

if(x === 10){
  console.log('x is 10');
}else if(x > 10){
  console.log('x is greater than 10');
}
else{
  console.log('x is less than 10');
}

if( x >5 || y >10){
  console.log('x is more than 5 or y is more than 10');
}
else if(x > 5 && y > 10){
  console.log('x is more than 5 and y is more than 10');
}

const x = 10;

const color = x > 10 ? 'red' : 'blue';

console.log(color);
switch(color){
  case 'red':
  console.log('color ie red');
  break;
  case 'blue':
  console.log('color is blue');
  break;
  default:
  console.log('color is not red or blue');
  break;
}

function addNums(num1 = 1,num2 = 1){
  console.log(num1 + num2);
}

addNums(5,5);

function addNums(num1 = 1,num2 = 1){
  return num1 + num2;
}

console.log(addNums(5,5));

const addNums = (num1 = 1,num2 = 1) => num1 + num2;

console.log(addNums(5,5));

function Person(firstName,lastName,dob) {
  this.firstNam = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = functions(){
    reeturn this.dob.getFullYear();
  }
  this.getFullName = functions(){
    return '${this.firstName} ${this.lastName}';
  }
}

Person.prototype.getBirthYear = function(){
  return this.dob.getFullYear();
}

Person.prototype.getFullName = functions(){
  return`${this.firstName} ${this.lastName}`;
}

//class
class Person {
  constructor(firstName,lastName,dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear(){
    return this.dob.getFullYear();
  }

  getFullName(){
    return `${this.firstName} ${this.lastName}`;
  }
}

//Instatiate object
const person1 = new Person('john','doe','4-3-1980');
const person2 = new Person('Mary','Smith','3-6-1970')

console.log(person2.getFullName());
console.log(person1);
console.log(person2.firstName);
console.log(person2.dob.getFullYear());
console.log(person1,getBirthYear());
console.log(person1.getFullName());
