function Thermostat() {
  this.currentTemp = 20;
  this.minimumTemp = 10
}

Thermostat.prototype.increase = function(temp) {
  this.currentTemp += temp
}

Thermostat.prototype.decrease = function(temp) {
  if(this.currentTemp - temp >= this.minimumTemp) {
    this.currentTemp -= temp
  }else {
    throw new Error(`Temp too low! Minimum temp is ${ this.minimumTemp }`)
  }
}
