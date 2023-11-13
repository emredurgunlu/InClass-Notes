console.log(Math.round(123.556)); //? yakın tam sayiya yuvarlar(124)
console.log(Math.ceil(123.26)); //? tavana yuvarlar (124)
console.log(Math.floor(123.99)); //? tabana yuvarlar (123)
console.log(Math.trunc(123.19)); //? her zaman tam kısmı alir. 123
console.log((123.567).toFixed(2)); //? virgüden sonra 2 basamak alır (string alarak) 123.57

//? Math.random() 0-1 arasinda rasgele sayi uretir.
console.log(Math.round(Math.random() * 100));

let number1 = 3;
number1 *= 2;
number1 += 1;
console.log('number1', number1++)
console.log('number1', number1)
console.log('number1', --number1)

