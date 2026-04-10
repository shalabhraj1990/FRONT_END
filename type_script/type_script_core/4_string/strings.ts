var s1:string = '<a href="" />';
let name_:string = "shalabh";
var s2:string = `my name si ${name_}`;
console.log(s2);
console.log(s2.length)
console.log(s2.charAt(0));
console.log(s2.indexOf('i'));
console.log(s2.lastIndexOf('i'));

//assignment 1
var num:number = 20;
var float:number = 3.14;
var str:string = "success is the best revenage";
enum Days{
    monday,
    tuesday,
    wednesday,
    thurday,
    friday,
    saturday,
    sunday
}

//assignment 2
//var prompt_value = prompt("Enter a numberic number !!!");
//let number:number  = parseInt(prompt_value ?? "");
// if (number % 2 == 0)
// alert("Number is even")
// else
// alert("Number is Odd")

//assignment 3

var prompt_value = prompt("Enter a numberic number !!!");
let number:number  = parseInt(prompt_value ?? "");
let i:number = 1;
while(i<number){
    i++;
   if(i % 5 === 0)
   {
     continue;

   }
     
    console.log(i);
    
}


