

// setTimeout this is Asynchronous 

// console.log("i'm Line One")

// setTimeout(()=>{
//     console.log("i'm Line Two")
// },4000)
// setTimeout(()=>{
// console.log("i'm Line Three")
// },3000)
// setTimeout(()=>{
// console.log("i'm Line Four")
// }, 2000)
// console.log("i'm Line Five")


// undefined problem solve

// function SayMyName(name){
//     // let result;
//     setTimeout(()=>{
//         // result = name
//         // console.log('I have Done')

//         console.log(name)// this is return ismail hossain
//     },3000)
//     // return result
// }

// // let finalResult = SayMyName('ismail hossain')
// SayMyName('ismail hossain')
// // console.log(finalResult) //this is return undefined


// const Arr = [1,2,3,4,5,6]

// let sqr = Arr.map((v)=> v*v)

// console.log(sqr)

// function AsyncFunc(Arr, cb){
//     return Arr.map((v)=>{
//         // this is first way 
//         // setTimeout(cb.bind(null, v), 0)//return 1 2 3 4 5 6

//         // this is secand way দুইটাই সমান  কাজ করবে 
//         setTimeout(()=> cb(v), 0) //return 1 2 3 4 5 6

//     },1000)
// }

// let qbr = AsyncFunc(Arr, (v)=> {
//     console.log(v)
// })

// console.log(qbr)