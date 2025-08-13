import{r as f}from"./app-b4c1bdd2.js";import{g as x}from"./index-6aa39625.js";/*!
 * @gsap/react
 * https://gsap.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/const p=typeof window<"u"?f.useLayoutEffect:f.useEffect,a=t=>t&&!Array.isArray(t)&&typeof t=="object",n=[],S={},E=(t,e=n)=>{let o=S;a(t)?(o=t,t=null,e="dependencies"in o?o.dependencies:n):a(e)&&(o=e,e="dependencies"in o?o.dependencies:n);let{scope:s,revertOnUpdate:m}=o,[y,d]=f.useState(!1);t&&typeof t!="function"&&console.warn("First parameter must be a function or config object");const r=x.context(()=>{},s),g=c=>r.add(null,c),u=()=>r.revert(),i=e&&e.length&&!m;return p(()=>{if(t&&r.add(t,s),!i||!y)return u},e),i&&p(()=>(d(!0),u),n),{context:r,contextSafe:g}};export{E as u};
