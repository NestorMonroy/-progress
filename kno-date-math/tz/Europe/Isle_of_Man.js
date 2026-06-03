const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "Europe/Isle_of_Man": "Europe/London"
  },
  "rules": {},
  "titles": {
    "Europe/Isle_of_Man": {
      "long": "GMT Standard Time",
      "group": "(GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London"
    }
  }
});