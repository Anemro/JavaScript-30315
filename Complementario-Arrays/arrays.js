console.log('Incorporando Arrays');
//definisión de nueva receta
class recipe {
    constructor(title, ingredients, amount) {

        this.title = title;
        this.product = ingredients;
        this.amount = parseInt(amount);

    }
}

// ingreso de productos
let nameFoods =[];
nameFoods.push (new recipe ('Spaguetti', 'Fideos', '300gr'))
nameFoods.push (new recipe ('Albondigas','Carne_Molida' , '500gr'))
nameFoods.push (new recipe ('Hamburguesas','Medallon_carne', '250gr'))
nameFoods.push (new recipe ('Paella','Frutos_mar','150gr'))
console.log(nameFoods);

//agregamos función de busqueda
function buscarRecipe(ingredients, title){
    return Recipe.find(objet => objet.product === title.toUpperCase());
}
for (let index = 0; index < 3; index++) {
    let busqueda = buscarRecipe(nameFoods, prompt('INGRESAR NOMBRE DE RECETA'));
    if(busqueda != undefined){
        alert('RECETA '+busqueda.title+' INGREDIENTE '+busqueda.product+' CANTIDAD '+busqueda.amount);
    }else{
        alert('NO EXISTE RECETA CON ESE NOMBRE');
    }
}
