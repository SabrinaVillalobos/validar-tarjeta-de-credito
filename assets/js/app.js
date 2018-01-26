
function isValidCard() { // función para validar la tarjeta
  var cardNumber = prompt('Ingrese su número de tarjeta de crédito'); // el usuario debe ingresar el número
  do {
    if ((/[^0-9-\s]+/.test(cardNumber)) || cardNumber === '') { // prueba que no este vacío ni sean letras o espacios
      alert('debe ingresar solo números');
    } else {
      condition = true;
    }
  } while (condition === false);

  var array = cardNumber.split(); // separa el string y lo pasa a array
  var reverseA = array.reverse(); // invierte el array

  var evenArray = []; // contenedor array de pares
  for (i = 0; i < reverseA.length; i++) {
    if (reverseA[i] % 2 === 0) {
      var twice = evenArray * 2; // multiplica por 2 los pares
      var odd = (reverseA[i] % 2 !== 0); // si el modulo de 2 del numero no es 0 es impar
      var sum = (odd + twice); // suma de impares con la multiplicacion de pares
      evenArray.push(parseInt(reverseA[i]));
    }
    sumTotal = (evenArray.push(parseInt(reverseA[i]))) % 10; // total modulo de 10
    if (sumTotal === 0) { // si la suma del total es 0
      alert('la tarjeta es valida');
    } else {
      alert('la tarjeta es invalida');
      console.log();
    }
  }
}

isValidCard();
/* visa test = 4916364300489742*/

