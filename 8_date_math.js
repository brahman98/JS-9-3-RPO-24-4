// ОБЪЕКТЫ DATE И MATH

// DATE
// const now = new Date();
// console.log(now);
// console.log(typeof now);

// console.log(now.getDate());
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());
// console.log(now.get);

// const birthday = new Date(1998, 9, 24, 14, 20, 10);
// console.log("BIRTHDAY", birthday);

// const date = new Date("2026-11-05");
// console.log(date);

// const day = String(birthday.getDate()).padStart(2, "0");
// const month = String(birthday.getMonth() + 1).padStart(2, "0");
// const year = birthday.getFullYear();
// console.log(`${day}, ${month}, ${year}`);

// const now2 = new Date();
// console.log(now2.toLocaleDateString("ru-RU"));
// console.log(now2.toLocaleDateString("en-EN"));
// console.log(now2.toLocaleTimeString("ru-RU"));

// console.log(now.getTime());

// // сравнение дат
// const date1 = new Date("2026-01-01");
// const date2 = new Date("2026-12-31");
// if (date1 < date2) {
//     console.log("Первая дата раньше второй (вторая больше первой)");
// }
// console.log((date2 - date1) / (1000 * 60 * 60 * 24));


// MATH
// console.log(Math);
// // методы MATH
// // округление
// console.log(Math.round(4.6));
// console.log(Math.round(4.5));
// console.log(Math.round(4.4));

// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));
// console.log(Math.trunc(4.19911919));

// // минимум и максимум
// console.log(Math.min(4, 1, 9, 3, 7, 11));
// console.log(Math.max(4, 1, 9, 3, 7, 11));
// // ... spread оператор - распаковать массив
// const nums = [33, 11, 22, 88, 77, 55, 44, 99];
// console.log(Math.min(...nums));
// console.log(Math.max(...nums));

// // возвести в степень число
// console.log(Math.pow(2, 4));
// console.log(2 ** 5);
// // корень числа
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(33));
// // случайное число
// console.log(Math.random());
// console.log(Math.random() * 10 + 1);
// console.log(Math.trunc(Math.random() * 10 + 1));
// console.log(Math.floor(Math.random() * 100 + 1));
// // получение случайного числа в диапазоне
// const min = 10;
// const max = 30;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// ПРАКТИКА с преподавателем
// Задание 1
// Информация о текущей дате и времени
// const now = new Date();
// console.log("Дата:", now.toLocaleDateString("ru-RU"));
// console.log("Время:", now.toLocaleTimeString("ru-RU"));

// Задание 2
// Возраст пользователя
// Попросить пользователя ввести год рождения.
// Рассчитать примерный возраст
// const birthYear = +prompt("Введите год родждения:");
// const currentYear = new Date().getFullYear();
// const age = currentYear - birthYear;
// console.log("Ваш возраст:", age);

// Задание 3
// Калькулятор скидки
// Пользователь вводит стоимость товара
// Программа случайным образом назначаet скидку
// от 5 до 30% и рассчитывает итоговую стоимость

// const price = +prompt("Введите стоимость товара:");
// if (price > 0) {
//     const discount = (Math.floor(Math.random() * (30 - 5 + 1)) + 5);
//     const finalPrice = price - price * (discount / 100);
//     console.log("Скидка:", discount + "%");
//     console.log("Итоговая цена:", Math.round(finalPrice), "руб.");
// } else {
//     console.log("Некорректная цена (не может быть отрицательное число)");
// }

// САМОСТОЯТЕЛЬНАЯ РАБОТА
// ЗАДАНИЕ 1
// Сколько дней до Нового года?
// Получить текущую дату и вычислить,
// сколько дней осталось до следующего 1 января
// console.log((date2 - date1) / (1000 * 60 * 60 * 24));

// ЗАДАНИЕ 2
// Найти самое большое число
// Создать массив из 10 случайных чисел 
// в диапазоне от 1 до 100
// Найти минимальное и максимальное число
// с помощью Math

// ЗАДАНИЕ 3
// Игральный кубик
// Создать программу, которая имитирует бросок
// шестигранного кубика. При каждом броске 
// выводится случайное число от 1 до 6

// ДОМАШНЯЯ РАБОТА
// ЗАДАНИЕ 1
// Напишите программу, которая выводит
// текущий год, месяц, день месяца и день недели

// ЗАДАНИЕ 2
// Попросить пользователя ввести год рождения,
// месяц и день рождения. Рассчитать его точный возраст.

// ЗАДАНИЕ 3
// Улучшить игру в кубик.
// Создать имитацию броска двух игральных кубиков
// для двух игроков. Каждый игрок кидает кубик 3 раза.
// Выведите оба результата и кто победил.
