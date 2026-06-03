const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "Europe/Stockholm": "Europe/Berlin"
  },
  "rules": {},
  "titles": {
    "Europe/Stockholm": {
      "long": "W. Europe Standard Time",
      "group": "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"
    }
  }
});