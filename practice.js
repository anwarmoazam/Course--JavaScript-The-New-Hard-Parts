console.log("This is Course - JavaScript The New Hard Parts");

// Callbacks
const data = [
    {name: 'Anwar Moazam', profession: 'Frontend Developer'},
    {name: 'Ankit Mathur', profession: 'Epidemiologist'},
    {name: 'Gajendra Sharma', profession: 'Backend Developer'}
  ];
  
  function getData(){
    setTimeout(()=>{
      let name = '<ol>';
      data.forEach((data,index)=>{
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


function delay(ms) {
  // your code
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve();
    },ms)
  })
}

// delay(3000).then(() => alert('runs after 3 seconds'));

