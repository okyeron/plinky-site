import{S as t,i as s,s as e,e as a,k as o,j as n,a as r,b as l,m as c,d as h,l as f,f as i,g as u,n as d,o as p,r as m,x as g,y as v}from"./client.f19cd5f7.js";function E(t,s,e){const a=t.slice();return a[1]=s[e],a[3]=e,a}function j(t){let s,e,m,g,v,E,j=t[1].title+"";return{c(){s=a("div"),e=a("h2"),m=a("a"),g=o(j),E=n(),this.h()},l(t){s=r(t,"DIV",{class:!0});var a=l(s);e=r(a,"H2",{});var o=l(e);m=r(o,"A",{rel:!0,href:!0});var n=l(m);g=c(n,j),n.forEach(h),o.forEach(h),E=f(a),a.forEach(h),this.h()},h(){i(m,"rel","prefetch"),i(m,"href",v="docs/"+t[1].slug),i(s,"class","post-item")},m(t,a){u(t,s,a),d(s,e),d(e,m),d(m,g),d(s,E)},p(t,s){1&s&&j!==(j=t[1].title+"")&&p(g,j),1&s&&v!==(v="docs/"+t[1].slug)&&i(m,"href",v)},d(t){t&&h(s)}}}function D(t){let s,e,p,D,x,y=t[0],k=[];for(let s=0;s<y.length;s+=1)k[s]=j(E(t,y,s));return{c(){s=n(),e=a("div"),p=a("h1"),D=o("Documentation"),x=n();for(let t=0;t<k.length;t+=1)k[t].c();this.h()},l(t){m('[data-svelte="svelte-1s3zj33"]',document.head).forEach(h),s=f(t),e=r(t,"DIV",{class:!0});var a=l(e);p=r(a,"H1",{});var o=l(p);D=c(o,"Documentation"),o.forEach(h),x=f(a);for(let t=0;t<k.length;t+=1)k[t].l(a);a.forEach(h),this.h()},h(){document.title="Plinky - Documentation",i(e,"class","page")},m(t,a){u(t,s,a),u(t,e,a),d(e,p),d(p,D),d(e,x);for(let t=0;t<k.length;t+=1)k[t].m(e,null)},p(t,[s]){if(1&s){let a;for(y=t[0],a=0;a<y.length;a+=1){const o=E(t,y,a);k[a]?k[a].p(o,s):(k[a]=j(o),k[a].c(),k[a].m(e,null))}for(;a<k.length;a+=1)k[a].d(1);k.length=y.length}},i:g,o:g,d(t){t&&h(s),t&&h(e),v(k,t)}}}function x({params:t,query:s}){return this.fetch("docs.json").then((t=>t.json())).then((t=>({posts:t})))}function y(t,s,e){let{posts:a}=s;return t.$$set=t=>{"posts"in t&&e(0,a=t.posts)},[a]}export default class extends t{constructor(t){super(),s(this,t,y,D,e,{posts:0})}}export{x as preload};
