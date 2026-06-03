const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "Etc/GMT": [
      [
        0,
        "-",
        "GMT",
        null
      ]
    ]
  },
  "rules": {},
  "titles": {
    "Etc/GMT": {
      "long": "Dateline Standard Time",
      "group": "(GMT-12:00) International Date Line West"
    }
  }
});