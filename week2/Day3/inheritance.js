'use strict';

//in ES5 (EcmaScript 5, earlier version of JS) there aren't classes, but there are constructors

// we name constructors with a capital letter:
function Person(name, age, fingers){
    this.name = name;
    this.age = age;
    this.fingers = fingers;

    //we can define methods:
    this.sayName = function(){
        console.log(this.name);
        // console.log(name)//also works lul
    }

    
}








function Constr(name, age, fingers){
    this.name = name;
    this.age = age;
    this.fingers = fingers;
    this.getAge = function(){
        console.log(this.age);
    }
}
let p1 = new Constr("hi", 2, 2);
// console.log(p1);
// p1.getAge();




























//we can call constructors using the "new" keyword
let adam = new Person("Adam", 26, 10); //name, age, fingers
// console.log(adam);
// adam.sayName();


//what "new" does:
// 1: make a new empty object {}
// 2: call the constructor with "this" set to that empty object

// ES5 uses prototypal inheritance to have something like the class hierarchy of inheritance

//We'll make a student that is a "subclass", or "inherits" from Person

function Student(name, age, fingers, school){
    this.school = school;
    this.__proto__ = new Person(name, age, fingers); //make it a child, like extends?
    //defines the variables that are inherited by the parent
}









let student = new Student("Max", 50, 10, 'VT'); //name, age, fingers, school
// console.log(student);
// console.log(student.name);
// student.sayName();

// in ES6, we can use classes instead, but these classes are just "syntatic sugar"... another way to write something.
// under the hood, nothing is different
class PersonClass{
    constructor(name, age, fingers){
        this.name = name;
        this.age = age;
        this.fingers = fingers;
    }

    sayName() {
        console.log(this.name);
    }
}

let person2 = new PersonClass("Paul", 22, 10);
// console.log(person2);


