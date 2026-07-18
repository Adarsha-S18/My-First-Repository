const helllo=(name,age)=>console.log(`hello ${name} and you are${age} years old age`)
helllo('adarsha',22)
// setTimeout(()=>console.log('hello'),300)
const num=[1,2,3,4,9,5];
const odd=num.filter((Element)=>Element%2!=0)
console.log(odd)
const gratter=num.filter((Element)=>Element>=4)
console.log(gratter)
const total=num.reduce((accumulator,Element)=>accumulator+Element)
console.log(total)
const squar=num.map((Element)=>Math.pow(Element,2))
console.log(squar)
const triple=num.map((Element)=>Math.pow(Element,3))
console.log(triple)

//constructor
const person1={
    fname:'adarsh',
    lname:'king',
    age:22,
    hobbies:['cricket','kho-kho','vollybal'],
    adderss:{
        street:'123 -456',
        district:'chitradurga',
        state:'karnataka',
    },
    sayhello:function(){console.log(`hello i am ${this.fname}`)},
    eat:()=>console.log(' iam eat egg rice')
}
person1.sayhello();
person1.eat();
console.log(person1.adderss.district)
console.log(person1.hobbies)

//car model

function car(brand,model,colour){
    this.brand=brand;
    this.model=model;
    this.colour=colour;
    this.drive=function(){console.log(`the ${this.brand} is drive of a ${this.colour} of colour`)}
}
const car1=new car('benze','2024','red');
const car2=new car('fortuner','2026','black');
console.log(car1)
console.log(car2.colour)
car2.drive()

//class

class product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    displayproduct(){
        console.log(`the product name is:${this.name}`)
        console.log(`the price is:${this.price}`)
    }
    calculattoatal(saletax){
        return this.price+this.price*saletax
    }

}
const saletax=0.5;
const product1=new product('apple',100)
console.log(product1.name)
const total1=product1.calculattoatal(2)
console.log(total1)

//animal
class animal{
    alive=true;
    eat(){console.log(`The ${this.name} is eating`)}
    sleep(){console.log(`The ${this.name} is sleeping`)}
}
class rabbit extends animal{
    name='rabbit';
    run(){console.log(`this ${this.name} is running`)}
}
class fish extends animal{
    name='fishs';
    swim(){console.log(`this ${this.name} is swming`)}
}
class eggle extends animal{
    name='egale';
    fly(){console.log(`this ${this.name} is flying`)}
}
const fish1 =new fish();
const rabbit1=new rabbit();
const egale1=new eggle();
rabbit1.eat()
fish1.eat()
egale1.eat()
fish1.swim()
rabbit1.run()
egale1.fly()


class human{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    display(){
        console.log(`The person name is ${this.name} and his age is ${this.age}`)
    }
}
 const human1=new human('adarsha',22)
 console.log(human1.name)
 console.log(human1.age)
 human1.display()

 class rectangle{
    constructor(width=1,height=1){
        this.width=width
        this.height=height
    }
    set width(newwidth){
        if(newwidth>0){
            this._width=newwidth
        }
        else{console.error('width must be >0')}
    }
    
    set height(newheight){
        if(newheight>0){
            this._height=newheight
        }
         else{console.error('height must be >0')}
    }
    get width(){
        return this._width;

    }
    get height(){
        return this._height;
    }
    get area(){
        return this._width * this._height;
    }
 }
 const rectangle1=new rectangle(4,9)
 console.log(rectangle1.width)
 console.log(rectangle1.height)
 console.log(`${rectangle1.area}cm`)

 class person{
    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;
    }
    details_of_p2(){
        console.log(`The name of person is ${this._name}`)
        console.log(`The person age is :${this._age}`)
        console.log(`And his salary is: ${this._salary}`)

    }
    set name(newname){
        if(newname.length>5){
          this._name=newname;
        }
        else{console.error('name must be >5')}
        
    }
     set age(newage){
        if(newage >25){
            this._age=newage;
        }
        else{ console.error('age must be >25')}
       
    
    }
    set salary(newsalary){
        if(newsalary>20000){
            this._salary=newsalary;
        }
        else{ console.error('salary must be greater than 20k')}
       
    }
    get name(){
        return this._name
    }
    get age(){
        return this._age
    }
    get salary(){
        return this._salary
    }
 }
 const person2=new person('adarsh',26,28000)
 console.log(person2.name)
 console.log(person2.age)
 console.log(person2.salary)
 person2.details_of_p2()


 //fruits
 const fruits=[{name:'apple',price:100,cal:125},
    {name:'banana',price:60,cal:144},
    {name:'orange',price:50,cal:90}

 ]
//  fruits.push(name='grap',price=55,cal='78k')
//  fruits.pop()
//  fruits.slice(0,2)
fruits.forEach(fruits=>console.log(fruits.name))
const fruitname=fruits.map(fruits=>fruits.name)
console.log(fruitname)
const cal_h=fruits.filter(fruit=>fruit.cal>90)
console.log(cal_h)

function hellog(){
   

}
 setTimeout(()=>

{
    
    console.log(`good night `)
},3000);

hellog('adarsha')


let fruit=['apple','banana','mango','orange']
fruit.sort();
console.log(fruit)
let number=[1,3,5,7,9,11,13,10,27,29,21,6,4,2]
number.sort((a,b)=>a-b)
console.log(number)

//date

const date=new Date();
const year=date.setFullYear(2026);
const month=date.setMonth(3);
const day=date.setDate(3)
const hour=date.setHours(8);
const Miniutes=date.setMinutes(45)
const Second=date.setSeconds(2)
console.log(date)


//module tran
import { PI,getcir,getarea,getvolume,getrectangle } from "./fun.js";
console.log(PI)
const cir=getcir(10);
const area=getarea(5);
const volue=getvolume(1)
console.log(volue+"cm3")
console.log(area+"cm2")
console.log(cir+'cm')
const rect=getrectangle(4,5);
console.log(rect)


//
const hello=(hesaru,age)=>console.log(`helllo ${hesaru} and you are ${age } years old age`)
helllo('adarsha',22)
const add=(a,b)=>console.log(` the result is: ${a+b}`)
add(2,3)

