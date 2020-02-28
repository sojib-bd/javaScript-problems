// first Method to swap values
let a = 5;
let b = 7;

//console.log('before swap a=', a, 'b=', b)

let tem = a;// consider a third value to empty the first value
a = b;   // fill the value of a with the value of b
b = tem;  // fill the value of "b" with the "temp" value
//console.log('before swap a=', a, 'b=', b)

// ****************** Second Method **************//

let x = 5;
let y = 7;

x = x + y // 5+7 = 12;
y = x - y  // 12- 7 = 5;
x = x - y  // 12 - 5 = 7;

//console.log('before swap x=', x, 'y=', y)

//************** Third Method to swap */

let p = 5;
let q = 7;

[p, q] = [q, p];

console.log(p, q)


