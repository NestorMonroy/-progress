const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "Pacific/Tahiti": [
      [
        598.2666666666667,
        "-",
        "LMT",
        -1806710400000
      ],
      [
        600,
        "-",
        "%z",
        null
      ]
    ]
  },
  "rules": {},
  "titles": {
    "Pacific/Tahiti": {
      "long": "Hawaiian Standard Time",
      "group": "(GMT-10:00) Hawaii"
    }
  }
});