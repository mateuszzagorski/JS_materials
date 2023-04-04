//
// 1. Napisz funkcję, która pobiera tablicę obiektów i szuka obiektu z konkretnym kluczem i wartością.
//

// let users = [
// 	{ id: 1, name: "John", age: 30 },
// 	{ id: 2, name: "Anna", age: 25 },
// 	{ id: 3, name: "Peter", age: 35 },
// 	{ id: 4, name: "Mary", age: 28 },
// ];

// console.log(findUserByKeyValue(users, "id", 2)); // { id: 2, name: "Anna", age: 25 }
// console.log(findUserByKeyValue(users, "name", "Mary")); // { id: 4, name: "Mary", age: 28 }

//
// 2. Napisz funkcję, która pobiera tablicę obiektów i szuka pierwszego obiektu, który ma określoną liczbę właściwości. ( Object.keys )
//
// let users = [
// 	{ id: 1, name: "John", age: 30 },
// 	{ id: 2, name: "Anna", age: 25, country: "Poland" },
// 	{ id: 3, name: "Peter", age: 35 },
// 	{ id: 4, name: "Mary", age: 28, country: "USA", gender: "female" },
// ];

// console.log(findUserByPropertiesCount(users, 4)); // { "id": 2, "name": "Anna", "age": 25, "country": "Poland" }
// console.log(findUserByPropertiesCount(users, 3)); // { id: 3, name: "Peter", age: 35 }

//
// 3. Napisz funkcję, która pobiera tablicę obiektów i szuka pierwszego obiektu, który ma określoną wartość w jednej z właściwości. ( Object.values )
//

// let users = [
// 	{ id: 1, name: "John", age: 30 },
// 	{ id: 2, name: "Anna", age: 25, country: "Poland" },
// 	{ id: 3, name: "Peter", age: 35 },
// 	{ id: 4, name: "Mary", age: 28, country: "USA", gender: "female" },
// ];

// console.log(findUserByPropertyValue(users, "John")); // { id: 1, name: "John", age: 30 }
// console.log(findUserByPropertyValue(users, "USA")); // { id: 4, name: "Mary", age: 28, country: "USA", gender: "female" }

//
// 4. Napisz funkcję, która pobiera tablicę obiektów i szuka pierwszego obiektu, który ma określony klucz i wartość w jednej z właściwości. ( includes )
//

// let users = [
// 	{ id: 1, name: "John", age: 30 },
// 	{ id: 2, name: "Anna", age: 25, country: "Poland" },
// 	{ id: 3, name: "Peter", age: 35 },
// 	{ id: 4, name: "Mary", age: 28, country: "USA", gender: "female" },
// ];

// console.log(findUserByPartialPropertyValue(users, "name", "oh")); // { id: 1, name: "John", age: 30 }
// console.log(findUserByPartialPropertyValue(users, "country", "lan")); // { id: 2, name: "Anna", age: 25, country: "Poland" }
