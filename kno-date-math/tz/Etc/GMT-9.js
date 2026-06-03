const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "Etc/GMT-9": [
      [
        -540,
        "-",
        "%z",
        null
      ]
    ]
  },
  "rules": {},
  "titles": {
    "Etc/GMT-9": {
      "long": "Tokyo Standard Time",
      "group": "(GMT+09:00) Osaka, Sapporo, Tokyo"
    }
  }
});