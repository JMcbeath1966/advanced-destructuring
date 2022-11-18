/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
//let john = ages[0];
//let mary = ages[1];
//let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets

let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnFluent, johnSecondary] = languages;
console.log(johnFluent, johnSecondary);

let [,, jamesFluent, jamesFluent2] = languages;
console.log(jamesFluent, jamesFluent2);

let languages2 = {
    firstLan: "english",
    secondLan: "french",
    thirdLan: "german",
};
let {firstLan, thirdLan} = languages2;
console.log(firstLan, thirdLan);


// Using rest parameter syntax

let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [best, secondBest, ...rest] = fruits;
console.log(best);
console.log(secondBest);
console.log(rest);

let favouriteFood = {
    james: "pizza",
    jude: "chips",
    molly: "everything",
    ruby: "nothing",
}

let {james, jude, ...remain} = favouriteFood;
console.log(james);
console.log(jude);
console.log(remain);