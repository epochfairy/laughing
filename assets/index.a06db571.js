var e=Object.defineProperty,o=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,r=(o,t,n)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,s=(e,s)=>{for(var i in s||(s={}))o.call(s,i)&&r(e,i,s[i]);if(t)for(var i of t(s))n.call(s,i)&&r(e,i,s[i]);return e};import{c as i,a,b as l,_ as c,d as m,e as u,r as p,o as d,f as g,g as h,x as b}from"./vendor.0912cc38.js";let f;!function(e=".",o="__import__"){try{self[o]=new Function("u","return import(u)")}catch(t){const n=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[o]=e=>new Promise(((t,s)=>{const i=new URL(e,n);if(self[o].moduleMap[i])return t(self[o].moduleMap[i]);const a=new Blob([`import * as m from '${i}';`,`${o}.moduleMap['${i}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(a),onerror(){s(new Error(`Failed to import: ${e}`)),r(l)},onload(){t(self[o].moduleMap[i]),r(l)}});document.head.appendChild(l)})),self[o].moduleMap={}}}("/assets/");const y={},w=function(e,o){if(!o)return e();if(void 0===f){const e=document.createElement("link").relList;f=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(o.map((e=>{if(e in y)return;y[e]=!0;const o=e.endsWith(".css"),t=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const n=document.createElement("link");return n.rel=o?"stylesheet":f,o||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),o?new Promise(((e,o)=>{n.addEventListener("load",e),n.addEventListener("error",o)})):void 0}))).then((()=>e()))},v=[{path:"/login",name:"login",component:()=>w((()=>__import__("./Login.32bab304.js")),["/assets/Login.32bab304.js","/assets/Login.5378af44.css","/assets/vendor.0912cc38.js"]),meta:{title:"登陆"}}],_=i({history:a(),routes:v});const j=l({locale:"en",globalInjection:!0,messages:{cn:{el:c.el,message:s(s({},{logo:"铸剑",language:{chinese:"中文",english:"英文"},login:{title:"登录",account:"账户登录",mobile:"手机号登录",sign_with:"第三方登录",link:"链接",copyright:"©2021 虚拟宇宙公司",button:"登录"},account:{username:"用户名",password:"密码",code:"验证码"},mobile:{phone:"手机号码",code:"短信验证码",obtain:"获取验证码"}}),{router:{home:"首页",system:"系统设置",system_menu:"菜单管理",system_user:"用户管理"}})},en:{el:m.el,message:s(s({},{logo:"Forge Sword",language:{chinese:"Chinese",english:"English"},login:{title:"Sign in",account:"Account Sign in",mobile:"Mobile Number",sign_with:"Sign in with",link:"link",copyright:"©2021 Virtual Universe Company",button:"Sign in"},account:{username:"username",password:"password",code:"Verification code"},mobile:{phone:"phone number",code:"SMS verification code",obtain:"Get Code"}}),{router:{home:"home",system:"system",systemMenu:"systemMenu",systemUser:"systemUser"}})}}});var L=u({name:"App",setup:()=>({})});L.render=function(e,o,t,n,r,s){const i=p("router-view");return d(),g(i)};const O=h(L);O.use(j),O.use(_),O.use(b,{i18n:j.global.t}),O.mount("#app");export{w as _};
