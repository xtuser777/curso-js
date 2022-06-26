const fizzBuzz = (num) => 
    Number.isNaN(num) ? num : 
    num % 3 === 0 && num % 5 === 0 ? "FizzBuzz" : 
    num % 3 === 0 ? "Fizz" : 
    num % 5 === 0 ? "Buzz" :  
    num;

console.log(fizzBuzz("a"));

for (let i = 0; i <= 100; i++) {
    console.log(fizzBuzz(i));
}