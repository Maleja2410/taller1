//Escribe un programa que le pida al usuario ingresar una frase. El programa debe imprimir la frase en la consola 10 veces. NOTA: utiliza un ciclo para imprimir la frase las 10 veces.

// Valores de entrada
// 1. (string) frase
// 2. (number) 10 repeticiones

// Proceso 
//     repeticion 10 Veces de la frase 

// Valores de Salida
//     (string) repeticion 1 de la frase 
        // (string) repeticion n de la frase 

const frase = prompt ('Ingresa una frase');
const repeticiones = 10;

for (let i = 0; i <= 10; i++) {
    console.log(frase);
}

let i = 1;
while (i <= 10) {
    console.log (frase);

    i++;
}