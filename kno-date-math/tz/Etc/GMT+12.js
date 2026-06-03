const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "Etc/GMT+12": [
      [
        720,
        "-",
        "%z",
        null
      ]
    ]
  },
  "rules": {},
  "titles": {
    "Etc/GMT+12": {
      "long": "Dateline Standard Time",
      "group": "(GMT-12:00) International Date Line West"
    }
  }
});