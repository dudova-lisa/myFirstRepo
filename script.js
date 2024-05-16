"use strict";

let title = prompt("Как называется твой проeкт?", "Мой курс JavaScript");
console.log(title);

let screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
console.log(screens);

let screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
console.log(screenPrice);

let adaptive = prompt("Нужен ли адаптив на сайте?", "да");

if (adaptive == "да") {
  console.log(true);
} else {
  console.log(false);
}

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let service2 = +prompt("Сколько это будет стоить?");
let servicePrice1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let rollback = 67;
let servicePercentPrice = fullPrice - (fullPrice * rollback) / 100;

console.log(Math.ceil(servicePercentPrice));

if (fullPrice >= 3000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice < 15000 && fullPrice >= 0) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
  console.log("Что то пошло не так");
}
