// const age = 18;

// console.log('Вік:', age, 'років')

// let x;
// x = 5;
// x = 25;
// console.log(x);
// alert(x)

// const answerUser = confirm('Вы согласны с условиями?');

// console.log(answerUser);

// let age = prompt('Скільки вам років?');
// // age = Number(age);
// console.log(age);
// console.log(typeof age);

// let cost = 1500.156789;

// console.log(cost.toFixed(3));

// console.log(typeof cost);

// let num1 = prompt('Введіть число:');

// num1 = Number(num1);

// console.log(typeof num1);

// let num2 = prompt('Введіть ступінь до якої вивести:');

// num2 = Number(num2);

// const rezult = (num1 ** num2);

// console.log(rezult);

// const max = 50;
// const min = 10;

// const rezult = (Math.random() * (max - min) + min);

// // console.log(rezult);

// // console.log(Math.round(rezult));

// console.log(Number.parseInt(rezult));

// Change code below this line

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = ((pricePerDroid * orderedQuantity) + deliveryFee);
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// function sayHi() {
//     console.log("Hello, this is my first function!");
// }
// sayHi();

// Change code below this line
// function add(a, b, c) {
//     console.log(`Addition result equals ${a + b + c}`);
//     // Change code above this line
//   }

//   add(15, 27, 10);
//   add(10, 20, 30);
//   add(5, 10, 15);

// function makeMessage (name, price) {
//     // Change code below this line
//      let message = `You picked ${name}, price per item is ${price} credits`;
//     // Change code above this line
//     return message;
// }
// console.log(makeMessage('Radar', 6150));
// console.log(makeMessage('Scanner', 3500));
// console.log(makeMessage('Reactor', 8000));
// console.log(makeMessage('Engine', 4070));

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//     // Change code below this line
//     const totalPrice = orderedQuantity * pricePerItem;

//     // Change code above this line
//     return totalPrice;
//   };

//   console.log(calculateTotalPrice(5, 100));
//   console.log(calculateTotalPrice(8, 60));
//   console.log(calculateTotalPrice(3, 400));
//   console.log(calculateTotalPrice(1, 3500));
//   console.log(calculateTotalPrice(12, 70));
//   console.log(calculateTotalPrice(5, 100));

// function makeOrderMessage(
//   orderedQuantity,
//   pricePerDroid,
//   deliveryFee
// ) {
//   // Change code below this line
//   let message = `You ordered droids worth ${
//     orderedQuantity * pricePerDroid + deliveryFee
//   } credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   // Change code above this line
//   return message;
// }

// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));


// function checkAge(age) {
//   let message;

//   if (age => 18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;

  
// console.log(message)
// }

// console.log(message)




// function checkStorage(available, ordered) {
//   let message;
  
//   if (ordered === 0) { // Change this line
//     message =  'There are no products in the order!';
//   } else if (ordered > available) { // Change this line
//     message = 'Your order is too large, there are not enough items in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }
  
//   return message;
// }




    // function getDiscount(totalSpent) {
    //   const BASE_DISCOUNT = 0;
    //   const BRONZE_DISCOUNT = 0.02;
    //   const SILVER_DISCOUNT = 0.05;
    //   const GOLD_DISCOUNT = 0.1;
    //   let discount;
      
    // if (totalSpent >= 50000){discount = GOLD_DISCOUNT;}
            
    //     else if (totalSpent >= 20000) {discount = SILVER_DISCOUNT;}
            
    //     else if (totalSpent >= 5000)
    //         {discount = BRONZE_DISCOUNT;}
    //     else {discount = BASE_DISCOUNT;}
            
    //   return discount;

    // }
    //       console.log(getDiscount(146900))

    // function checkPassword(password) {
    //   const ADMIN_PASSWORD = "jqueryismyjam";
    //   let message;
    
    // switch (password) {
    //   case null:
    //     message = "Canceled by user!";
    //     break;
    
    //   case ADMIN_PASSWORD:
    //     message = "Welcome!";
    //     break;
    
    //   default:
    //     message = "Access denied, wrong password!";
    
      
    // }
    
    //     return message;
    // }




    // function getShippingCost(country) {
    //   let message;
    //   let price;
      
    //   switch (country) {
    //   case "China":
    //   price = 100;
    //   message = `Shipping to ${country} will cost ${price} credits`;
    //   break;
    //   case "Chile":
    //   price = 250;
    //   message = `Shipping to ${country} will cost ${price} credits`;
    //   break;
    //   case "Australia":
    //   price = 170;
    //   message = `Shipping to ${country} will cost ${price} credits`;
    //   break;
    //   case "Jamaica":
    //   price = 120;
    //   message = `Shipping to ${country} will cost ${price} credits`;
    //   break;
    //   default:
    //   message = "Sorry, there is no delivery to your country";
    //   }
      
    //   return message;
      
    //   }

