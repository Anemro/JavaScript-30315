console.log('API de CritoYA')


function getCripto(callback){
    const URL_API='https://criptoya.com/api/btc/ars/0.1'
    fetch(URL_API)
    .then(res => res.json())
    .then(data=>{
        const{results: api}= data
        console.log(data);
        })
}