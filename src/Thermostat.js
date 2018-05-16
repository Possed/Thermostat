function Thermostat() {
  this.currentTemp = 20;
}

Thermostat.prototype.increase = function(temp) {
  this.currentTemp += temp
}

Thermostat.prototype.decrease = function(temp) {
  this.currentTemp -= temp
}