// const people = ['Tom', 'Jak', 'Mike'];

// console.table(people);

// const lastIndex = people.length - 1;
// console.log(lastIndex)

// const a = [1, 2, 3, 4, 5]
// const b = a;

// console.log(a);
// console.log(b);

// a[2] = 333;
// b[3] = 4444;

// console.log(a);
// console.log(b);


// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// console.table(friends);

// const lastIndex = friends.length -1;

// for (let i = 0; i <= lastIndex; i +=1) {
//   console.log(friends[i]);
// }



// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// console.table(friends);

// const lastIndex = friends.length -1;

// for (let i = 0; i <= lastIndex; i +=1) {
//   friends[i] += '-1';

// }

// console.table(friends);

// Задачи

// *
// * Посчитать общую сумму покупок в корзине
// *

// const cart = [54, 28, 105, 70, 92, 17, 120];

// // 2 сделать переменную total до цикла
// let total = 0;

// // 1 перебрать массив

// for (let i = 0; i < cart.length; i += 1) {
//   // console.log(cart[i]);

// // 3 каждый элемент приплюсовать к total

//   total = total + cart[i];
// }

// console.log('Total: ', total);


// //  Можно сделать короче используя for of если не нужно перебирать массив и что-то в нем менять (добавить скидку или налоги)

// const cart2 = [54, 28, 105, 70, 92, 17, 120];

// let total2 = 0;


// for (const value of cart2) {
//   total2 += value;

// }

// console.log('Total: ', total2);


// Напиши скрипт который подсчитывает сумму всех чётных чисел в масиве.

// const numbers = [1, 5, 8, 12, 4, 15, 27, 30, 18, 11];

// // 1 переменная тотал

// let total = 0;

// // 2 перебрать массив

// for (let i =0; i < numbers.length; i += 1) {



// // 3 на каждой итерации проверить элемент на чётность
// if (numbers[i] % 2 === 0) {


// // // 3 на каждой итерации проверить элемент на нечётность - !!!!! пример.
// // if (numbers[i] % 2 !== 0) {

// // 4 если четный плюсуем к тотал

//   total += numbers[i]
// }
// }

// console.log('Total: ', total)


// Тоже самое только короче и через for of

// const numbers = [1, 5, 8, 12, 4, 15, 27, 30, 18, 11];

// let total = 0;

// for (const number of numbers) {
//   console.log(number);

//   if (number % 2 === 0) {
    
//     total += number;
//   }
// }

// console.log('Total: ', total);


// * Напиши скрипт поиска логина
// * - Если логина нет, вивести сообщение "Пользователь [логин] не найден."
// * - Если логин нашли, вивести сообщение "Пользователь [логин] найден."
// *
// * - Сначала через for
// * - Потом через for...of
// * - Логика break
// * - Метод includes() с тернарным оператором

const logins = ['kiugiyouh98y', 'utftr7e43wed', 'uitf534', '878uji'];
const loginToFind = 'uitf534';
// let message = `Пользователь ${loginToFind} не найден.`;

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   if (login !== loginToFind) {
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//   }
// }

// * - Или через for...of


// for (const login of logins) {
//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//   }
// }

// console.log(message);


// * - Или через includes

const message = logins.includes(loginToFind)
? `Пользователь ${loginToFind} найден.`
: `Пользователь ${loginToFind} не найден.`;



console.log(message);