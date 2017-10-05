function isValidCard() {



    var total = 0;


    do {
        var cardNumber = prompt("Ingrese su número de tarjeta de crédito");
        var array = cardNumber.split();
        var reverseA = array.reverse();

        var evenArray = [];
        for (i = 0; i < reverseA.length; i++) {
            if (reverseA[i] % 2 === 0) {
                var twice = evenArray * 2;
                var odd = (reverseA[i] % 2 !== 0);

                var sum = (odd + twice);

                evenArray.push(reverseA[i]);
            }
        }

        if (cardNumber === "" || isNaN(cardNumber) === true) {
            condition = false;
        } else {
            condition = true;
        }
    }
    while (condition === false);

}
/*Segun el video de Michelle:
dar vuelta el numero, multiplicar cada par por 2, si el doble del
 resultado es mayor o igual a 10 se suman los digitos del resultado (ej 2*5 = 10, 1+0 = 1)
ahora se suman los impares y el numero que salio de los pares, todos los
pares se *2 y si >= 10 se suman los digitos del resultado.
Ahora se suman los impares y el n° nuevo de los pares, a ese resultado
resultado % 10 === 0 significa que la cc es valida
a cada numero sobre 9 tiene que restarsele 9
sumar 5 al ultimo n° de la tarjeta*

Segun wikipedia:
dar vuelta el array con los numeros, multilicar por 2 los pares
sumar cada digito de los resultados 10 = 1+0 = 1, 14 = 1 + 4 = 5 etc
Sumar los dígitos del resultado: (ejemplo: 10 = 1 + 0 = 1, 14 = 1 + 4 = 5) 
juntos con los dígitos sin duplicar del número original.
Si el total de módulo 10 es igual a 0 (si el total termina en cero),
 entonces el número es válido de acuerdo con la fórmula Luhn, de 
 lo contrario no es válido.

 Segun quobit (enlace de lms)
 Multiplicamos por 2 los dígitos que ocupan las posiciones pares empezando por el final:
(1×2) = 2, (8×2) = 16, (3×2) = 6, (2×2) = 4, (9×2) = 18
Sumamos los dígitos que ocupaban las posiciones impares con los dígitos de los productos obtenidos:
6 + (2) + 7 + (1+6) + 9 + (6) + 7 + (4) + 9 + (1+8) + 4 = 70
Si el resto de dividir el total entre 10 es igual a cero, el número es correcto:
70 mod 10 = 0
*/