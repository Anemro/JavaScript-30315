console.log('Incorporando Arrays para Interes Compuesto');
//definisión de array valores para el calculo
function interesCompuesto(capitalI,interes,frecuencia,anual,capitalFinal) {
    this.capitalI = capitalI;
        this.interes = interes;
        this.frecuencia = frecuencia;
        this.anual = anual;
        this.capitalFinal = capitalFinal;    
}
// class interesCompuesto {
//    constructor(capitalI,interes,frecuencia,anual,capitalFinal) {
//
//        this.capitalI = capitalI;
//       this.interes = interes;
//        this.frecuencia = frecuencia;
//        this.anual = anual;
//        this.capitalFinal = capitalFinal;
        
//    }
//}
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
const boton = document.getElementById('boton')

boton.addEventListener ('click', () => {

    capital = document.getElementById('capitalInicial');
    interes0 = document.getElementById('interes');
    frecuencia0 = document.getElementById('frecuencia');
    anual0 = document.getElementById('anual');
    capitalInicial= capital.value
    interes= interes0.value
    frecuencia= frecuencia0.value
    anual= anual0.value
    capitalFinal = producto(capitalInicial,calcInteres(basePotencia(interes),producto(frecuencia,anual)));
    calculoInteresCompuesto.push (new interesCompuesto (capitalInicial,interes,anual,frecuencia,capitalFinal));
    console.log(capitalFinal);
    console.log(calculoInteresCompuesto);
    console.log(document.getElementById('capitalInicial').value);
    alert(capitalFinal);
})

/* const table = document.getElementById ('resultado')

calculoInteresCompuesto.forEach( (parametros) => { 
    
    const resultado = document.createElement('p')
    resultado.innerText = calculoInteresCompuesto[0].capitalI
    resultado.innerText = calculoInteresCompuesto[0].interes
    resultado.innerText = calculoInteresCompuesto[0].anual
    resultado.innerText = calculoInteresCompuesto[0].frecuencia
    resultado.innerText = calculoInteresCompuesto[0].capitalFinal
    

    coment.append(resultado)
}) */