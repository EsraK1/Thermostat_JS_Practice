class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSave = true;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.powerSave === true && this.temperature < 25) {
      this.temperature += 1;
    } else if (this.powerSave === false && this.temperature < 32) {
      this.temperature += 1;
    }
  }

  down() {
    if (this.temperature > 10) {
      this.temperature -= 1;
    } else {
      return "The minimum possible temperature is 10 degrees";
    }
  }

  reset() {
    this.temperature = 20;
  }

  SetPowerSave(status) {
    this.powerSave = status;
  }

  current_energy_usage() {
    if (this.temperature < 18) {
      return "low";
    } else if (this.temperature <= 25) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }
}

module.exports = Thermostat;
