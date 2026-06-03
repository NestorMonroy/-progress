const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "Europe/Vaduz": "Europe/Zurich"
  },
  "rules": {},
  "titles": {
    "Europe/Vaduz": {
      "long": "W. Europe Standard Time",
      "group": "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"
    }
  }
});