function classDecorator(constructor: Function){
    console.log("classs decorator");
    console.log(constructor);
    constructor.prototype.price = 1000;
}

// function propertyDecorator(target: any , propertyName:string){
//     console.log("property decorator");
//     console.log(target.constructor)
//     console.log(propertyName); 
// }

function methodDecorator(target:any,methodName:string,descriptor:PropertyDecorator){
    console.log(target);
    console.log(methodName);
    console.log(descriptor);
}
@classDecorator
 class Products{

    //@propertyDecorator
    sku:string = "Iphone";
    constructor(id:number){

    }
    @methodDecorator
    print(){
        console.log("class")
    }

}

let p = new  Products(12);
console.log((<any>p).price)