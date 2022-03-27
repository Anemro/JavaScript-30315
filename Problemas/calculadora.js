console.log('Camino al Proyecto Final');

//Definimos las constantes de calculos
const producto = (a,b) => a * b //donde a es el capital inicial e b el resultado de los interes
const basePotencia = (r)=> 1 + (r/100) //donde r es el interes mensual
const calcInteres =(b,e)=> Math.pow(b,e)//donde b es la base y e el exponente resultante del producto frecuencia y anual



//creamos la variable para arrays
let calculoInteresCompuesto = [];
//let CompuestoAportes para una futura implementación
let calculoInteresCompuestoAportes = [];
const boton = document.getElementById('boton');
//Aquí capturo del DOM el nombre y alojo en el Local Storage
const person = document.getElementsByClassName ('name');
const usuario = person[0].value
localStorage.setItem('nombre',`Este es tu resultado ${usuario}`);


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
    diferencia = parseInt(capitalFinal - capitalInicial)
    calculoInteresCompuesto.push (new interesCompuesto (capitalInicial,interes,anual,frecuencia,capitalFinal,diferencia));
    
    const table = document.getElementById ('result')
    calculoInteresCompuesto.forEach( (parametros) => { 
        
        const capitalInicial = document.createElement('td')
        const interes0 = document.createElement('td')
        const anual0 = document.createElement('td')
        const frecuencia0 = document.createElement('td')
        const capitalFinal = document.createElement('td')
        const diferencia = document.createElement('td')
        capitalInicial.innerHTML = calculoInteresCompuesto[0].capitalI
        interes0.innerHTML = calculoInteresCompuesto[0].interes
        anual0.innerHTML = calculoInteresCompuesto[0].anual
        frecuencia0.innerHTML = calculoInteresCompuesto[0].frecuencia
        diferencia.innerHTML = calculoInteresCompuesto[0].ganancia
        capitalFinal.innerHTML = calculoInteresCompuesto[0].capitalFinal
        
    
        table.appendChild (anual0)
        table.appendChild (capitalInicial)
        table.appendChild (interes0)
        table.appendChild (frecuencia0)
        table.appendChild (diferencia)
        table.appendChild (capitalFinal)
    })
    
})

