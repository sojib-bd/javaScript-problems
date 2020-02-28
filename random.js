// floating number
let num = 2.5

let result = Math.floor(num) // convert the number into down value
let reuslt2 = Math.ceil(num) // conver the number into the upper value;
let result3 = Math.round(num) // if the number is up to 2.5 it will use "ceil" method & if 2.4 or below it will take the "floor method"


// Random method

let dice = Math.random() * 10;

let diceOutPut = Math.round(dice);

//console.log(diceOutPut)

// Using the for loop
for (let i = 0; i < 10; i++) {
    let ranNum = Math.random() * 10;
    let output = Math.round(ranNum);
    //console.log(output)
}


// Random number between 100 & 200

let outputRes = 100 + Math.random() * 100;
console.log(outputRes)
