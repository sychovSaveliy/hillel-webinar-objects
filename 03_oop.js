/*
    JS обьекты;
    ▪ Свойства, методы, прототип обьекта;
    ▪ Оператор new, немного про this;
    ▪ Реализовываем ООП в прототипно-ориентированном JS (для начинающих).
*/


// создание класса

function Person(name, age, options) {
    this.name = name;
    this.age = age;

    options = options || {};
    // or if() else{}
    this.height = options.height
    this.weight = options.weight
}

// определяем экзмепляры класса

var p1 = new Person('Vaysa', 27, { height: 85, color: 'red' });

var p2 = new Person('Petya', 23, { color: 'red' });

console.log(p1, p2);


// описание метода в прототипе
// + инкапсуляция

Person.prototype.run = function() {
    console.log(this.name + ' run');
}

p1.run();
p2.run();



// про наследование классов в следующий раз!