const CACHE_NAME = "japan-study-companion-v20260820c";

const OFFLINE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=20260820c",
  "./app.js?v=20260820c",
  "./manifest.webmanifest?v=20260820c",
  "./assets/restaurant-guide-v1.png",
  "./assets/mascot-happy.svg",
  "./assets/mascot-oops.svg",
  "./assets/cities/tokyo.png",
  "./assets/cities/hakone.png",
  "./assets/cities/kyoto.png",
  "./assets/cities/hiroshima.png",
  "./assets/cities/nara.png",
  "./assets/cities/osaka.png",
  "./assets/hiragana/hiragana-reference-chart.svg",
  "./assets/icons/lock.svg",
  "./assets/icons/pin.svg",
  "./assets/mascots/chibi-celebrate-1.png",
  "./assets/mascots/chibi-celebrate-2.png",
  "./assets/mascots/chibi-celebrate-3.png",
  "./assets/mascots/chibi-celebrate-openarms.png",
  "./assets/mascots/chibi-encourage.png",
  "./assets/menus/tokyo-restaurant-practice-menu.svg",
  "./data/hiragana/hiragana-h-l1-foundations.json",
  "./data/arrival/arrival-a-l1-arrival-essentials.json",
  "./data/convenience-store/convenience-store-c-l1-conbini-basics.json",
  "./data/trains/trains-t-l1-station-essentials.json",
  "./data/directions/directions-d-l1-street-navigation.json",
  "./data/restaurant/restaurant-r-l1-menu-basics.json",
  "./data/restaurant/restaurant-r-l2-ordering-basics.json",
  "./data/restaurant/restaurant-r-l3-server-interaction.json",
  "./data/restaurant/restaurant-r-l4-paying-and-finishing.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(OFFLINE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
          return Promise.resolve();
        })
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== "basic") {
            return networkResponse;
          }
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          return networkResponse;
        })
        .catch(() => caches.match("./index.html"));
    })
  );
});
