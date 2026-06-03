const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "Etc/GMT-8": [
      [
        -480,
        "-",
        "%z",
        null
      ]
    ]
  },
  "rules": {},
  "titles": {
    "Etc/GMT-8": {
      "long": "Singapore Standard Time",
      "group": "(GMT+08:00) Kuala Lumpur, Singapore"
    }
  }
});