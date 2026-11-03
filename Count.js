//Count Vowels and Consonants
let str = "JavaScript";
let vowels = 0;
let consonants = 0;

for (let char of str.toLowerCase()) {
    if (char >= 'a' && char <= 'z') {
        if ("aeiou".includes(char)) {
            vowels++;
        } else {
            consonants++;
        }
    }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);