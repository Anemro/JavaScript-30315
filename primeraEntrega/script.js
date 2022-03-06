console.log('Incorporando Arrays para Interes Compuesto');
//definisión de nueva receta
class interesCompuesto {
    constructor(capitalI,interes,frecuencia,anual,capitalFinal) {

        this.capitalI = capitalI;
        this.interes = interes;
        this.frecuencia = frecuencia;
        this.anual = anual;
        this.capitalFinal = capitalFinal;

    }
}
//interes con aportes aún en estudio de implementación
class interesCompuestoAportes {
    constructor(capitalI,aportacion,frAporte,interes,fr,anual,capitalFinal) {

        this.capitalI = capitalI;
        this.aportacion = aportacion;
        this.frAporte = frAporte;
        this.interes = interes;
        this.fr = fr;
        this.anual = anual;
        this.capitalFinal = capitalFinal;

    }
}
//Definimos las constantes de calculos
const producto = (a,b) => a * b //donde a es el capital inicial e b el resultado de los interes
const basePotencia = (r)=> 1 + (r/100) //donde r es el interes mensual
const calcInteres =(b,e)=> Math.pow(b,e)//donde b es la base y e el exponente resultante del producto frecuencia y anual
//creamos la variable para arrays
let calculoInteresCompuesto = [];
//let CompuestoAportes para una futura implementación
let calculoInteresCompuestoAportes = [];
while (true) {
    
    let capitalInicial = parseInt(prompt('ingrese capital inicial'));
    if (isNaN(capitalInicial)) {
        alert('este valor no es valido');
        break;
    }
    let interes = parseInt(prompt('Ingrese interes mensual'));
    if (isNaN(interes)) {
        alert('este valor no es valido');
        break;
    }
    let frecuencia = parseInt(prompt('ingrese cantidad de meses que recibira interes'));
    if (isNaN(frecuencia)) {
        alert('este valor no es valido');
        break;
    }
    
    let anual = parseInt(prompt('ingrese cantidad de años que dura la inversión'));
    if (isNaN(anual)) {
        alert('este valor no es valido');
        break;
    }
    else {
        let capitalFinal = producto(capitalInicial,calcInteres(basePotencia(interes),producto(frecuencia,anual)));
        calculoInteresCompuesto.push (new interesCompuesto (capitalInicial,interes,anual,frecuencia,capitalFinal));
        console.log(capitalFinal);
        console.log(calculoInteresCompuesto);
        alert(capitalFinal);
        break
    }
}
const resultado = calculoInteresCompuesto.find (element => element < 1000); 
console.log(resultado);

