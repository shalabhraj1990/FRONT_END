"use strict";
class Organizer {
    _id;
    _name;
    constructor(_id, name) {
        this._id = _id;
        this._name = name;
    }
    display() {
        console.log(this._id + " " + this._name);
    }
    ;
    set id(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
}
var organizer = new Organizer(123, "shalabh");
organizer.display();
organizer.name = "raj";
console.log(organizer.name);
