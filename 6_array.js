// МАССИВЫ И МЕТОДЫ ARRAY B JAVASCRIPT

// const students = ["Давид", "Никита", "Артем", "Иван", "Давид", "Никита", "Артем", "Иван"];
// console.log(students);

// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(students[0]) // первый элемент массива
// console.log(students.length) // длина массива
// console.log(students[students.length - 1]) // последний элемент списка

// изменение элемента массива
// students[1] = 'Данил';
// console.log(students)

// МЕТОДЫ МАССИВА ДЛЯ ДОБАВЛЕНИЯ И УДАЛЕНИЯ ЭЛЕМЕНТОВ
// const fruits = ["apple", 'banana', `pineapple`, 'pomelo', 'qiwi'];
// console.log(fruits);
// fruits.push('avocado'); // добавить элемент в конец массива
// console.log(fruits);
// fruits.unshift('orange'); // добавить элемент в начало массива
// console.log(fruits);
// fruits.pop(); // удалить последний элемент
// console.log(fruits);
// fruits.shift(); // удалить первый элемент
// console.log(fruits);

// ПЕРЕБОР МАССИВА С ПОМОЩЬЮ ЦИКЛА FOR
// for (let i = 0; i < fruits.length; i++) {
//     console.log(i + fruits[i])
// }

// for of
// for (let fruit of fruits) {
//     console.log("+" + fruit)
// }

// ПОИСК ЭЛЕМЕНТА В МАССИВЕ - includes() и indexOf()
// console.log(fruits.includes("apple"));
// console.log(fruits.includes("orange"));

// console.log(fruits.indexOf('apple'));
// console.log(fruits.indexOf('orange'));

// Задание - проверить через if наличие фрукта в массиве
// запросить название фрукта у пользователя
// если фрукт есть - вывести его индекс и название
// если фрукт не найден - сообщить об этом в консоли

// const fruits = ["apple", 'banana', `pineapple`, 'pomelo', 'qiwi'];

// const fruit = prompt("Введите текст"); 

// if (fruits.includes(fruit)) {
//     console.log("Ваш фрукт под индексом: " + fruits.indexOf(fruit));
// } else {
//     console.log("Ваш фрукт не найден");
// }

// СОРТИРОВКА МАССИВА
const students = ["Давид", "Никита", "Артем", "Иван"];

students.sort();
console.log(students);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [1, 11, 2, 3, 13, 4, 5, 15, 6, 7, 8, 9, 10];
// по возрастанию
numbers2.sort((a, b) => a - b);
console.log(numbers2);
// по убыванию
numbers2.sort((a, b) => b - a);
console.log(numbers2);

// ПРАКТИКА
// ЗАДАНИЕ 1 - список оценок
// Создайте массив из пяти оценок
// Выведите первую оценку, последнюю оценку и количество оценок

// ЗАДАНИЕ 2 - список покупок
// Создать массив покупок. 
// Добавить 2 новых товар в конец, удалить последний товар и первый.
// Вывести итоговый массив

// ЗАДАНИЕ 3 - сумма чисел
// Создайте массив чисел и посчитайте их
// сумму с помощью цикла
