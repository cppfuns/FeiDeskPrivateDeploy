/*! 
 Build based on gin-vue-admin 
 Time : 1665456502000 */
import{g as t}from"./gin-vue-admin-system.1665456502000.js";import{r as e,P as a,c as l,o as n,d as u,f as s,h as o,j as d,e as r,t as p,k as c,M as f,L as _,m as v}from"../gva/gin-vue-admin-index.1665456502000.js";const i=r("div",null,"Runtime",-1),g=v("os:"),x=v("cpu nums:"),m=v("compiler:"),C=v("go version:"),y=v("goroutine nums:"),h=r("div",null,"Disk",-1),b=v("total (MB)"),k=v("used (MB)"),M=v("total (GB)"),B=v("used (GB)"),G=r("div",null,"CPU",-1),P=v("physical number of cores:"),j=r("div",null,"Ram",-1),w=v("total (MB)"),F=v("used (MB)"),I=v("total (GB)"),R=v("used (GB)"),D={name:"State"},L=Object.assign(D,{setup(D){const L=e(null),O=e({}),S=e([{color:"#5cb87a",percentage:20},{color:"#e6a23c",percentage:40},{color:"#f56c6c",percentage:80}]),U=()=>{return e=this,a=null,l=function*(){const{data:e}=yield t();O.value=e.server},new Promise(((t,n)=>{var u=t=>{try{o(l.next(t))}catch(e){n(e)}},s=t=>{try{o(l.throw(t))}catch(e){n(e)}},o=e=>e.done?t(e.value):Promise.resolve(e.value).then(u,s);o((l=l.apply(e,a)).next())}));var e,a,l};return U(),L.value=setInterval((()=>{U()}),1e4),a((()=>{clearInterval(L.value),L.value=null})),(t,e)=>{const a=l("el-col"),D=l("el-row"),L=l("el-card"),U=l("el-progress");return n(),u("div",null,[s(D,{gutter:15,class:"system_state"},{default:o((()=>[s(a,{span:12},{default:o((()=>[O.value.os?(n(),d(L,{key:0,class:"card_item"},{header:o((()=>[i])),default:o((()=>[r("div",null,[s(D,{gutter:10},{default:o((()=>[s(a,{span:12},{default:o((()=>[g])),_:1}),s(a,{span:12,textContent:p(O.value.os.goos)},null,8,["textContent"])])),_:1}),s(D,{gutter:10},{default:o((()=>[s(a,{span:12},{default:o((()=>[x])),_:1}),s(a,{span:12,textContent:p(O.value.os.numCpu)},null,8,["textContent"])])),_:1}),s(D,{gutter:10},{default:o((()=>[s(a,{span:12},{default:o((()=>[m])),_:1}),s(a,{span:12,textContent:p(O.value.os.compiler)},null,8,["textContent"])])),_:1}),s(D,{gutter:10},{default:o((()=>[s(a,{span:12},{default:o((()=>[C])),_:1}),s(a,{span:12,textContent:p(O.value.os.goVersion)},null,8,["textContent"])])),_:1}),s(D,{gutter:10},{default:o((()=>[s(a,{span:12},{default:o((()=>[y])),_:1}),s(a,{span:12,textContent:p(O.value.os.numGoroutine)},null,8,["textContent"])])),_:1})])])),_:1})):c("",!0)])),_:1}),s(a,{span:12},{default:o((()=>[O.value.disk?(n(),d(L,{key:0,class:"card_item"},{header:o((()=>[h])),default:o((()=>[r("div",null,[s(D,{gutter:10},{default:o((()=>[s(a,{span:12},{default:o((()=>[s(D,{gutter:10},{default:o((()=>[s(a,{span:12},{default:o((()=>[b])),_:1}),s(a,{span:12,textContent:p(O.value.disk.totalMb)},null,8,["textContent"])])),_:1}),s(D,{gutter:10},{default:o((()=>[s(a,{span:12},{default:o((()=>[k])),_:1}),s(a,{span:12,textContent:p(O.value.disk.usedMb)},null,8,["textContent"])])),_:1}),s(D,{gutter:10},{default:o((()=>[s(a,{span:12},{default:o((()=>[M])),_:1}),s(a,{span:12,textContent:p(O.value.disk.totalGb)},null,8,["textContent"])])),_:1}),s(D,{gutter:10},{default:o((()=>[s(a,{span:12},{default:o((()=>[B])),_:1}),s(a,{span:12,textContent:p(O.value.disk.usedGb)},null,8,["textContent"])])),_:1})])),_:1}),s(a,{span:12},{default:o((()=>[s(U,{type:"dashboard",percentage:O.value.disk.usedPercent,color:S.value},null,8,["percentage","color"])])),_:1})])),_:1})])])),_:1})):c("",!0)])),_:1})])),_:1}),s(D,{gutter:15,class:"system_state"},{default:o((()=>[s(a,{span:12},{default:o((()=>[O.value.cpu?(n(),d(L,{key:0,class:"card_item","body-style":{height:"180px","overflow-y":"scroll"}},{header:o((()=>[G])),default:o((()=>[r("div",null,[s(D,{gutter:10},{default:o((()=>[s(a,{span:12},{default:o((()=>[P])),_:1}),s(a,{span:12,textContent:p(O.value.cpu.cores)},null,8,["textContent"])])),_:1}),(n(!0),u(f,null,_(O.value.cpu.cpus,((t,e)=>(n(),d(D,{key:e,gutter:10},{default:o((()=>[s(a,{span:12},{default:o((()=>[v("core "+p(e)+":",1)])),_:2},1024),s(a,{span:12},{default:o((()=>[s(U,{type:"line",percentage:+t.toFixed(0),color:S.value},null,8,["percentage","color"])])),_:2},1024)])),_:2},1024)))),128))])])),_:1})):c("",!0)])),_:1}),s(a,{span:12},{default:o((()=>[O.value.ram?(n(),d(L,{key:0,class:"card_item"},{header:o((()=>[j])),default:o((()=>[r("div",null,[s(D,{gutter:10},{default:o((()=>[s(a,{span:12},{default:o((()=>[s(D,{gutter:10},{default:o((()=>[s(a,{span:12},{default:o((()=>[w])),_:1}),s(a,{span:12,textContent:p(O.value.ram.totalMb)},null,8,["textContent"])])),_:1}),s(D,{gutter:10},{default:o((()=>[s(a,{span:12},{default:o((()=>[F])),_:1}),s(a,{span:12,textContent:p(O.value.ram.usedMb)},null,8,["textContent"])])),_:1}),s(D,{gutter:10},{default:o((()=>[s(a,{span:12},{default:o((()=>[I])),_:1}),s(a,{span:12,textContent:p(O.value.ram.totalMb/1024)},null,8,["textContent"])])),_:1}),s(D,{gutter:10},{default:o((()=>[s(a,{span:12},{default:o((()=>[R])),_:1}),s(a,{span:12,textContent:p((O.value.ram.usedMb/1024).toFixed(2))},null,8,["textContent"])])),_:1})])),_:1}),s(a,{span:12},{default:o((()=>[s(U,{type:"dashboard",percentage:O.value.ram.usedPercent,color:S.value},null,8,["percentage","color"])])),_:1})])),_:1})])])),_:1})):c("",!0)])),_:1})])),_:1})])}}});export{L as default};
