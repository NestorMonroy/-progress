const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "Asia/Riyadh": [
      [
        -186.86666666666665,
        "-",
        "LMT",
        -719625600000
      ],
      [
        -180,
        "-",
        "%z",
        null
      ]
    ]
  },
  "rules": {},
  "titles": {
    "Asia/Riyadh": {
      "long": "Arab Standard Time",
      "group": "(GMT+03:00) Kuwait, Riyadh"
    }
  }
});