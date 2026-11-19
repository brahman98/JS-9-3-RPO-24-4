// РАБОТА С HTML-ЭЛЕМЕНТАМИ И СОБЫТИЯМИ

// const greenBlock = document.getElementById('green');
// console.log(greenBlock);
// console.log(typeof greenBlock);

// const ps = document.getElementsByClassName('ps')
// console.log(ps);
// console.log(typeof ps);


// ОСНОВНЫЕ СВОЙСТВА HTML-ЭЛЕМЕНТОВ
// textContent - получить/изменить текст
// innerHTML - получить/изменить html содержимое
// value - получить или изменить значение поля ввода
// id - получить/изменить идентификатор
// className - получить/изменить все классы элемента
// style - изменить CSS-стили
// src - изменить источник изображения
// href - изменить адрес ссылки

// создать 3 константы - title, input, image
// поместить туда объекты html разметки по айди - h1, input, img

// const title = document.getElementById('h1');
// const input = document.querySelector('#input');
// const image = document.querySelector('#img');
// const button = document.querySelector('#button');

// let imgLink = "https://fs.top-academy.ru/api/v1/files/wOI1_TWGL9QICQl1dQMGcqzOppph6wOh";

// button.addEventListener("click", () => {
//     image.src = imgLink;
//     image.style.width = "300px";
// })

// button.addEventListener("click", () => {
//     image.src = input.value;
//     image.style.width = "300px";
// })

// добавить рамку и скругление краев через JS

// делаем 2 html элемента и 2 переменные под них в JS
// по нажатию кнопки сделать:
// в один html элемент textContent - <b>text bold</b>
// во второй html элемент innerHTML - <b>text bold</b>
// показать разницу между textContent и innerHTML

// РАБОТА С CSS-КЛАССАМИ

// classList.add() - добавляет класс
// classList.remove() - удаление класса
// classList.toggle() - переключатель класса
// classList.contains() - проверка наличия класса

// const title = document.getElementById('title');
// const button = document.getElementById('btn');

// button.addEventListener("click", () => {
//     title.classList.toggle("active");
// })

// ДОПОЛНИТЕЛЬНЫЕ СВОЙСТВА ОБЪЕКТА EVENT
// event.target - элемент на котором произошло событие
// event.type - тип события
// event.key - нажатая клавиша
// event.clientX - координата мыши по горизонтали
// event.clientY - координата мыши по вертикали
// event.preventDefault() - отменяет стандартное поведение браузера
// event.stopPropagination() - останавливает работу события

// document.addEventListener("click", (event) => {
//     console.log("Тип события:", event.type)
//     console.log("Элемент:", event.target)
//     console.log("Координата Х:", event.clientX)
//     console.log("Координата Y:", event.clientY)
// })


// const link = document.querySelector('a');
// link.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('Переход по ссылке отменен');
// })
// console.log(link.textContent)
// console.log(link)


// ИЗМЕНЕНИЕ HTML-АТРИБУТОВ
// getAttribute() - получить значение атрибута
// setAttribute() - установить или изменить атрибут
// removeAttribute() - удалить атрибут
// hasAttribute() - проверить наличие атрибута

// const photo = document.getElementById('img');
// photo.setAttribute('src', 'https://ru.wikipedia.org/wiki/%D0%A1%D0%BB%D1%83%D1%87%D0%B0%D0%B9%D0%BD%D0%BE%D1%81%D1%82%D1%8C');
// console.log(photo.getAttribute('src'));
// photo.removeAttribute('alt');
// photo.hasAttribute('alt');

// button.setAttribute('disabled', '');

// СОЗДАНИЕ И УДАЛЕНИЕ HTML-ЭЛЕМЕНТОВ
// document.createElement() - создать элемент
// append() или appendChild() - добавить элемент
// remove() - удалить элемент

const students = document.getElementById('students');
const button = document.getElementById('addButton');

button.addEventListener('click', function(){
    const student = document.createElement('p');
    student.textContent = 'Новый студент';
    students.append(student);
})
// добавить кнопку удаления элемента студента из html