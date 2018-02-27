/*
    JS обьекты;
    ▪ Свойства, методы, прототип обьекта;
    ▪ Оператор new, немного про this;
    ▪ Реализовываем ООП в прототипно-ориентированном JS (для начинающих).
*/


// -------------------------------------------

// о this чуть ниже!

// function Constructor() {
//     this.name = 'Vasya';
//     // this.age = 27;
// }

// var person_1 = new Constructor();

// var testPerson = {
//     name: 'Vasya'
// }

// console.log(person_1);
// console.log(testPerson);

// -------------------------------------------

function Person(name, age) {
    this.name = name;
    this.age = age;

    // methods
}

// prototype

var person_1 = new Person('Vasya', 27);

var testPerson = {
    name: 'Vasya'
}

console.log(person_1);
console.log(testPerson);


// -------------------------------------------

// this - текущий контекст

// В большинстве случаев значение this определяется тем, каким образом вызвана функция.


// this example