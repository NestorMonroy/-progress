const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "Etc/GMT-7": [
      [
        -420,
        "-",
        "%z",
        null
      ]
    ]
  },
  "rules": {},
  "titles": {
    "Etc/GMT-7": {
      "long": "SE Asia Standard Time",
      "group": "(GMT+07:00) Bangkok, Hanoi, Jakarta"
    }
  }
});