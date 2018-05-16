describe("Thermostat", function() {
  var t;

  beforeEach(function() {
    t = new Thermostat();
  });

  it("should have an intial temperature of 20", function() {
    expect(t.currentTemp).toEqual(20);
  });
});
