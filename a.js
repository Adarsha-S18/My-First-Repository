// let age=16;
// hasvoter_id=true
// if(age>18){
//     console.log('you can selecting a voting list')
//     if(hasvoter_id){
//         console.log('you have voter id and you can vote')
//     }
//     else{console.log('you can not voter id and you can not vote')}
// }
// else{
//     console.log('you can not vote ')
// }

let age=18;
let result=age>=18?'you can vote':'you can not vote';
console.log(result)
let time=11;
let resultl=time>11?'good agternoon':'good morning';
console.log(resultl)

let day= 5;
switch(day){
    case 1:
        console.log('this is monday')
        break;
    case 2:
        console.log('this is tuesdsy')
        break;
    case 3:
        console.log('this is wednesday')
        break;
    case 4:
        console.log('this is thursday')
        break;
    case 5:
        console.log('this is friday')
        break;
    case 6:
        console.log('this is satarday')
        break;
    case 7:
        console.log('this is sunday')
        break;
    default:
        console.log(` ${day} is not a day`)
}

const check=document.getElementById('check')
const visa=document.getElementById('visa')
const phone=document.getElementById('phone')
const cash=document.getElementById('cash')
const mysubr=document.getElementById('mysubr')
const mypayr=document.getElementById('mypayr')
const mysub=document.getElementById('mysub')
mysub.onclick=function(){
    if(check.checked){mysubr.textContent='you are subscribed my chanel';}
    else{mysubr.textContent='you are not subscribed';}
    if(visa.checked){mypayr.textContent='you pay with visa'}
    else if(phone.checked){mypayr.textContent='you pay with phone pay'}
    else if(cash.checked){mypayr.textContent='you pay with a cash'}
    else{mypayr.textContent='you are not pay to yet!'}
}


console.log(Math.PI)
console.log(Math.E)
let x=2.18
let y=81
let z;
z=Math.sqrt(y)
console.log(z)



