const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "Etc/GMT+4": [
      [
        240,
        "-",
        "%z",
        null
      ]
    ]
  },
  "rules": {},
  "titles": {
    "Etc/GMT+4": {
      "long": "SA Western Standard Time",
      "group": "(GMT-04:00) La Paz"
    }
  }
});