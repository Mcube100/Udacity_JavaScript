const eatsPlants = false;
const eatsAnimal = false;



/*
let category;

if (eatsPlants && eatsAnimal){
    category = 'omnivore';

}else if (eatsPlants){
    category = 'herbivor';
}else if (eatsAnimal){
    category = 'carnivore';
}else {
    category = 'undefined'; // In case the animal eats neither
}

*/



//using nested ternary operators
 let category = eatsPlants && eatsAnimal
 ? 'omnivore'
 : eatsPlants
 ? 'herbivore'
 : eatsAnimal
 ? 'carnivore'
 : 'undefined';



console.log(category);