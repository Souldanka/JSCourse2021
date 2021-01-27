"use strict"

let num = 50;

// 1 цыкл

while (num <= 55) {
    console.log(num);
    num++;
};

// 2 цыкл

do {
    console.log(num);
    num++;
}
while (num < 55);

// 3 цыкл

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // break;
        continue;
    }
    console.log(i);

}