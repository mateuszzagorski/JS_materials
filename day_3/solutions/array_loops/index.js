// array loops tasks

console.clear();

// 1. Napisz funkcję, która przyjmuje jako argument tablicę liczb i zwraca tablicę zawierającą kwadraty tych liczb (for):
// function numberSquares( arr ) {
//   let squared = [];

// for ( let i = 0; i < arr.length; i++ ) {
//   squared.push( arr[i] * arr[i] )
// }

// arr.forEach( function(number){
//   squared.push(number * number)
// })

//   return squared;
// }

// let a = [1, 2, 3]
// console.log( numberSquares( a ) ); // powinno zwrócić [ 1, 4, 9 ]

// 2. Napisz funkcję, która przyjmuje jako argument tablicę liczb i zwraca ich sumę (forEach):

// function sumNumbers( array ) {
//   let sum = 0;

//   array.forEach( function( element ) {
//     sum = sum + element;
//     // sum += element;
//   } )

//   // for (let i = 0; i < array.length; i++ ){
//   //   sum += array[i];
//   // }

//   // for ( let element of array ){
//   //   sum += element;
//   // }

//   return sum;
// }

// console.log( sumNumbers( [ 1, 2, 3 ] ) ); // should output 6

// 3. Napisz pętlę która obliczy średnią długość nazwisk w tablicy (forEach)
// let names = ['Kowalski', 'Nowak', 'Zawadzki', 'Kaczmarek', 'Szymański'];
// let sum = 0;

// // names.forEach( function( name ) {
// //   sum += name.length
// // })

// // for ( let i = 0; i < names.length; i++ ) {
// //   sum += names[i].length
// // }

// for ( let name of names ) {
//   sum += name.length
// }

// let avgLength = sum / names.length;

// console.log('Średnia długość nazwisk:', avgLength);

// 4. Napisz funkcję, która przyjmuje jako argument tablicę liczb i zwraca tablicę zawierającą tylko parzyste liczby (for…of):

// function evenNumbers( array ) {
//   let even = [];

//   // for ( let number of array ) {
//   //   if ( number % 2 === 0 ) {
//   //     even.push( number );
//   //   }
//   // }

//   // array.forEach( function ( number ) {
//   //   if ( number % 2 === 0 ) {
//   //     even.push( number );
//   //   }
//   // })

//   for ( let i = 0; i < array.length; i++ ) {
//     if ( array[i] % 2 === 0 ) {
//       even.push( array[i] )
//     }
//   }

//   return even;
// }

// console.log( evenNumbers( [ 1, 2, 3, 4, 5, 6, 8, 9, 20 ] ) );  // should output [ 2, 4, 6 ]
