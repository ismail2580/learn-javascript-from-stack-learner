function greet(msg){
    function greetings(name){
        return msg + ' , ' + name + "!"
    }
    return greetings
}
var gm = greet('Good Morning') //gm is a function // এটা প্রথম paramiter এ store করবে 
var gn = greet('Good Night')//gm, gn same
var hello = greet('Hello')
var msg = gm('Ismail Hossain')// এটা দ্বিতীয় paramiter এ store করবে 
console.log(msg) //এটা দুটোই output দিবে 
console.log(gn('somart'))
console.log(hello(`i'm ismail Hossain`))