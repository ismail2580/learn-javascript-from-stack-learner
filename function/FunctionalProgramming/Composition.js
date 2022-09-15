function printfunc(input) {
  console.log(input);
}
function multiplyByFive(n) {
  return n * 5;
}
function add(a, b) {
  return a + b;
}
printfunc(multiplyByFive(add(3, 5)));
