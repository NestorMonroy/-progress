const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "Europe/Amsterdam": "Europe/Brussels"
  },
  "rules": {},
  "titles": {
    "Europe/Amsterdam": {
      "long": "W. Europe Standard Time",
      "group": "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"
    }
  }
});