var h=(t,i,e)=>new Promise((r,o)=>{var H=n=>{try{u(e.next(n))}catch(s){o(s)}},d=n=>{try{u(e.throw(n))}catch(s){o(s)}},u=n=>n.done?r(n.value):Promise.resolve(n.value).then(H,d);u((e=e.apply(t,i)).next())});import{x as m}from"./index.a0ba2dfa.js";import{u as w}from"./useWindowSizeFn.2950a977.js";import{r as a,j as p,u as c}from"./vendor.471af86e.js";const v=Symbol();function l(t){return m(t,v,{native:!0})}const g=a(0),f=a(0);function F(){function t(e){g.value=e}function i(e){f.value=e}return{headerHeightRef:g,footerHeightRef:f,setHeaderHeight:t,setFooterHeight:i}}function S(){const t=a(window.innerHeight),i=a(window.innerHeight),e=p(()=>c(t)-c(g)-c(f)||0);w(()=>{t.value=window.innerHeight},100,{immediate:!0});function r(o){return h(this,null,function*(){i.value=o})}l({contentHeight:e,setPageHeight:r,pageHeight:i})}export{F as a,S as u};
