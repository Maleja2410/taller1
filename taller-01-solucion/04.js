//Escribe un programa que le pida al usuario ingresar un número.

//Si el número es múltiplo de 3 debe imprimir en la consola bing.
//Si el número es múltiplo de 5 debe imprimir en la consola bong.
//Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola bingbong.
//Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.//

// Valores de entrada
//     1. Un numero (number)

// proceso 
//     1. Numero es multiplo de 3
//     2. Numero es multiplo de 5
//     3. Numero es multiplo de 3 y 5 

// Valores de Salida
//     (string) --> Bing, Bong, Bingbong
    
const numero = Number( prompt ( 'Ingresa un numero: ' ) );

if(numero % 3 === 0 ) {
    console.log ('bing');
}
else if( numero % 5 === 0) {
    console.log ('bong');
}
else if ( numero % 3 === 0 && numero % 5 === 0 ){
    console.log ('bingbong');
}
else {
    console.log (numero);
}