// let arr =[10,100,1000,10000]

// for(let i of arr){
//     console.log(i);   
// }

// let str = "Javascript"
// for(let char of str){
//     console.log(char)
// }

function* genfunc(){
    yield 'one'
    yield 'two'
    yield 'three'
    yield 'four'
}
let iterator = genfunc()

for(let val of iterator){
    console.log(val);
    
}

// let obj ={
//     id:1
// }
// for(let v of obj){
//     console.log(v);
    
// }