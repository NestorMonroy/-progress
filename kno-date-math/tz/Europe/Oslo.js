const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "Europe/Oslo": "Europe/Berlin"
  },
  "rules": {},
  "titles": {
    "Europe/Oslo": {
      "long": "W. Europe Standard Time",
      "group": "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"
    }
  }
});