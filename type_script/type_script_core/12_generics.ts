let names:Array<String> = ["shalabh","Raj"];

type DataStore<T> = {
    [k:string]:T
}

let store:DataStore<string|boolean> ={};
store.name = "shalabh raj";
store.value = true;


//Genric funcation
function merge<T>(a:T,b:T):T[] {
    return [a,b];
}
const ids = merge<number>(1,2);
const strings = merge<string>("1","2");

//Genric funcation
function merge2<T,U>(a:T,b:U) {
    return [a,b];
}
const ids1 = merge2(1,"2");

//Genric place holder with contraints
function mergeObj<T extends object>(a:T,b:T){
    return {...a,...b};
}

const mergeObj2 = mergeObj({name:"shalabh"},{lastname:"raj"})
console.log(mergeObj2)