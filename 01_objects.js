/*
    JS обьекты;
    ▪ Свойства, методы, прототип обьекта;
    ▪ Оператор new, немного про this;
    ▪ Реализовываем ООП в прототипно-ориентированном JS (для начинающих).
*/




var obj = {};
var data = new Object();

// var info = {
//     list: [],
//     id: 1123,
//     name: 'FooName',
//     desc: {
//         title: '',
//         size: 203
//     }
// }

// obj.x = 10;
// data.y = 300;

// obj.foo = data;

// console.log(obj);
// console.log(obj.foo);
// console.log(obj.foo === data);

// data.y++;
// console.log(obj.foo);




// ----------------------------------------------------------

// data.run = function(speed) {
//     console.log('run with, speed = ' + speed);
// }

// data.sleep = sleep;

// // run(10);
// data.run(10);
// data.sleep(3);



// function sleep(time) {
//     console.log('I sleep ' + time + ' hours');
// }



// -------------------------


// var arr = [1, 2, 3, 4],
//     list = new Array(2, 8, 3);

// console.log(arr.__proto__);
// console.log(Array.prototype);
// console.log(arr.__proto__ === Array.prototype);

// var obj = {
//     x: 10,
//     y: 20,
//     run: function() {
//         console.log('run');
//     }
// }


// var newObject = Object.create(obj);

// newObject.foo = 305;

// console.log(newObject);


// console.log('has property?', newObject.hasOwnProperty('foo'), newObject.hasOwnProperty('x') );
// console.log('is prototype', obj.isPrototypeOf(newObject));