if(!self.define){let e,t={};const i=(i,o)=>(i=new URL(i+".js",o).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(o,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let s={};const c=e=>i(e,r),l={module:{uri:r},exports:s,require:c};t[r]=Promise.all(o.map((e=>l[e]||c(e)))).then((e=>(n(...e),s)))}}define(["./workbox-a557ae7e"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"mbg-ied-editor.js",revision:"ed158512f73c6c7c6b185c011f195dce"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map
