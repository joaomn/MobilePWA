// service-worker.js

// Define o nome do cache
const cacheName = 'tio-joao-cache';

// Lista de arquivos a serem armazenados em cache, incluindo imagens
const filesToCache = [
  '/',
  '/index.html',  
  '/assets/img/icon_tjj.ico',
  '/assets/img/apple-touch-icon.png',
  '/assets/img/Projeto Remover fundo.png', 
  '/assets/img/fotosEventos/ft1.jpeg',   
  '/assets/img/fotosEventos/ft2.jpeg',
  '/assets/img/fotosEventos/ft3.jpeg',
  '/assets/img/fotosEventos/ft4.jpeg',
  '/assets/img/fotosEventos/ft5.jpeg',
  '/assets/img/fotosEventos/ft6.jpeg',
  '/assets/img/fotosEventos/ft7.1.jpeg',
  '/assets/img/fotosEventos/ft8.jpeg',
  '/assets/img/fotosEventos/ft9.jpeg',
  'assets/vendor/animate.css/animate.min.css',
  'assets/vendor/aos/aos.css',
  'assets/vendor/bootstrap/css/bootstrap.min.css',
  'assets/vendor/bootstrap-icons/bootstrap-icons.css',
  'assets/vendor/boxicons/css/boxicons.min.css',
  'assets/vendor/glightbox/css/glightbox.min.css',
  'assets/vendor/remixicon/remixicon.css',
  'assets/vendor/swiper/swiper-bundle.min.css',
  'assets/css/style.css',
  'assets/vendor/aos/aos.js',
    'assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
    'assets/vendor/glightbox/js/glightbox.min.js',
    'assets/vendor/isotope-layout/isotope.pkgd.min.js',
    'assets/vendor/swiper/swiper-bundle.min.js',
    'assets/js/main.js'
];

// Evento de instalação do service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

// Evento de ativação do service worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== cacheName) {
            return caches.delete(name);
          }
        })
      );
    })
  );
});

// Evento de busca de recursos do service worker
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});