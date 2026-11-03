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

// Each Word Reverse
let str = "Hello World";
let words = str.split(" ");
let result = "";

for (let word of words) {
    let rev = "";

    for (let i = word.length - 1; i >= 0; i--) {
        rev = rev + word[i];
    }

    result = result + rev + " ";
}

console.log(result.trim());