const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "Asia/Dubai": [
      [
        -221.2,
        "-",
        "LMT",
        -1546387200000
      ],
      [
        -240,
        "-",
        "%z",
        null
      ]
    ]
  },
  "rules": {},
  "titles": {
    "Asia/Dubai": {
      "long": "Arabian Standard Time",
      "group": "(GMT+04:00) Abu Dhabi, Muscat"
    }
  }
});