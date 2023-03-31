// Objects tasks v2

console.clear();

// Zadanie 1: Konwersja tablicy par klucz-wartość na obiekt
// Napisz funkcję, która konwertuje tablicę par klucz-wartość na obiekt za pomocą metody Object.fromEntries(). Funkcja powinna przyjmować jedną argument, który jest tablicą zawierającą pary klucz-wartość, np. [ ['name', 'John'], ['age', 30], ['gender', 'male'] ], a zwracać powinna obiekt zawierający te pary klucz-wartość.

// let arr = [ ['name', 'John'], ['age', 30], ['gender', 'male'] ];
// let obj = convertArrayToObject(arr);
// console.log( obj ); // { name: 'John', age: 30, gender: 'male' }

// Zadanie 2: Wykluczanie jednej lub kilku właściwości z obiektu
// Napisz funkcję, która wyklucza jedną lub kilka właściwości z obiektu za pomocą metody Object.fromEntries().
// Funkcja powinna przyjmować dwa argumenty: pierwszy argument to obiekt, a drugi argument to tablica nazw właściwości, które mają być wykluczone z obiektu. Funkcja powinna zwracać nowy obiekt zawierający wszystkie właściwości oryginalnego obiektu z wyjątkiem tych, które zostały wykluczone.

// let person = {
//   name: "John",
//   age: 30,
//   city: "Warsaw",
//   gender: 'male'
// }

// let excludedProps = ['age', 'city'];
// let newPerson = excludeProperties(person, excludedProps);
// console.log(newPerson); // { name: 'John', gender: 'male' }

// Zadanie 3: Łączenie dwóch obiektów
// Napisz funkcję, która łączy dwa obiekty za pomocą metody Object.assign().Funkcja powinna przyjmować dwa argumenty - pierwszy argument to obiekt docelowy, do którego mają być dodane właściwości, a drugi argument to obiekt źródłowy, z którego mają być skopiowane właściwości. Funkcja powinna zwracać nowy obiekt, który jest połączeniem dwóch obiektów.
// let obj1 = { a: 1, b: 2 };
// let obj2 = { c: 3, d: 4 };

// console.log( mergeObjects( obj1, obj2 ) ); // { a: 1, b: 2, c: 3, d: 4 }

// Zadanie 4: Klonowanie obiektu
//Napisz funkcję, która klonuje obiekt za pomocą metody Object.assign(). Funkcja powinna przyjmować jeden argument - obiekt, który ma zostać sklonowany. Funkcja powinna zwracać nowy obiekt, który jest identyczny z oryginalnym.

// console.log(clonedObject); // { a: 1, b: 2 }
