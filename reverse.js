// How to reverse a sentence

function reverseString(str) {

    let reverse = "";
    for (let i = 0; i < str.length; i++) {

        let char = str[i];
        reverse = char + reverse;// Just put the next one in position of previous one
    }

    return reverse
}

let outputString = reverseString("I am fucking genious");

console.log(outputString)

//Reverse a string in one line Method

var sentence = "I am hardworking. I am serious. I am sure I will do it";
var reverse = sentence.split('').reverse().join('');
console.log(reverse)


let arr = [1, 2, 3];
console.log(arr.reverse())