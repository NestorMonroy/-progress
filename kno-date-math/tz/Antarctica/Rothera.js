const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "Antarctica/Rothera": [
      [
        0,
        "-",
        "-00",
        218246400000
      ],
      [
        180,
        "-",
        "%z",
        null
      ]
    ]
  },
  "rules": {},
  "titles": {
    "Antarctica/Rothera": {
      "long": "SA Eastern Standard Time",
      "group": "(GMT-03:00) Georgetown"
    }
  }
});