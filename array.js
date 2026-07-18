fruits=['apple','banana','mango','grapes']
fruits.push('tea')

console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])
console.log(fruits[4])
console.log(fruits)
let numoffruit=fruits.length
console.log(numoffruit)
let index=fruits.indexOf('mango');
console.log(index);

let num=[1,2,3,4,5,5,16]
let max=Math.max(...num)
console.log(max)

let nums=[1,2,3,4,5,5,16]
let min=Math.min(...nums)
console.log(min)

let uname='adarsha'
let letter=[...uname].join('-')
console.log(letter)

let fruits1=['apple','banana','mango','orange']
let meate=['cake ','ice','dish']
let foods=[...fruits1,...meate,'eggs']
console.log(foods)

function sum(...numbers){
let result=0
for(let number of numbers){
    result=+number
}
return result;
}
let total=sum(1,2,3)
console.log(total)

