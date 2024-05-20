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
let allServicePrices;
let fullPrice;
let servicePercentPrice;

const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

function getFullPrice() {
  return screenPrice + allServicePrices;
}

const getServicePercentPrices = function () {
  return fullPrice - fullPrice * (rollback / 100);
};

const getTitle = function () {
  return title.trim()[0].toUpperCase() + title.trim().substring(1).toLowerCase;
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

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(allServicePrices); //сумма всех дополнительных услуг
console.log(fullPrice); //стоимость верстки и стоимость дополнительных услуг
console.log(servicePercentPrice); //итоговая стоимость за вычетом процента отката
