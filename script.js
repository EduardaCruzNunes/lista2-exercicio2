var a = 3;
var b = 1;
var c = 1;

if (a > b && b >= c) {
    console.log(a, 'É o maior valor!');
} else if (a < b && b > c) {
    console.log(b, 'É o maior valor!');
} else if (a >= b && b < c) {
    console.log(c, 'É maior valor!');
} else {
    console.log(a, b, c, 'Os valores são iguais!');
}
