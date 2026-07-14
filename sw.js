// Minimal service worker. Its only job is to exist, so the browser lets us
// use registration.showNotification() — required on Android, where plain
// `new Notification()` from a page script is silently blocked.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
