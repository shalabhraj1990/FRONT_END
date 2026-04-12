"use strict";
class Organizer {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    display() {
        console.log(this.id + " " + this.name);
    }
    ;
}
class Eventt {
    id;
    name;
    description;
    starttime;
    endtime;
    constructor(id, name, description, starttime, endtime) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.starttime = starttime;
        this.endtime = endtime;
    }
    display() {
        console.log(this.id + " " + this.name);
    }
    ;
}
class Venue {
    id;
    name;
    description;
    address;
    constructor(id, name, description, address) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
    }
    display() {
        console.log(this.id + " " + this.name);
    }
    ;
}
var organizer = new Organizer(123, "shalabh");
organizer.display();
var eventt = new Eventt(123, "shalabh", "evetn", "12:00pm", "1:00pm");
eventt.display();
