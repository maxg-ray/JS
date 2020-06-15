var country = "Франция";
var weather;
var food;
var currency;

if (country === "Англия") {
  weather = "ужасная";
  food = "сытная";
  currency = "фунты стерлингов";
}

if (country === "Франция") {
  weather = "хорошая";
  food = "потрясающая, но не всегда вегетарианская";
  currency = "маленькая, смешная и цветная";
}

if (country === "Германия") {
  weather = "средняя";
  food = "лучшие колбаски";
  currency = "маленькая, смешная и цветная";
}

console.log(country);

var message =
  "это " +
  country +
  ", погода " +
  weather +
  ", еда " +
  food +
  " и " +
  "валюта " +
  currency;
