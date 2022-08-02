Number.prototype.isPrime = function () {
    for (let i = 2; i <= Math.sqrt(this); i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;
}

const { performance } = require('perf_hooks');
var start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while (primeCount < 1e4) {
    if (num.isPrime()) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);


// recursive

//O(n^2) ? No O(2^n)
start = performance.now()
function rFib(n) {
    if (n < 2) {
        return n;
    }
    return rFib(n - 1) + rFib(n - 2);
}
console.log(rFib(20));
console.log(`Recursive took ${performance.now() - start} milliseconds to run`);

// iterative

// O(n)
start = performance.now()
function iFib(n) {
    const vals = [0, 1];
    while (vals.length - 1 < n) {
        let len = vals.length;
        vals.push(vals[len - 1] + vals[len - 2]);
    }
    return vals[n];
}
iFib(20);

console.log(`Iterative took ${performance.now() - start} milliseconds to run`);

start = performance.now()
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
console.log(`String reversal took ${performance.now() - start} milliseconds to run`);

// This is not faster lol but it happened
start = performance.now()
splitStory = story.split('')
var begin = 0
var end = splitStory.length - 1
while (begin < end){
    var temp = splitStory[end]
    splitStory[end] = splitStory[begin]
    splitStory[begin] = temp
    begin++
    end--
}
var reconstruction = splitStory.join('')
console.log(reversed1 == reconstruction)
console.log(`String reversal took ${performance.now() - start} milliseconds to run`);

String.prototype.reverseString = function(){
    return this.split('').reverse().join('')
}

start = performance.now()
console.log(story.reverseString())
console.log(`String reversal took ${performance.now() - start} milliseconds to run`);



