const Thermostat = require("./thermostat");

describe("Thermostat", () => {
  it("returns the initialized temperature", () => {
    const thermostat = new Thermostat(20, true);
    expect(thermostat.getTemperature()).toBe(20);
  });
});

describe("Thermostat", () => {
  it("increases the set temperature", () => {
    const thermostat = new Thermostat();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(21);
  });
});

describe("Thermostat", () => {
  it("decreases the set temperature", () => {
    const thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(19);
  });

  it("stops the ability to decrease temperature lower than 10", () => {
    const thermostat = new Thermostat();
    // maybe try mock testing here
    // thermostat.getTemperature = 10
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();

    expect(thermostat.down()).toBe(
      "The minimum possible temperature is 10 degrees"
    );
  });
});

describe("Thermostat", () => {
  it("resets the temperature to 20", () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  });
});

describe("Thermostat", () => {
  it("When powersave is on the max temp is set to 25", () => {
    const thermostat = new Thermostat();
    for (let i = 0; i < 10; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
  });
});

describe("Thermostat", () => {
  it("When powersave mode is off it the max temp is set to 32", () => {
    const thermostat = new Thermostat();
    thermostat.SetPowerSave(false);
    for (let i = 0; i < 20; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(32);
  });
});

describe("Thermostat", () => {
  it("current energy usage to be low is temp is < 18", () => {
    const thermostat = new Thermostat();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    expect(thermostat.current_energy_usage()).toBe("low");
  });

  it("current energy usage to be low is temp is <= 25 is medium-usage", () => {
    const thermostat = new Thermostat();
    for (let i = 0; i < 10; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
    expect(thermostat.current_energy_usage()).toBe("medium-usage");
  });

  it("current energy usage to be low is temp is > 25  is high-usage", () => {
    const thermostat = new Thermostat();
    thermostat.SetPowerSave(false);

    for (let i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(26);
    expect(thermostat.current_energy_usage()).toBe("high-usage");
  });
});
