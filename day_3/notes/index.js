// array methods

console.clear();

// let tab = []; // pusta tablice
// let tab2 = [1, 2, 3, 4]; // tablice z 4 liczbami
// let tab3 = ["A", "B", "C"];
// console.log(tab);
// console.log(tab2);
// console.log(tab3);

// let a = "Test";
// let b = 123;

// let tab4 = [a, b, 123, "kursJs"];
// console.log(tab4);

// let tab5 = new Array(a)
// console.log(tab5);

// console.log( tab2[0] )
// console.log( tab2[1] )
// console.log( tab2[2] )
// console.log( tab2[3] )
// console.log( tab2[tab2.length] )

// let tab6 = [
//     [1, 2, 3, 4],
//     [4, 5, 6, 7],
//     [7, 8, 9, 10],
// ];

// console.log( tab6 )
// console.log( tab6[0][3] )

// -- Wbudowane funkcje tablicowe
// 1. Length
// let tab = [ 'ABC', 'DEF', 'GHI' ];

// console.log(tab.length);
// console.log(tab.length - 1);

// for ( let i = 0; i < tab.length; i++ ) {
//   console.log( tab[i] )
// }

// 2. Dodawanie elementów - push
// let tab = [ 'ABC', 'DEF', 'GHI' ];

// tab.push( 'ZZZ' )
// console.log(tab);

// tab[0] = 'AAA'
// console.log(tab);

// tab[4] = 'YYY';
// console.log(tab);

// tab.push('XXX', 0);
// console.log(tab);

// 3. Sprawdzanie czy jest tablicą
// let tab = [ 'ABC', 'DEF', 'GHI' ];
// let obj = {
//   name: 'Mateusz'
// }

// console.log( Array.isArray(tab) )
// console.log( typeof tab === typeof obj);

// 4. Metodę pop()
// let tab = [ 'ABC', 'DEF', 'GHI' ];

// tab.push( 'ZZZ' )
// console.log(tab);

// let lastElement = tab.pop()
// console.log(tab);
// console.log(lastElement);

// tab.push( lastElement )
// console.log(tab);

// 5. Metoda unshift();
// let tab = [ 'ABC', 'DEF', 'GHI' ];

// tab.unshift('ZZZ');
// console.log(tab);

// tab.unshift('XXX', 123);
// console.log(tab);

// 5. Metoda shift();
// let tab = [ 'ABC', 'DEF', 'GHI' ];

// let firstElement = tab.shift()
// console.log(tab);
// console.log(firstElement);

// 6. Metoda join()
// let tab = [ 'ABC', 'DEF', 'GHI' ];
// let tab2 = [ 123, 456, 789 ]
// console.log( tab.join() );

// // let i = tab.join();
// // console.log(i);

// console.log( tab2.join( '-' ) );

// 7. Metoda split();
// let str = 'Ala ma kota';
// let tab = str.split(' ');
// console.log(tab);

// 8. reverse();
// let tab = [ 1, 2, 3, 4 ];
// let tab = [ 'ABC', 'DEF', 'GHI' ];
// tab.reverse();

// console.log(tab);

// 9. indexOf() / lastIndexOf() / includes()
// let tab = [ 'ABC', 'DEF', 'GHI', 'ABC' ];

// console.log( tab.indexOf('GHI') );
// console.log( tab.indexOf('') );

// console.log( tab.lastIndexOf('ABC') );

// console.log( tab.includes( 'ABC' ) );

// 10. Concat - łączenie tablic
// let tab = [ 1, 2, 3, 4 ];
// let tab2 = [ 'ABC', 'DEF', 'GHI' ];
// let tab3 = tab.concat(tab2);
// tab2 = tab2.concat(tab2);

// console.log(tab3);
// console.log(tab2);
