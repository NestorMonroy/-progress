const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "Etc/GMT-1": [
      [
        -60,
        "-",
        "%z",
        null
      ]
    ]
  },
  "rules": {},
  "titles": {
    "Etc/GMT-1": {
      "long": "W. Central Africa Standard Time",
      "group": "(GMT+01:00) West Central Africa"
    }
  }
});