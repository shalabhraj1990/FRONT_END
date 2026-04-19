function logger<T extends new (...args: any[]) => any>(
  target: T,
  ctx: ClassDecoratorContext,
) {
  console.log("logger decorator");
  console.log(target);
  console.log(ctx);

  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      console.log("class contructor from decorator");
      console.info("decorator obj", this);
    }
  };
}

function autobind(
  target: (...args: any[]) => any,
  ctx: ClassMethodDecoratorContext,
) {
  ctx.addInitializer(function (this: any) {
    this[ctx.name] = this[ctx.name].bind(this);
  });

  return function (this: any) {
    //call external api / file system
    console.log("executing original funcation");
    target.apply(this);
  };
}

@logger
class Person {
  name = "shalabh";
  @autobind
  greet() {
    console.log("hi i am " + this.name);
  }
}
let obj = new Person();
console.log(obj);
