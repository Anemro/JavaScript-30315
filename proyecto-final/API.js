console.log('API de CritoYA')
const dolar=[]
const cripto=[]

const divisaOrigen= document.getElementById('divisaOrigen')
const divisaDestino= document.getElementById('divisaDestino')
const cantidadOrigen= document.getElementById('cantidadOrigen')
const cantidadDestino= document.getElementById('cantidadDestino')
const botonCambio= document.getElementById('botonCambio')
const botonLimpiarTabla= document.getElementById('limpiarTabla')

function limpiarTabla() {
    while (cantidadDestino.firstChild) {
        cantidadDestino.removeChild(cantidadDestino.firstChild);
    }
};
//Api para traer valores de Dolar lista.
async function getDolar(callBack){
    dolar.length = 0
    const URL_DOLAR = 'https://criptoya.com/api/dolar'//Admite todos los dolares conocidos para argentina.
    const res= await fetch(URL_DOLAR)
    const dolares= await res.json()
    dolar.push(dolares)
    callBack(dolares)
}

async function getCripto(callBack){
    cripto.length = 0
    coin=divisaDestino.value
    fiat=divisaOrigen.value
    const URL__cripto = `https://criptoya.com/api/satoshitango/${coin}/${fiat}`//Admite Fiat (ARS, CLP, MXN, PEN, USD) y cripto (BTC, ETH, DAI, USDC, XRP, BCH, LTC, ADA, SOL, XLM)
    const resCripto= await fetch(URL__cripto)
    const dataCripto = await resCripto.json()
    cripto.push(dataCripto)
    callBack(dataCripto)
}
          
    

function calcularCambio() {
    if (divisaDestino.value == 'usd' && divisaOrigen.value == 'ars' || divisaDestino.value == 'ars' && divisaOrigen.value == 'usd' ) {
        moneda= divisaDestino.value.toUpperCase()
        cambiar= cantidadOrigen.value
        destino= dolar[0].mep
        if(divisaDestino.value == 'usd'){
            resultadoCambio= cambiar/destino            
            cantidadCambiar = document.createElement('th')
            cantidadCambiar.innerHTML= cambiar
            monedaOrigen = document.createElement('th')
            monedaOrigen.innerHTML = divisaOrigen.value.toUpperCase()
            change = document.createElement('th')
            change.innerHTML = 'SWAP'
            resultadoTabla = document.createElement('th')
            resultadoTabla.innerHTML= `${resultadoCambio.toFixed(5)}`
            monedaDestino = document.createElement('th')
            monedaDestino.innerHTML=`${moneda}`  
            
            cantidadDestino.appendChild(cantidadCambiar)
            cantidadDestino.appendChild(monedaOrigen)
            cantidadDestino.appendChild(change)
            cantidadDestino.appendChild(monedaDestino)
            cantidadDestino.appendChild(resultadoTabla)
            
        }else{
            resultadoCambio= destino*cambiar            
            cantidadCambiar = document.createElement('th')
            cantidadCambiar.innerHTML= cambiar
            monedaOrigen = document.createElement('th')
            monedaOrigen.innerHTML = divisaOrigen.value.toUpperCase()
            change = document.createElement('th')
            change.innerHTML = 'SWAP'
            resultadoTabla = document.createElement('th')
            resultadoTabla.innerHTML= `${resultadoCambio.toFixed(5)}`
            monedaDestino = document.createElement('th')
            monedaDestino.innerHTML=`${moneda}`  
            
            cantidadDestino.appendChild(cantidadCambiar)
            cantidadDestino.appendChild(monedaOrigen)
            cantidadDestino.appendChild(change)
            cantidadDestino.appendChild(monedaDestino)
            cantidadDestino.appendChild(resultadoTabla)
        }
            
    } else {
        moneda= divisaDestino.value.toUpperCase()
        cambiar= cantidadOrigen.value
        destino= cripto[0].ask
        resultadoCambio= cambiar/destino
        cantidadCambiar = document.createElement('th')
        cantidadCambiar.innerHTML= cambiar
        monedaOrigen = document.createElement('th')
        monedaOrigen.innerHTML = divisaOrigen.value.toUpperCase()
        change = document.createElement('th')
        change.innerHTML = 'SWAP'
        resultadoTabla = document.createElement('th')
        resultadoTabla.innerHTML= `${resultadoCambio.toFixed(5)}`
        monedaDestino = document.createElement('th')
        monedaDestino.innerHTML=`${moneda}`  
        
        cantidadDestino.appendChild(cantidadCambiar)
        cantidadDestino.appendChild(monedaOrigen)
        cantidadDestino.appendChild(change)
        cantidadDestino.appendChild(monedaDestino)
        cantidadDestino.appendChild(resultadoTabla)
    }
}
        
        

botonCambio.addEventListener('click', (evento)=>{
    evento.preventDefault();
    if (divisaDestino.value == 'usd' && divisaOrigen.value == 'ars' || divisaDestino.value == 'ars' && divisaOrigen.value == 'usd'){
        getDolar(calcularCambio);
    }else{
        getCripto(calcularCambio); 
    }
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Calculo Realizado con exito',
        showConfirmButton: false,
        timer: 1000
      })
})

botonLimpiarTabla.addEventListener('click', ()=>{
    limpiarTabla();
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'TABLA ELIMINADA',
        showConfirmButton: false,
        timer: 1000
      })
})
    
   
        
   
    







