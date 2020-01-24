self.__precacheManifest = [
  {
    "url": "/_next/static/6oHLuSMJHz2vn4JXPyiTq/_buildManifest.js",
    "revision": "fb96ae7926f5104f50f0cf1b3a23a9b5"
  },
  {
    "url": "/_next/static/6oHLuSMJHz2vn4JXPyiTq/pages/_app.js",
    "revision": "2d7d9fcf51ec54526e6e"
  },
  {
    "url": "/_next/static/6oHLuSMJHz2vn4JXPyiTq/pages/_error.js",
    "revision": "f96cd3b3a1f62d3e9c46"
  },
  {
    "url": "/_next/static/6oHLuSMJHz2vn4JXPyiTq/pages/index.js",
    "revision": "c66a46f39a9b5c29a274"
  },
  {
    "url": "/_next/static/chunks/56678dd81adec906092e19efff3f465c3fb120b7.e63a28bde70cc0443751.js",
    "revision": "876cbddc63692a2d37a9"
  },
  {
    "url": "/_next/static/chunks/commons.a0a9ae825eded754f0c3.js",
    "revision": "ab2defdb3c6e12898976"
  },
  {
    "url": "/_next/static/chunks/framework.94bc9fd9a7de53a90996.js",
    "revision": "0dbc4a39205e343f876d"
  },
  {
    "url": "/_next/static/runtime/main-f7198fd9874af96f427a.js",
    "revision": "ecee7a8f26ff26b7e1f4"
  },
  {
    "url": "/_next/static/runtime/polyfills-2fff68c13affbed5c162.js",
    "revision": "54d0d9ac7e0954ddda88"
  },
  {
    "url": "/_next/static/runtime/webpack-035ac2b14bde147cb4a8.js",
    "revision": "be4b6cc6d10632d2262c"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "static/images/bg.jpg",
    "revision": "48e39ad75b25573aa91cfff128f8f02f"
  },
  {
    "url": "static/images/icons/icon-128x128.png",
    "revision": "583f8376c0e90a91e8f6f1361e870c78"
  },
  {
    "url": "static/images/icons/icon-144x144.png",
    "revision": "fde7caf0f6181324f421f1d7d84929a8"
  },
  {
    "url": "static/images/icons/icon-152x152.png",
    "revision": "62a3ca0d59ab84302b9938fec8b34ff5"
  },
  {
    "url": "static/images/icons/icon-192x192.png",
    "revision": "cefac91c61de39d17d81320468ed4e44"
  },
  {
    "url": "static/images/icons/icon-384x384.png",
    "revision": "be1624c885caee6fc4d52cb107fa062d"
  },
  {
    "url": "static/images/icons/icon-512x512.png",
    "revision": "560b0da6c458cc1ae330c9a10754efad"
  },
  {
    "url": "static/images/icons/icon-72x72.png",
    "revision": "e0b6c0d644f049c5d9e649613849e2a3"
  },
  {
    "url": "static/images/icons/icon-96x96.png",
    "revision": "dcac8924bc0900487947a44a6dd23ed9"
  },
  {
    "url": "static/manifest.json",
    "revision": "259317e653680216c8a37806a7b27663"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
