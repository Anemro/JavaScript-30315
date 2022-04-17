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
function calcularCambio(calculo) {

    moneda= divisaDestino.value.toUpperCase()
    cambiar= cantidadOrigen.value
    destino= cripto[0].ask
    resultadoCambio= cambiar/destino
    tituloTabla = document.createElement('thead')
    resultadoTabla = document.createElement('td')
    tituloTabla.innerHTML='change for'
    resultadoTabla.innerHTML= `${resultadoCambio.toFixed(5)} ${moneda}`
    cantidadDestino.appendChild(tituloTabla)
    cantidadDestino.appendChild(resultadoTabla)

}
botonCambio.addEventListener('click', (evento)=>{
    evento.preventDefault();
    getDolar()
    getCripto(calcularCambio); 
})


botonLimpiarTabla.addEventListener('click', (evento)=>{
    limpiarTabla();
})







