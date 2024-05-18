"use strict";

let title = prompt("Как называется твой проeкт?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 67;

const schowTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
  if (price >= 3000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if (price >= 0 && price < 15000) {
    return "Скидка не предусмотрена";
  } else if (price < 0) {
    return "Что то пошло не так";
  }
};

function getAllServicePrices() {
  return servicePrice1 + servicePrice2;
}
const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice() {
  return screenPrice + allServicePrices;
}
const fullPrice = getFullPrice(screenPrice, allServicePrices);

function getTitle(title) {
  return title.trimStart()[0].toUpperCase() + title.substring(1);
}

function getServicePercentPrices() {
  return fullPrice - fullPrice * (rollback / 100);
}
const servicePercentPrice = getServicePercentPrices();

schowTypeOf(title);
schowTypeOf(screenPrice);
schowTypeOf(adaptive);

console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(allServicePrices); //сумма всех дополнительных услуг
console.log(fullPrice); //стоимость верстки и стоимость дополнительных услуг
console.log(servicePercentPrice); //итоговая стоимость за вычетом процента отката
