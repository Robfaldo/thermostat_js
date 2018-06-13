'use strict'

function Thermostat() {};

Thermostat.prototype.temperature = 20;

Thermostat.prototype.up = function(amount) {
  this.temperature += amount;
};

Thermostat.prototype.down = function(amount) {
  var potentialTemperature = this.temperature - amount;
  if (potentialTemperature < 10) {
      throw Error("Temperature can't be less than 10")
  } else {
    this.temperature -= amount;
  };
};

//
