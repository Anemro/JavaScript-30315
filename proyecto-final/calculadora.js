console.log('Proyecto Final');

const producto = (a,b) => a * b //donde a es el capital inicial y b el resultado de los interes
const basePotencia = (r)=> 1 + (r/100) //donde r es el interes mensual
const calcInteres =(b,e)=> Math.pow(b,e)//donde b es la base y e el exponente resultante del producto frecuencia y anual

let calculoInteresCompuesto = [];
const boton = document.getElementById('boton-calcular');
const frecuencia0 = document.getElementById('frecuencia');
const capital = document.getElementById('capitalInicial');
const interes0 = document.getElementById('interes');
const sumaAporte= document.getElementById("regular")
const anual0 = document.getElementById('anual');
const table = document.getElementById ('result')

function resetResult() {
    calculoInteresCompuesto.length = 0;
    let element = document.getElementById("result");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
};



boton.addEventListener ('click', (evento) => {

    if (frecuencia0.value == ''|| capital.value == '' || interes0.value == '' || anual0.value == '') {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Alguno de los campos necesarios estan vacios',
            showConfirmButton: false,
            timer: 1500
          })
    } else {
        evento.preventDefault()
    
    let aporte= sumaAporte.value    
    let capitalInicial= capital.value
    let interes= interes0.value
    let frecuencia= frecuencia0.value
    let anual= anual0.value

    if(calculoInteresCompuesto.length > 0){
        resetResult()
    }
    if (aporte == "") {       

        let result = producto(capitalInicial,calcInteres(basePotencia(interes),producto(frecuencia,anual)));
        let capitalFinal = result.toFixed(2)
        let diferencia = parseInt(capitalFinal - capitalInicial)
        calculoInteresCompuesto.push (new interesCompuesto (capitalInicial,interes,anual,frecuencia,capitalFinal,diferencia));
  
        calculoInteresCompuesto.forEach( () => { 
            acumuloAporte=producto(frecuencia,aporte);
            anualTabla = document.createElement('td')
            capitalInicialTabla = document.createElement('td')
            interesTabla = document.createElement('td')
            frecuenciaTabla = document.createElement('td')
            aporteTabla = document.createElement('td')
            aporteAcumuladoTabla = document.createElement('td')
            diferenciaTabla = document.createElement('td')
            capitalFinalTabla = document.createElement('td')
            anualTabla.innerHTML = calculoInteresCompuesto[0].anual
            capitalInicialTabla.innerHTML = `$${calculoInteresCompuesto[0].capitalI}`
            interesTabla.innerHTML = `${calculoInteresCompuesto[0].interes}%`
            frecuenciaTabla.innerHTML = calculoInteresCompuesto[0].frecuencia
            aporteTabla.innerHTML = `$${calculoInteresCompuesto[0].aporte}`
            aporteAcumuladoTabla.innerHTML = `$${acumuloAporte}`
            diferenciaTabla.innerHTML = `$${calculoInteresCompuesto[0].ganancia}`
            capitalFinalTabla.innerHTML = `$${calculoInteresCompuesto[0].capitalFinal}`
            
            table.appendChild (anualTabla)
            table.appendChild (capitalInicialTabla)
            table.appendChild (aporteTabla)
            table.appendChild (aporteAcumuladoTabla)
            table.appendChild (interesTabla)            
            table.appendChild (diferenciaTabla)
            table.appendChild (capitalFinalTabla)
            
         })
         
         graficar()
     }
      else {   
         
        let result= producto(capitalInicial,calcInteres(basePotencia(interes),producto(frecuencia,anual)));
        let resultAporte= producto(aporte,calcInteres(basePotencia(interes),producto(frecuencia,anual)-1))/(interes/100);
        let capitalFinal= parseInt((result+resultAporte).toFixed(2));
        let diferencia= parseInt(capitalFinal-capitalInicial);
        calculoInteresCompuesto.push (new interesCompuesto (capitalInicial,interes,anual,frecuencia,capitalFinal,diferencia,aporte));

        calculoInteresCompuesto.forEach( ()=>{

            acumuloAporte=producto(frecuencia,aporte);
            anualTabla = document.createElement('th')
            capitalInicialTabla = document.createElement('th')
            interesTabla = document.createElement('th')
            frecuenciaTabla = document.createElement('th')
            aporteTabla = document.createElement('th')
            aporteAcumuladoTabla = document.createElement('th')
            diferenciaTabla = document.createElement('th')
            capitalFinalTabla = document.createElement('th')
            anualTabla.innerHTML = calculoInteresCompuesto[0].anual
            capitalInicialTabla.innerHTML = `$${calculoInteresCompuesto[0].capitalI}`
            interesTabla.innerHTML = `${calculoInteresCompuesto[0].interes}%`
            frecuenciaTabla.innerHTML = calculoInteresCompuesto[0].frecuencia
            aporteTabla.innerHTML = `$${calculoInteresCompuesto[0].aporte}`
            aporteAcumuladoTabla.innerHTML = `$${acumuloAporte}`
            diferenciaTabla.innerHTML = `$${calculoInteresCompuesto[0].ganancia}`
            capitalFinalTabla.innerHTML = `$${calculoInteresCompuesto[0].capitalFinal}`
            
            
            table.appendChild (anualTabla)
            table.appendChild (capitalInicialTabla)
            table.appendChild (aporteTabla)
            table.appendChild (aporteAcumuladoTabla)
            table.appendChild (interesTabla)            
            table.appendChild (diferenciaTabla)
            table.appendChild (capitalFinalTabla)
            
        })

          
             console.log("false")
             graficar()
    }
    
    
         } 
         let person = document.getElementsByClassName ('name');
         let usuario = person[0].value
         localStorage.setItem('nombre',`Este es tu resultado ${usuario}`)
   
})
    


    
    

