/*
    JS обьекты;
    ▪ Свойства, методы, прототип обьекта;
    ▪ Оператор new, немного про this;
    ▪ Реализовываем ООП в прототипно-ориентированном JS (для начинающих).
*/


// создание класса

function Person(name, age, options) {
    var size = 2;

    this.name = name;
    this.age = age;

    // if(!options) {
    //     options = {}
    // }

    // options = options ? options : {};
    options = options || {};
    // or if() else{}
    this.height = options.height;
    this.weight = options.weight

    this.calc = function() {
        return (this.height + size) * this.weight;
    }

    this.getSize = function() {
        return size;
    }

    this.setSize = function(value) {
        size = value;
    }
}


// определяем экзмепляры класса == объекты

var p1 = new Person('Vaysa', 27, { height: 85, weight: 72, color: 'red' });

var p2 = new Person('Petya', 23);

console.log(p1, p2);


// описание метода в прототипе
// + инкапсуляция

Person.prototype.run = function() {
    console.log(this.name + ' run');
}

p1.run();
// p2.run();

p1.calc();
p1.getSize();
p1.setSize(200);
p1.getSize();
p1.calc();



// про наследование классов в следующий раз!