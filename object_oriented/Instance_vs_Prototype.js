// Instance vs Prototype Members in Javascrip

function Square(width){
    this.width = width
    this.getWidth = function(){
        console.log('this width is= ' + this.width)
        // this.drow()
    }
}

Square.prototype = {
    // this is push prototype methods
    drow : function(){
        this.getWidth()
        console.log('this common all all saide same not changeble ')
    },
    toString : function(){
        return 'my width is = ' + this.width
    },
  
    
}

var sqr1 = new Square(30)
var sqr1 = new Square(40)

console.log(sqr1)

console.log(sqr1.drow())
console.log(sqr1.toString())

console.log(sqr1.getWidth())


console.log(sqr1.hasOwnProperty('width')) //return true
console.log(sqr1.hasOwnProperty('getWidth')) //return true
console.log(sqr1.hasOwnProperty('drow'))//return false

//this is chack return Instance proparty
console.log(Object.keys(sqr1))

//this is chack return Instance and Prototype Members proparty
for(var i in sqr1){
    console.log([i])
}





//This is local push to prototype just change this object prototype

function Person(name, age, skills){
    this.name = name;
    this.age = age;
    this.skills = skills;
}
Person.prototype.country = 'BD';
let person = new Person('ismail', '20', ['PHP', 'CSS']);
console.log('country', person);


function Car(name, model, brand){
    this.name = name;
    this.model =model;
    this.brand = brand;
}

Car.prototype.year = '2022';
let car = new Car('Audi X202', 'X2', 'Audi');
console.log(car);

