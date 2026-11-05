// ООП и классы

class Car {
    #vin;
    constructor(brand, model, year, color, price, speed, vin) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.speed = speed;
        this.#vin = vin;
    }
    showInfo() {
        console.log(`Марка: ${this.brand}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Год: ${this.year}`);
    }
    showSpeed() {
        console.log(`Максимальная скорость для ${this.brand} ${this.model} равна ${this.speed}`)
    }
    showVin() {
        console.log(`Vin for this car: ${this.#vin}`)
    }

}

const car1 = new Car("BMW", "X7", 2022, "Grey/gray", "50.000$", 250, "vin1234");
const car2 = new Car("Lada", "Niva", 2023, "Brown", "2.000.000р", 120, "vin4321");
console.log(car1);
console.log(car2);

car1.showInfo();
console.log("----------------");
car2.showInfo();
console.log("----------------");
car1.showSpeed();
car2.showSpeed();
console.log("----------------");
car1.speed = 300;
car2.speed = 150;
car1.showSpeed();
car2.showSpeed();
console.log("----------------");

// инкапсуляция
console.log(car1.vin);
car1.showVin();
console.log(car2.vin);
car2.showVin();

