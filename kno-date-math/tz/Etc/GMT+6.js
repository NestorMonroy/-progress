const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "Etc/GMT+6": [
      [
        360,
        "-",
        "%z",
        null
      ]
    ]
  },
  "rules": {},
  "titles": {
    "Etc/GMT+6": {
      "long": "Central America Standard Time",
      "group": "(GMT-06:00) Central America"
    }
  }
});