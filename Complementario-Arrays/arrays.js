console.log('Incorporando Arrays');
//definisión de nueva receta
class recipe {
    constructor(title, ingredients, amount) {

        this.title = title;
        this.product = ingredients;
        this.amount = amount;

    }
}

// ingreso de productos
let nameFoods =[];


do {
    let title = prompt("Ingrese nompre de Receta (fin para terminar)");
    if (title === "fin") {
        break
    }
    let ingredients=prompt("ingrese ingredientes");
    let amount=prompt("ingrese cantidad");
    nameFoods.push (new recipe (title,ingredients,amount));

    console.log(nameFoods);
    
}while (nameFoods != false)


