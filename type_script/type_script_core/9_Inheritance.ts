class TouchScreenLaptop {
  ram: string;
  hd: string;
  processor: string;

  constructor(ram: string, hd: string, processor: string) {
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
  constructor(ram: string, hd: string, processsor: string) {
    super(ram, hd, processsor);
  }

  selfRecovery() {
    console.log("self recovery hp");
  }

  scroll(): void {
      console.log("hp scroll")
  }
}

class DellLaptop extends TouchScreenLaptop{
      constructor(ram: string, hd: string, processsor: string) {
    super(ram, hd, processsor);
  }

  mobileAccess(){
    console.log("dell laptop mobile accesss");
  }

  scroll(): void {
      console.log("Dell laptop scrolling");
  }
}


var hp = new HPLaptop("10gb","100Tb","4");
hp.click();
hp.scroll();
hp.selfRecovery();

var dell = new DellLaptop("10gb","100Tb","4");
dell.click();
dell.scroll();
dell.mobileAccess();