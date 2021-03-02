let fruits = ["груши", "бананы", "яблоки"];
// ----------------------------------------------------------------------------
// метод pop-Удаляет последний элемент из массива и возвращае массив:
let picked = fruits.pop();
        console.log("Вы забрали с конца корзины " + picked);
        console.log( `${"В корзине остались"} ${fruits}`);

// ----------------------------------------------------------------------------
// метод push - Добавляет элемент в конец массива:
let picked = fruits.push("апельсины");
    console.log(`${"Вы добавили в конец корзины"} ${picked} ${"фрукта"}`);
    console.log(`${"В корзине лежит"} ${fruits}`);
// ----------------------------------------------------------------------------
//метод shift-Удаляет из массива первый элемент и возвращает массив:
let picked = fruits.shift();
    console.log(`${"Вы забрали с начала корзины"} ${picked}`);
    console.log(`${"В корзине остались"} ${fruits}}`);
// ----------------------------------------------------------------------------
// метод unshift-Добавляет элемент в начало массива:
let picked = fruits.unshift("помидор");
     console.log(`${"Вы добавили в начало корзины"} ${picked} ${"товара"}` );
     console.log(`${"В корзине лежит"} ${fruits}`);

// Методы push и unshift могут добавлять сразу несколько элементов:
// ----------------------------------------------------------------------------
// Метод split() применяется для трансформации строки в массив. Split разделяет строку (string) по указаному параметру.

let str = 'груша, бананы, яблоки';  // это строка
let picked = str.split(', ');
    console.log( picked );
 // ----------------------------------------------------------------------------   
// Метод slice() создаёт новый массив, в который копирует элементы из источника начиная с
// элемента c индексом первого параметра переданного в метод, до элемента с индексом второго параметра.
// Если в slice() передан параметр с отрицательным значением, то он возвращает новый массив 
// с количеством элементов указанных в параметре, но уже взятых с конца исходного массива.
// Метод slice не изменяет исходный массив.

let arr = ['груша', 'банан', 'яблоко', 'перец', 'картошка'];

// Вернёт массив в котором будут элементы с индексами от 2 до 5
console.log( arr.slice(2, 5) );  // → [ 'яблоко', 'перец', 'картошка' ]

// Вернёт новый массив в котором будут элементы с индексами от 3 до arr.length
console.log( arr.slice(3) );  // → [ 'перец', 'картошка' ]

// Вернёт копию исходного массива
console.log( arr.slice() );  // → ['груша', 'банан', 'яблоко', 'перец', 'картошка']

// Вернёт новый массив состоящий из последних трёх элементов исходного
console.log( arr.slice(-3) );  // → [[ 'яблоко', 'перец', 'картошка' ]
// ----------------------------------------------------------------------------
// Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
// Синтаксис
 array.splice(start, deleteCount[, item1[, item2[, ...]]])

// start - Индекс, по которому начинать изменять массив. Если больше длины массива, реальный индекс будет установлен на длину массива. 
// Если отрицателен, указывает индекс элемента с конца.
// deleteCount - Целое число, показывающее количество старых удаляемых из массива элементов. Если deleteCount равен 0, элементы не удаляются. 
// В этом случае вы должны указать как минимум один новый элемент. 
// Если deleteCount больше количества элементов, оставшихся в массиве, начиная с индекса start, то будут удалены все элементы до конца массива.
// itemN - Необязательные параметры. Добавляемые к массиву элементы. Если вы не укажете никакого элемента, splice() просто удалит элементы из массива.

let arr = ['груша', 'яблоко', 'персик', 'банан', 'помидор', 'редька', 'киви'];

let picked  = arr.splice(2, 3);
arr.splice(2, 3);

    console.log(picked);  // → [ 'персик', 'банан', 'помидор' 
    console.log( arr );  // → [ 'груша', 'яблоко' ]

    arr.splice( 1, 0, 'яблоко', 'персик', 'помидор');
    console.log( arr );  // → [ 'груша', 'яблоко', 'персик', 'помидор', 'яблоко' ]
// ----------------------------------------------------------------------------
// Метод reverse() меняет порядок элементов массива на обратный. 
// В результате первый элемент массива становится последним, а последний элемент — первым

let arr = ['груша', 'яблоко', 'персик', 'банан', 'помидор'];
    console.log( arr.reverse() );  // → [ 'помидор', 'банан', 'персик', 'яблоко', 'груша' ]
    console.log( ['персик', 'банан', 'помидор'].reverse() );  // → [ 'помидор', 'банан', 'персик', 'яблоко', 'груша' ]
// ----------------------------------------------------------------------------
// Метод map() проходит по элементам массива производя с ними заданные действия и возвращает копию массива с изменёнными элементами.
let arr = [7, 2, 15, 4, 31];
let testMap = arr.map((element, index) => element + index);
    console.log( testMap ); // [7, 3, 17, 7, 35]

let arr = [7, 2, 15, 4, 31];
let testMap = arr.map(a => a * 12);
    console.log( testMap ); // → [84, 24, 180, 48, 372]

// ----------------------------------------------------------------------------
//  Метод filter() используется для фильтрации массивов. Он проходит по массиву, возвращая только те элементы, которые проходят заданное условие.

let arr = [17, 44, -3, 297, 5, 21, -73, 555];
let testFilter = arr.filter(element => element >= 21);
    console.log( testFilter ); // → [ 44, 297, 21, 555 ]

// let testFilter2 = arr.filter( function(element) {
//     return element >= 21 
// })
// console.log(testFilter2);
 // ----------------------------------------------------------------------------   
 let arr = [3, 44, 297, 5, 21];
 let summa = arr.reduce((acc, element) => acc + element);
    console.log( summa ); // → 370
 // ----------------------------------------------------------------------------   
//  Метод sort() применяется для сортировки элементов массива согласно заданным параметрам.
let arr = [5, 4, 10, 2, 32, 4, 10];
let testSortArr = arr.sort((a, b) => a - b);
    console.log( testSortArr ); // → [2, 4, 4, 5, 10, 10, 32]
// ----------------------------------------------------------------------------  

let animal = 'dog';
const animals = ['cat', 'dog', 'lion', 'horse'];

if ( animals.includes(animal) ) {
    console.log("It's true")
}

  