//let capitalInicial = parseInt(prompt('Ingrese capital inicial'));
//let interes = parseInt(prompt('Ingrese el interes % mensual a recibir'))
//let composicion = parseInt(prompt('Ingrese la cantidad de meses que recibirá intereses'))
//let anual = parseInt(prompt('Ingrese los años que durará la inversión'))
//let capitalFinal = result(capitalInicial,compuesto(calcInteres(interes),composicion,anual));
console.log("desafio");
//Definimos las constantes de calculos
const result = (a,b) => a * b //donde a es el capital inicial e b el resultado de los interes
const basePotencia = (r,n)=> r/n //donde r es el interes y n es la frecencia
const potencia =(b,e)=> Math.pow(b,e)//donde b es la base y e el exponente
const calcInteres = (i) => (1+i) //donde r es el interes, n es la frecuencia de los intereses y t es en nro de años.
//Definimos las variables necesarias para los calculos
let capitalInicial= ''
//Aportación
let aportacion= ''
let frecuenciaAporte=''
//Interés devengado
let interes=''
let frecuencia=''
let anual=''
let capitalFinal=''
while (true) {
    
    capitalInicial = parseInt(prompt('ingrese capital inicial'));
    if (isNaN(capitalInicial)) {
        alert('este valor no es valido');
        break;
    }
    interes = parseInt(prompt('Ingrese interes'));
    if (isNaN(interes)) {
        alert('este valor no es valido');
        break;
    }
    frecuencia = parseInt(prompt('ingrese frecuencia'));
    if (isNaN(frecuencia)) {
        alert('este valor no es valido');
        break;
    }
    anual = parseInt('ingrese años');
    if (isNaN(anual)) {
        alert('este valor no es valido');
        break;
    }
    else {
        capitalFinal = result(capitalFinal,((potencia(basePotencia(interes,frecuencia),result(anual,frecuencia)))));
        console.log(capitalFinal);
        alert(capitalFinal);
    }
}


