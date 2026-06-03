const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "Antarctica/McMurdo": "Pacific/Auckland"
  },
  "rules": {},
  "titles": {
    "Antarctica/McMurdo": {
      "long": "New Zealand Standard Time",
      "group": "(GMT+12:00) Auckland, Wellington"
    }
  }
});