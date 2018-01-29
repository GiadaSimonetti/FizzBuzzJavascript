describe("fizzBuzz", function() {

  it("should return 'fizz' when given a number divisible by 3", function() {
    expect(fizzBuzz(3)).toEqual("fizz");
  });

  it("should return 'buzz' when given a number divisible by 5", function() {
    expect(fizzBuzz(5)).toEqual("buzz");
  });

  it("should return 'fizzBuzz' when given a number divisible by 15", function() {
    expect(fizzBuzz(15)).toEqual("fizzBuzz");
  });

  it("should return the given number when it is not divisible by 3 or 5", function() {
    expect(fizzBuzz(1)).toEqual(1);
  });

});
