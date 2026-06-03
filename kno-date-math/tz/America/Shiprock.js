const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "America/Shiprock": "America/Denver"
  },
  "rules": {},
  "titles": {
    "America/Shiprock": {
      "long": "Mountain Standard Time",
      "group": "(GMT-07:00) Mountain Time (US & Canada)"
    }
  }
});