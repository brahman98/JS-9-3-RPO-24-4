// ОБЪЕКТЫ

// const car = {
//     name: "BMW",
//     price: 35000,
//     engine: 5,
//     color: ["Черный", "Белый", "Серый", "Красный"],
//     city: {
//         sochi: true,
//         krasnodar: true,
//         rostov: false,
//     }
// }

// console.log(car.name);

// const property = "price";
// console.log(car[property]);

// car.price = 25000;
// console.log(car.price)

// car.year = 2015;
// console.log(car.year)

// delete car.engine;
// console.log(car)

// console.log(car.color[0]);
// console.log(car.city.sochi);


// МЕТОДЫ ОБЪЕКТА
const user = {
    name: "Viktor",
    age: 27,
    sayHello: function() {
        console.log("Привет, мое имя " + this.name)
    },
    sayHello() {
        console.log(`Привет, мое имя ${this.name}`)
    }
}

// user.sayHello();

// ПЕРЕБОР СВОЙСТВ ОБЪЕКТА
// for (const key in user) {
//     console.log(key, user[key]);
// }

// мини-задание 1
// создать объект person/man
// задать ему свойства 5шт
// и 2 метода

// мини-задание 2
// создать объект product - карточка товара
// изменить цену и вывести информацию из свойств (значения)


// САМОСТОЯТЕЛЬНАЯ РАБОТА
// ЗАДАЧА 1
// Создать объект с именем, фамилией, возрастом, профессией.
// Вывести данные через консоль.
// Изменить профессию и добавить новое свойство country (страна)

// ЗАДАЧА 2
// Создать объект товара с названием, ценой и количеством.
// Написать метод getTotal(), который возвращает общую стоимость
// товара с учетом количества.

// ЗАДАЧА 3
// Создать объект автомобиля с маркой, моделью и годом выпуска.
// Добавить метод showInfo(), который выводит полную информацию
// о машине, используя this.

// ЗАДАЧА 4
// Создать объект с четырься свойствами.
// Используя for...in, вывести все имена свойств и их значения

