function Thermostat() {
  this.currentTemp = 20;
}

Thermostat.prototype.increase = function(temp) {
  this.currentTemp += temp
}
