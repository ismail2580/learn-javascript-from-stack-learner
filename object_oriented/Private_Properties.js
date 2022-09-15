var Data_Private = function (width, height) {
  var Position = {
    x: 20,
    y: -30,
  };

  this.width = width;
  this.height = height;

//   this is javascript data private var
  var printProperties = function () {
    console.log("My Width is " + this.width);
    console.log("My Height is " + this.height);
  }.bind(this);

  // this show private data
  this.getPosition = function(){
    return Position
  } 


  this.drow = function(){
      console.log('I\'m a Data Private Properties')
      printProperties()
      console.log('Position: x=' + Position.x + ' Y' + Position.y)


  }
    // 2nd way this show private data
  Object.defineProperty(this, 'property', {
    get: function(){
      return Position
    },
    set: function(Value){
      Position = Value
    }
  })
};

var final = new Data_Private(45, 50)
final.drow()

console.log(final.property)

