interface Exterior{
    color:string,
    noOfDoor:number
}

interface Interior{
    seats:number,
    auto:boolean
}

interface Car extends Exterior,Interior{
    make:string,
    model:string,
    year:number
}

var car:Car={
    make:"honda",
    model:"civic",
    year:2026,
    color:"black",
    noOfDoor:5,
    seats:7
}


interface Book{
    title:string,
    isbn:boolean,
    description:string,
    price:number
}

var book:Book={
        title:"hello",
    isbn:true,
    description:"this is hello world book",
    price:50
}