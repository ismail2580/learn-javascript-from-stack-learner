var rect = {
  width: 100,
  height: 50,

  draw: function () {
    console.log("I'm a rectangle");
    console.log("My Width Is " + this.width);
    console.log("My height Is " + this.height);
  },
};

rect.draw();

rect.height = 100;

rect.draw();

var rect2 = {
  width: 47,
  height: 56,
  print: rect.draw,
};
console.log(rect2.print);

rect2.print();
