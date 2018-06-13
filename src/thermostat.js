'use strict'

function Thermostat() {};

Thermostat.prototype.temperature = 20;

Thermostat.prototype.up = function(amount) {
  this.temperature += 1;
};

Thermostat.prototype.down = function(amount) {
  this.temperature -= 1;
}
