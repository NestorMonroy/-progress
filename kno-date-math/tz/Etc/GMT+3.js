const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "Etc/GMT+3": [
      [
        180,
        "-",
        "%z",
        null
      ]
    ]
  },
  "rules": {},
  "titles": {
    "Etc/GMT+3": {
      "long": "SA Eastern Standard Time",
      "group": "(GMT-03:00) Georgetown"
    }
  }
});