console.log(' lecture on Promise')
// console.log(' three things to remember on promise')
// console.log(' 1, Resolve')
// console.log(' 2, Reject')
// console.log(' 3, pending')

// function func1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{ // for pending
//             const error = true;
//             if(!error){
//                 console.log('your promise has been resolved')
//                 resolve();
//             }else{
//                 console.log('your promise has not been resolved')
//             reject('Sorry promise Not fullfilled');
//             }
//         },2000)
//     })
// }

// func1()
// .then(()=>{        //.then - is used if call get resolved
//     console.log('vIJAY : THANKS FOR RESOLVING')
// })
// .catch((error)=>{     //.then - is used if call get resolved
//     console.log('Vijay : its too bad ' + error)
// })





// -------------------------------------------------------------

const students = [{name : 'vijay', suject : 'javascript'},
{name : 'priya' , subject : 'Mbbs'}]

function EnrollStudents(student){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            students.push(student);
            console.log('students has been enrolled')
            let error =false;
           if(!error){
               resolve();
           }else{
               reject();
           }
        },10000); // taking 3sec to add new student in list
    })
    
}



function Fetchingstudents(students){
    setTimeout(()=>{
        let str = "";
        students.forEach(element => {
            console.log(element)
            str+=`<li>${element.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        

    },);  // taking 1sec to print so it is printing only two names in it
}

let newStudent = {name : 'manjula',subject : 'MRD'}
EnrollStudents(newStudent).then(()=>{
    Fetchingstudents(students)
}).catch(()=>{
    console.log('the Error Occured')
})


// function inside -> .then  is ran as -> resolve()
// function inside -> .catch  is ran as -> reject()