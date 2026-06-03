const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "Europe/Luxembourg": "Europe/Brussels"
  },
  "rules": {},
  "titles": {
    "Europe/Luxembourg": {
      "long": "W. Europe Standard Time",
      "group": "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"
    }
  }
});