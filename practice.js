console.log("This is Course - JavaScript The New Hard Parts");

const array = [100,200,300,400,500];

// Callbacks
const data = [
    {name: 'Anwar Moazam', profession: 'Frontend Developer'},
    {name: 'Ankit Mathur', profession: 'Epidemiologist'},
    {name: 'Gajendra Sharma', profession: 'Backend Developer'}
  ];
  
  function getData(){
    setTimeout(()=>{
      let name = '<ol>';
      data.forEach((data)=>{
        name += `<li><b>Name : </b>${data.name} || <b>Profession : </b>${data.profession}</li>`
      })
      name += '</ol>'
      document.body.innerHTML = name;
    },0)
  }

  // getData();
  
  function enrollData(obj,cbFn){
    setTimeout(()=>{
      data.push(obj);
      cbFn();
    },1000)
  }
  
  // enrollData({name: 'Hafizur Rehman', profession: 'Technician'},getData);
  // enrollData({name: 'Mohammad Aadil', profession: 'Student'},getData);
  // enrollData({name: 'Kuldeep Pal', profession: 'Civil Engineer'},getData);
  
  // Promises
  function createData(obj){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        data.push(obj);
        let error = false;
        if(!error){
          resolve();
        } else{
          reject("Some problem in createData");
        }
      },2000)
    })
  }
  
  // createData({name: 'Mohammad Qamil', profession: 'Student'}).then(getData).catch((error)=>{ console.log("Some Problem")});
  // createData({name: 'Sana Fatima', profession: 'Toddler'}).then(getData).catch((error)=>{ console.log("Some Problem")});
  
  // Async and Await
  async function start(){
    await createData({name: 'ABC', profession: 'Toddler'});
    getData();
  }
  
  start();

// Iterators in JavaScript

// let myArray = [100,200,300,400,500];

// function iteratorElement(arr){
//     let index = 0;

// }


// Solution 1 : Generate objects using a function
function userCreator(name,score){
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increament = function(){
    newUser.score++;
  }
  return newUser;
}

let user15 = userCreator('Anwar',10);

console.log(user15);

// Promise.all
// Promise.race
// Promises
// Callback
// Iterator
// Generator
// async generator
// async await

// Promise
let p1 = new Promise((resolve,reject)=>{
  resolve('Promise 1 Data');
  reject('Promise 1 Error');
})

let p2 = new Promise((resolve,reject)=>{
  resolve('Promise 2 Data');
  reject('Promise 2 Error');
})

let p3 = new Promise((resolve,reject)=>{
  resolve('Promise 3 Data');
  reject('Promise 3 Error');
})

p1.then(()=>{
  for(let i=0; i<data.length;i++){
    // console.log(`${data[i].name}`);
  }
}).catch((err)=>{9
  console.log(new Error(err));
})

p2.then(()=>{
  for(let i=0; i<array.length;i++){
    // console.log(`${i+1} Value of array is : ${array[i]}`);
  }
}).catch((err)=>{
  console.log(new Error(err));
})

p3.then(()=>{
  // console.log("Promise 3 result");
}).catch((err)=>{
  console.log(new Error(err));
})

let promiseAll = Promise.all([p1,p2,p3]).then((result)=>{
  // console.log(result)
})
// console.log(promiseAll);

function delay(ms) {
  // your code
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("Alert Msg !!!");
    },ms)
  })
}

// delay(3000).then((data) => alert(data + ' runs after 3 seconds'));

let fetchData1 = fetch('https://jsonplaceholder.typicode.com/users');
let fetchData2 = fetch('data.txt');


function displayJson(data){
  return data.json();
}

function displayText(data){
  return data.text();
}

fetchData1.then(displayJson).then((result)=>{
  console.log(result);
});


fetchData2.then(displayText).then((result)=>{
  // console.log(result);
})

Promise.all([fetchData1,fetchData2]).then(()=>{
  console.log("all finished");
})

// Iterator
let arr = [1,2,3,4,5,6,7];

let iterator = arr[Symbol.iterator]();
let result = iterator.next();


console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())


while(!result.done){
  console.log(result.value);
  result = iterator.next();
}

function myIterator(arr){
  index = 0;
  return{
    next(){
      if(index < arr.length){
        return {
          value: arr[index++],
          done: false
        }
      } else{
        return {
          value: undefined,
          done: true
        }
      }
    }
  }
}

let arrElement = myIterator(arr);

console.log(arrElement.next());
console.log(arrElement.next());
console.log(arrElement.next());
console.log(arrElement.next());
console.log(arrElement.next());
console.log(arrElement.next());
console.log(arrElement.next());
console.log(arrElement.next());
console.log(arrElement.next());
