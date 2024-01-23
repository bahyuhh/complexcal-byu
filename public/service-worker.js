// service-worker.js

self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('my-cache').then(cache => {
        return cache.addAll([
          '/',
          '/calculator.jpg'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  
self.addEventListener('install', event => {
    // ...
  });
  
  self.addEventListener('fetch', event => {
    // ...
  });
  
  self.addEventListener('activate', event => {
    // Menampilkan pop-up Service Worker
    self.registration.showNotification('Aplikasi Web', {
      body: 'Selamat datang di Aplikasi Web!',
      icon: '/calculator.jpg'
    });
  });