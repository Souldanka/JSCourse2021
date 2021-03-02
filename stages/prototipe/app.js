"use strict"

let str = "some";
let strObj = new String(str);

    console.log(typeof(str));
    console.log(typeof(strObj));

console.log([1, 2, 3]);

const solder = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hi, capitan");
    }

};
// new 2
const John = Object.create(solder);
    John.sayHello();
// new 2 end


const John = {
    health: 100
}

// Устаревший формат 

John.__proto__ = solder;
    console.log(John);
    console.log(John.armor);
    John.sayHello();

// Новый формат
// Object.setPrototypeOf
Object.setPrototypeOf(John, solder);
        console.log(John);
        console.log(John.armor);
        John.sayHello();

// Полифил - альтернативная запись нового кода в старый





