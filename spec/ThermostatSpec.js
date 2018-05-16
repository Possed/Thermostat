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

  it("power saving mode is on, max temp is 25", function() {
    expect(t.maxTemp).toEqual(25);
  });

  it("power saving mode is off, max temp is 32", function() {
    t.powerSaving = false
    t.setmaxTemp();
    expect(t.maxTemp).toEqual(32);
  });

  it('when reset, then currentTemp is set to 20', function() {
    t.reset();
    expect(t.currentTemp).toEqual(20);
  })
});
