import food from './food';
import helpers from './helpers';
//QUESTION ABOUT importing. I destructred this and it didnt work.... WHY?
let fruits = food.fruits;
let choice = helpers.choice;
let remove = helpers.remove;
let choiceF = choice(fruits)

console.log(`I'd like one ${choiceF} please`);
console.log(`Here you go: ${choiceF}`);
console.log(`Delicious! May I have another?`);
remove(fruits,'🍒');
console.log(`I'm Sorry, We're all out. We have ${fruits.length} left.`)