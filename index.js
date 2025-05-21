console.log('JS Basics DAY 4')

// // HW-sorted
// let arr = [123,45,98,987,1247];

// // let sorted = arr.sort()
// // ascending order
// // let sorted = arr.sort(function(num1, num2){
// //     return num1-num2;
// // })
// // // arrow metod
// // let sorted = arr.sort((num1,num2) => (num1-num2));

// // sorted - > descending order
// // let sorted = arr.sort(function(num1,num2){
// //     return num2-num1
// // })
// // arrow-method
// let sorted = arr.sort((num1,num2)=> (num2-num1));
// console.log(arr)

// mozilla firefox js engine name -> spiderMonkey

run()  //Hosting -> it is a process of moving function declaration to top of the file

// function declaration
function run(){
    console.log('running')
}
// function call or invoke
// run()

//named function assignment
let stand = function walk(){
    console.log('walking');
};

// anonymous function assignment
let stand2 = function(){
    console.log('walking')
}
stand()
stand2()

let jump = stand;
jump();

let x=1
x='a'
console.log(x)

// function sum(a,b){
//     return a+b
// }
// console.log(sum(2,3))

// special objects -> arguments

function sum(a,b){      //to print object not array question raised on mcq or interview
    // console.log(arguments)
    let total = 0;
    for(let value of  arguments)
        total += value
    return total
   // return a+b
}

let ans = sum(2,3, 4,5,6,7,8)
console.log(ans)

// spread operator -> use on concatenate, to copy on array (...three dot)

// Rust spread -> ...(three dot)
// function sum(...args){
//     console.log(args)
// }
function sum(num, value, ...args){
    console.log(args)
}
sum(1,2,3,4,5,6)

// default parameters
function interest(p,r,y){
    return (p*r*y)/100;
}
console.log(interest(10000,10,5))

// let person = {
//     firstName : 'Mohd',
//     lastName : 'Sarfaraz',
//     get fullName(){
//         return `${person.firstName} ${person.lastName}`
//     },
//     set fullName(value){
//         if(typeof value !== String){
//             throw new Error("You have not sent a string");
//         }
//         let parts = value.split(' ')
//         this.firstName = parts[0]
//         this.lastName = parts[1]
//     }
// };
// //console.log(person.fullName)

// try{
//     person.fullName = true;
// }
// catch(e){
//     // alert('You have sent a number in fullName');
//     alert(e)
// }

// // person.fullName = 'Ashmina Shaikh'
// console.log(person.fullName)
// console.log(person)

// // function fullName() {
// //     return `${person.firstName} ${person.lastName}`
// // }
// console.log(fullName())

{
    var a=5;
}
console.log(a)

for(var i=0; i<10; i++){

}
console.log(i)

if(true){
    a=54;
}
console.log(a)

function a() {
    const ab = 5;
}
const ab=5
function b(){
    const
    ab=5;
}

// Reducing an array 
let arr = [-1,-2,-3,-4,-5];
// let total =0;

// for(let value of arr){
//     total = total + value;
// }
// console.log(total)

let total_sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total_sum)