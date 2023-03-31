// day2_recap

console.clear();

// Pętle FOR
// 1. Wypisz w konsoli liczby od 1 do 10

// for (let i = 1; i <= 10; i++) {
// 	console.log(i);
// }

// 2. Wypisz w konsoli wszystkie liczby nieparzyste od 10 do 20

// for (let i = 10; i <= 20; i++) {
// 	if (i % 2 !== 0) {
// 		console.log(i);
// 	}
// }

// 3. Wypisz w konsoli wszystkie liczby od 20 do 1 w odwrotnej kolejności

// for (let i = 20; i >= 1; i--) {
// 	console.log(i);
// }

// 4. Zsumuj liczby od 1 do 100, ale pomijając liczby podzielne przez 3

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
// 	if (i % 3 !== 0) {
// 		sum += i;
// 	}
// }

// console.log(sum); // 3367

// 5. Napisz funkcję, która przyjmuje jako argument tekst i zwraca ten sam tekst, ale z odwróconym kolejnością liter:

// function reverseText(text) {
// 	let reversed = "";
// 	for (let i = text.length - 1; i >= 0; i--) {
// 		reversed += text[i];
// 	}
// 	return reversed;
// }

// console.log(reverseText("Ala ma kota")); // should print "atok am alA"

// let text2 = "Ala ma kota";
// console.log(text2.split("").reverse().join(""));
