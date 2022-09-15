var createRect = function (width, height) {
  return {
    width: width,
    height: height,

    drow: function () {
      console.log("I'm a Rectangle");
      this.print();
    },
    print: function () {
      console.log("My Width Is " + this.width);
      console.log("My Height Is " + this.height);
    },
  };
};

var Rectangle1 = createRect(25, 20);
Rectangle1.drow();
