!function(){"use strict";const e=1673042219100,a=`cache${e}`,i=["/client/client.1c29eeb9.js","/client/inject_styles.803b7e80.js","/client/index.09fbf0f1.js","/client/BigArea.bd750391.js","/client/firmware.fd39d450.js","/client/community.3f148391.js","/client/Grid.504c3e75.js","/client/index.4ac3d0e9.js","/client/presets.67ce297a.js","/client/webusb.c5f81b47.js","/client/build.e24dd29f.js","/client/index.9e339f8c.js","/client/[slug].8e39c241.js","/client/play.1a9c2826.js","/client/fw.b5317967.js"].concat(["/service-worker-index.html","/build-guide-2/image1-min.jpg","/build-guide-2/image10-min.jpg","/build-guide-2/image11-min.jpg","/build-guide-2/image12-min.jpg","/build-guide-2/image13-min.jpg","/build-guide-2/image14-min.jpg","/build-guide-2/image15-min.jpg","/build-guide-2/image16-min.jpg","/build-guide-2/image17-min.jpg","/build-guide-2/image18-min.jpg","/build-guide-2/image19-min.jpg","/build-guide-2/image2-min.jpg","/build-guide-2/image20-min.jpg","/build-guide-2/image21-min.jpg","/build-guide-2/image22-min.jpg","/build-guide-2/image23-min.jpg","/build-guide-2/image24-min.jpg","/build-guide-2/image25-min.jpg","/build-guide-2/image26-min.jpg","/build-guide-2/image27-min.jpg","/build-guide-2/image28-min.jpg","/build-guide-2/image29-min.jpg","/build-guide-2/image3-min.jpg","/build-guide-2/image30-min.jpg","/build-guide-2/image31-min.jpg","/build-guide-2/image32-min.jpg","/build-guide-2/image33-min.jpg","/build-guide-2/image34-min.jpg","/build-guide-2/image4-min.jpg","/build-guide-2/image5-min.jpg","/build-guide-2/image6-min.jpg","/build-guide-2/image7-min.jpg","/build-guide-2/image8-min.jpg","/build-guide-2/image9-min.jpg","/build-guide-blue/encoder.jpg","/build-guide-blue/finished.jpg","/build-guide-blue/inie.jpg","/build-guide-blue/kit.jpg","/build-guide-blue/loose.jpg","/build-guide-blue/outie.jpg","/build-guide-blue/rails.jpg","/build-guide-blue/screenpins.jpg","/build-guide-blue/sockets.jpg","/build-guide-blue/toppins.jpg","/build-guide-blue/usb.jpg","/expander-build-guide/image0.jpg","/expander-build-guide/image1.jpg","/expander-build-guide/image2.jpg","/expander-build-guide/image3.jpg","/expander-build-guide/image4.jpg","/expander-build-guide/image5.jpg","/favicon.png","/font/KumbhSans-Bold.ttf","/font/KumbhSans-Light.ttf","/font/KumbhSans-Regular.ttf","/font/OFL.txt","/global.css","/logo-192.png","/logo-256.png","/logo-512.png","/logo_alpha_small.png","/manifest.json","/manual-images/a-b-cv-level.svg","/manual-images/arp--latch.svg","/manual-images/arp-octaves.svg","/manual-images/attack.svg","/manual-images/blank.svg","/manual-images/chance.svg","/manual-images/chevron.svg","/manual-images/clear.svg","/manual-images/clock-div.svg","/manual-images/cv-quantize.svg","/manual-images/decay.svg","/manual-images/degree.svg","/manual-images/delay--reverb.svg","/manual-images/distortion--resonance.svg","/manual-images/euclid-len.svg","/manual-images/feedback.svg","/manual-images/gate-len.svg","/manual-images/glide--microtone.svg","/manual-images/grain-size--jitter.svg","/manual-images/hpf.svg","/manual-images/input.svg","/manual-images/lfo--depth.svg","/manual-images/lfo--rate.svg","/manual-images/lfo--shape.svg","/manual-images/lfo--symmetry.svg","/manual-images/mod-src--a.svg","/manual-images/mod-src--b.svg","/manual-images/mod-src--base.svg","/manual-images/mod-src--envelope-2.svg","/manual-images/mod-src--random.svg","/manual-images/mod-src--sample.svg","/manual-images/mod-src--sensitivity.svg","/manual-images/mod-src--x.svg","/manual-images/mod-src--y.svg","/manual-images/next.svg","/manual-images/noise.svg","/manual-images/octave--scale.svg","/manual-images/offset.svg","/manual-images/order.svg","/manual-images/osc-interval--column.svg","/manual-images/pattern--step-offset.svg","/manual-images/pingpong--shimmer.svg","/manual-images/pitch.svg","/manual-images/play-speed--jitter.svg","/manual-images/play.svg","/manual-images/preset.svg","/manual-images/previous.svg","/manual-images/record.svg","/manual-images/release.svg","/manual-images/sample.svg","/manual-images/scrub--jitter.svg","/manual-images/sensitivity--env-2-level.svg","/manual-images/shape.svg","/manual-images/shift-.svg","/manual-images/shift-bottom.svg","/manual-images/shift-top.svg","/manual-images/sustain.svg","/manual-images/synth.svg","/manual-images/tempo--swing.svg","/manual-images/time.svg","/manual-images/timestretch.svg","/manual-images/volume.svg","/manual-images/wet-dry.svg","/manual-images/wobble.svg","/manual-images/x-y-cv-level.svg","/manual-images/~pads-template.svg","/og.jpg","/og.png","/plinky_alpha.png","/plinky_alpha_2.png","/plinky_manual.pdf"]),g=new Set(i);self.addEventListener("install",(e=>{e.waitUntil(caches.open(a).then((e=>e.addAll(i))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const i of e)i!==a&&await caches.delete(i);self.clients.claim()})))})),self.addEventListener("fetch",(a=>{if("GET"!==a.request.method||a.request.headers.has("range"))return;const i=new URL(a.request.url),s=i.protocol.startsWith("http"),m=i.hostname===self.location.hostname&&i.port!==self.location.port,n=i.host===self.location.host&&g.has(i.pathname),l="only-if-cached"===a.request.cache&&!n;!s||m||l||a.respondWith((async()=>n&&await caches.match(a.request)||async function(a){const i=await caches.open(`offline${e}`);try{const e=await fetch(a);return i.put(a,e.clone()),e}catch(e){const g=await i.match(a);if(g)return g;throw e}}(a.request))())}))}();
