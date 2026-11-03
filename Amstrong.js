let num = 153;
let temp = num;
let sum = 0;

while (num > 0) {
    let rem = num % 10;
    sum = sum + (rem * rem * rem);
    num = Math.floor(num / 10);
}

if (temp === sum) {
    console.log("Armstrong Number");
} else {
    console.log("Not Armstrong");
}

//Largest of Three Numbers
let a = 10;
let b = 25;
let c = 15;

if (a > b && a > c) {
    console.log(a);
} else if (b > c) {
    console.log(b);
} else {
    console.log(c);
}