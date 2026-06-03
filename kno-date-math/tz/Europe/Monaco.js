const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "Europe/Monaco": "Europe/Paris"
  },
  "rules": {},
  "titles": {
    "Europe/Monaco": {
      "long": "W. Europe Standard Time",
      "group": "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"
    }
  }
});