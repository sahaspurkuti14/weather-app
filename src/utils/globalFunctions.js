export function getCurrentTime() {
  var now = new Date();
  var hours = now.getHours().toString().padStart(2, '0');
  var minutes = now.getMinutes().toString().padStart(2, '0');
  var seconds = now.getSeconds().toString().padStart(2, '0');
  return hours + ':' + minutes + ':' + seconds;
}

export function getCurrentDate() {
  var now = new Date();
  var year = now.getFullYear().toString();
  var month = (now.getMonth() + 1).toString().padStart(2, '0');
  var day = now.getDate().toString().padStart(2, '0');
  return year + '-' + month + '-' + day;
}

export const weatherResponse = {
  "location": {
      "code": "NP0BA0002",
      "name": "Kathmandu",
      "timezone": "Asia\/Kathmandu",
      "coordinates": {
          "latitude": 27.7017,
          "longitude": 85.3206
      }
  },
  "forecast": {
      "items": [
          {
              "date": "2023-07-07",
              "dateWithTimezone": "2023-07-06T18:15:00Z",
              "freshSnow": null,
              "snowHeight": null,
              "weather": {
                  "state": 81,
                  "text": "Regenschauer",
                  "icon": "n_81.svg"
              },
              "prec": {
                  "sum": 0.2,
                  "probability": 90,
                  "sumAsRain": null,
                  "class": 1
              },
              "sunHours": 7,
              "rainHours": null,
              "temperature": {
                  "min": 22,
                  "max": 30,
                  "avg": null
              },
              "wind": {
                  "unit": "km\/h",
                  "direction": "S\u00fcdwestwind",
                  "text": "SW",
                  "avg": null,
                  "min": 2,
                  "max": 11,
                  "gusts": {
                      "value": null,
                      "text": null
                  },
                  "significationWind": false
              },
              "windchill": {
                  "min": 24,
                  "max": 32,
                  "avg": null
              },
              "snowLine": {
                  "avg": null,
                  "min": null,
                  "max": null,
                  "unit": "m"
              },
              "astronomy": {
                  "dawn": "2023-07-07T04:47:18+05:45",
                  "sunrise": "2023-07-07T05:13:46+05:45",
                  "suntransit": "2023-07-07T12:08:32+05:45",
                  "sunset": "2023-07-07T19:03:08+05:45",
                  "dusk": "2023-07-07T19:29:34+05:45",
                  "moonrise": "2023-07-07T22:31:15+05:45",
                  "moontransit": "2023-07-07T03:30:18+05:45",
                  "moonset": "2023-07-07T09:13:24+05:45",
                  "moonphase": 6,
                  "moonzodiac": 12
              }
          },
          {
              "date": "2023-07-08",
              "dateWithTimezone": "2023-07-07T18:15:00Z",
              "freshSnow": null,
              "snowHeight": null,
              "weather": {
                  "state": 1,
                  "text": "leicht bew\u00f6lkt",
                  "icon": "d_1.svg"
              },
              "prec": {
                  "sum": 4.8,
                  "probability": 85,
                  "sumAsRain": null,
                  "class": 1
              },
              "sunHours": 8,
              "rainHours": null,
              "temperature": {
                  "min": 22,
                  "max": 30,
                  "avg": null
              },
              "wind": {
                  "unit": "km\/h",
                  "direction": "S\u00fcdwestwind",
                  "text": "SW",
                  "avg": null,
                  "min": 2,
                  "max": 13,
                  "gusts": {
                      "value": null,
                      "text": null
                  },
                  "significationWind": false
              },
              "windchill": {
                  "min": 24,
                  "max": 32,
                  "avg": null
              },
              "snowLine": {
                  "avg": null,
                  "min": null,
                  "max": null,
                  "unit": "m"
              },
              "astronomy": {
                  "dawn": "2023-07-08T04:47:46+05:45",
                  "sunrise": "2023-07-08T05:14:12+05:45",
                  "suntransit": "2023-07-08T12:08:41+05:45",
                  "sunset": "2023-07-08T19:03:00+05:45",
                  "dusk": "2023-07-08T19:29:24+05:45",
                  "moonrise": "2023-07-08T23:05:06+05:45",
                  "moontransit": "2023-07-08T04:21:34+05:45",
                  "moonset": "2023-07-08T10:18:57+05:45",
                  "moonphase": 6,
                  "moonzodiac": 12
              }
          },
          {
              "date": "2023-07-09",
              "dateWithTimezone": "2023-07-08T18:15:00Z",
              "freshSnow": null,
              "snowHeight": null,
              "weather": {
                  "state": 1,
                  "text": "leicht bew\u00f6lkt",
                  "icon": "d_1.svg"
              },
              "prec": {
                  "sum": 8.5,
                  "probability": 90,
                  "sumAsRain": null,
                  "class": 2
              },
              "sunHours": 7,
              "rainHours": null,
              "temperature": {
                  "min": 22,
                  "max": 31,
                  "avg": null
              },
              "wind": {
                  "unit": "km\/h",
                  "direction": "S\u00fcdwestwind",
                  "text": "SW",
                  "avg": null,
                  "min": 2,
                  "max": 13,
                  "gusts": {
                      "value": null,
                      "text": null
                  },
                  "significationWind": false
              },
              "windchill": {
                  "min": 24,
                  "max": 34,
                  "avg": null
              },
              "snowLine": {
                  "avg": null,
                  "min": null,
                  "max": null,
                  "unit": "m"
              },
              "astronomy": {
                  "dawn": "2023-07-09T04:48:14+05:45",
                  "sunrise": "2023-07-09T05:14:39+05:45",
                  "suntransit": "2023-07-09T12:08:50+05:45",
                  "sunset": "2023-07-09T19:02:51+05:45",
                  "dusk": "2023-07-09T19:29:13+05:45",
                  "moonrise": "2023-07-09T23:37:12+05:45",
                  "moontransit": "2023-07-09T05:09:39+05:45",
                  "moonset": "2023-07-09T11:21:33+05:45",
                  "moonphase": 6,
                  "moonzodiac": 12
              }
          },
          {
              "date": "2023-07-10",
              "dateWithTimezone": "2023-07-09T18:15:00Z",
              "freshSnow": null,
              "snowHeight": null,
              "weather": {
                  "state": 63,
                  "text": "m\u00e4\u00dfiger Regen",
                  "icon": "d_63.svg"
              },
              "prec": {
                  "sum": 22.8,
                  "probability": 90,
                  "sumAsRain": null,
                  "class": 3
              },
              "sunHours": 6,
              "rainHours": null,
              "temperature": {
                  "min": 22,
                  "max": 28,
                  "avg": null
              },
              "wind": {
                  "unit": "km\/h",
                  "direction": "S\u00fcdwestwind",
                  "text": "SW",
                  "avg": null,
                  "min": 2,
                  "max": 9,
                  "gusts": {
                      "value": null,
                      "text": null
                  },
                  "significationWind": false
              },
              "windchill": {
                  "min": 24,
                  "max": 30,
                  "avg": null
              },
              "snowLine": {
                  "avg": null,
                  "min": null,
                  "max": null,
                  "unit": "m"
              },
              "astronomy": {
                  "dawn": "2023-07-10T04:48:43+05:45",
                  "sunrise": "2023-07-10T05:15:06+05:45",
                  "suntransit": "2023-07-10T12:08:59+05:45",
                  "sunset": "2023-07-10T19:02:41+05:45",
                  "dusk": "2023-07-10T19:29:01+05:45",
                  "moonrise": null,
                  "moontransit": "2023-07-10T05:56:06+05:45",
                  "moonset": "2023-07-10T12:22:23+05:45",
                  "moonphase": 7,
                  "moonzodiac": 1
              }
          },
          {
              "date": "2023-07-11",
              "dateWithTimezone": "2023-07-10T18:15:00Z",
              "freshSnow": null,
              "snowHeight": null,
              "weather": {
                  "state": 61,
                  "text": "leichter Regen",
                  "icon": "d_61.svg"
              },
              "prec": {
                  "sum": 3.6,
                  "probability": 90,
                  "sumAsRain": null,
                  "class": 1
              },
              "sunHours": 5,
              "rainHours": null,
              "temperature": {
                  "min": 22,
                  "max": 27,
                  "avg": null
              },
              "wind": {
                  "unit": "km\/h",
                  "direction": "S\u00fcdwestwind",
                  "text": "SW",
                  "avg": null,
                  "min": 2,
                  "max": 9,
                  "gusts": {
                      "value": null,
                      "text": null
                  },
                  "significationWind": false
              },
              "windchill": {
                  "min": 24,
                  "max": 29,
                  "avg": null
              },
              "snowLine": {
                  "avg": null,
                  "min": null,
                  "max": null,
                  "unit": "m"
              },
              "astronomy": {
                  "dawn": "2023-07-11T04:49:13+05:45",
                  "sunrise": "2023-07-11T05:15:33+05:45",
                  "suntransit": "2023-07-11T12:09:07+05:45",
                  "sunset": "2023-07-11T19:02:29+05:45",
                  "dusk": "2023-07-11T19:28:47+05:45",
                  "moonrise": "2023-07-11T00:09:08+05:45",
                  "moontransit": "2023-07-11T06:42:19+05:45",
                  "moonset": "2023-07-11T13:22:38+05:45",
                  "moonphase": 7,
                  "moonzodiac": 1
              }
          },
          {
              "date": "2023-07-12",
              "dateWithTimezone": "2023-07-11T18:15:00Z",
              "freshSnow": null,
              "snowHeight": null,
              "weather": {
                  "state": 61,
                  "text": "leichter Regen",
                  "icon": "d_61.svg"
              },
              "prec": {
                  "sum": 3.2,
                  "probability": 90,
                  "sumAsRain": null,
                  "class": 1
              },
              "sunHours": 5,
              "rainHours": null,
              "temperature": {
                  "min": 22,
                  "max": 27,
                  "avg": null
              },
              "wind": {
                  "unit": "km\/h",
                  "direction": "Ostwind",
                  "text": "O",
                  "avg": null,
                  "min": 2,
                  "max": 9,
                  "gusts": {
                      "value": null,
                      "text": null
                  },
                  "significationWind": false
              },
              "windchill": {
                  "min": 24,
                  "max": 29,
                  "avg": null
              },
              "snowLine": {
                  "avg": null,
                  "min": null,
                  "max": null,
                  "unit": "m"
              },
              "astronomy": {
                  "dawn": "2023-07-12T04:49:43+05:45",
                  "sunrise": "2023-07-12T05:16:02+05:45",
                  "suntransit": "2023-07-12T12:09:15+05:45",
                  "sunset": "2023-07-12T19:02:16+05:45",
                  "dusk": "2023-07-12T19:28:31+05:45",
                  "moonrise": "2023-07-12T00:42:41+05:45",
                  "moontransit": "2023-07-12T07:29:32+05:45",
                  "moonset": "2023-07-12T14:23:04+05:45",
                  "moonphase": 8,
                  "moonzodiac": 2
              }
          },
          {
              "date": "2023-07-13",
              "dateWithTimezone": "2023-07-12T18:15:00Z",
              "freshSnow": null,
              "snowHeight": null,
              "weather": {
                  "state": 61,
                  "text": "leichter Regen",
                  "icon": "d_61.svg"
              },
              "prec": {
                  "sum": 1.8,
                  "probability": 90,
                  "sumAsRain": null,
                  "class": 1
              },
              "sunHours": 5,
              "rainHours": null,
              "temperature": {
                  "min": 22,
                  "max": 27,
                  "avg": null
              },
              "wind": {
                  "unit": "km\/h",
                  "direction": "S\u00fcdwestwind",
                  "text": "SW",
                  "avg": null,
                  "min": 2,
                  "max": 7,
                  "gusts": {
                      "value": null,
                      "text": null
                  },
                  "significationWind": false
              },
              "windchill": {
                  "min": 23,
                  "max": 29,
                  "avg": null
              },
              "snowLine": {
                  "avg": null,
                  "min": null,
                  "max": null,
                  "unit": "m"
              },
              "astronomy": {
                  "dawn": "2023-07-13T04:50:14+05:45",
                  "sunrise": "2023-07-13T05:16:30+05:45",
                  "suntransit": "2023-07-13T12:09:22+05:45",
                  "sunset": "2023-07-13T19:02:01+05:45",
                  "dusk": "2023-07-13T19:28:15+05:45",
                  "moonrise": "2023-07-13T01:19:11+05:45",
                  "moontransit": "2023-07-13T08:18:33+05:45",
                  "moonset": "2023-07-13T15:23:43+05:45",
                  "moonphase": 8,
                  "moonzodiac": 2
              }
          },
          {
              "date": "2023-07-14",
              "dateWithTimezone": "2023-07-13T18:15:00Z",
              "freshSnow": null,
              "snowHeight": null,
              "weather": {
                  "state": 61,
                  "text": "leichter Regen",
                  "icon": "d_61.svg"
              },
              "prec": {
                  "sum": 0,
                  "probability": 90,
                  "sumAsRain": null,
                  "class": 0
              },
              "sunHours": 5,
              "rainHours": null,
              "temperature": {
                  "min": 22,
                  "max": 27,
                  "avg": null
              },
              "wind": {
                  "unit": "km\/h",
                  "direction": "S\u00fcdwestwind",
                  "text": "SW",
                  "avg": null,
                  "min": 2,
                  "max": 9,
                  "gusts": {
                      "value": null,
                      "text": null
                  },
                  "significationWind": false
              },
              "windchill": {
                  "min": 24,
                  "max": 29,
                  "avg": null
              },
              "snowLine": {
                  "avg": null,
                  "min": null,
                  "max": null,
                  "unit": "m"
              },
              "astronomy": {
                  "dawn": "2023-07-14T04:50:46+05:45",
                  "sunrise": "2023-07-14T05:16:59+05:45",
                  "suntransit": "2023-07-14T12:09:29+05:45",
                  "sunset": "2023-07-14T19:01:45+05:45",
                  "dusk": "2023-07-14T19:27:56+05:45",
                  "moonrise": "2023-07-14T01:59:49+05:45",
                  "moontransit": "2023-07-14T09:09:40+05:45",
                  "moonset": "2023-07-14T16:23:47+05:45",
                  "moonphase": 8,
                  "moonzodiac": 3
              }
          },
          {
              "date": "2023-07-15",
              "dateWithTimezone": "2023-07-14T18:15:00Z",
              "freshSnow": null,
              "snowHeight": null,
              "weather": {
                  "state": 6,
                  "text": "Regen",
                  "icon": "d_6.svg"
              },
              "prec": {
                  "sum": 0,
                  "probability": 90,
                  "sumAsRain": null,
                  "class": 0
              },
              "sunHours": 5,
              "rainHours": null,
              "temperature": {
                  "min": 22,
                  "max": 28,
                  "avg": null
              },
              "wind": {
                  "unit": "km\/h",
                  "direction": "S\u00fcdwestwind",
                  "text": "SW",
                  "avg": null,
                  "min": 2,
                  "max": 9,
                  "gusts": {
                      "value": null,
                      "text": null
                  },
                  "significationWind": false
              },
              "windchill": {
                  "min": 24,
                  "max": 30,
                  "avg": null
              },
              "snowLine": {
                  "avg": null,
                  "min": null,
                  "max": null,
                  "unit": "m"
              },
              "astronomy": {
                  "dawn": "2023-07-15T04:51:18+05:45",
                  "sunrise": "2023-07-15T05:17:29+05:45",
                  "suntransit": "2023-07-15T12:09:35+05:45",
                  "sunset": "2023-07-15T19:01:28+05:45",
                  "dusk": "2023-07-15T19:27:36+05:45",
                  "moonrise": "2023-07-15T02:45:21+05:45",
                  "moontransit": "2023-07-15T10:02:27+05:45",
                  "moonset": "2023-07-15T17:21:40+05:45",
                  "moonphase": 8,
                  "moonzodiac": 3
              }
          },
          {
              "date": "2023-07-16",
              "dateWithTimezone": "2023-07-15T18:15:00Z",
              "freshSnow": null,
              "snowHeight": null,
              "weather": {
                  "state": 6,
                  "text": "Regen",
                  "icon": "d_6.svg"
              },
              "prec": {
                  "sum": 0,
                  "probability": 90,
                  "sumAsRain": null,
                  "class": 0
              },
              "sunHours": 5,
              "rainHours": null,
              "temperature": {
                  "min": 22,
                  "max": 28,
                  "avg": null
              },
              "wind": {
                  "unit": "km\/h",
                  "direction": "S\u00fcdwestwind",
                  "text": "SW",
                  "avg": null,
                  "min": 2,
                  "max": 7,
                  "gusts": {
                      "value": null,
                      "text": null
                  },
                  "significationWind": false
              },
              "windchill": {
                  "min": 24,
                  "max": 30,
                  "avg": null
              },
              "snowLine": {
                  "avg": null,
                  "min": null,
                  "max": null,
                  "unit": "m"
              },
              "astronomy": {
                  "dawn": "2023-07-16T04:51:50+05:45",
                  "sunrise": "2023-07-16T05:17:58+05:45",
                  "suntransit": "2023-07-16T12:09:41+05:45",
                  "sunset": "2023-07-16T19:01:10+05:45",
                  "dusk": "2023-07-16T19:27:15+05:45",
                  "moonrise": "2023-07-16T03:35:47+05:45",
                  "moontransit": "2023-07-16T10:55:50+05:45",
                  "moonset": "2023-07-16T18:15:33+05:45",
                  "moonphase": 8,
                  "moonzodiac": 4
              }
          },
          {
              "date": "2023-07-17",
              "dateWithTimezone": "2023-07-16T18:15:00Z",
              "freshSnow": 0,
              "snowHeight": null,
              "weather": {
                  "state": 6,
                  "text": "Regen",
                  "icon": "d_6.svg"
              },
              "prec": {
                  "sum": 6.91,
                  "probability": 15,
                  "sumAsRain": null,
                  "class": 2
              },
              "sunHours": 1,
              "rainHours": null,
              "temperature": {
                  "min": 21,
                  "max": 25,
                  "avg": null
              },
              "wind": {
                  "unit": "km\/h",
                  "direction": "Ostwind",
                  "text": "O",
                  "avg": null,
                  "min": 2,
                  "max": 8,
                  "gusts": {
                      "value": null,
                      "text": null
                  },
                  "significationWind": false
              },
              "windchill": {
                  "min": 22,
                  "max": 27,
                  "avg": null
              },
              "snowLine": {
                  "avg": null,
                  "min": null,
                  "max": null,
                  "unit": "m"
              },
              "astronomy": {
                  "dawn": "2023-07-17T04:52:23+05:45",
                  "sunrise": "2023-07-17T05:18:28+05:45",
                  "suntransit": "2023-07-17T12:09:46+05:45",
                  "sunset": "2023-07-17T19:00:50+05:45",
                  "dusk": "2023-07-17T19:26:53+05:45",
                  "moonrise": "2023-07-17T04:30:03+05:45",
                  "moontransit": "2023-07-17T11:48:21+05:45",
                  "moonset": "2023-07-17T19:04:02+05:45",
                  "moonphase": 1,
                  "moonzodiac": 4
              }
          },
          {
              "date": "2023-07-18",
              "dateWithTimezone": "2023-07-17T18:15:00Z",
              "freshSnow": 0,
              "snowHeight": null,
              "weather": {
                  "state": 6,
                  "text": "Regen",
                  "icon": "d_6.svg"
              },
              "prec": {
                  "sum": 8.79,
                  "probability": 15,
                  "sumAsRain": null,
                  "class": 2
              },
              "sunHours": 1,
              "rainHours": null,
              "temperature": {
                  "min": 22,
                  "max": 26,
                  "avg": null
              },
              "wind": {
                  "unit": "km\/h",
                  "direction": "S\u00fcdwestwind",
                  "text": "SW",
                  "avg": null,
                  "min": 3,
                  "max": 8,
                  "gusts": {
                      "value": null,
                      "text": null
                  },
                  "significationWind": false
              },
              "windchill": {
                  "min": 23,
                  "max": 28,
                  "avg": null
              },
              "snowLine": {
                  "avg": null,
                  "min": null,
                  "max": null,
                  "unit": "m"
              },
              "astronomy": {
                  "dawn": "2023-07-18T04:52:56+05:45",
                  "sunrise": "2023-07-18T05:18:59+05:45",
                  "suntransit": "2023-07-18T12:09:51+05:45",
                  "sunset": "2023-07-18T19:00:29+05:45",
                  "dusk": "2023-07-18T19:26:29+05:45",
                  "moonrise": "2023-07-18T05:26:25+05:45",
                  "moontransit": "2023-07-18T12:38:46+05:45",
                  "moonset": "2023-07-18T19:46:42+05:45",
                  "moonphase": 1,
                  "moonzodiac": 4
              }
          },
          {
              "date": "2023-07-19",
              "dateWithTimezone": "2023-07-18T18:15:00Z",
              "freshSnow": 0,
              "snowHeight": null,
              "weather": {
                  "state": 6,
                  "text": "Regen",
                  "icon": "d_6.svg"
              },
              "prec": {
                  "sum": 9.01,
                  "probability": 15,
                  "sumAsRain": null,
                  "class": 2
              },
              "sunHours": 0,
              "rainHours": null,
              "temperature": {
                  "min": 22,
                  "max": 27,
                  "avg": null
              },
              "wind": {
                  "unit": "km\/h",
                  "direction": "Westwind",
                  "text": "W",
                  "avg": null,
                  "min": 3,
                  "max": 7,
                  "gusts": {
                      "value": null,
                      "text": null
                  },
                  "significationWind": false
              },
              "windchill": {
                  "min": 23,
                  "max": 29,
                  "avg": null
              },
              "snowLine": {
                  "avg": null,
                  "min": null,
                  "max": null,
                  "unit": "m"
              },
              "astronomy": {
                  "dawn": "2023-07-19T04:53:29+05:45",
                  "sunrise": "2023-07-19T05:19:30+05:45",
                  "suntransit": "2023-07-19T12:09:55+05:45",
                  "sunset": "2023-07-19T19:00:06+05:45",
                  "dusk": "2023-07-19T19:26:03+05:45",
                  "moonrise": "2023-07-19T06:23:04+05:45",
                  "moontransit": "2023-07-19T13:26:18+05:45",
                  "moonset": "2023-07-19T20:24:00+05:45",
                  "moonphase": 1,
                  "moonzodiac": 5
              }
          },
          {
              "date": "2023-07-20",
              "dateWithTimezone": "2023-07-19T18:15:00Z",
              "freshSnow": 0,
              "snowHeight": null,
              "weather": {
                  "state": 3,
                  "text": "bedeckt",
                  "icon": "d_3.svg"
              },
              "prec": {
                  "sum": 1.2,
                  "probability": 10,
                  "sumAsRain": null,
                  "class": 1
              },
              "sunHours": 1,
              "rainHours": null,
              "temperature": {
                  "min": 21,
                  "max": 28,
                  "avg": null
              },
              "wind": {
                  "unit": "km\/h",
                  "direction": "Westwind",
                  "text": "W",
                  "avg": null,
                  "min": 1,
                  "max": 6,
                  "gusts": {
                      "value": null,
                      "text": null
                  },
                  "significationWind": false
              },
              "windchill": {
                  "min": 22,
                  "max": 30,
                  "avg": null
              },
              "snowLine": {
                  "avg": null,
                  "min": null,
                  "max": null,
                  "unit": "m"
              },
              "astronomy": {
                  "dawn": "2023-07-20T04:54:03+05:45",
                  "sunrise": "2023-07-20T05:20:01+05:45",
                  "suntransit": "2023-07-20T12:09:59+05:45",
                  "sunset": "2023-07-20T18:59:42+05:45",
                  "dusk": "2023-07-20T19:25:36+05:45",
                  "moonrise": "2023-07-20T07:18:42+05:45",
                  "moontransit": "2023-07-20T14:10:53+05:45",
                  "moonset": "2023-07-20T20:56:58+05:45",
                  "moonphase": 2,
                  "moonzodiac": 5
              }
          }
      ],
      "forecastDate": "2023-07-07T13:20:47Z",
      "nextUpdate": "2023-07-07T17:30:00Z",
      "source": "w3Data",
      "point": "global",
      "fingerprint": "Uv+BAwEBC0ZpbmdlcnByaW50Af+CAAEFAQdWZXJzaW9uAQwAAQtSZXF1ZXN0VGltZQH\/hAABA0xuZwEIAAEDTGF0AQgAAQZNb2RlbHMB\/4gAAAAQ\/4MFAQEEVGltZQH\/hAAAADb\/hwIBASdbXXN0cnVjdCB7IE5hbWUgc3RyaW5nOyBSdW4gdGltZS5UaW1lIH0B\/4gAAf+GAAAe\/4UDAQL\/hgABAgEETmFtZQEMAAEDUnVuAf+EAAAA\/gFw\/4IBBHNrLTkBDwEAAAAO3DoJzBkoQMoAAAH4P8bctYRUVUAB+Guad5yisztAAQsBDmV4cG9zZWRfbW9zbWl4AQ8BAAAADtw5drAAAAAAAAAAAQ5leHBvc2VkX21vc21peAEPAQAAAA7cOM3wAAAAAAAAAAEHaWNvbl9ldQEPAQAAAA7cOUyAAAAAAAAAAAEHaWNvbl9ldQEPAQAAAA7cOKPAAAAAAAAAAAELbmFtX2NvbnVzXzUBDwEAAAAO3DlMgAAAAAAAAAABC25hbV9jb251c181AQ8BAAAADtw4o8AAAAAAAAAAAQZtb3NtaXgBDwEAAAAO3Dl2sAAAAAAAAAABBm1vc21peAEPAQAAAA7cOM3wAAAAAAAAAAEJZ2ZzX3NmbHV4AQ8BAAAADtw5TIAAAAAAAAAAAQlnZnNfc2ZsdXgBDwEAAAAO3DijwAAAAAAAAAABBmF3ZV9kZQEPAQAAAA7cOWigAAAAAAAAAAA="
  }
}