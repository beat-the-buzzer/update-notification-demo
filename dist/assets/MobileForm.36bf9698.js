var x=(p,n,s)=>new Promise((d,m)=>{var f=a=>{try{r(s.next(a))}catch(i){m(i)}},u=a=>{try{r(s.throw(a))}catch(i){m(i)}},r=a=>a.done?d(a.value):Promise.resolve(a.value).then(f,u);r((s=s.apply(p,n)).next())});import{A as j,aZ as b,r as k,P as B,j as I,u as e,B as S,D as h,w as o,a5 as l,an as w,aS as v,ad as _,J as y,aa as z,ac as R}from"./vendor.471af86e.js";/* empty css               *//* empty css               */import{C as V}from"./index.d764e793.js";import{u as D,a as E,L as N,_ as T,b as U}from"./LoginFormTitle.841fe972.js";import{b as A}from"./index.a0ba2dfa.js";const G=j({setup(p){const n=b.Item,{t:s}=A(),{handleBackLogin:d,getLoginState:m}=D(),{getFormRules:f}=E(),u=k(),r=k(!1),a=B({mobile:"",sms:""}),{validForm:i}=U(u),C=I(()=>e(m)===N.MOBILE);function F(){return x(this,null,function*(){const g=yield i();!g||console.log(g)})}return(g,c)=>e(C)?(S(),h(z,{key:0},[o(T,{class:"enter-x"}),o(e(b),{class:"p-4 enter-x",model:e(a),rules:e(f),ref:(t,L)=>{L.formRef=t,u.value=t}},{default:l(()=>[o(e(n),{name:"mobile",class:"enter-x"},{default:l(()=>[o(e(w),{size:"large",value:e(a).mobile,"onUpdate:value":c[0]||(c[0]=t=>e(a).mobile=t),placeholder:e(s)("sys.login.mobile"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),o(e(n),{name:"sms",class:"enter-x"},{default:l(()=>[o(e(V),{size:"large",class:"fix-auto-fill",value:e(a).sms,"onUpdate:value":c[1]||(c[1]=t=>e(a).sms=t),placeholder:e(s)("sys.login.smsCode")},null,8,["value","placeholder"])]),_:1}),o(e(n),{class:"enter-x"},{default:l(()=>[o(e(v),{type:"primary",size:"large",block:"",onClick:F,loading:r.value},{default:l(()=>[_(y(e(s)("sys.login.loginButton")),1)]),_:1},8,["loading"]),o(e(v),{size:"large",block:"",class:"mt-4",onClick:e(d)},{default:l(()=>[_(y(e(s)("sys.login.backSignIn")),1)]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])],64)):R("",!0)}});export{G as default};
