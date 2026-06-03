const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "Europe/Vatican": "Europe/Rome"
  },
  "rules": {},
  "titles": {
    "Europe/Vatican": {
      "long": "W. Europe Standard Time",
      "group": "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"
    }
  }
});