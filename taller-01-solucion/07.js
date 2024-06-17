//Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:

//5
//6
//7
//8
//9
//10
//NOTA: - Puedes asumir que el primer número siempre va a ser menor o igual que el segundo. - Fíjate que se imprimen también los números en los límites, en el ejemplo el 5 y el 10.

// (number): numeroInicial
// (number): numeroFinal

// Proceso
//     Iteracion desde el numero inicial hasta el numero final 

// Valores de salida
//     (number) 

const 
    numeroInicial = Number (prompt('Ingrese el numero inicial del rango' )),
    numeroFinal = Number ( prompt('Ingrese el numero final del rango'));

console.log(numeroInicial, numeroFinal);

for( let i = numeroInicial; i <= numeroFinal; i++) {
    console.log ( i );
}





