// Javascript Execution of Context  

function a(){
    b()
    console.log('I\'m Function A')
}
function b(){
    d()
    console.log('I\'m Function B')
}
function c(){
    console.log('I\'m Function c')
}
function d(){
    c()
    console.log('I\'m Function D')
}

a()
console.log('i\'m Global')