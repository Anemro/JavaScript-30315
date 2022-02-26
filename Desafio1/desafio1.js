//let capitalInicial = parseInt(prompt('Ingrese capital inicial'));
//let interes = parseInt(prompt('Ingrese el interes % mensual a recibir'))
//let composicion = parseInt(prompt('Ingrese la cantidad de meses que recibirá intereses'))
//let anual = parseInt(prompt('Ingrese los años que durará la inversión'))
//let capitalFinal = result(capitalInicial,compuesto(calcInteres(interes),composicion,anual));
console.log("desafio");
//Definimos las constantes de calculos
const producto = (a,b) => a * b //donde a es el capital inicial e b el resultado de los interes
const basePotencia = (r)=> 1 + (r/100) //donde r es el interes mensual
const calcInteres =(b,e)=> Math.pow(b,e)//donde b es la base y e el exponente resultante del producto frecuencia y anual

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
    interes = parseInt(prompt('Ingrese interes mensual'));
    if (isNaN(interes)) {
        alert('este valor no es valido');
        break;
    }
    frecuencia = parseInt(prompt('ingrese cantidad de meses que recibira interes'));
    if (isNaN(anual)) {
        alert('este valor no es valido');
        break;
    }
    
    anual = parseInt(prompt('ingrese cantidad de años que dura la inversión'));
    if (isNaN(anual)) {
        alert('este valor no es valido');
        break;
    }
    else {
        capitalFinal = producto(capitalInicial,calcInteres(basePotencia(interes),producto(frecuencia,anual)));
        console.log(capitalFinal);
        alert(capitalFinal);
        break
    }
}


