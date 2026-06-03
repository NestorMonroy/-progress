const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "Etc/GMT-10": [
      [
        -600,
        "-",
        "%z",
        null
      ]
    ]
  },
  "rules": {},
  "titles": {
    "Etc/GMT-10": {
      "long": "West Pacific Standard Time",
      "group": "(GMT+10:00) Guam, Port Moresby"
    }
  }
});