!function(){"use strict";const i=1622817051333,e=`cache${i}`,g=["/client/client.eefbd991.js","/client/inject_styles.5607aec6.js","/client/index.96ea2eb1.js","/client/BigArea.3adb323a.js","/client/firmware.16665862.js","/client/community.0631baad.js","/client/Grid.53166c53.js","/client/index.157e1613.js","/client/presets.fec40146.js","/client/index.7afaf3ba.js","/client/[slug].1c9587ad.js"].concat(["/service-worker-index.html","/build-guide/image1.png","/build-guide/image10.png","/build-guide/image11.png","/build-guide/image12.png","/build-guide/image13.png","/build-guide/image14.png","/build-guide/image15.png","/build-guide/image16.png","/build-guide/image17.png","/build-guide/image18.png","/build-guide/image19.png","/build-guide/image2.png","/build-guide/image20.png","/build-guide/image21.png","/build-guide/image22.png","/build-guide/image23.png","/build-guide/image24.png","/build-guide/image25.png","/build-guide/image26.png","/build-guide/image27.png","/build-guide/image28.png","/build-guide/image29.png","/build-guide/image3.png","/build-guide/image30.png","/build-guide/image31.png","/build-guide/image32.png","/build-guide/image33.png","/build-guide/image34.png","/build-guide/image4.png","/build-guide/image5.png","/build-guide/image6.png","/build-guide/image7.png","/build-guide/image8.png","/build-guide/image9.png","/build-guide-2/image1-min.jpg","/build-guide-2/image10-min.jpg","/build-guide-2/image11-min.jpg","/build-guide-2/image12-min.jpg","/build-guide-2/image13-min.jpg","/build-guide-2/image14-min.jpg","/build-guide-2/image15-min.jpg","/build-guide-2/image16-min.jpg","/build-guide-2/image17-min.jpg","/build-guide-2/image18-min.jpg","/build-guide-2/image19-min.jpg","/build-guide-2/image2-min.jpg","/build-guide-2/image20-min.jpg","/build-guide-2/image21-min.jpg","/build-guide-2/image22-min.jpg","/build-guide-2/image23-min.jpg","/build-guide-2/image24-min.jpg","/build-guide-2/image25-min.jpg","/build-guide-2/image26-min.jpg","/build-guide-2/image27-min.jpg","/build-guide-2/image28-min.jpg","/build-guide-2/image29-min.jpg","/build-guide-2/image3-min.jpg","/build-guide-2/image30-min.jpg","/build-guide-2/image31-min.jpg","/build-guide-2/image32-min.jpg","/build-guide-2/image33-min.jpg","/build-guide-2/image34-min.jpg","/build-guide-2/image4-min.jpg","/build-guide-2/image5-min.jpg","/build-guide-2/image6-min.jpg","/build-guide-2/image7-min.jpg","/build-guide-2/image8-min.jpg","/build-guide-2/image9-min.jpg","/build-guide-blue/encoder.jpg","/build-guide-blue/finished.jpg","/build-guide-blue/inie.jpg","/build-guide-blue/kit.jpg","/build-guide-blue/loose.jpg","/build-guide-blue/outie.jpg","/build-guide-blue/rails.jpg","/build-guide-blue/screenpins.jpg","/build-guide-blue/sockets.jpg","/build-guide-blue/toppins.jpg","/build-guide-blue/usb.jpg","/expander-build-guide/image0.jpg","/expander-build-guide/image1.jpg","/expander-build-guide/image2.jpg","/expander-build-guide/image3.jpg","/expander-build-guide/image4.jpg","/expander-build-guide/image5.jpg","/favicon.png","/font/KumbhSans-Bold.ttf","/font/KumbhSans-Light.ttf","/font/KumbhSans-Regular.ttf","/font/OFL.txt","/global.css","/logo-192.png","/logo-256.png","/logo-512.png","/logo_alpha_small.png","/manifest.json","/manual-images/a-b-cv-level.svg","/manual-images/arp--latch.svg","/manual-images/arp-octaves.svg","/manual-images/attack.svg","/manual-images/blank.svg","/manual-images/chance.svg","/manual-images/chevron.svg","/manual-images/clear.svg","/manual-images/clock-div.svg","/manual-images/cv-quantize.svg","/manual-images/decay.svg","/manual-images/degree.svg","/manual-images/delay--reverb.svg","/manual-images/distortion--resonance.svg","/manual-images/euclid-len.svg","/manual-images/feedback.svg","/manual-images/gate-len.svg","/manual-images/glide--microtone.svg","/manual-images/grain-size--jitter.svg","/manual-images/hold.svg","/manual-images/hpf.svg","/manual-images/input.svg","/manual-images/lfo--depth.svg","/manual-images/lfo--rate.svg","/manual-images/lfo--shape.svg","/manual-images/lfo--symmetry.svg","/manual-images/mod-src--a.svg","/manual-images/mod-src--b.svg","/manual-images/mod-src--base.svg","/manual-images/mod-src--envelope-2.svg","/manual-images/mod-src--random.svg","/manual-images/mod-src--sample.svg","/manual-images/mod-src--sensitivity.svg","/manual-images/mod-src--x.svg","/manual-images/mod-src--y.svg","/manual-images/next.svg","/manual-images/noise.svg","/manual-images/octave--scale.svg","/manual-images/offset.svg","/manual-images/order.svg","/manual-images/osc-interval--column.svg","/manual-images/pattern--step-offset.svg","/manual-images/pingpong--shimmer.svg","/manual-images/pitch.svg","/manual-images/play-speed--jitter.svg","/manual-images/play.svg","/manual-images/preset.svg","/manual-images/previous.svg","/manual-images/record.svg","/manual-images/release.svg","/manual-images/sample.svg","/manual-images/scrub--jitter.svg","/manual-images/sensitivity--env-2-level.svg","/manual-images/shape.svg","/manual-images/shift-.svg","/manual-images/shift-bottom.svg","/manual-images/shift-top.svg","/manual-images/sustain.svg","/manual-images/synth.svg","/manual-images/tap.svg","/manual-images/tempo--swing.svg","/manual-images/time.svg","/manual-images/timestretch.svg","/manual-images/volume.svg","/manual-images/wet-dry.svg","/manual-images/wobble.svg","/manual-images/x-y-cv-level.svg","/manual-images/~pads-template.svg","/og.jpg","/og.png","/plinky_alpha.png","/plinky_alpha_2.png","/plinky_manual.pdf"]),a=new Set(g);self.addEventListener("install",(i=>{i.waitUntil(caches.open(e).then((i=>i.addAll(g))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(i=>{i.waitUntil(caches.keys().then((async i=>{for(const g of i)g!==e&&await caches.delete(g);self.clients.claim()})))})),self.addEventListener("fetch",(e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const g=new URL(e.request.url),m=g.protocol.startsWith("http"),u=g.hostname===self.location.hostname&&g.port!==self.location.port,n=g.host===self.location.host&&a.has(g.pathname),s="only-if-cached"===e.request.cache&&!n;!m||u||s||e.respondWith((async()=>n&&await caches.match(e.request)||async function(e){const g=await caches.open(`offline${i}`);try{const i=await fetch(e);return g.put(e,i.clone()),i}catch(i){const a=await g.match(e);if(a)return a;throw i}}(e.request))())}))}();
