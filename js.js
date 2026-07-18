// const numbers=[1,2,3,4,5]
// const sqs=numbers.map(sq)
// console.log(sqs)
// function sq(element){
//     return element**3;
// }
// const even=numbers.filter(iseven)
// console.log(even)
// function iseven(element){
//     return element >1;
// }
// const totals=numbers.reduce(total)
// console.log(`totals:${totals}`)
// function total(accumulator,element){
//     return accumulator+element
// }
// const names=['ravi','raju','soma','parasada']
// const up=names.map(upp)
// console.log(up)
// function upp(element){
//     return element.split("");
// }

//filter
const number=[1,2,3,4,5];
const totals=number.filter((Element)=>Element%2==0);
console.log(totals)
//foreach
const names=['adarsha','giri','hari','rama']
const up=names.forEach((Element,index,Array)=>Array[index]=Element.toUpperCase());
console.log(names)
//map
const squar=number.map((Element)=>Math.pow(Element,2));
console.log(squar)
const total=number.reduce((acc,Element)=>acc+Element)
console.log(total)
//program

try{
    const divi=Number(window.prompt('enter a divided'))
    const divisor=Number(window.prompt('enter a divisor'))
    if(divisor==0){
        throw new error.window.prompt('you can`t divided by zero')
    }
    else if(isNaN(divi)|| isNaN(divisor))
        { throw new error.window.prompt('must be a number')}
    const result=Number(window.prompt(divi/divisor));
    console.log(result)
}catch(error){
    console.error(error);
}
finally{
    console.log('you can`t divided')
}