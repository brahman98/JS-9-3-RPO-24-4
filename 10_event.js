// ОБРАБОТЧИК СОБЫТИЙ В JAVASCRIPT
// click
// dblclick
// mouseover
// mouseout
// keydown
// keyup
// input
// change
// submit

const button = document.getElementById("myButton");

// button.addEventListener("click", function() {
//     alert("Кнопка нажата");
// })

const title = document.getElementById("title");
button.addEventListener("click", function() {
    title.textContent = "Произошло нажатие на кнопку";
})

const counter = document.getElementById("counter");
const increase = document.getElementById("increase");

let count = 0;

increase.addEventListener("click", function(){
    count++;
    count++;
    counter.textContent = count;
})

// mouseover + mouseout
const block = document.getElementById("block");
block.addEventListener("mouseover", function() {
    block.style.backgroundColor = "orange";
})
block.addEventListener("mouseout", function() {
    block.style.backgroundColor = "#68ed68";
    block.style.width = "350px";
})

// keyboard
const input = document.getElementById("keyboard");
input.addEventListener("keydown", function(event){
    console.log("Нажата клавиша", event.key)
    console.log(event.target)
})
// input
const result = document.getElementById("paragraph");
input.addEventListener("input", function(){
    result.textContent = input.value;
})

// еще методы
// getElementById("title")
// getElementsByClassName("text")
// getElementsByTagName("p")
// querySelector("div") // tagname
// querySelector(".text") // classname
// querySelector("#text") // id
// querySelectorAll(".text")



// САМОСТОЯТЕЛЬНАЯ РАБОТА
// ПО ОБРАБОТЧИКУ СОБЫТИЙ
// ЗАДАНИЕ 1
// ИЗМЕНЕНИЕ ЦВЕТА
// Создать кнопку. При нажатии на нее
// цвет фона страницы должен меняться на случайный

// ЗАДАНИЕ 2
// Создать три кнопки:
// -увеличить -уменьшить -сбросить
// Рядом отображать текущее значение счетчика

// ЗАДАНИЕ 3
// Создать поле ввода input и текст <p>
// При вводе текста количество символов
// должно автоматически обновляться

// ДОМАШНЕЕ ЗАДАНИЕ
// Разработать мини-приложение «Интерактивный профиль».
// На странице должны быть:
// Поле ввода имени.
// Кнопка «Показать профиль».
// Блок, в котором отображается имя.
// Кнопка «Изменить цвет».
// Счётчик нажатий на кнопку.
// Поле ввода, которое показывает количество введённых символов.
// Требования:
// Использовать addEventListener().
// Использовать минимум три разных типа событий.
// Использовать getElementById().
// Изменять содержимое HTML через JavaScript.
// Не использовать обработчики onclick непосредственно в HTML.
