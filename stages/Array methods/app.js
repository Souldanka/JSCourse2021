let fruits = ["груши", "бананы", "яблоки"];

// метод pop-Удаляет последний элемент из массива и возвращае массив:
let picked = fruits.pop();
        console.log("Вы забрали с конца корзины " + picked);
        console.log( `${"В корзине остались"} ${fruits}`);


// метод push - Добавляет элемент в конец массива:
let picked = fruits.push("апельсины");
    console.log(`${"Вы добавили в конец корзины"} ${picked} ${"фрукта"}`);
    console.log(`${"В корзине лежит"} ${fruits}`);

//метод shift-Удаляет из массива первый элемент и возвращает массив:
let picked = fruits.shift();
    console.log(`${"Вы забрали с начала корзины"} ${picked}`);
    console.log(`${"В корзине остались"} ${fruits}}`);

// метод unshift-Добавляет элемент в начало массива:
let picked = fruits.unshift("помидор");
     console.log(`${"Вы добавили в начало корзины"} ${picked} ${"товара"}` );
     console.log(`${"В корзине лежит"} ${fruits}`);

// Методы push и unshift могут добавлять сразу несколько элементов:





  