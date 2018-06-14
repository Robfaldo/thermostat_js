'use strict'

describe('Thermostat', function(){

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  // Thermostat starts at 20 degrees
  it('starts at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  //You can increase the temperature with an up function
  it("can increase the temperature", function(){
    thermostat.up(1);
    expect(thermostat.temperature).toEqual(21);
  });

  // You can decrease the temperature with a down function
  it("can decrease the temperature", function(){
    thermostat.down(1);
    expect(thermostat.temperature).toEqual(19);
  });

  // The minimum temperature is 10 degrees
  it('has a minimum temperature of 10', function(){
    expect(function() {thermostat.down(11);} ).toThrowError();
  });

  describe("power saving mode", function() {
    // Power saving mode is on by default
    it("default power saving mode is on", function(){
      expect(thermostat.isPowerSavingMode).toBe(true);
    });

    it("user can turn power saving mode on", function() {
      thermostat.powerSavingModeOn();
      expect(thermostat.isPowerSavingMode).toBe(true);
    });

    it("user can turn power saving mode off", function() {
      thermostat.powerSavingModeOn();
      thermostat.powerSavingModeOff();
      expect(thermostat.isPowerSavingMode).toBe(false);
    });

    // If power saving mode is on, the maximum temperature is 25 degrees
    describe("when power saving mode is on", function() {
      it("has a maximum temperature of 25", function() {
        thermostat.powerSavingModeOn();
        expect(function() {thermostat.up(6)}).toThrowError();
      });
    });

    describe("when power saving mode is off", function() {
      it("has a maximum temperature of 32", function() {
        thermostat.powerSavingModeOff();
        expect(function() {thermostat.up(6)}).not.toThrowError();
        expect(function() {thermostat.up(13)}).toThrowError();
      });
    });
  });

  // You can reset the temperature to 20 with a reset function
  describe('reset', function(){
    it('can reset the temperate to 20', function(){
      thermostat.up(5);
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('energy usage', function(){
    it('high usage if temperature is over 25', function(){
      thermostat.powerSavingModeOff();
      thermostat.up(6);
      expect(thermostat.energyUsage()).toEqual("High")
    });
    it('medium usage if temperature is between 18 and 24 inclusive', function(){
      expect(thermostat.energyUsage()).toEqual("Medium")
    });
    it('low usage if temperature is below 18', function(){
      thermostat.down(3);
      expect(thermostat.energyUsage()).toEqual("Low")
    });
  });
});


// DONE Thermostat starts at 20 degrees
// DONE You can increase the temperature with an up function
// Done You can decrease the temperature with a down function
// DONE The minimum temperature is 10 degrees
// DONE If power saving mode is on, the maximum temperature is 25 degrees
// DONE If power saving mode is off, the maximum temperature is 32 degrees
// DONE Power saving mode is on by default
// DONE You can reset the temperature to 20 with a reset function
// DONE You can ask about the thermostat's current energy usage: < 18 is low-usage < 25 is medium-usage, anything else is high-usage.
// (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)
