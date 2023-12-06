import{_ as M,F as D,p as I,a as b,f as x,b as S,o as $}from"./index.a0ba2dfa.js";import{A as U,aA as A,az as v,j as N,a0 as n,B as t,D as O,w as s,a5 as m,a1 as f,ac as _,H as a,K as r,J as V,aa as B}from"./vendor.471af86e.js";import{D as E}from"./siteSetting.c485f07c.js";import{c as w,u as P}from"./index.6360720b.js";import{a as R}from"./index.58047f21.js";import{h as z}from"./header.d801b988.js";import"./index.0585ec8b.js";import"./useWindowSizeFn.2950a977.js";import"./useContentViewHeight.e342a33c.js";/* empty css               */import"./useSortable.d74d60e7.js";import"./lock.84435e8f.js";const F=U({name:"UserDropdown",components:{Dropdown:A,Menu:v,MenuItem:w(()=>D(()=>import("./DropMenuItem.92172dfd.js"),["assets/DropMenuItem.92172dfd.js","assets/vendor.471af86e.js","assets/vendor.ced4861a.css","assets/index.a0ba2dfa.js","assets/index.087d9be4.css"])),MenuDivider:v.Divider,LockAction:w(()=>D(()=>import("./LockModal.49e4e226.js"),["assets/LockModal.49e4e226.js","assets/LockModal.0068f88c.css","assets/index.236716d4.css","assets/index.ccc15a38.css","assets/index.35b5cf30.css","assets/index.7959f7e6.css","assets/index.c4896195.css","assets/index.553174f4.css","assets/index.317f90e2.css","assets/index.a0ba2dfa.js","assets/index.087d9be4.css","assets/vendor.471af86e.js","assets/vendor.ced4861a.css","assets/index.58047f21.js","assets/index.2439e102.css","assets/useWindowSizeFn.2950a977.js","assets/useForm.4709878f.js","assets/useForm.f0aa9a7e.css","assets/index.d764e793.js","assets/index.7b8b5e30.css","assets/download.efaf7cd1.js","assets/index.954dd025.js","assets/index.cb030764.css","assets/lock.84435e8f.js","assets/header.d801b988.js"]))},props:{theme:I.oneOf(["dark","light"])},setup(){const{prefixCls:e}=b("header-user-dropdown"),{t:g}=S(),{getShowDoc:k,getUseLockPage:h}=P(),i=x(),C=N(()=>{const{realName:u="",avatar:j,desc:L}=i.getUserInfo||{};return{realName:u,avatar:j||z,desc:L}}),[o,{openModal:c}]=R();function l(){c(!0)}function d(){i.confirmLoginOut()}function p(){$(E)}function y(u){switch(u.key){case"logout":d();break;case"doc":p();break;case"lock":l();break}}return{prefixCls:e,t:g,getUserInfo:C,handleMenuClick:y,getShowDoc:k,register:o,getUseLockPage:h}}}),H=["src"];function T(e,g,k,h,i,C){const o=n("MenuItem"),c=n("MenuDivider"),l=n("Menu"),d=n("Dropdown"),p=n("LockAction");return t(),O(B,null,[s(d,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:m(()=>[s(l,{onClick:e.handleMenuClick},{default:m(()=>[e.getShowDoc?(t(),f(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):_("",!0),e.getShowDoc?(t(),f(c,{key:1})):_("",!0),e.getUseLockPage?(t(),f(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):_("",!0),s(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:m(()=>[a("span",{class:r([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[a("img",{class:r(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,H),a("span",{class:r(`${e.prefixCls}__info hidden md:block`)},[a("span",{class:r([`${e.prefixCls}__name  `,"truncate"])},V(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),s(p,{onRegister:e.register},null,8,["onRegister"])],64)}var te=M(F,[["render",T]]);export{te as default};