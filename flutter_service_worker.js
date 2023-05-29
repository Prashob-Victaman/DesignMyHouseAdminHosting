'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3a2169ab03b8ba87289606256b1a93c4",
".git/config": "6f0d9a215da0a2fbfec75f343a0ad9d9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "05d0fa042758215e0388b9c1c4b76c5a",
".git/HEAD": "dfa70f0fc783ffb8cfbeb7672a3b116c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "32dad16fb7fd12fabc22902b3f4be743",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d4380fa5b67a97af02c34192717d3601",
".git/logs/refs/heads/master": "cbf4621111d7f83f3bd791ce67846581",
".git/logs/refs/heads/v1": "b09c4a91f0077a249a490a296e46e8e3",
".git/logs/refs/remotes/origin/main": "b96aa9d01d275be7fa39f25e28f4399c",
".git/logs/refs/remotes/origin/master": "cd7ae90cc9d0a31b27a718da8dfc18fb",
".git/logs/refs/remotes/origin/v1": "34ce9f607afbeed737dd97e2ec68cc47",
".git/objects/09/fb01e56a5e1bdc3084551f3d9c7c29e9c1f835": "1da6e58c3b78a748180ae115e1963b71",
".git/objects/0f/47b54d6b3e43d1265e0c4df6263278d180aae8": "23baf50af99695ec971156bbd78c5993",
".git/objects/10/8d5f1e7f09eb567d50f04f858cccde135f8a54": "4b82e74e97abe790a9271b8cd2969625",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/db11fd4ad08f1bff764212d541376f75242183": "48082d739e71de41a6d17f112e5587bd",
".git/objects/17/24686e7f517049e49a2c4e0219391400210d0c": "dcd1959c31f7f102134d7b8415fa52af",
".git/objects/18/7b7d4958cae7ea1538c42953d2c93bb791f907": "28b1dff67bcd8abf0fcbfad4664de393",
".git/objects/1a/5b005543f9f6f3f1dbd1a2f24008a2bebe3689": "341829e069b0c706726f4cce58c3d9a8",
".git/objects/1b/4a935dd6e091988d6b89fad6785d8a54248d34": "a9c0e02b4b535690c4733f6671af6547",
".git/objects/1d/198bf53a0dab626ac4a59981faeae8f3c3ba4e": "449e4d6366e212b20750207554edd7b4",
".git/objects/20/1b330c3f6ac0bcc146c102483c3148f7acd51c": "e120242d2bdcbfde9e5dbd7010afd0a8",
".git/objects/20/60e6355d14524384a2de8cca80f3398d8973f9": "7627d54c5f3d172f1bb9c4e53af2ba78",
".git/objects/22/f9d6a5992eaf04216008ca77434d7ef326cb16": "5fbf4112091d0aab39dea3540057b7a9",
".git/objects/24/ffa1ce65ccd58974c4a8f46c59d5f67776db92": "d1679fa27ceb1b92473eb523a2fb1c46",
".git/objects/27/d7398780aae511f6fb73c7aba328320468180d": "aa4ec5af1e400553282ab5870f97a718",
".git/objects/2a/b7b138fd2a8be7d178db84e2b32628068243a7": "53a180cb53f920421fdecc1f76cfe647",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/33/006329308ed180caac0fd8bafc60df686a395c": "e4fc20c8c321a651783636ede50fe1f9",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3d/70ac572f02ba432c2965ee87b159615dc7c809": "b223802342b34ddde4c83b866c264436",
".git/objects/3d/afaec8904c369b456e562f7194d8b146d7e3f9": "23b2a0f84b6e4457249500bc50b8ba7e",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/45/b0d518ebdc52a5fdc78c814c15c7babcda5570": "58f3a92bcb4585ac5297a7230c2692c8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/dc46ec8f7142b92812a0114b12a5a8f72437e4": "fce0644851f7bde58ee8450dff9c1897",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/49/c73383eb07fae43cf274f4967a1902eaa24cb1": "2f533b42b461c98d83dca99b831d7d64",
".git/objects/4a/16492704b53181de7811de53fe5df4cc873dce": "8dc777bb8fdd3a0caf145f1f7fcfaa51",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/59/78dc1bcfe041e51ed04c69391a079b58f29105": "348b5eae5c74f8c7e5186a128f5c1e6e",
".git/objects/62/3522bb17537a4e780db0ca573a8777e0bae0a1": "d8a7f1dd8719f59e19bf744d3b225b4b",
".git/objects/63/b4c9a50f6c7ad2a5910b39d7517f87cdcc384b": "fefd4636eee28ae10858b716ae13cbb4",
".git/objects/64/62093009da80c4acff59ea2c2823e0f8d99f8b": "1fcabd2ba9ea726ffb6f41db40123d6a",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/66/a4785ffc4ab5cc7769fb2165e7c1440de6bed1": "b4a4f2628a9ce51e31ceda78819a876a",
".git/objects/69/4d7c3a8c2280938dbd55de73c56592f063ece4": "59f2303f78083990bf78c1cb98a65ae1",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/3482079f31ecfc3d8a698972b3e70bf4695401": "48c8c418521b2fd4ffadebd49076fb4d",
".git/objects/72/0c75ff3412520bf251557fa118419f32624f8a": "dfe864df4e5673d565b863eef254e9fb",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/b2895bb3781b15bbc304aae12c54fb1203b3e0": "d54ac16e44b0c0bb520c1bd79f4542af",
".git/objects/78/82495a2dd98711c0d67961b1b88fffb57bd212": "050500fad35c4cbce099aa59324eb8a0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/02115f6446e3eea7ef96281feb862a726ad695": "789e1f1d35d7850529cf1f940e9b6f9f",
".git/objects/7c/ad314e0674c2bd3ddfef77728d986892c6797e": "b6bb255784e90f7d650add58c65ba7c7",
".git/objects/7d/57059ceb401dcd2ce26a31a52f7c7b46d065f5": "e0666d6b01d96f839d3248cae5e8ea3c",
".git/objects/82/b879276162890a8b49482a75019d4e9b7cb0e1": "251af9373d618807dc3eb8124c7d96dd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/ea3b2936e8adb6700da9c92b32ee94ad57498c": "9ea8a842ad784c635e55a1e185c2e0d9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/ec80b779085288d80299d07c4216af4ec16aed": "fc491d3ed03cbd6356dd96948f68a4df",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/90/54ecb7a321f3f0adde0a5b7213f66021d2d519": "4f4f47e0782d1fc8c5dcb8d9610dfa2b",
".git/objects/98/7963c208a11152a9c5e21e12f3cb22faf706e9": "e3c5c70515378114920d9b0caa823ff7",
".git/objects/9a/f69b08814de0655476463c8054af850becf530": "cf6cef79df4ef41993d68fbd8af81454",
".git/objects/9d/9f41f072b20480256b3b67bf1be81a1fdd99cf": "f572e6694a05f758a5843e78c8090d56",
".git/objects/9e/5536f90d94c567dad3e56fe17b768cd21f4f8f": "c0bac8abe9778a2bcf310a90ae7961d8",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/af/1abd943968222659e523f87347479e6fc30305": "f74a105a4d2db48fd4cf17408f1e0eda",
".git/objects/b5/f82886fd66808a8876b6589435112d6e034899": "400a37fea9bedaad42afb3b399d37dde",
".git/objects/b6/0464485eab22d397fcf498a9d671201bd1664a": "95d6e5c598618b25c2071486088e3ad9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4e94b2a74ea3c93712198c1f630be3b93fba62": "edbe3b63e4546423b53d33cc67d6b1c8",
".git/objects/bb/9f03e86198aa30ebd263a0bfefce65c5521ca6": "aa5f6461f36a29ada17b81d72f726ad0",
".git/objects/bc/ea48b10881c439dbe0c4f2d431081f14e27e65": "8ffeaba2a3b2d195d9c30d43c292e047",
".git/objects/cb/aa06d26a6a8efcd54bef79633aa74ed00aca1b": "7b3c8f427c6cec6b126667f37e3e2040",
".git/objects/cd/1c7ad74f7b656f87ccb6b4742a8a9c0b561dc7": "98c377c38964f03839ef51671a5aa975",
".git/objects/ce/c0bdaf8404e73736c3d3bd6f6757130fec761e": "867dd540b4bea2e144cd7b4d6900beb1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/8d2ee38eee7dbcd4f1d80a71b41cd3bf89f1f3": "41e8ae8ed974eb2f6271ee0cd13b73d7",
".git/objects/da/b54413318837fcc37b9971c846827db70dff64": "eb384acd8f87c4314cb2c8f027145fac",
".git/objects/e0/9dcc564af338e865218cdabeb69fae79355f0a": "6bb88521ab0fd66d42379941981d4e4a",
".git/objects/e3/03a3b8e42f5616c42750ec9a72d93636332a63": "3c68a92a6a399f4852e41e50f73ccccd",
".git/objects/e3/c22eee0f99fce381533a31c4f149cf36327151": "ed35446abd4f5a890eedd2957136d77f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/8e4234b4a0a642c39e7032a6eb3dab5d8dcf21": "d4e307c6ef83faeb3027c3fcf7792528",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f4/8e4ac2b3f5d19d6502af8946ced69a042b54bd": "10c890d50b9e33c843c20afa027817cf",
".git/objects/f8/4e57ec1a93d275f3e8ca93766360cb45285769": "d7bba9ad8dcc125fdc14cfe03de8c090",
".git/objects/f9/0882d2664cf843894679268717e2382c417752": "4b0397ac58db05f853cecde392982180",
".git/objects/f9/793fe0d8f8da8bcf0cce62d02b17bea6a5183b": "ea048b9a151dd7f30ca93cb8dc768bc8",
".git/objects/fe/9cc87580713c0f0238a4c887927ca8ee0df429": "dabdbad06cbcbc26cb39bdaf2e261a8a",
".git/ORIG_HEAD": "8ffdd3abbd2453fff3e0ef76719ad057",
".git/refs/heads/master": "1d1832ff8bb43d8f3c913ec561103661",
".git/refs/heads/v1": "1d1832ff8bb43d8f3c913ec561103661",
".git/refs/remotes/origin/main": "10c1f5149692418da9cecd01e09c7725",
".git/refs/remotes/origin/master": "8a4def0e9d4c47a0aa3b6e87c13e9128",
".git/refs/remotes/origin/v1": "1d1832ff8bb43d8f3c913ec561103661",
"assets/asset/3d_exteriro_design.png": "8f81792d14e699b477b7f869775c341e",
"assets/asset/3d_floor_plans.png": "9f45c60c953b0b10011495d630fa429d",
"assets/asset/Ar5chitect.png": "b928ba741aac08ab592e349a231b5392",
"assets/asset/arcchitect.png": "05085c5e0dd03e419bc8b986debc360a",
"assets/asset/istockphoto-1338134336-170667a.jpg": "60f503b74420df197496619725950dec",
"assets/asset/Logo-03.png": "74d9ee4cc81be4f32c791a026ab950ae",
"assets/asset/payments.html": "dac7ceeaa988e40f5d73d47dc765e05f",
"assets/asset/placeholder.png": "6e25c5a148c470131ad3577c7dd43acb",
"assets/asset/user.png": "c25659cde1fbcbd0cb79ff912bb2ffc3",
"assets/AssetManifest.json": "124140f1ea8a5973ebf677b5b3af67f3",
"assets/AssetManifest.smcbin": "2b5d215cd1fa0b692137f03f440cb43b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "da40abe209ef8d4e0ceb0183ea1ac2e7",
"assets/NOTICES": "023a89a3d346489ac868bb3ffda551ad",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6fb2f126ddc1f324dcd0a2826de7d72d",
"/": "6fb2f126ddc1f324dcd0a2826de7d72d",
"main.dart.js": "d9d3f04659b3c0326731fc185c7e0699",
"manifest.json": "49a8a0a61cbf1276706ade66cb631ed1",
"version.json": "11ce9d87cde5fe817498c9953ef574e7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
