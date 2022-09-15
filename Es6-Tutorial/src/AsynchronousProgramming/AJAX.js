// this a AJAX

// import { request } from "http"

// AJAX = Asynchronous JavaScript And XML.

// http
// HyperText Transfer Protocol,

// // this get request
// let xhr = new XMLHttpRequest()

// xhr.open('get','https://jsonplaceholder.typicode.com/users' )

// xhr.onreadystatechange = function(e){
//     if(xhr.readyState === 4) {
//         if(xhr.status === 200){
//             let user = JSON.parse(xhr.response)
//             console.log(user)
//         }else{
//             console.log(xhr.status)
//         }
//     }
// }

// xhr.send()

// function getRequest(url, callBack){
//     let xhr = new XMLHttpRequest()
//     xhr.open('get',url)

//     xhr.onreadystatechange = function(e){
//         if(xhr.readyState === 4) {
//             if(xhr.status === 200){
//                 let response = JSON.parse(xhr.response)
//                 callBack(null, response)
//             }else{
//                 callBack(xhr.status, null)
//             }
//         }
//     }
    
//     xhr.send()
    
// }
// getRequest('https://jsonplaceholder.typicode.com/users', (err, res) =>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(res)
//     }
// })

// getRequest('https://jsonplaceholder.typicode.com/posts', (err, res) =>{
//     if(err){
//         console.log(err)
//     }else{
//         res.forEach(res => console.log(res.title))
//     }
// })


// const BASE_URL = 'https://jsonplaceholder.typicode.com'

//  getRequest(`${BASE_URL}/post/1`,(err, res) => {
//      if(err){
//          throw new Error('Error Occurred')
//      }
//      let {userId} = res

//      getRequest(`${BASE_URL}/users/${userId}`, (err, res)=>{
//         if(err){
//             throw new Error('Error Occurred')
//         }
//         getRequest(`${BASE_URL}/post/1/comments/${res.Id}`,(err, res)=>{
//             if(err){
//                 throw new Error('Error Occurred')
//             }
//             console.log(res)
//         })
//      })

//  })
