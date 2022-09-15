// inner function
function something(Greet, name){
    
    function sayHi(){
        console.log(Greet, name)
    }
    sayHi()
}
something('Good Morning' , 'Ismail Hossain')

function exmple(FirstName, LastName) {

    function getFirstName(){
        if(FirstName){
            return FirstName.split(' ')[0]
        }else{
            return ''
        }
    }
    var message =LastName+ ' ' + getFirstName() //FirstName first Woard output
    console.log(message)
}
exmple('Muhammad ismail' , 'somrat khan')
