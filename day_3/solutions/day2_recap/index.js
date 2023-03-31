// array methods tasks

console.clear();

// 1. Napisz program, który wyświetli liczby od 1 do 10 przy użyciu pętli for.

// for (let i = 1; i <= 10; i++) {
// 	console.log(i);
// }

// 2. Napisz program, który wyświetli liczby od 1 do 10 przy użyciu pętli while.

// let i = 1;
// while (i <= 10) {
// 	console.log(i);
// 	i++;
// }

// 3. Napisz program, który pobiera od użytkownika listę liczb, aż do momentu, gdy użytkownik wprowadzi 0, a następnie wyświetla sumę tylko dodatnich liczb wprowadzonych przez użytkownika.

// function inputSum() {
// 	let sum = 0;
// 	let num;
// 	do {
// 		num = prompt("Podaj liczbę:");
// 		if (num > 0) {
// 			sum += parseInt(num);
// 			console.log(sum);
// 		}
// 	} while (num !== "0");

// 	return sum;
// }
// console.log(`Suma dodatnich liczb wynosi ${inputSum()}.`);

// 4. Napisz program, który wyświetli liczby parzyste od 2 do 20 przy użyciu pętli for.

// for (let i = 2; i <= 20; i += 2) {
// 	console.log(i);
// }

// lub;

// for (let i = 2; i <= 20; i += 1) {
// 	if (i % 2 == 0) {
// 		console.log(i);
// 	}
// }

// 5. Napisz program, który pobiera od użytkownika liczbę n i wyświetla sumę liczb od 1 do n przy użyciu pętli while.

// let sum = 0;
// let n = prompt("Podaj liczbę n:");
// let i = 1;
// while (i <= n) {
// 	sum += i;
// 	i++;
// }
// function test() {
// 	let sum = 0;
// 	let num;
// 	do {
// 		num = prompt("Podaj liczbę:");
// 		if (num > 0) {
// 			sum += parseInt(num);
// 			console.log(sum);
// 		}
// 	} while (num !== "0");

// 	return sum;
// }
// console.log(`Suma dodatnich liczb wynosi ${test()}.`);

// 6. Napisz program, który wyświetla liczby od 1 do 100, zastępując liczby podzielne przez 3 słowem "Fizz", liczby podzielne przez 5 słowem "Buzz", a liczby podzielne przez 3 i 5 słowem "FizzBuzz".

// for (let i = 1; i <= 100; i++) {
// 	if (i % 3 === 0 && i % 5 === 0) {
// 		console.log("FizzBuzz");
// 	} else if (i % 3 === 0) {
// 		console.log("Fizz");
// 	} else if (i % 5 === 0) {
// 		console.log("Buzz");
// 	} else {
// 		console.log(i);
// 	}
// }

// 7. Napisz program, który wyświetla tabliczkę mnożenia dla liczb od 1 do 10 przy użyciu pętli for.

// for (let i = 1; i <= 10; i++) {
// 	for (let j = 1; j <= 10; j++) {
// 		console.log(`${i} x ${j} = ${i * j}`);
// 	}
// }
