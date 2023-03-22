// *
// * Напиши скрипт поиска самого маленького числа в массиве,
// * при условии что числа уникальные (не повторяются).
// *

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     console.log(number);

//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }

// console.log('smallestNumber: ', smallestNumber);

// Напиши скрипт поиска самого большого числа в массиве

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let bigestNumber = numbers[0];

// for (const number of numbers) {
//     console.log(number);

//     if (number > bigestNumber) {
//         bigestNumber = number;
//     }
// }

// console.log('bigestNumber: ', bigestNumber);


// *
// * Напиши скрипт, который обьединяет все элементы массива в одно строковое значение.
// * Элементов может быть произвольное кол-во.
// * Пусть элементы массива в строке будут разделены запятой.
// * - Сначала через for
// * - потом через join()
// *

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// let string = '';

// for (const friend of friends) {
//     string += friend + ',';
// }

// string = string.slice(0, string.length - 1);

// console.log(string);
// Должно получится 'Mango,Poly,Kiwi,Ajax'


// *** Или методом  join() тоже самое.


// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// const string = friends.join(','); 
// console.log(string);


/*
* Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
* Например, если строка "JavaScript", то на выходе должна быть строка "jAVAsCRIPT".
*/

const string = 'JavaScript';
const letters = string.split('');
let invertedString = '';

console.log(letters);

for (const letter of letters) {

console.log(letter);

    // if (letter === letter.toLowerCase()) {
    //     console.log('Эта буква в нижнем регистре! - ', letter);

    //     invertedString += letter.toUpperCase();

    // } else {
    //     console.log('Эта буква в верхнем регистре! - ',  letter);
    //     invertedString += letter.toLowerCase();
    // }
    

    // Можно заменить на тернарник //

    invertedString += 
    letter === letter.toLowerCase()
    ? letter.toUpperCase()
    : letter.toLowerCase();
}
console.log("invertedString: ", invertedString);