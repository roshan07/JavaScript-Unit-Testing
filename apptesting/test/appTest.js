const assert = require("chai").assert;
//const sayHello = require("../app").sayHello;
//const addNumbers = require("../app").addNumbers;
const app = require("../app");

describe("App", function() {
  it("sayHello should return hello", function() {
    let result = app.sayHello();
    assert.equal(result, "hello");
  });

  it("sayHello should return a type String", function() {
    let result = app.sayHello();
    assert.typeOf(result, "string");
  });

  it("addNumbers should be above 7", function() {
    let result = app.addNumbers(5, 5);
    assert.isAbove(result, 7);
  });

  it("addNumbers should return a type Number", function() {
    let result = app.addNumbers(5, 5);
    assert.typeOf(result, "number");
  });
});
