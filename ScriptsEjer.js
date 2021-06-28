const title = document.querySelector('.title')
title.textContent = 'Ejercicios de Javascipt :)'

/*1) Programa una función que cuente el número de caracteres de una cadena de texto,
 pe. miFuncion("Hola Mundo") devolverá 10.*/

/*const contarCaracteres = (text = '') => 
    (!text)
        ?console.warn('No ingresaste ninguna cadena :(')
    :console.info(`La cadena "${text}" tiene ${text.length} caracteres`)

contarCaracteres('hola mundo')*/


 /* 2) Programa una función que te devuelva el texto recortado según el número de 
 caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/

/*const reccortarText = (text = '',longitud = undefined) =>
    (!text || !longitud)
        ?console.warn('No ingresaste una cadena o un numero')
    :console.info(text.slice(0,longitud))

 reccortarText("hola mundo", 4)*/

 /* 3) Programa una función que dada una String te devuelva un Array de textos separados 
 por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/ 

/*const cadenaArreglo = (text = '', separador = undefined) =>
    (!text)
        ?console.warn('No ingresaste ninguna cadena')
        :(separador === undefined)
            ?console.warn('No ingresaste ningun separador')
        :console.info(text.split(separador))

cadenaArreglo('Hola mundo soy Axel',' ')
*/

/* 3) programa una funcion que repita un texto X veces , pe.mifuncion('hola mundo', 3) devolvera
hola mundo hola mundo hola mundo*/

/*
const repetirText = (text = '',times = undefined) =>{
    if(!text) return console.warn('No ingresaste un texto');

    if(times === undefined) return console.warn('No ingresaste el numero de veces a repetir');

    if(times === 0) return console.error('El numero de veces no puede ser 0')

    if(Math.sign(times) === -1) return console.error('El numero no puede ser negativo')

    for(i = 1; i <= times ; i++) 
        console.info(`${text}, ${i}`) 
}

repetirText('hola mundo',5)
*/

/*5) Programa una función que invierta las palabras de una cadena de texto
, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/
/*
const invertirText = (text = '') =>
    (!text)
        ?console.warn('No ingresaste una cadena')
    :console.info(text.split('').reverse().join(''))


invertirText('axel')


/*6) Programa una función para contar el número de veces que se repite una
 palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/
/*
const palabraRepetida = (texto = '', palabra = '') =>{
    if( texto === '' || texto === undefined) return console.warn('No Ingresaste ningun texto')

    if(palabra === '' || palabra === undefined) return console.warn('No ingresaste la palabra')
    
    let i = 0
    let contador = 0

    while (i !== -1) {
        i = texto.toLocaleLowerCase().indexOf(palabra,i)
        if(i !==  -1){
            i++
            contador++
        }
    }

    return console.info(`La palabra "${palabra}" se repite ${contador} veces`)
}

palabraRepetida('Hola hola hola hola ','hola')

/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/
/*
const palabraPalidromo = (palabra = '') =>{
    if(palabra.toLocaleLowerCase() === palabra.toLocaleLowerCase().split('').reverse().join('')) {
        return console.info(`La palabra ${palabra} es un palidromo`);
    }else{
        return console.info('la palabra no es un palidromo'); 
    }
}

palabraPalidromo('Salas')



/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
 pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/
/*
const deleteCaracteres = (texto = '', patron = '') =>{
    (!texto)
        ?console.warn('No Ingresaste el texto')
    :(!patron)
        ?console.warn('No ingresaste el patron')
    :console.info(texto.replace(new RegExp(patron,"ig"),""))

}

deleteCaracteres("xz4 xz5 xz5","[a-z]")

/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/

const numAlea = () => console.log(Math.random()*(600-501)+501);

numAlea()


/*10) Programa una función que reciba un número y evalúe si es capicúa o no
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.*/





/*11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/