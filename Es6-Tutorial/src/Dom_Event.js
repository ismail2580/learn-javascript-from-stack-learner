const { javascript } = require("webpack");

let list = document.getElementById('list')

let btn = document.getElementById('btn');

// btn.onclick = function(event){
//     console.log('ismail hossain')
// };

btn.addEventListener('click', function(event){
    let item = list.lastElementChild.cloneNode(true);
    item.innerHTML = 'created Itame'
    list.appendChild(item)
})

let box = document.getElementById('box')

// // this is count full document
// box.addEventListener('mousemove', function(event){
//     document.getElementById('x-value').innerHTML = event.clientX //clientX count page 
//     document.getElementById('y-value').innerHTML = event.clientY //clientY count page
// })

// this is count only section
box.addEventListener('mousemove', function(event){
    let X = document.getElementById('x-value').innerHTML = event.offsetX //offsetX count section 
    let Y = document.getElementById('y-value').innerHTML = event.offsetY //offsetY count section
    // this check 50,or 50 value 
    if(X === 50 && Y===50){
        alert(50,50)
    }
});


// // Event Delegation problem
// [...list.children].forEach(li =>{
//     li.onclick = function(e){
//         e.target.remove() //target mins single element
//     }
// })

list.addEventListener('click', function(event){
    if(this.contains(event.target)){ //this.contains after & before is select all Element  
        event.target.remove()
    }
})


// input Event Handling with Dom 
 let name = document.getElementById('name')
name.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
      document.getElementById('output').innerHTML = `Your Name Is ${event.target.value}`
    //   this is  refrash input box
      event.target.value = ''
    }
})


// this chack box Event Handling With Dom
let Skill = document.getElementsByName('skills')

// this Result id
let Result = document.getElementById('result')

let chackedSkills = [];

[...Skill].forEach(Skill => {
    Skill.addEventListener('change', function(event){
        if(event.target.checked){
            chackedSkills.push(event.target.value)
            outPutSkill(Result, chackedSkills)
        }else{
            let ind = chackedSkills.indexOf(event.target.value)
            chackedSkills.splice(ind, 1)
            outPutSkill(Result, chackedSkills)
        }
    })
})

function outPutSkill(parent, skills){
    let result = '';
    skills.forEach((skill, index) =>{
        result += `(${index + 1})  ${skill}`
    })
    parent.innerHTML = result
}


// list to inputevent with double click

let list2 = document.getElementById('list2');

list2.addEventListener('dblclick', function(event){
    if(this.contains(event.target)){
        let innerText =event.target.innerText
       event.target.innerHTML = '';
        let inputBox = createInput(innerText)
       event.target.appendChild(inputBox)
        inputBox.addEventListener('keypress', function(e){
            if(e.key === 'Enter'){
                console.log(e.target.value)
               event.target.innerHTML = e.target.value
            }
        })
    }
})

function createInput(value){
    let inp = document.createElement('input')
    inp.type = 'text';
    inp.className = 'list-group-item';
    inp.value = value
    
    return inp
}


// this is Form Handling in DOM

let form = document.getElementById('form')

form.addEventListener('submit', function(SEvent){
    SEvent.preventDefault();// this stap refrash
    let isValid = false
    let emptyObject = {};
    [...this.elements].forEach(el =>{
        if(el.type !== 'submit'){
            isValid = Validator(el)
           if(isValid){
             emptyObject[el.name]= el.value
           }else{
              alert(`${el.name} is Required`)
           }
        }
    })
   if(isValid){
    console.log(emptyObject)
    this.reset()
   }
})


// this is chack From Validation 

function Validator(el){
    if(!el.value){
        return false;
    };
    return true
}


// AJAX GET Request with Dom

let load = document.getElementById('load');
let posts = document.getElementById('posts');

const URL = 'https://jsonplaceholder.typicode.com/posts';

load.addEventListener('click', function(){
    fetch(URL)
    .then(Response => Response.json())
    .then(data => {
       data.forEach((post, index) => {
        let lisItem = listItemGenerator(post, index)
            posts.appendChild(lisItem)
       })
    })
    .catch(e => console.log(e.message))
})

function listItemGenerator(item, count){
    let li = document.createElement('li');
    li.className="list-group-item";
    li.innerHTML = `(${count + 1}). ${item.title}`;

    return li
}

// AJAX Post Request with Dom

let postFrom = document.getElementById('post-form')
let post = document.getElementById('postes')

postFrom.addEventListener('submit', function(evnt){
    evnt.preventDefault();
 
    let title = this.title.value || undefined;
    let body = this.body.value || undefined;
    if(title && body){
        let postObj ={
            userId : 100,
            title,
            body
        };
        fetch(URL,{
            method: 'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(postObj)
        })
        .then(response => response.json())
        .then(posts => {
            let items = listItemGenerators(posts)
            post.appendChild(items)
            this.reset()
        })
        .catch(e => console.log(e.message))
    }else{
        alert('Please Provide Every Details')
    }
})

function listItemGenerators(item){
    let li = document.createElement('li');
    li.className="list-group-item";
    li.innerHTML = `(this is id:${item.id}). this is Title:${item.title} by User Id ${item.userId} this is Description:${item.body}`;

    return li
}



// this is dom more feature
    // canvas  javascript Dom

    // svg javascript Dom

    // transition  javascript Dom
    
    // location javascript Dom
    
    // Audio Video javascript Dom
    
    // Speech Recognition javascript Dom
    
    // Web Socket javascript Dom
    
    // Local Storage Cookies and Browser Database