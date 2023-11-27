const wiMap = {
    day: {
      1000: '\uf00d', // Sunny
      1003: '\uf002', // Partly cloudy
      1006: '\uf041', // Cloudy
      1009: '\uf013', // Overcast
      1030: '\uf003', // Mist
      1063: '\uf00b', // Patchy rain possible
      1066: '\uf00a', // Patchy snow possible
      1069: '\uf0b2', // Patchy sleet possible
      1072: '\uf00b', // Patchy freezing drizzle possible
      1087: '\uf005', // Thundery outbreaks possible
      1114: '\uf064', // Blowing snow
      1117: '\uf064', // Blizzard
      1135: '\uf014', // Fog
      1147: '\uf014', // Freezing fog
      1150: '\uf00b', // Patchy light drizzle
      1153: '\uf01a', // Light drizzle
      1168: '\uf01a', // Freezing drizzle
      1171: '\uf01a', // Heavy freezing drizzle
      1180: '\uf009', // Patchy light rain
      1183: '\uf01a', // Light rain
      1186: '\uf008', // Moderate rain at times
      1189: '\uf019', // Moderate rain
      1192: '\uf008', // Heavy rain at times
      1195: '\uf019', // Heavy rain
      1198: '\uf01a', // Light freezing rain
      1201: '\uf019', // Moderate or heavy freezing rain
      1204: '\uf0b5', // Light sleet
      1207: '\uf0b5', // Moderate or heavy sleet
      1210: '\uf00a', // Patchy light snow
      1213: '\uf01b', // Light snow
      1216: '\uf00a', // Patchy moderate snow
      1219: '\uf01b', // Moderate snow
      1222: '\uf00a', // Patchy heavy snow
      1225: '\uf01b', // Heavy snow
      1237: '\uf0b5', // Ice pellets
      1240: '\uf009', // Light rain shower
      1243: '\uf008', // Moderate or heavy rain shower
      1246: '\uf007', // Torrential rain shower
      1249: '\uf0b2', // Light sleet showers
      1252: '\uf0b2', // Moderate or heavy sleet showers
      1255: '\uf00a', // Light snow showers
      1258: '\uf00a', // Moderate or heavy snow showers
      1261: '\uf0b2', // Light showers of ice pellets
      1264: '\uf0b2', // Moderate or heavy showers of ice pellets
      1273: '\uf00e', // Patchy light rain with thunder
      1276: '\uf010', // Moderate or heavy rain with thunder
      1279: '\uf06b', // Patchy light snow with thunder
      1282: '\uf06b', // Moderate or heavy snow with thunder
    },
    night: {
      1000: '\uf02e', // Clear
      1003: '\uf086', // Partly cloudy
      1006: '\uf041', // Cloudy
      1009: '\uf013', // Overcast
      1030: '\uf04a', // Mist
      1063: '\uf02b', // Patchy rain possible
      1066: '\uf02a', // Patchy snow possible
      1069: '\uf0b3', // Patchy sleet possible
      1072: '\uf02b', // Patchy freezing drizzle possible
      1087: '\uf025', // Thundery outbreaks possible
      1114: '\uf064', // Blowing snow
      1117: '\uf064', // Blizzard
      1135: '\uf014', // Fog
      1147: '\uf014', // Freezing fog
      1150: '\uf02b', // Patchy light drizzle
      1153: '\uf01a', // Light drizzle
      1168: '\uf01a', // Freezing drizzle
      1171: '\uf01a', // Heavy freezing drizzle
      1180: '\uf029', // Patchy light rain
      1183: '\uf01a', // Light rain
      1186: '\uf028', // Moderate rain at times
      1189: '\uf019', // Moderate rain
      1192: '\uf028', // Heavy rain at times
      1195: '\uf019', // Heavy rain
      1198: '\uf01a', // Light freezing rain
      1201: '\uf019', // Moderate or heavy freezing rain
      1204: '\uf0b5', // Light sleet
      1207: '\uf0b5', // Moderate or heavy sleet
      1210: '\uf02a', // Patchy light snow
      1213: '\uf01b', // Light snow
      1216: '\uf02a', // Patchy moderate snow
      1219: '\uf01b', // Moderate snow
      1222: '\uf02a', // Patchy heavy snow
      1225: '\uf01b', // Heavy snow
      1237: '\uf0b5', // Ice pellets
      1240: '\uf029', // Light rain shower
      1243: '\uf028', // Moderate or heavy rain shower
      1246: '\uf027', // Torrential rain shower
      1249: '\uf0b4', // Light sleet showers
      1252: '\uf0b4', // Moderate or heavy sleet showers
      1255: '\uf067', // Light snow showers
      1258: '\uf02a', // Moderate or heavy snow showers
      1261: '\uf0b4', // Light showers of ice pellets
      1264: '\uf0b4', // Moderate or heavy showers of ice pellets
      1273: '\uf02c', // Patchy light rain with thunder
      1276: '\uf02d', // Moderate or heavy rain with thunder
      1279: '\uf06d', // Patchy light snow with thunder
      1282: '\uf06d', // Moderate or heavy snow with thunder
    },
    moonPhase: {
      'New Moon': '\uf095',
      'Waxing Crescent': '\uf098',
      'First Quarter': '\uf09c',
      'Waxing Gibbous': '\uf0a0',
      'Full Moon': '\uf0a3',
      'Waning Gibbous': '\uf0a6',
      'Last Quarter': '\uf0aa',
      'Waning Crescent': '\uf0ae',
    },
  };
  
  export default wiMap;