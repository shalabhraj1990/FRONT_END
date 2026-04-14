"use strict";
class TouchScreenLaptop {
    ram;
    hd;
    processor;
    constructor(ram, hd, processor) {
        this.ram = ram;
        this.hd = hd;
        this.processor = processor;
    }
    scroll() {
        console.log("scrolling");
    }
    click() {
        console.log("clicked");
    }
}
class HPLaptop extends TouchScreenLaptop {
    constructor(ram, hd, processsor) {
        super(ram, hd, processsor);
    }
    selfRecovery() {
        console.log("self recovery hp");
    }
    scroll() {
        console.log("hp scroll");
    }
}
class DellLaptop extends TouchScreenLaptop {
    constructor(ram, hd, processsor) {
        super(ram, hd, processsor);
    }
    mobileAccess() {
        console.log("dell laptop mobile accesss");
    }
    scroll() {
        console.log("Dell laptop scrolling");
    }
}
var hp = new HPLaptop("10gb", "100Tb", "4");
hp.click();
hp.scroll();
hp.selfRecovery();
var dell = new DellLaptop("10gb", "100Tb", "4");
dell.click();
dell.scroll();
dell.mobileAccess();
