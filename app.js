function isValidCard() {
	var cardNumber = new Array ([]);
    var condition = false;
    var reverseNum = "";
    var numTwice = "";
    var total = 0;
    do {
        var getcardNumber = prompt("Ingrese su número de tarjeta de crédito");
        cardNumber.push(name);}
        if (getcardNumber === "" || isNaN(getcardNumber) === true) {
            condition = false;
        } else {
            condition = true;
        }
    } while (condition === false);
}
Array.Reverse(cardNumber);
   

//dar vuelta el numero, multiplicar cada par, a cada numero sobre 9 tiene que restarsele 9
//sumar 5 al ultimo n° de la tarjeta