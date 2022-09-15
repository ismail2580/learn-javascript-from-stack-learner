// this is First Prototypical Inheritance

function Shape(color) {
  this.color = color;
  console.log("This is Shape function");
}

Shape.prototype = {
  common: function () {
    console.log("this is common Methods");
  },
};
Shape.prototype.constructor = Shape;


function Extend(parent, child) {
  // this add shape proparty
  child.prototype = Object.create(parent.prototype);
  // this is  Reset Constructor After Inheritance
  child.prototype.constructor = child;
}
Extend(Shape, Square);



function Square(width, color) {
  // this out side of function / Constructor function call
  Shape.call(this, color);
  this.width = width;
}

Square.prototype.drow = function () {
  console.log("this is local Drow");
};
Square.prototype.common = function () {
  // Shape.prototype.common.call(this,)
  console.log("I'm Common i am calling from Square  methoda overrideing");
};


var shape = new Shape("green");
var sqr1 = new Square(45, "grren");

console.log(shape);
console.log(shape.common());

console.log(sqr1);
console.log(sqr1.common());

// shape => Shape => Object
// sqr1 => Square => Object

// this chaine add Shape prototype
// sqr1 => Square => Shape => Object


function Circle() {
  console.log("this is Circle function");
}
Extend(Shape, Circle);
// 2nd way
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

Circle.prototype.common = function () {
  // Shape.prototype.common.call(this,)
  console.log("I'm Common i am calling from Circle methoda overrideing");
};
var circle = new Circle();
console.log(circle);
console.log(circle.common());

var allFunc = [shape, sqr1, circle];

for (var i of allFunc) { //in are kaj hossa key bar kore ana are of are kaj hosse value bare kora ana
  i.common();
}

console.log(shape instanceof Shape)// true
console.log(sqr1 instanceof Square)//true
console.log(sqr1 instanceof Shape)// true
console.log(circle instanceof Circle) // true
console.log(circle instanceof Shape)// true
console.log(circle instanceof Square)// false
console.log(sqr1 instanceof Circle)// false




// Inheritance & Composition Mixing 

var canWalk ={
  walk : function(){
    console.log('Walking....')
  }
}

var CanEat = {
  eat : function(){
    console.log('Eating....')
  }
}
var canSwim = {
    swim : function(){
      console.log('s')
    }
}
function mixing(target, ... src){
  Object.assign (target, ...src)
  
}

//this normal pettarn
// var person = Object.assign({}, canWalk ,CanEat)
// person.name = 'ismail hossain'

//this constructor pettarn
function Person(name){
  this.name =name
}
// Object.assign (Person.prototype, canWalk, CanEat)
mixing(Person.prototype, canWalk, CanEat)

var person = new Person('Ismail Hossain')

function GoldFish(name){
  this.name = name;
}
mixing(GoldFish.prototype, CanEat, )

console.log(person)
console.log(person.eat() + person.walk()) // undefined + undefined = NaN

