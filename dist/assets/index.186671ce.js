import{A as _,aT as C,b0 as g,a as F,r as v,j as w,u as n,a0 as c,B as y,a1 as S,a5 as h,H as a,J as m,w as L,K as l,ac as R,L as $,N as I}from"./vendor.471af86e.js";import{D as b,G as U,S as k}from"./siteSetting.c485f07c.js";import{_ as H,Q as j,a as B,o as D,b as G}from"./index.a0ba2dfa.js";import{a as T}from"./useContentViewHeight.e342a33c.js";import"./useWindowSizeFn.2950a977.js";const V=_({name:"LayoutFooter",components:{Footer:C.Footer,GithubFilled:g},setup(){const{t:e}=G(),{getShowFooter:o}=j(),{currentRoute:d}=F(),{prefixCls:p}=B("layout-footer"),r=v(null),{setFooterHeight:i}=T();return{getShowLayoutFooter:w(()=>{var s,t;if(n(o)){const u=(s=n(r))==null?void 0:s.$el;i((u==null?void 0:u.offsetHeight)||0)}else i(0);return n(o)&&!((t=n(d).meta)==null?void 0:t.hiddenFooter)}),prefixCls:p,t:e,DOC_URL:b,GITHUB_URL:U,SITE_URL:k,openWindow:D,footerRef:r}}}),W=e=>($("data-v-62583d60"),e=e(),I(),e),N=W(()=>a("div",null,"Copyright \xA92020 Vben Admin",-1));function A(e,o,d,p,r,i){const f=c("GithubFilled"),s=c("Footer");return e.getShowLayoutFooter?(y(),S(s,{key:0,class:l(e.prefixCls),ref:"footerRef"},{default:h(()=>[a("div",{class:l(`${e.prefixCls}__links`)},[a("a",{onClick:o[0]||(o[0]=t=>e.openWindow(e.SITE_URL))},m(e.t("layout.footer.onlinePreview")),1),L(f,{onClick:o[1]||(o[1]=t=>e.openWindow(e.GITHUB_URL)),class:l(`${e.prefixCls}__github`)},null,8,["class"]),a("a",{onClick:o[2]||(o[2]=t=>e.openWindow(e.DOC_URL))},m(e.t("layout.footer.onlineDocument")),1)],2),N]),_:1},8,["class"])):R("",!0)}var K=H(V,[["render",A],["__scopeId","data-v-62583d60"]]);export{K as default};
