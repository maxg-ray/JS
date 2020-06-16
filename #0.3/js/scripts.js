//Сделай все строчки в новом массиве с большой буквы

let fruits = ["яблоко", "банан", "ананас", "клубника"];
for (let fruit of fruits) {
  fruit = fruit.charAt(0).toUpperCase() + fruit.substr(1);
  console.log(fruit);
}
