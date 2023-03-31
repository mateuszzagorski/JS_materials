// bonus tasks

console.clear();

// 1. Stwórz obiekt reprezentujący użytkownika, który będzie miał właściwości "name", "age" oraz "email". Następnie dodaj metodę, która wyświetli w konsoli informacje o użytkowniku.

// let user = {
// 	name: "John",
// 	age: 25,
// 	email: "john@example.com",
// 	displayInfo() {
// 		console.log(
// 			`Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`
// 		);
// 	},
// };

// user.displayInfo(); // Output: Name: John, Age: 25, Email: john@example.com

// 2. Stwórz funkcję, która zsumuje wartości wszystkich właściwości numerycznych danego obiektu. (for in)

// function sumNumericProperties(obj) {
// 	let sum = 0;
// 	for (let prop in obj) {
// 		if (typeof obj[prop] === "number") {
// 			sum += obj[prop];
// 		}
// 	}
// 	return sum;
// }

// let obj = { a: 1, b: 2, c: "three", d: 4 };
// console.log(sumNumericProperties(obj)); // Output: 7

// 3. Napisz funkcję, która dodaje nową właściwość do obiektu. Funkcja powinna przyjmować obiekt, nazwę właściwości oraz wartość właściwości. Funkcja powinna zwrócić zmodyfikowany obiekt.

// function addProperty(obj, propName, propValue) {
// 	obj[propName] = propValue;
// 	return obj;
// }

// let person = { name: "John", age: 30 };
// addProperty(person, "job", "Programmer");
// console.log(person); // {name: "John", age: 30, job: "Programmer"}

// 4. Napisz funkcję, która jako argument przyjmuje tablicę obiektów, gdzie każdy obiekt reprezentuje książkę i ma pola **`title`**, **`author`** i **`pages`**. Funkcja powinna zwrócić sumę wszystkich stron we wszystkich książkach.

// var books = [
// 	{ title: "Harry Potter", author: "J.K. Rowling", pages: 400 },
// 	{ title: "Lord of the Rings", author: "J.R.R. Tolkien", pages: 1000 },
// 	{ title: "The Hobbit", author: "J.R.R. Tolkien", pages: 300 },
// ];

// function totalPageCount(books) {
// 	var total = 0;
// 	for (var i = 0; i < books.length; i++) {
// 		total += books[i].pages;
// 	}
// 	return total;
// }

// console.log(totalPageCount(books)); // 1700

// 5. Policz ilość wystąpień każdego elementu w tablicy:

// let arr = [1, 2, 3, 2, 4, 3, 5];
// let count = {};
// for (let i = 0; i < arr.length; i++) {
// 	if (count[arr[i]]) {
// 		count[arr[i]]++;
// 	} else {
// 		count[arr[i]] = 1;
// 	}
// }
// console.log(count); // {1: 1, 2: 2, 3: 2, 4: 1, 5: 1}

// 6. Napisz funkcję, która jako argument przyjmuje obiekt i zwraca tablicę zawierającą nazwy wszystkich jego właściwości. (for in)

// function getObjectProperties(obj) {
//   let properties = [];

//   for (let property in obj) {
//     if (obj.hasOwnProperty(property)) {
//       properties.push(property);
//     }
//   }

//   return properties;
// }

// let myObj = { a: 1, b: 2, c: 3 };
// console.log(getObjectProperties(myObj)); // ["a", "b", "c"]

// 7. Napisz funkcję, która jako argument przyjmuje obiekt i zwraca tablicę zawierającą wartości wszystkich jego właściwości. (for in)

// function getObjectValues(obj) {
//   let values = [];

//   for (let property in obj) {
//     if (obj.hasOwnProperty(property)) {
//       values.push(obj[property]);
//     }
//   }

//   return values;
// }

// let myObj = { a: 1, b: 2, c: 3 };
// console.log(getObjectValues(myObj)); // [1, 2, 3]

// 8. Napisz funkcję, która jako argument przyjmuje obiekt zawierający imiona i wieki osób, a następnie zwraca imię osoby, która ma najwyższy wiek. (for in)

// function getOldestPerson(obj) {
//   let oldestPerson = '';
//   let maxAge = 0;

//   for (let name in obj) {
//     if (obj.hasOwnProperty(name)) {
//       if (obj[name] > maxAge) {
//         maxAge = obj[name];
//         oldestPerson = name;
//       }
//     }
//   }

//   return oldestPerson;
// }

// let people = { Alice: 25, Bob: 30, Carol: 35 };
// console.log(getOldestPerson(people)); // "Carol"
