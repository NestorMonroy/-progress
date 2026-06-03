const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "EST5EDT": "America/New_York"
  },
  "rules": {},
  "titles": {
    "EST5EDT": {
      "long": "Eastern Standard Time",
      "group": "(GMT-05:00) Eastern Time (US & Canada)"
    }
  }
});