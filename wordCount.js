// Best way to count the world is count the white space

var speech = "I am a good person. I don't   snore at night."

let count = 0;

for (let i = 0; i < speech.length; i++) {

    let char = speech[i];
    if (char == " ") {
        count++
    }
}

// usually it will count 9 because it will not count the last one.
// so in that case we can increase the count by +1;

count++
console.log(count)

// Now if someone put two white space at time in between words than the code will feedback worng info.
// So to solve the problem we can modify the condition.
// speech[i-1] if the previous index of white space is not a white space than increase the count otherwise not.

let numberOfCount = 0;
for (let i = 0; i < speech.length; i++) {
    let char = speech[i];

    if (char == " " && speech[i - 1] != " ") {
        numberOfCount++
    }
}
numberOfCount++

console.log(numberOfCount)


// counting the lette "a" in a sentence

var sentence = "I am hardworking. I am serious. I am sure I will do it";
var LetterCount = 0;
for (var i = 0; i < sentence.length; i++) {
    var letter = sentence[i];
    if (letter == "a") {
        LetterCount++;
    }
}
console.log(LetterCount)