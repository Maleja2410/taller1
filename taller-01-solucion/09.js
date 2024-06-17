// Escribe un programa que:

// Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
// Elimine el segundo elemento.
// Recorra e imprima el arreglo.
// Ejemplo:

//     Ingresa un número> 5
//     1
//     3
//     4
//     5
// NOTA: los 3 pasos de este ejercicio se deben realizar con programación según lo visto en clase.

const numero = number(prompt('Ingrese el # hasta donde se establece la iteracion'));
let numero = [];

for (let i = 1, i <= numero; i++) {
    console.log ( i );
    numero.push ( i );
}

console.log(numero);

delete numeros [ 1 ]; 

console.log(numero);