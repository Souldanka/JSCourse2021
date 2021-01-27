"use srict"

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error!');
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else{
    console.log('Ok!');
};

// Тернарный оператор

(num === 50) ? console.log('Ok!') : console.log('Error!');

const num1 = 50;
switch (num1) {
    case 49: 
        console.log('Hеверно');
        break;
    case 100:
        console.log('Неверное');
        break;
    case 50:
            console.log('В точку!');
            break;
    default:
        console.log('Верного ответа нет!');
            break;
};