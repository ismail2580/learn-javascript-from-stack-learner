// Bind, Call, Apply in Javascript

function myFunc(c, d) {
  console.log(this);
  console.log(this.a + this.b + c + d);
}

// call

myFunc.call({ a: 20, b: 30 }, 50, 50); //this create new propaete

myFunc.apply({ a: 10, b: 40 }, [50, 80]);

var teastBind = myFunc.bind({ a: 20, b: 30 });
teastBind(50, 50);
