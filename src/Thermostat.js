function Thermostat() {
  this.currentTemp = 20;
  this.minimumTemp = 10;
  this.powerSaving = true;
  this.maxTemp = 25;
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

Thermostat.prototype.setmaxTemp = function() {
  if(this.powerSaving) {
    this.maxTemp = 25;
  } else {
    this.maxTemp = 32;
  }
}

Thermostat.prototype.reset = function() {
  this.currentTemp = 20;
}

Thermostat.prototype.energyUsage = function() {
  if(this.currentTemp < 18) {
    return "Low usage"
  } else if(this.currentTemp < 25) {
    return "Medium usage"
  } else {
    return "High usage"
  }
}
