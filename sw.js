/* Service worker — guarda os guias no aparelho para funcionar sem sinal */
const CACHE = 'clinref-v1';
const ARQUIVOS = [
  './', './index.html',
  './guia_bolso_paciente_critico.html',
  './guia_bolso_plantao.html',
  './guia_bolso_psiquiatria.html',
  './manifest-clinref.webmanifest','./icones/clinref-192.png','./icones/clinref-512.png',
  './manifest-critico.webmanifest','./manifest-plantao.webmanifest','./manifest-psiquiatria.webmanifest',
  './icones/critico-192.png','./icones/critico-512.png','./icones/critico.svg',
  './icones/plantao-192.png','./icones/plantao-512.png','./icones/plantao.svg',
  './icones/psiquiatria-192.png','./icones/psiquiatria-512.png','./icones/psiquiatria.svg'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks =>
    Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(r => {
      /* guarda também o que vier de fora, como as fontes */
      const copia = r.clone();
      if (r.ok || r.type === 'opaque') caches.open(CACHE).then(c => c.put(e.request, copia));
      return r;
    }).catch(() => hit))
  );
});
