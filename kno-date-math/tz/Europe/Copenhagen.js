const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "Europe/Copenhagen": "Europe/Berlin"
  },
  "rules": {},
  "titles": {
    "Europe/Copenhagen": {
      "long": "Romance Standard Time",
      "group": "(GMT+01:00) Brussels, Copenhagen, Madrid, Paris"
    }
  }
});