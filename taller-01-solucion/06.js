//Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario. Por ejemplo, si el usuario ingresó la frase Hola Mundo y el número 5, el programa debe imprimir Hola Mundo 5 veces:

//Hola Mundo
//Hola Mundo
//Hola Mundo
//Hola Mundo
//Hola Mundo

const frase = prompt ('Ingresa una frase');
const repeticiones = Number ( prompt( 'Ingrese el # repeticiones que desea'));

for (let i = 1; i <= repeticiones; i++) {
    console.log(frase);
}

let i = 1;
while (i <= repeticiones) {
    console.log (frase);

    i++;
}

i = 0;
do {
    console.log (frase);
    i++;
} while (i < repeticiones);