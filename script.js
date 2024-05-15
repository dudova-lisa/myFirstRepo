const title = "Мой курс JavaScript";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 8;
const rollback = 67;
const fullPrice = 10000;
const adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log(
  "Стоимость верстки экранов" + screenPrice + "рублей/долларов/гривен/юани"
); //"Стоимость верстки экранов" "рублей/долларов/гривен/юани"

console.log(fullPrice); //"Стоимость разработки сайта" "рублей/долларов/гривен/юани"

console.log(screens.toLowerCase());
console.log(screens.split(", "));

console.log(fullPrice * (rollback / 100)); //"Процент отката посреднику за работу"
