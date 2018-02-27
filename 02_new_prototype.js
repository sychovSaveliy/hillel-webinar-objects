/*
    JS обьекты;
    ▪ Свойства, методы, прототип обьекта;
    ▪ Оператор new, немного про this;
    ▪ Реализовываем ООП в прототипно-ориентированном JS (для начинающих).
*/


// -------------------------------------------

// о this чуть ниже!

// this -> ссылка на объект
// function Person() {
//     this.name = 'Vasya';
//     this.age = 27;
// }

// Person.prototype.run = function(){
//     console.log('run run');
// }

// console.dir(Person);



// var person_1 = new Person();

// 1) new создает новый объект {}
// 2) вызывает функцию Person()
// 3) перенаправляет this функции Person на {} 

// var testPerson = {
//     name: 'Vasya',
//     age: 27
// }

// console.log(person_1);
// console.log(testPerson);

// -------------------------------------------

// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     // this.run = function() {}
//     // methods
// }

// // prototype

// Person.prototype.eat = function(){}
// Person.prototype.run = function(){};

// var person_1 = new Person('Vasya', 27),
//     person_2 = new Person('Petya', 32);

// var testPerson = {
//     name: 'Vasya'
// }

// console.log(person_1);
// console.log(testPerson);


// -------------------------------------------

// this - текущий контекст

// В большинстве случаев значение this определяется тем, 
// каким образом вызвана функция.


// this example

foo = 20;

// this #1

function doIt() {
    console.log('do it', this);

    // f1();

    // function f1() {
    //     console.log(this);
    // }
}

doIt();


var info = {
    x: 10,
    y: 20,
    run: run
}

info.run();
run();

function run() {
    console.log(this);
}

// $('selector').find().contains().addClass()