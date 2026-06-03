const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "Etc/GMT-2": [
      [
        -120,
        "-",
        "%z",
        null
      ]
    ]
  },
  "rules": {},
  "titles": {
    "Etc/GMT-2": {
      "long": "South Africa Standard Time",
      "group": "(GMT+02:00) Harare, Pretoria"
    }
  }
});