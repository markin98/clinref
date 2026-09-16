/* Service worker — guarda os guias no aparelho para funcionar sem sinal */
const CACHE = 'clinref-v3';
const ARQUIVOS = [
  './', './index.html',
  './manifest-clinref.webmanifest','./icones/clinref-192.png','./icones/clinref-512.png',
  './guias/paciente_critico/guia_bolso_paciente_critico.html',
  './guias/paciente_critico/manifest-critico.webmanifest',
  './guias/paciente_critico/icones/critico-192.png','./guias/paciente_critico/icones/critico-512.png','./guias/paciente_critico/icones/critico.svg',
  './guias/plantao/guia_bolso_plantao.html',
  './guias/plantao/manifest-plantao.webmanifest',
  './guias/plantao/icones/plantao-192.png','./guias/plantao/icones/plantao-512.png','./guias/plantao/icones/plantao.svg',
  './guias/psiquiatria/guia_bolso_psiquiatria.html',
  './guias/psiquiatria/manifest-psiquiatria.webmanifest',
  './guias/psiquiatria/icones/psiquiatria-192.png','./guias/psiquiatria/icones/psiquiatria-512.png','./guias/psiquiatria/icones/psiquiatria.svg'
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
