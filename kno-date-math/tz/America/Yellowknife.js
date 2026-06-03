const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "America/Yellowknife": "America/Edmonton"
  },
  "rules": {},
  "titles": {
    "America/Yellowknife": {
      "long": "Mountain Standard Time",
      "group": "(GMT-07:00) Mountain Time (US & Canada)"
    }
  }
});