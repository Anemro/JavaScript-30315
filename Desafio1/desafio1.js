console.log("desafio");
//Definimos las constantes de calculos
const result = (a,b) => a * b
const calcInteres = x => 1+(x*0.01)
const compuesto = (a,b,c) => a**(b*c)//a es el interes acumulativo b es la periodicidad de los intereses y c es el ciclo de esos intereses periodicos.
//Definimos las variables necesarias para los calculos

let capitalInicial = parseInt(prompt('Ingrese capital inicial'));
let interes = parseInt(prompt('Ingrese el interes % mensual a recibir'))
let composicion = parseInt(prompt('Ingrese la cantidad de meses que recibirá intereses'))
let anual = parseInt(prompt('Ingrese los años que durará la inversión'))
let capitalFinal = result(capitalInicial,compuesto(calcInteres(interes),composicion,anual));

if (capitalInicial = capitalFinal) {
    alert (capitalFinal)
    console.log(capitalFinal)
}
else{
    console.log('Algunos de los valores ingresados no es un nro')
}


