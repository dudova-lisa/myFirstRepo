"use strict";

const title = "Мой курс JavaScript";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 8;
const rollback = 67;
const fullPrice = 10000;
const adaptive = true;

let answer = prompt("Как называется твой проeкт?");
console.log(title);

let answer2 = prompt("Какие типы экранов нужно разработать?");
console.log(screens);

let answer3 = +prompt("Сколько будет стоить данная работа?");
console.log(screenPrice);

let answer4 = prompt("Нужен ли адаптив на сайте?");

if (adaptive == "true") {
  console.log(true);
} else {
  console.log(false);
}

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let service2 = +prompt("Сколько это будет стоить?");
let servicePrice1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

let fuiiPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = fullPrice - (fullPrice * rollback) / 100;

console.log(Math.ceil(servicePercentPrice));

switch (true) {
  case fullPrice > 30000:
    console.log("Даем скидку в 10%");
    break;
  case fullPrice > 15000 && fullPrice < 30000:
    console.log("Даем скидку в 5%");
    break;
  case fuiiPrice < 15000 && fuiiPrice > 0:
    console.log("Скидка не предусмотрена");
    break;
  case fuiiPrice < 0:
    console.log("Что то пошло не так");
}
