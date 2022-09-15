var Constructor_Pattern = function (width, height) {
  this.width = width;
  this.height = height;
  this.drow = function () {
    console.log("I'm a Constructor Pattern");
    this.printProperties();
  };
  this.printProperties = function () {
    console.log("I'm a Constructor Pattern width" + this.width);
    console.log("I'm a Constructor Pattern height" + this.height);
  };
};

var Constructor = new Constructor_Pattern(25, 86);
Constructor.drow();

const User = function (First, last, age) {
  this.FirstName = First;
  this.LastName = last;
  this.Age = age;

  this.fullName = function () {
    return this.FirstName + " " + this.LastName;
  };
};

const ismail = new User("ismaile", "Hossain", 20);
const rahime = new User("Rahim", "Uddin", 35);

console.log(ismail)
console.log(ismail.fullName())
console.log(rahime.fullName())

ismail.Country = 'Bangladesh'


