//Solicitamos un valor al usuario
let numero = parseInt (prompt("Ingrese un número"));
let cantidad = parseInt(prompt("Ingrese cantidad de vueltas: "));
//Se calcula el número ingresado por el número de repeticiones
for (let i = 0; i <= cantidad; i++) {
    let resultado = numero * i;
    console.log(numero +" x "+ i + " = "+ resultado);
    
}