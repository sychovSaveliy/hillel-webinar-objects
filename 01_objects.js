/*
    JS обьекты (для начинающий);
    ▪ Свойства, методы, прототип обьекта;
    ▪ Оператор new, немного про this;
    ▪ Реализовываем ООП в прототипно-ориентированном JS (для начинающих).
*/




// var obj = {
//     name: 'Vasya'
// }; // блок инициализации
// var data = new Object(); // через конструктор

// var info = {
//     list: [],
//     id: 1123,
//     name: 'FooName',
//     desc: {
//         title: '',
//         size: 203,
//         desc: {

//         }
//     }
// }

// obj.x = 10;
// data.y = 'Hello world';

// obj.foo = data; // ссылка на data

// console.log(obj);
// console.log(obj.foo);
// console.log(obj.foo === data);

// obj.foo.y += '_ Hello';
// data.y += ' World'

// data.y++;
// console.log(obj.foo);




// ----------------------------------------------------------

// console.log(data);

// data.run = function(speed) {
//     console.log('run with, speed = ' + speed);
// } // methods

// data.sleep = sleep;

// // run(10);
// sleep(5);
// data.run(20);
// data.sleep(3);



// function sleep(time) {
//     console.log('I sleep ' + time + ' hours');
// }



// -------------------------


// var arr = [1, 2, 3, 4],
//     list = new Array(2, 8, 3);

// console.log(arr, { id:10, name: 'value', foo: false });

// console.log(arr.__proto__);
// console.log(Array.prototype);
// console.log(arr.__proto__ === Array.prototype);

// var obj = {
//     x: 10,
//     y: 20,
//     run: function() {
//         console.log('run');

//         // return 10;
//     }
// }


// var newObject = Object.create(obj);

// newObject.foo = 305;

// console.log(newObject);


// console.log('has property?', newObject.hasOwnProperty('foo'), newObject.hasOwnProperty('x') );
// console.log('is prototype', obj.isPrototypeOf(newObject));



// var info = {
//     list: [],
//     id: 1123,
//     name: 'FooName',
//     desc: {
//         title: '',
//         size: 203,
//         desc: {

//         }
//     }
// }



// for(var item in info) {
//     console.log(info[item]);
// }