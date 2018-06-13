'use strict'

function Thermostat() {};

Thermostat.prototype.temperature = 20;

Thermostat.prototype.up = function(amount) {
  if (this.isPowerSavingMode) {
    var potentialTemperature = this.temperature + amount;
    if (potentialTemperature > 25) {
      throw Error("When power saving mode is on, temperature can't be more than 25");
    };
  } else {
    var potentialTemperature = this.temperature + amount;
    if (potentialTemperature > 32) {
      throw Error("When power saving mode is off, temperature can't be more than 32");
    }
  };
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

Thermostat.prototype.isPowerSavingMode = false;

Thermostat.prototype.powerSavingModeOn = function() {
  this.isPowerSavingMode = true;
};

Thermostat.prototype.powerSavingModeOff = function() {
  this.isPowerSavingMode = false;
};