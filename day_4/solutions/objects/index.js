// Objects tasks

console.clear();

// 1. Stwórz obiekt o nazwie "osoba" zawierający pola "imie", "nazwisko" i "wiek". Przypisz do nich odpowiednie wartości i wyświetl cały obiekt w konsoli.

// let person = {
//   imie: 'Jan',
//   nazwisko: 'Kowalski',
//   wiek: 50
// };

// console.log(person);

// 2. Stwórz funkcję, która przyjmuje obiekt jako argument i wyświetla jego pola w konsoli.
// let person = {
//   imie: 'Jan',
//   nazwisko: 'Kowalski',
//   wiek: 50
// };

// function displayObject( object ) {
//   for ( let key in object ) {
//     console.log( key, ' - ', object[key] )
//   }
// }

// displayObject( person );

// 3. Stwórz obiekt o nazwie "ksiazka" zawierający pola "tytul", "autor" i "iloscStron". Napisz funkcję, która zmienia ilość stron w tej książce na wartość podaną jako argument.
// let book = {
//   title: "W pustyni i w Puszczy",
//   author: "Henryk Sienkiewicz",
//   numberOfPages: 300
// };

// function updatePageNumbers( book, newNumber ) {
//   book.numberOfPages = newNumber;
//   // book['numberOfPages'] = newNumber;
// }

// updatePageNumbers( book, 400 )
// console.log(book.numberOfPages); // result should be 400

// 4. Stwórz obiekt o nazwie "samochod" zawierający pola "marka", "model" i "rokProdukcji". Napisz funkcję, która zwraca tekst opisujący ten samochód.

// let car = {
//   brand: "Toyota",
//   model: "Corolla",
//   yearOfProduction: 2015
// };

// function carDescription( car ) {
//   let result = 'The brand of the car is ' + car.brand + ', model: ' + car.model + ', year of production ' + car.yearOfProduction;
//   // let result2 = `The brand of the car is ${car.brand}, model: ${car.model}, year of production ${car.yearOfProduction}.`

//   return result;
// }

// console.log( carDescription( car ) );

// 5. Stwórz funkcję, która przyjmuje tablicę obiektów reprezentujących zamówienia w sklepie internetowym, a następnie zwraca sumę kwoty zamówień dla każdego klienta:
// const orders = [
//   { customer: 'Alice', amount: 100 },
//   { customer: 'Bob', amount: 50 },
//   { customer: 'Alice', amount: 200 },
//   { customer: 'Bob', amount: 75 },
//   { customer: 'Charlie', amount: 125 },
// ];

// function sumOrders( orders ) {
//   let result = {}

//   for ( let i = 0; i < orders.length; i++ ) {
//     let customer = orders[i].customer;
//     let amount = orders[i].amount;

//     if ( result[ customer ] ) {
//       result[ customer ] += amount
//     } else {
//       result[ customer ] = amount;
//     }
//   }

//   orders.forEach( function ( order ) {
//     let customer = order.customer;
//     let amount = order.amount;

//     if ( result[ customer ] ) {
//       result[ customer ] += amount
//     } else {
//       result[ customer ] = amount;
//     }
//   })

//   return result;
// }

// console.log( sumOrders( orders ) );
