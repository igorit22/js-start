// const add = function (x, y) {
//     console.log(x);
//     console.log(y);

//     return x + y;
// }

// const r = add(5, 4);
// console.log('r: ', r);

const fn = function (value) {
    console.log(1);
    console.log(2);

    if (value < 50) {
        return 'Меньше чем 50';
    }

    // else - можно не использовать.

    return 'Больше чем 50';
}

console.log('Результат функции: ', fn(10));

console.log('Результат функции: ', fn(1000));