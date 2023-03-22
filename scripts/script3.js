// const strings = ['My', 'name', 'is', 'Jone'];

// for (const string of strings) {
//     console.log(string);
// }
// console.log(strings.join())

// const numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//     // if (i % 2 === 0)

//     // if (i === 2 || i === 4) {
//     //     continue;
//     // }
//     if (i === 2) {
//         break;
//     }
//     console.log(numbers[i]);
// }

// const genres = ['Jazz', 'Blues'];

// genres.push('Рок-н-рол');


// console.log(genres);

// console.log(genres[0]);
// console.log(genres[genres.length - 1]);

// console.log(genres.shift());
// console.log(genres);

// genres.unshift('Country', 'Reggae');

// console.log(genres)





// const vaiues = '8 11';

// const result = vaiues.split(" ");

// console.log(result);

// console.log(Number(result[0]) * Number(result[result.length - 1]));



// const names = 'Jacob,William,Solomon,Artemis';

// const phones = '8900123,8900456,8900789,8900000';

// const resultNames = names.split(",");

// const resultPhones = phones.split(",");

// // console.log(resultNames, resultPhones)

// for (let i = 0; i < resultNames.length; i++) {
//     console.log(resultNames[i], resultPhones[i]);
// }


// const string = 'Welcome to the future';

// console.log(string);

// const words = string.split(' ');

// console.log(words);

// for (let i = 0; i < words.length; i++) {
//     if (i === 0 || i === words.length - 1) {
//         continue;
//     }

//     console.log(words[i]);

// }

// console.log(words.slice(1, -1).join(' '));


// const string = 'Welcome to the future';
// const words = string.split('');
// const reverseArray = words.reverse();

// const result = reverseArray.join('');

// console.log(result);

// const numbers = [2, 17, 94, 4, 23, 37];

// let min = numbers[0];

// for (const number of numbers){
//     if (min > number) {
//         min = number;
//     }
// }

// console.log(min);


// SLUG long and short

// const title = 'Top 10 benefits of React framework';

// // console.log(title);

// const normalizeTitle = title.toLowerCase();

// // console.log(normalizeTitle);

// const words = normalizeTitle.split(' ');

// // console.log(words);

// const slug = words.join('-');

// // console.log(slug);


// // short

// const slug1 = title.toLowerCase().split(' ').join('-');

// console.log(slug1);

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

const numbers = array1.concat(array2);

for (const number of numbers) {
total += number;
}

console.log(total);
