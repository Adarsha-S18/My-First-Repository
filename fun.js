//callback
function hello(callback){
    console.log('hello')
    callback();
}
function good(){
    console.log('goodbye')
}
function goodn(){
    console.log('goodnight')
}
hello(goodn)
//foreach

let numbers=[1,2,3,4]
numbers.forEach(pow)
console.log(numbers)

function double(element,index,array){
    array[index]=element*2;
    
}

function triple(element,index,array){
    array[index]=element*3;
    
}
function pow(element,index,array){
    array[index]=Math.pow(element,2)

}
let fruits11=['apple','banana','orange']
fruits11.forEach(lower)
fruits11.forEach(uppercase)
console.log(fruits11)

function uppercase(element,index,array){
    array[index]=element.toUpperCase();

}
function lower(element,index,array){
    array[index]=element.toLowerCase();
}

//map
let student=['ravi','raju','bhima','soma']
let upp=student.map(up);
console.log(upp)

function up(element){
    return element.toUpperCase()

}

const nu=[1,2,3,4,5]
const sqr=nu.map(sq)
console.log(sqr)
function sq(element){
    return Math.pow(element,2)
}

const date=['2024-1-10','2025-2-09','2026-6-12']
const formdate=date.map(formate)
console.log(formdate)
function formate(element){
    const part= element.split('-')
    return `${part[1]}/${part[2]}/${part[2]}`
}
console.log('helllo welcome to my world')
//filter
let nums=[1,2,3,4,5,6,7,8,9,10]
const evenum=nums.filter(even)
console.log(evenum)
const oddn=nums.filter(odd)
console.log(oddn)
const gn=nums.filter(gratter)
console.log(gn)

function even(element){
    return element %2==0;
}
function odd(element){
    return element %2!==0;
}
function gratter(element){
    return element>=6}
console.log('Helllo Welcome Mo My World')
//reduce
const number=[2,3,4,5,50,89,90,67,89,98]
const totals=number.reduce(total)
console.log(totals)
const maxmm=number.reduce(maxm)
console.log(maxmm)
const min=number.reduce(minm)
console.log(min)

function total(accumulator,element){
    return accumulator+element
}
function maxm(accumulator,element){
    return Math.max(accumulator,element)
}
function minm(accumulator,element){
    return Math.min(accumulator,element)
}
setTimeout(function(){
    console.log('hello world');
},3000);

const age=[1,2,3,4,5];
const squar=age.reduce(function(accumulator,element){return accumulator+element});
console.log(squar)

//module transfer
export const PI=3.14159;
export function getcir(radius){
    return 2*PI*radius
}
export function getarea(radius){
    return PI*radius**2;
}
export function getvolume(radius){
    return 4*PI*radius*radius
}
export function getrectangle(length,width){
    return 2*length*width
}