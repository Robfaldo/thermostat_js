'use strict'

describe('Thermostat', function(){

  // Thermostat starts at 20 degrees
  it('starts at 20 degrees', function(){
    var thermostat = new Thermostat();
    expect(thermostat.temperature).toEqual(20);
  });

  //You can increase the temperature with an up function
  it("can increase the temperature", function(){
    var thermostat = new Thermostat();
    thermostat.up(1);
    expect(thermostat.temperature).toEqual(21);
  });

  // You can decrease the temperature with a down function
  it("can decrease the temperature", function(){
    var thermostat = new Thermostat();
    thermostat.down(1);
    console.log(thermostat.tempera)
    expect(thermostat.temperature).toEqual(19);
  });
  
  // The minimum temperature is 10 degrees
  it('has a minimum temperature of 10', function(){
    var thermostat = new Thermostat();
    expect(function() {thermostat.down(11);} ).toThrowError();
  });
});



// DONE Thermostat starts at 20 degrees
// DONE You can increase the temperature with an up function
// Done You can decrease the temperature with a down function
// DONE The minimum temperature is 10 degrees
// If power saving mode is on, the maximum temperature is 25 degrees
// If power saving mode is off, the maximum temperature is 32 degrees
// Power saving mode is on by default
// You can reset the temperature to 20 with a reset function
// You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
// (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)
