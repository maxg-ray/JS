//напиши любой код, чтобы каждое число было умножено на 2

/* Решение методом map
var numbers = [1, 1, 2, 3, 5, 8, 32, 102, 300, 432, 500];
numbers = numbers.map(function (e) {
  return e * 2;
});
console.log(numbers); */

var numbers = [1, 1, 2, 3, 5, 8, 32, 102, 300, 432, 500];

var arr;

for (arr = 0; arr < numbers.length; ++arr) {
  console.log(numbers[arr] * 2);
}
