// Welcome to practice javascript object
/*
Chapter - 1: Implicit binding
 - Object literal
 - An object literal is a list of name:value pairs inside curly braces {}
*/
// Example 1
let BrandRaiser = {
    members : {
        br001:{
            name: 'Abdullah',
            age: 35,
            blodGroup: 'O+'
        }
    },
    member2 : {
        name : this.name,
        age: this.age,
        blodGroup: this.blodGroup
    },
    showName(){
        console.log('Method excuted by ', this.members.br001.name);
    }
}
console.log('Object literal example, members name -', BrandRaiser.members.br001.name);
BrandRaiser.showName();
// Note: You cant use a constructor function in Object literal
// This is essential to access the data inside 

// Example 2: Anoter example of ** this ** 
let sayNameMixin = function(obj){
    obj.sayName = function(){
        console.log(this.name);
    }
}
let me = {
    name : "maruf",
    age: 35
}
let you = {
    name : "friend",
    age: 34
}
sayNameMixin(me);
sayNameMixin(you);
me.sayName();
you.sayName();
/*
Note: 
---
1. Arrow function dont work for such operation. Because arrow function and regular function has the followinng difference:
- Arrow function is good for short syntex, like:
-- let add = (x, y) => x + y;
-- let squareNum = x => x * x;
-- let sayHi = _ => console.log(“Hi”); // when no argument

2. Arrow function dosen't have "arguments" binnding.
3. Arrow function dosen't have "this" binding.
4. "new" keyword cant be used for arrow function
*/


// Example 3: with ** Return ** statement
let Person = function(n,a, pn){
    return {
        name: n,
        age: a,
        sayName: function(){
            console.log(this.name);
        },
        partner: {
            name: pn,
            sayName: function(){
                console.log(this.name);
            }
        }
    }
}

console.log();
let mrf = Person('Maruf', 35, 'Ripple');
// console.log(">> result >>");
// mrf.sayName();
// mrf.partner.sayName();


/*
 Chapter 2: Explicit binding.
 - .call() invoke the funnction binding with the object passed as argument
 - .apply() invoke the funnction binding with the object passed as argument, in case of additional argument we can pass that as an array
 - .bind() invokes the function binndinng with the opject passed as argument but it returns a function instead of instant invocation.
*/
function myName(a, b, c){
    console.log("My name is", this.name, "knows", a, b, c);
}

let maruf = {
    name: "Maruf",
    age: 23
}
let friend = {
    name: "Friend",
    age: 25
}

console.log("**** Using call ****");
let lang = ['html', 'css', 'js']
myName.call(maruf, lang);
myName.apply(friend, lang);
let meMrf = myName.bind(maruf);
console.log('---');
let meMrf2 = myName.bind(maruf,lang);
meMrf(lang);
meMrf2();


/*
 Chapter 3: New binding.
*/
let Animal = function(color, age, price){
    this.color = color;
    this.age = age;
    this.price = price;
}

console.log("New binding example -----");
let dog = new Animal('Red', 2, 100);
console.log('price of my dog', dog.price);

/*
 Chapter 3: Window binding.
*/
var sayAge = function(){
    console.log(this.age);
}

Window.age = 30;
sayAge();