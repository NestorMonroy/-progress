const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "Etc/GMT-12": [
      [
        -720,
        "-",
        "%z",
        null
      ]
    ]
  },
  "rules": {},
  "titles": {
    "Etc/GMT-12": {
      "long": "UTC+12",
      "group": null
    }
  }
});