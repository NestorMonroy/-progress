const dm = require('@progress/kno-date-math');
dm.loadTimezone({
  "zones": {
    "Pacific/Saipan": "Pacific/Guam"
  },
  "rules": {},
  "titles": {
    "Pacific/Saipan": {
      "long": "West Pacific Standard Time",
      "group": "(GMT+10:00) Guam, Port Moresby"
    }
  }
});