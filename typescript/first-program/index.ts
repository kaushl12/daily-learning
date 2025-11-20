// function hello(name:string | number){
//     console.log("Hello",name);
    
// }

// hello("kaushal")
// 2=>
// function sum(a:number,b:number){
//     return a-b;
// }

// console.log(sum(50,60));

// 3->
// function isLegal(age:number){
//     if(age>=18)
//         return true;
//     else
//         return false
// }
// console.log(isLegal(18));

// function isLegal(age:number) : string {
//     if(age>=18)
//         return "true";
//     else
//         return "false"
// }
// let ans=isLegal(87)
// console.log(ans);



// 4=>
// function isDelayed(fn:(a:string)=>string){
//     setTimeout(()=>{
//         fn("KAushal")
//     },2000)
// }

// isDelayed(log)
// function log(name:string){
//     console.log("Hello Kaushal Here",name);
//     return name;
// }


//5=>
// function greet(user:{
//     name:string,
//     age:number
// }){
//     console.log("Hello My name is :=",user.name,"and my Age is :=",user.age);
    
// }


// let user={
//     name:"Kaushal",
//     age:5
// }
// greet(user)


// 6=>Interface
// interface User{
//     name:string,
//     age:number
// }
// function isLegal(user:User){
//    if(user.age>18){
//     console.log("Adult");
//    } 
//    else{
//     console.log("Kid");
//    }
// }

// const user:User={
//     name:"Kaushal",
//     age:5
// }
// isLegal(user)

// 7=> Interface and type

// interface Manager{
//     name:string,
//     age:number
// }
// interface Employee{
//     name:string,
//     role:string,
//     department:string
// }
// type TeamLead = Manager & Employee
// let t : TeamLead={
//     name:"Kaushal",
//     age:19,
//     role:"employee",
//     department:"It"


// }
// console.log(t);


// 8=>
interface People{
    name:string,
    age:number,
    greet:(name:string)=> string
}
let person:People={
    name:"Kaushal",
    age:18,
    greet:function(name){
        return `Hello ${this.name}`
    }
}
console.log(person.name,person.greet("coder"));
