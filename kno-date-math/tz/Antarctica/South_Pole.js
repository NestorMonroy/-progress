const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "Antarctica/South_Pole": "Pacific/Auckland"
  },
  "rules": {},
  "titles": {
    "Antarctica/South_Pole": {
      "long": "New Zealand Standard Time",
      "group": "(GMT+12:00) Auckland, Wellington"
    }
  }
});