
class Organizer {
    private _id:number;
    private _name:string;
 

        constructor(_id:number,name:string){
        this._id = _id;
        this._name = name;
    }

        display():void{
        console.log(this._id + " " + this._name)

    };

    set id(id:number){
        this._id = id;
    }

    get id(): number{
        return this._id
    }

        set name(name:string){
        this._name = name;
    }

    get name(): string{
        return this._name;
    }



}



var organizer = new Organizer(123,"shalabh");
organizer.display();
organizer.name = "raj"
console.log(organizer.name)