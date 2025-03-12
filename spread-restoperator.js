let hobbies = ["cricket",'football','basketball']
let hobbies1 =['reader','writer']

let newarr = [...hobbies,...hobbies1]
// console.log(newarr);
// let newarr = hobbies
// hobbies[0] = "baseball"
// let newarr1 =[...newarr,"volyball",'skate'];
 
// console.log(newarr1);

// let empdetail = {
//     empid :"UNQ123",
//     empname :"Vikram",
//     emprole :"Javascript Programmer",
// }
// let tem2 ={...empdetail,Msalary :100000,team2deg:"Full Stack Developer" }
// console.log(tem2);

//Rest Parameter or Rest Operator

function restparams(a,b,...arr){
    console.log(a,b,arr);
    
}
restparams(1,2,3,4,5)