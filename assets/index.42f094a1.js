var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,o=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,s=(e,s)=>{for(var r in s||(s={}))t.call(s,r)&&o(e,r,s[r]);if(n)for(var r of n(s))a.call(s,r)&&o(e,r,s[r]);return e};import{d as r,a as m,r as i,o as u,c as l,w as _,b as c,e as p,f as d,g as f,_ as h,h as g,i as b,j as y,O as E}from"./vendor.326c1501.js";let j;!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,s)=>{const r=new URL(e,a);if(self[t].moduleMap[r])return n(self[t].moduleMap[r]);const m=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(m),onerror(){s(new Error(`Failed to import: ${e}`)),o(i)},onload(){n(self[t].moduleMap[r]),o(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/assets/");const O={},A=function(e,t){if(!t)return e();if(void 0===j){const e=document.createElement("link").relList;j=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in O)return;O[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":j,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))};var L=r({components:{Header:m((()=>A((()=>__import__("./Header.b8ba01db.js")),["/assets/Header.b8ba01db.js","/assets/Header.98fbe6d5.css","/assets/vendor.326c1501.js"]))),Aside:m((()=>A((()=>__import__("./Aside.240caff4.js")),["/assets/Aside.240caff4.js","/assets/vendor.326c1501.js"]))),AppMain:m((()=>A((()=>__import__("./AppMain.2f723ec6.js")),["/assets/AppMain.2f723ec6.js","/assets/vendor.326c1501.js"]))),Footer:m((()=>A((()=>__import__("./Footer.18be8fe4.js")),["/assets/Footer.18be8fe4.js","/assets/Footer.8cb9cd60.css","/assets/vendor.326c1501.js"])))},setup(){}});L.render=function(e,t,n,a,o,s){const r=i("Aside"),m=i("el-aside"),p=i("Header"),d=i("el-header"),f=i("AppMain"),h=i("el-main"),g=i("Footer"),b=i("el-footer"),y=i("el-container");return u(),l(y,{class:"layout-container"},{default:_((()=>[c(m,{width:"200px",class:"layout-aside"},{default:_((()=>[c(r)])),_:1}),c(y,null,{default:_((()=>[c(d,{class:"layout-header"},{default:_((()=>[c(p)])),_:1}),c(h,{class:"layout-main"},{default:_((()=>[c(f)])),_:1}),c(b,{class:"layout-footer"},{default:_((()=>[c(g)])),_:1})])),_:1})])),_:1})};const P=[{path:"/login",name:"login",component:()=>A((()=>__import__("./Login.13e8e253.js")),["/assets/Login.13e8e253.js","/assets/Login.5378af44.css","/assets/vendor.326c1501.js"]),meta:{title:"message.login.title"}},{path:"/",name:"index",component:L,redirect:"/home",children:[{path:"/home",name:"home",component:()=>A((()=>__import__("./Home.712f1eae.js")),["/assets/Home.712f1eae.js","/assets/vendor.326c1501.js"]),meta:{title:"message.router.home"}},{path:"/feature",name:"feature",component:()=>A((()=>__import__("./SlotParent.3a0f643b.js")),["/assets/SlotParent.3a0f643b.js","/assets/vendor.326c1501.js"]),meta:{title:"message.feature.feature"},children:[{path:"/feature/dashboard",name:"dashboard",component:()=>A((()=>__import__("./DashBoard.bff48e4c.js")),["/assets/DashBoard.bff48e4c.js","/assets/vendor.326c1501.js"]),meta:{title:"message.feature.dashboard"}},{path:"/feature/system",name:"system",component:()=>A((()=>__import__("./SlotParent.3a0f643b.js")),["/assets/SlotParent.3a0f643b.js","/assets/vendor.326c1501.js"]),meta:{title:"message.feature.system"},children:[{path:"/feature/system/setting",name:"systemSetting",component:()=>A((()=>__import__("./SlotParent.3a0f643b.js")),["/assets/SlotParent.3a0f643b.js","/assets/vendor.326c1501.js"]),meta:{title:"message.feature.setting"},children:[{path:"/feature/system/setting/menu1",name:"systemSettingMenu1",component:()=>A((()=>__import__("./SlotParent.3a0f643b.js")),["/assets/SlotParent.3a0f643b.js","/assets/vendor.326c1501.js"]),meta:{title:"message.feature.menu1"},children:[{path:"/feature/system/setting/menu1/menu1_1",name:"systemSettingMenu1Menu1_1",component:()=>A((()=>__import__("./Menu1_2.b2de3b0d.js")),["/assets/Menu1_2.b2de3b0d.js","/assets/vendor.326c1501.js"]),meta:{title:"message.feature.menu1_1"}},{path:"/feature/system/setting/menu1/menu1_2",name:"systemSettingMenu1Menu1_2",component:()=>A((()=>__import__("./Menu1_2.b2de3b0d.js")),["/assets/Menu1_2.b2de3b0d.js","/assets/vendor.326c1501.js"]),meta:{title:"message.feature.menu1_2"}}]},{path:"/feature/system/setting/menu2",name:"systemSettingMenu2",component:()=>A((()=>__import__("./Menu2.6a3c3e03.js")),["/assets/Menu2.6a3c3e03.js","/assets/vendor.326c1501.js"]),meta:{title:"message.feature.menu2"}}]},{path:"/feature/system/user",name:"systemUser",component:()=>A((()=>__import__("./User.0c3f73df.js")),["/assets/User.0c3f73df.js","/assets/vendor.326c1501.js"]),meta:{title:"message.feature.user"}}]}]},{path:"/about",name:"about",component:()=>A((()=>__import__("./About.fcd569d2.js")),["/assets/About.fcd569d2.js","/assets/vendor.326c1501.js"]),meta:{title:"message.router.about"}}]}],M=p({history:d(),routes:P});const R=f({locale:"en",globalInjection:!0,messages:{cn:{el:h.el,message:s(s(s({},{logo:"铸剑",language:{chinese:"中文",english:"英文"},login:{title:"登录",account:"账户登录",mobile:"手机号登录",sign_with:"第三方登录",link:"链接",copyright:"©2021 虚拟宇宙公司",button:"登录"},account:{username:"用户名",password:"密码",code:"验证码"},mobile:{phone:"手机号码",code:"短信验证码",obtain:"获取验证码"}}),{router:{home:"首页",about:"关于"}}),{feature:{feature:"功能展示",dashboard:"仪表盘",system:"系统设置",setting:"菜单管理",menu1:"菜单1",menu1_1:"菜单1-1",menu1_1_1:"菜单1-1-1",menu1_2:"菜单1-2",menu2:"菜单2",user:"用户管理"}})},en:{el:g.el,message:s(s(s({},{logo:"Forge Sword",language:{chinese:"Chinese",english:"English"},login:{title:"Sign in",account:"Account Sign in",mobile:"Mobile Number",sign_with:"Sign in with",link:"link",copyright:"©2021 Virtual Universe Company",button:"Sign in"},account:{username:"username",password:"password",code:"Verification code"},mobile:{phone:"phone number",code:"SMS verification code",obtain:"Get Code"}}),{router:{home:"Home",about:"About"}}),{feature:{feature:"Feature Show",dashboard:"DashBoard",system:"System",setting:"Setting",menu1:"Menu 1",menu1_1:"Menu 1-1",menu1_1_1:"Menu 1-1-1",menu1_2:"Menu 1-2",menu2:"Menu 2",user:"User"}})}}});var w=r({name:"App",setup:()=>({})});const S=b()(((e,t,n,a,o,s)=>{const r=i("router-view");return u(),l(r)}));w.render=S,w.__scopeId="data-v-337dc1b6";const I=y(w);I.use(R),I.use(M),I.use(E,{i18n:R.global.t}),I.mount("#app");export{A as _};
