const option = 21;

switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
    break;

default: 
console.log ('You did not chose the valide option ')
  

}

const favoriteFood = "pizza";
let restaurant = undefined;


switch(favoriteFood){
    case "pizza":
        restaurant= "pizzeria";
        break;

    default:
        restaurant = "dinner";
        break;
    case "tacos":
        restaurant = "taqueria";
        break;
    case "sushi":
        restaurant = "sushi bar";
        break;
    case "pancaes":
        restaurant = "pancake house";
        break;
    
}

console.log("Go to the " + restaurant);



// This code determines the number of days in a given month and prints the result.

const month = 12;
let days;

switch(month) {
    case 2: // February
        days = 28;
        break;
    case 4: // April
    case 6 : //June
    case 9 : //September
    case 11: // November
        days = 30;
        break;
    case 1: // January
    case 3: // March
    case 5: // May
    case 7: // July
    case 8: // August
    case 10: // October
    case 12: // December
        days = 31;
        break;
    default:
        days = "Invalid month";

}

console.log("There are " + days + " days in this month.");