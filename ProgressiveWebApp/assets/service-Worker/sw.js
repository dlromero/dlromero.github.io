var CACHE_NAME = 'achievements-v1';
var urlsToCache = [
    '/assets/styles/indigo-pink.css'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});


self.addEventListener('fetch', function (event) {
    console.log(event);
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
            )
    );
});




// const CACHE_NAME = "achievements-v1";
// const CACHE_URLS = [
//     "../assets/styles/indigo-pink.css"
// ];

// self.addEventListener('install', function (ev) {
//     caches.open(CACHE_NAME)
//         .then(function (cache) {
//             console.log("Cache abierto");
//             return cache.addAll(CACHE_URLS);
//         })
//         .catch(err => console.log(err));

// });

// self.addEventListener('activate', function (ev) {
//     console.log(ev);

// });

// self.addEventListener('fetch', function (ev) {
//     ev.respondWith(
//         caches.match(ev.request)
//             .then(function (response) {
//                 // response es la respuesta de buscar en el cache
//                 console.log(ev.request.url);
//                 if (response) {
//                     console.log("Estoy en el cache y te ahorré una petición");
//                     return response;
//                 } else {
//                     console.log("No estoy en el cache :3");
//                 }
//                 // Ve al servidor
//                 return fetch(ev.request);

//             })
//             .catch(er=>console.log(er))

//     )
// });