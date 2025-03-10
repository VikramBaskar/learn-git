let userprofile ={
    userName : "benten",
    age :26,
    haircolor : 'black',
    eyecolor : 'brown',
    eat :function(){
       
       return "vanilla ice cream"
       console.log("Im gonna eat ice cream");
    }
}

console.log(userprofile.haircolor,userprofile.age);
console.log(userprofile.userName);
// console.log(userprofile.eat());
let icecreamtype =userprofile.eat() 
console.log(icecreamtype)

