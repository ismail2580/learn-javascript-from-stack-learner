// Closure হচ্ছে কোন ডেটা কোন Argument ছাড়া বাইরে থেকে সরাসরি function এর scope  বিতরে আসে সাটাই Closure  যেমন-ঃ

var b = 10;  //this is global scope
function a(){
    var x = 30; 

    return function () {
        console.log(x)
    }
} 
var abc = a()
console.dir(abc)


for(var i = 1; i<=5; i++){
    (function(n){
    setTimeout(function(){
        console.log(n)
    },1000 * n);
}(i))
}