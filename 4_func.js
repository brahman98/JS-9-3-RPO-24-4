// ФУНКЦИИ JAVASCRIPT

// function sayHello() {
//     console.log("Привет!")
// }

// sayHello();

// function sayHello(name, age) {
//     console.log(`Привет, ${name}. Ваш возраст ${age}.`);
//     console.log("Привет, " + name + ". Ваш возраст " + age);
// }

// sayHello("Viktor", 27);

// function sum(a, b) {
//     return a + b;
// }
// // multuply

// const result = sum(10, 20);
// console.log(result);
// console.log(sum(10, 20));

// function test() {
//     console.log("Первое сообщение");
//     return 10;
//     console.log("Второе сообщение");
// }

// test();

// function checkAge(age) {
//     if (age >= 18) {
//         return "Доступ разрешен";
//     } else {
//         return "Доступ запрещен"
//     }
//     console.log("Этот текст никогда не увидим");
// }

// console.log(checkAge(17));
// console.log(checkAge(18));

// Локальные переменные
// function calculate() {
//     const number = 10;
//     console.log(number);
// }
// calculate();

// Плохой пример, переменная созданная внутр функции
// вызывается вне функции
// function calculate() {
//     const number = 10;
// }
// console.log(number);
// calculate()

// function getRandomNumber() {
//     return Math.floor(Math.random() * 10);
// }
// const number = getRandomNumber();
// console.log(number);

let rand = Math.random();
console.log(rand);
console.log(Math.floor(rand ** 10));
console.log(Math.floor(rand));

// Задание
// калькулятор
// Создать функцию, которая принимает два числа
// и возвращает результат умножения, деления,
// сложения, вычитания, остаток от деления %,
// возведение в степень **
// Вывести сообщение в консоль с результатами
// всех вычислений красиво, подписать где что

// num1 = +prompt("enter num");
// num2 = prompt("enter num");
// console.log(typeof num1);
// console.log(typeof num2);

