import{A as l,a8 as d,bR as m,a as f,j as _,a0 as e,B as g,a1 as E,a5 as s,w as c}from"./vendor.471af86e.js";/* empty css                */import{_ as C,I as L,ax as h,b as B,P as b}from"./index.a0ba2dfa.js";const I=l({name:"ErrorAction",components:{Icon:L,Tooltip:d,Badge:m},setup(){const{t:o}=B(),{push:n}=f(),t=h(),r=_(()=>t.getErrorLogListCount);function a(){n(b.ERROR_LOG_PAGE).then(()=>{t.setErrorLogListCount(0)})}return{t:o,getCount:r,handleToErrorList:a}}});function R(o,n,t,r,a,T){const i=e("Icon"),u=e("Badge"),p=e("Tooltip");return g(),E(p,{title:o.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:o.handleToErrorList},{default:s(()=>[c(u,{count:o.getCount,offset:[0,10],overflowCount:99},{default:s(()=>[c(i,{icon:"ion:bug-outline"})]),_:1},8,["count"])]),_:1},8,["title","mouseEnterDelay","onClick"])}var x=C(I,[["render",R]]);export{x as default};