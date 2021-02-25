"use strict";

// //При запуске  функции создается this

// // this это это контекст вызова функции
// // Контекст - это обьект 

// // call, apply сразу вызывают функцию 



// //1) Обычная функция: this = window, но если стоит  use strict, то будет undefined
// //2) Контекст у методов обьекта - сам обьект
// //3) this в конструкторах и классах - это новый экземплял обьекта
// //4) Ручная привязка this: call, apply, bind

// function showThis() {
//     console.log(this);
// }
// showThis();

// //1) Обычная функция: this = window, но если стоит  use strict, то будет undefined

// function showThis(a, b) {
//     console.log(this); // undefined
//     function sum() {
//         console.log(this); // undefined
//         return a + b  ;
//     }
//     console.log(sum());
// }
// // showThis(4, 5);
// console.log(showThis(4, 5));

// // 2) Контекст у методов обьекта - сам обьект

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };
// obj.sum();

// // const obj = {
// //     a: 20,
// //     b: 15,
// //     sum: function() {
// //         function shout() {
// //             console.log(this);
// //         }
// //         shout();
// //     }
// // };
// // obj.sum();  // undefined

// //3) this в конструкторах и классах - это новый экземплял обьекта

// function  User( name, id) {
//     this.name = neme;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log("Hello!" + this.name);
//     };
// }
// let Ivan = new User("Ivan", 23);

// // 4) Ручная привязка this: call, apply, bind

// function sayName () {
//     console.log(this);
//     console.log(this.name);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user); 
// sayName.apply(user);

// //разница в call and apply, когда функция получает дополнительные аргументы
// // синтаксис записи разный
// function sayName (surname) {
//     console.log(this);
//     console.log(`${this.name} ${surname}`)
//     // console.log(this.name + " " + surname);
//     console.log(arguments[1]);
    

// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Koncha' , 'Smith'); // без масства, черех запятую
// sayName.apply(user, ['Koncha', 'Smith']);// с массивом

// //bind создает новую функцию связанную с определенными обьектом

// function count(num) {
//  return this*num;
// }

// const double = count.bind(2);
//     console.log(double(3));
//     console.log(double(14));
// };

// const btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//     // console.log(this);
//     this.style.backgroundColor = 'red';
// })

// //когда у нас идет обработчик события, как колбэк функция, написан 
// //в классическом режиме, наш контекст вызова будет сам элемент на котором произощло событие

// // У стрелочной функции нет своего контекста вызова, она будет брать его
// // у своего родителя

// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this);
//         };
//         say();
//     }
// }
// obj.sayNumber();

// // если бы тут 
// // const say = () => {
// //     console.log(this);
// // };
// // была обычная функция, то say = underfined;
// // Так., как тут стрелочная функция будет ссылаться на обьект

var a = {};
function clear(b) {
    b.b = 2;
    b = null;
}
clear(a)

console.log(a)
console.log(a.b)


var arr  = [1, 2];
var brr = arr;
brr[0] = 42;
console.log(arr[0]); //По ссылкам 

var arr = [1,2]
var brr = arr;
console.log(brr===arr)
brr = [42,43]
console.log(arr[0])

//По ссылкам 


98hfwhweasfpund 