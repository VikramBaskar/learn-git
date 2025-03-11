let userprofile ={
    userName : "benten",
    age :26,
    haircolor : 'black',
    eyecolor : 'brown',
    eat :function(){
        console.log("Im gonna eat ice cream");
       return "vanilla ice cream"
    }
}

// console.log(userprofile.haircolor,userprofile.age);
// console.log(userprofile.userName,userprofile.eyecolor);
// console.log(userprofile.eat());
// let icecreamtype =userprofile.eat() 
// console.log(icecreamtype)

// let vechile ={
//     "vechiletype" : "Two- Wheeler",
//     "price" : 400000,
//     fueltype : "Petrol",
//     "seater type" :["two","four","six"]
// }

// console.log(vechile.vechiletype,"fueltype :",vechile.fueltype);
// console.log(vechile["fueltype"]);
// console.log(vechile["seater type"][0]);

//shorthand assigned property
//dynamic property

let Uname = "Vikraman"
let age = 26

// let person1 = {
//     Uname,
//     age
// }
// console.log(person1.Uname,person1.age);

let dynamicprop= "empid"
let person2 = {
    Uname,age,
    ["dynamicprop"] :'IFS234'
}
console.log(person2);
console.log(person2.Uname,person2.age,person2['dynamicprop']);

