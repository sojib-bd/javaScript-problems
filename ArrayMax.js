// Find the max number from an array
let arr = [24, 45, 80, 15, 95, 204];

let max = arr[0];
for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element > max) {
        max = element
    }
}



// find the smallest number
let arr1 = [24, 45, 80, 15, 95, 204];

let min = arr1[0];
for (let i = 0; i < arr1.length; i++) {
    let element1 = arr1[i];
    if (element1 < min) {
        min = element1
    }
}

//console.log("The smallest Number is : ", min)


// Find the sum 

let num = [24, 45, 80, 15, 95, 204];

let sum = 0;
for (let i = 0; i < num.length; i++) {

    sum = sum + num[i]
}
//console.log(sum)


var friends = ["Alu", "Bulu", "culu", "dulu", "fulu"];
var allNames = "";
for (var i = 0; i < friends.length; i++) {
    var name = friends[i];
    allNames = allNames + name;
}
//console.log(allNames)
function add(a, b) {
    return a + b;
}
var res = add("adam" + "eve")

console.log(res)