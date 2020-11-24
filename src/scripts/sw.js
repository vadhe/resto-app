import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const {assets} = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
  [...assets, './', 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap'];
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});