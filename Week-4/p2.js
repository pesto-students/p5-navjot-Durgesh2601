const Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

const Teacher = function () {};

Object.setPrototypeOf(Teacher.prototype, Person.prototype);
Teacher.prototype.teach = function (subject) {
  console.log(`${this.name} who is ${this.age} years old, is now teaching ${subject} `);
};
var him = new Teacher();

him.initialize("Adam", 45);
him.teach("Inheritance");
