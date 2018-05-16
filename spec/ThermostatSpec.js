describe("Thermostat", function() {
  var t;

  beforeEach(function() {
    t = new Thermostat();
  });

  it("should have an intial temperature of 20", function() {
    expect(t.currentTemp).toEqual(20);
  });

  it("should increase the temperature", function() {
    t.increase(10)
    expect(t.currentTemp).toEqual(30);
  });

  it("should decrease the temperature", function() {
    t.decrease(10)
    expect(t.currentTemp).toEqual(10);
  });

  it("should reaise error when temperature is below ${t.minimumTemp}", function() {
    expect(function() {
      t.decrease(15);
    }).toThrowError(`Temp too low! Minimum temp is ${t.minimumTemp}`);
  });
});
