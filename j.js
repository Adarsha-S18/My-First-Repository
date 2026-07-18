// let username= 'adarsha'
// console.log(`your name is : ${username}`);
// console.log('my name is adarsh')

// console.log('i like mudde bus srau like very much')
// window.alert('this is a aleart')
// window.alert('i like pizza')
// document.getElementById('myh').textContent='i like pizza'
// document.getElementById('myp').textContent='very good choice and virat is best captan in the world'
// let student=100


// student=String(student);
// student+=2
 
// console.log(student, typeof student)
// let name;
// document.getElementById('sub').onclick=function(){
//    name= document.getElementById('bt').value;
//    console.log(name);

// }
// username=window.prompt('what is your name');
// console.log(username);

// document.getElementById('submmit').onclick=function(){
//     name=document.getElementById('text').value;
//     document.getElementById('h1').textContent=` my name :${name}`
// }
// const PI=3.14
// let radius;
// let circumference;
// document.getElementById('button').onclick=function(){
//     radius=document.getElementById('text').value;
   
//     circumference=2*PI*radius
//     document.getElementById('p').textContent=  ` the ans is ${circumference}`;


// }




// let time=10
// if(time==1){console.log('This is lunch time')}
// else if(time==10){console.log('This is a breack fast time')}
// else{console.log('This is a dinner time')}


const text=document.getElementById('text');
const submit=document.getElementById('submit');
const myp=document.getElementById('myp');
let age;
submit.onclick=function(){
     let age=text.value;
    age=Number(age);
    if(age>18){myp.textContent='you can vote';

    }
    else if(age<=0){myp.textContent='age can not be negative';}

    else{myp.textContent='you can not be  vote';}
}
for(i=0;i<10;i++){
    if(i==5)
        continue;
    else{
        console.log(i)
    }
}
// const username='adarsha';
// let result=username.slice(0,)
// console.log(result)

// let temp=-1

// if(temp>=30 || temp>=0)
// {
//     console.log('you can leavee')
// }
// else{
//       console.log('you can not leavee')
// }
// let Aname=window.prompt('enter your name')
// Aname=Aname.trim().charAt(0).toUpperCase()+Aname.trim().slice(1).toLowerCase();
// console.log(Aname);

// function happy(name,age,studying){
//     console.log(`happy birthday to you ${name} `)
//     console.log(` And you are ${age} years old age`)
//     console.log(`and you are study in this class of  ${studying}  `)
// }
// happy('adarsha',22,'BE ISE ')
// happy("pavan",30,'bank manager')
// happy('ravi',45,'bead in class teacher')

function add (x,y){
    return x+y;
}
function sub (x,y){
    return x-y;
}
function mul (x,y){
    return x*y;
}
function div (x,y){
    return x/y;
}
console.log(add(2,5));
console.log(sub(2,5));
console.log(mul(2,5));
console.log(div(2,5));