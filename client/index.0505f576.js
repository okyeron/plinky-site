import{S as t,i as s,s as e,e as a,k as o,j as n,a as l,b as r,m as c,d as h,l as i,f,g as u,n as d,o as p,r as m,x as g,y as v}from"./client.3b29eda3.js";function E(t,s,e){const a=t.slice();return a[1]=s[e],a[3]=e,a}function j(t){let s,e,m,g,v,E,j=t[1].title+"";return{c(){s=a("div"),e=a("h2"),m=a("a"),g=o(j),E=n(),this.h()},l(t){s=l(t,"DIV",{class:!0});var a=r(s);e=l(a,"H2",{});var o=r(e);m=l(o,"A",{href:!0});var n=r(m);g=c(n,j),n.forEach(h),o.forEach(h),E=i(a),a.forEach(h),this.h()},h(){f(m,"href",v="docs/"+t[1].slug),f(s,"class","post-item")},m(t,a){u(t,s,a),d(s,e),d(e,m),d(m,g),d(s,E)},p(t,s){1&s&&j!==(j=t[1].title+"")&&p(g,j),1&s&&v!==(v="docs/"+t[1].slug)&&f(m,"href",v)},d(t){t&&h(s)}}}function D(t){let s,e,p,D,x,y=t[0],b=[];for(let s=0;s<y.length;s+=1)b[s]=j(E(t,y,s));return{c(){s=n(),e=a("div"),p=a("h1"),D=o("Documentation"),x=n();for(let t=0;t<b.length;t+=1)b[t].c();this.h()},l(t){m('[data-svelte="svelte-1s3zj33"]',document.head).forEach(h),s=i(t),e=l(t,"DIV",{class:!0});var a=r(e);p=l(a,"H1",{});var o=r(p);D=c(o,"Documentation"),o.forEach(h),x=i(a);for(let t=0;t<b.length;t+=1)b[t].l(a);a.forEach(h),this.h()},h(){document.title="Plinky - Documentation",f(e,"class","page")},m(t,a){u(t,s,a),u(t,e,a),d(e,p),d(p,D),d(e,x);for(let t=0;t<b.length;t+=1)b[t].m(e,null)},p(t,[s]){if(1&s){let a;for(y=t[0],a=0;a<y.length;a+=1){const o=E(t,y,a);b[a]?b[a].p(o,s):(b[a]=j(o),b[a].c(),b[a].m(e,null))}for(;a<b.length;a+=1)b[a].d(1);b.length=y.length}},i:g,o:g,d(t){t&&h(s),t&&h(e),v(b,t)}}}function x({params:t,query:s}){return this.fetch("docs.json").then((t=>t.json())).then((t=>({posts:t})))}function y(t,s,e){let{posts:a}=s;return t.$$set=t=>{"posts"in t&&e(0,a=t.posts)},[a]}export default class extends t{constructor(t){super(),s(this,t,y,D,e,{posts:0})}}export{x as preload};
