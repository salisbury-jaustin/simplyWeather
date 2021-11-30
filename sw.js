const CACHE_NAME = 'simply-weather-cache';
const urlsToCache = [
'./index.html',
'./manifest.json',
'./style.css',
'./style.css.map',
'./app.js',
'./js/promise.js',
'./js/promise.min.map',
'./js/axios.min.js',
'./js/axios.min.map',
'./js/vue.js',
'./js/vuex.js',
'./assets/icon-large.png',
'./assets/icon-small.png',
'./assets/wi-barometer.svg',
'./assets/wi-day-cloudy.svg',
'./assets/wi-day-sunny.svg',
'./assets/wi-degrees.svg', 
'./assets/wi-direction-down-left.svg',
'./assets/wi-direction-down-right.svg',
'./assets/wi-direction-down.svg',
'./assets/wi-direction-left.svg',
'./assets/wi-direction-right.svg',
'./assets/wi-direction-up-left.svg',
'./assets/wi-direction-up-right.svg',
'./assets/wi-direction-up.svg',
'./assets/wi-dust.svg',
'./assets/wi-fahrenheit.svg',
'./assets/wi-humidity.svg',
'./assets/wi-night-clear.svg',
'./assets/wi-night-cloudy.svg',
'./assets/wi-rain.svg',
'./assets/wi-raindrops.svg',
'./assets/wi-showers.svg',
'./assets/wi-small-craft-advisory.svg',
'./assets/wi-snow.svg',
'./assets/wi-storm-showers.svg',
'./assets/wi-sunrise.svg',
'./assets/wi-sunset.svg',
'./assets/wi-thermometer.svg',
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});
  
self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        return resp || fetch(event.request).then((response) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
  });
  