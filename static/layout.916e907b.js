import{B as r,D as m,a6 as f,a7 as c,E as P,r as h,a8 as l,a9 as v,aa as L,j as b,ab as g,Z as u,U as j,k as R,P as S,F as T,ac as _,G as x,ad as A}from"./entry.b445f80d.js";const B=r({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(e,o){const t=await l[e.name]().then(a=>a.default||a);return()=>u(t,e.layoutProps,o.slots)}}),N=r({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(e,o){const t=b(),a=m(g),s=a===f()?c():a,n=P(()=>R(e.name)??s.meta.layout??"default"),i=h();o.expose({layoutRef:i});const p=t.deferHydration();return()=>{const d=n.value&&n.value in l,y=s.meta.layoutTransition??v;return L(j,d&&y,{default:()=>u(_,{suspensible:!0,onResolve:()=>{T(p)}},{default:()=>u(k,{layoutProps:S(o.attrs,{ref:i}),key:n.value,name:n.value,shouldProvide:!e.name,hasTransition:!!y},o.slots)})}).default()}}}),k=r({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(e,o){const t=e.name;return e.shouldProvide&&x(A,{isCurrent:a=>t===(a.meta.layout??"default")}),()=>{var a,s;return!t||typeof t=="string"&&!(t in l)?(s=(a=o.slots).default)==null?void 0:s.call(a):u(B,{key:t,layoutProps:e.layoutProps,name:t},o.slots)}}});export{N as _};
