
function Test(a,b,c,d){
    // console.log(arguments)
    for(var i = 0; i<arguments.length; i++){
        console.log(arguments[i])
    }
}
Test(20,40,50)

function addAll(){
    var sum =0;
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    console.log(sum)
}
addAll(20,30,35)
