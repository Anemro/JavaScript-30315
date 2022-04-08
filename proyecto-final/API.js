console.log('API de CritoYA')
//Api para traer valores de Dolar lista.

const dolarDom= document.querySelector('.mep')





async function getDolar(){
    const URL = 'https://criptoya.com/api/dolar'
    const res= await fetch(URL)
    const data = await res.json()
  }

