// ternary_operator

console.clear();

// Zamień poniższy kod z instrukcją warunkową if...else na operator trójargumentowy:

/* function checkAge(age) {
  let message;
 
  if (age >= 18) {
    message = "Jesteś pełnoletni";
  } else {
    message = "Nie jesteś pełnoletni";
  }
 
  return message;
}
checkAge(20) */

// Nowa wersja kodu powinna wyglądać tak:
let yourAge = 20; // uzupełnij wartość o swój wiek;
function checkAge(age) {
	let message = age >= 18 ? "Jesteś pełnoletni" : "Nie jesteś pełnoletni";
	return message;
}

console.log(checkAge(yourAge));
