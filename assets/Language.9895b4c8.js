import{d as e,I as a,o as n,c as l,D as o,J as s,b as t,t as r}from"./vendor.b5a5699a.js";var u=e({name:"Language",setup(){const{locale:e}=a();return{locale:e}}});const c={value:"en"},g={value:"cn"};u.render=function(e,a,u,m,d,i){return n(),l("form",null,[o(t("select",{"onUpdate:modelValue":a[1]||(a[1]=a=>e.locale=a)},[t("option",c,r(e.$t("message.language.english")),1),t("option",g,r(e.$t("message.language.chinese")),1)],512),[[s,e.locale]])])};export default u;