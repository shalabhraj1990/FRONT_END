interface ICommon{
    id:number,
    name:string,
    display():void;
}

class Organizer implements ICommon{
    id:number;
    name:string;
 
    constructor(id:number,name:string){
        this.id = id;
        this.name = name;
    }

    display():void{
        console.log(this.id + " " + this.name)

    };
}

class Eventt implements ICommon{
    id:number;
    name:string;
    description:string;
    starttime:string;
    endtime:string;
 
    constructor(id:number,name:string,description:string,starttime:string,endtime:string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.starttime = starttime;
this.endtime = endtime;
    }

    display():void{
        console.log(this.id + " " + this.name)

    };
}

class Venue implements ICommon{
    id:number;
    name:string;
    description:string;
    address:string;
 
 
    constructor(id:number,name:string,description:string,address:string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
    }

    display():void{
        console.log(this.id + " " + this.name)

    };
}

var organizer = new Organizer(123,"shalabh");
organizer.display();
var eventt = new Eventt(123,"shalabh","evetn","12:00pm","1:00pm")
eventt.display();
