// Prototype in JS exemple
// create new obj
const man = {
    power: 90,
    hp: 100,
    height: 180,
    sayHello: function() {
       console.log('Hello!');
    } 
}
// give all options from man to new obj 'woman'
const woman = Object.create(man);  // "man" is prototype for "woman" now

console.log(woman.power); // 90
console.log(woman.sayHello()); // Hello!