/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The this keywoard is in the global scope which will bind it to the window.
* 2. Dot notation is used to invoke a function
* 3. We use the new keyword to create an object
* 4. Use functions to bind,apply,or call properties to attach to a function
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
Console.log(this);

// Principle 2

// code example for Implicit Binding
const example = {
    name: "Fred",
    age: 32,
    says: function(){
        return '${this.name} loves to yell.';
    }
};

// Principle 3

// code example for New Binding
var stuff = {
    food: 'meat',
    name: 'Lion'
}
function Animal(stuff) {
  this.food = stuff.food;
  this.name = stuff.name;
  this.eat = function() {
    return `This animal eats ${this.food}.`;
  }
};

const zebra = new Animal('grass');
const lion = new Animal('meat');

// Principle 4

// code example for Explicit Binding

function Product(name, price){
    this.name = name;
    this.price = price;
}

function Car(name, price){
    Product.call(this,name,price);
    this.category = 'sports car';
    console.log('${this.name}');
}