
let flavors = ["vanila","butterscortch","lavandar","chocolate"]

// console.log(flavors[0])
// console.log(flavors[1])
// console.log(flavors[2])
// console.log(flavors[3])
console .log(flavors.indexOf(2))
console.log(flavors[flavors.length-1]);

let sample =[1,'Two',true,undefined,{id:1}]
//array constructor
let newarray = new Array();
newarray[0] ="first"
newarray[1] ="second"
newarray[2] ="three"
newarray[3] ="four"

console.log(newarray.length);
console.log(newarray[1]);

//dense & sparse array

let denseArray =[1,2,3,4,5] //contigous Memory
//           1004,1008,1012,1016,1020
        //     |
//formula =baseaddress +(index * size)
     //       1004 +(0*4) =1004


let sparsearray =[10,20,,30,40,,60]//hash Table or hash map
console.log(sparsearray);

