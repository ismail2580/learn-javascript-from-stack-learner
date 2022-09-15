// // let promise1 = new Promise((resolve, reject)=>{
// //     setTimeout(resolve, 5000, 'One')
// // })


// // let promise2 = new Promise((resolve, reject)=>{
// //     setTimeout(resolve, 3000, 'Two')
// // })
// // // console.log(promise1)
// // // console.log(promise2)

// // promise1.then((v)=>{ //then মানে হচ্ছে resolve/value টাকে বের করা
// //     console.log(v)
// // }).catch((e)=>{//then মানে হচ্ছে reject/error টাকে বের করা
// //     console.log(e)
// // })

// // promise2.then((v)=>{ //then মানে হচ্ছে resolve/value টাকে বের করা
// //     console.log(v)
// // }).catch((e)=>{//then মানে হচ্ছে reject/error টাকে বের করা
// //     console.log(e)
// // })

// // // for Example iPhone story

// // function getIphone(isPassed){
// //     return new Promise((resolve, reject)=>{
// //         setTimeout(()=>{
// //             if(isPassed){
// //                 resolve('I Have Got An I Phone')
// //             }else{
// //                 reject(new Error('You Have Failed'))
// //             }
// //         },5000)
// //     })
// // }

// // getIphone(true)
// //     .then((result) => {
// //     console.log(result)
// //     })
// //     .catch((err) => {
// //     console.log(err)
// //     });

// //     // promises API
// //     const delay = s => new Promise(resolve => setTimeout(resolve, s*1000 ))

// //     delay(2).then(() => console.log('2 seconda delay'))
// //     delay(1).then(() => console.log('1 seconda delay'))
// //     delay(4).then(() => console.log('4 seconda delay'))
// //     delay(3).then(() => console.log('3 seconda delay'))
// //     delay(5).then(() => console.log('5 seconda delay'))

// // this is promises methods

// // // this resolve Promise
// // let promise1 = Promise.resolve('test')
// // promise1.then(v => console.log(v))

// // // this reject Promise
// // let promise2 = Promise.reject('this a Reject')
// // promise2.catch(err => console.log(err))


// // // this is lot of array
// // let p1 = Promise.resolve("one");
// // let p2 = Promise.resolve("Two");
// // let p3 = Promise.resolve("Three");


// // let Promise_Array = [p1, p2, p3];

// // this is a retur all Promise  
// // Promise.all(Promise_Array)
// //     .then(array => {
// //         console.log(array)
// //     })


// // this is all p at the same time return value
// let p1 = new Promise(resolve =>{
//     setTimeout(resolve, 5000, 'Five')
// })
// let p2 = new Promise(resolve =>{
//     setTimeout(resolve, 3000, 'Three')
// })
// let p3 = new Promise(resolve =>{
//     setTimeout(resolve, 4000, 'Foure')
// })

// let Promise_Array = [p1, p2, p3];

// // this is a retur all Promise  
// Promise.all(Promise_Array)
//     .then(array => {
//         console.log(array)
//     })


//     // this is find first promise
// Promise.race(Promise_Array)
//     .then(value => console.log(value))


    


// // // async return Promise
// // async function test(){
// //     return 'Test'
// // }
    
// // test().then(v => alert(v))



// this is await or async

let p1 = new Promise(resolve => {
    setTimeout(resolve, 3000, 'I am a Promise')
    })

async function test(){
    //  p1.then(v => console.log(v))

    // await যতখন শেষ না হবে ততক্ষণ process চলবে 
    let v = await p1
    console.log(v)
}

test()

// this is await or async with fetch api

async function fetchData(){
   try{
    let res = await fetch('https://jsonplaceholder.typicode.com/users')
    let Data = await res.json()
    let names= Data.map( u => u.name)
    console.log(names)
   }catch(e){
       console.log(e.message)
   }
}

fetchData()


// this multiple Promise 

let promise = [Promise.resolve(2), Promise.resolve(5), Promise.resolve(7)] 

async function allPromise(){
    let result = await Promise.all(promise)
    console.log(result)
}

allPromise()