'use strict';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Optional Chaining
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['sun', 'mon', 'tue', 'wed', 'thru', 'fri', 'sat'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we are open ${open}`);
}

// //  For-of Loop
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(item);
// }

// console.log([...menu.entries()]);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// // The Nullish Coalescing Operator ??
// // restaurant.numGuests = 23;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish values: null and undefined (NOT 0 or '')
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// // && and ||
// console.log(3 || 'Kaitlyn'); //3
// console.log('' || 'Kaitlyn'); //'Kaitlyn'
// console.log(true || 0); //true
// console.log(undefined || null); //null

// console.log(undefined || 0 || '' || 'Hello' || 23 || null); //'Hello'

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// restaurant.numGuests = 23;
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log(0 && 'Kaitlyn'); //0
// console.log(7 && 'Kaitlyn'); //'Kaitlyn'
// console.log('Hello' && 23 && null && 'Kaitlyn'); //null

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('cheese', 'pepperoni');
// }

// restaurant.orderPizza && restaurant.orderPizza('cheese', 'pepperoni');

// // Rest Pattern and Perameters
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(2, 3, 4, 5, 6, 7, 7, 8);
// const x = [23, 5, 4];
// add(...x);

// restaurant.orderPizza('crust', 'sauce', 'cheese');
// restaurant.orderPizza('cheese');

// // Spread opperator
// const arr = [7, 8, 9];
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArray);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// console.log(newMenu);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu]; //shallow copy

// // joining arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iritables: arrays, strings, maps, sets, but NOT objects
// const str = 'Kaitlyn';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// // console.log(`${...str} Salemi`); //syntax error

// // real-world example
// const ingredients = [
//   // prompt('Ingredient1?'), promp t('Ingredient2?'), prompt('Ingredient3?')
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// // spread opperator with objects
// const newRestaurant = { founded: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorate Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// //Destructuring Objects
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant; //creates three new variables based on the restaurant object
// console.log(name, openingHours, categories);

// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// // const { fri } = openingHours;
// // console.log(fri);

// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// //Destructuring Arrays
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c); //2 3 4

// const [x, y, z] = arr;
// console.log(x, y, z); //2 3 4

// // const [first, second] = restaurant.categories;
// const [first, , second] = restaurant.categories;
// console.log(first, second);

// let [main, , secondary] = restaurant.categories;
// [main, secondary] = [secondary, main]; //switching variables
// console.log(main, secondary);

// // console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
