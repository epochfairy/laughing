import{d as e,v as a,u as l,k as t,x as u,y as n,z as o,r as v,o as s,c,w as r,F as i,q as m,b as p,K as k,A as y}from"./vendor.b5a5699a.js";var b=e({setup(){const e=a(),v=l(),s=t([{title:e.meta.title,key:e.path,name:e.name}]),c=t([]),r=t(s.value[0].key),i=u((()=>e.path));n((e=>{let a=!0;var l;s.value.forEach(((l,t)=>{l.key===e.path&&(a=!1,r.value=s.value[t].key)})),a&&(l=e,r.value=l.path,c.value.push(l.name),s.value.push({title:l.meta.title,key:r.value,name:l.name}))})),o((()=>{const{name:e}=v.currentRoute.value;c.value.push(e)}));return{cacheList:c,key:i,panes:s,activeKey:r,onTabRemove:e=>{let a=0;s.value.forEach(((l,t)=>{if(l.key===e){a=t-1;const{name:e}=l;e&&(c.value=c.value.filter((a=>a!==e)))}})),s.value=s.value.filter((a=>a.key!==e)),s.value.length&&r.value===e&&(r.value=a>=0?s.value[a].key:s.value[0].key),v.push(r.value)},onTabClick:()=>{v.push({path:r.value})}}}});b.render=function(e,a){const l=v("el-tab-pane"),t=v("router-view"),u=v("el-tabs");return s(),c(u,{modelValue:e.activeKey,"onUpdate:modelValue":a[1]||(a[1]=a=>e.activeKey=a),type:"border-card",closable:"",onTabRemove:e.onTabRemove,onTabClick:e.onTabClick},{default:r((()=>[(s(!0),c(i,null,m(e.panes,(a=>(s(),c(l,{key:a.key,label:e.$t(a.title),name:a.key},null,8,["label","name"])))),128)),p(t,null,{default:r((({Component:a})=>[(s(),c(k,{include:e.cacheList},[(s(),c(y(a)))],1032,["include"]))])),_:1})])),_:1},8,["modelValue","onTabRemove","onTabClick"])};export default b;