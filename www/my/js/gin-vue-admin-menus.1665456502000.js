/*! 
 Build based on gin-vue-admin 
 Time : 1665456502000 */
var e=(e,t,a)=>new Promise(((l,o)=>{var s=e=>{try{u(a.next(e))}catch(t){o(t)}},n=e=>{try{u(a.throw(e))}catch(t){o(t)}},u=e=>e.done?l(e.value):Promise.resolve(e.value).then(s,n);u((a=a.apply(e,t)).next())}));import{u as t,r as a,c as l,o,d as s,e as n,f as u,h as r,m as d,t as i,g as c,J as m,k as h,a0 as y,a1 as f,p,a2 as v,G as g}from"../gva/gin-vue-admin-index.1665456502000.js";import{u as I}from"./gin-vue-admin-authority.16654565020002.js";import{g as k,s as w}from"./gin-vue-admin-authorityBtn.1665456502000.js";const b={class:"clearflex"},C={class:"custom-tree-node"},x={key:0},_=d(" 分配按钮 "),R={class:"dialog-footer"},D={name:"Menus"},j=Object.assign(D,{props:{row:{default:function(){return{}},type:Object}},emits:["changeRow"],setup(D,{expose:j,emit:z}){const N=D,{t:S}=t(),A=a([]),B=a([]),E=a(!1),V=a({children:"children",label:function(e){return e.meta.title}});(()=>{e(this,null,(function*(){const e=yield y();A.value=e.data.menus;const t=(yield f({authorityId:N.row.authorityId})).data.menus,a=[];t.forEach((e=>{t.some((t=>t.parentId===e.menuId))||a.push(Number(e.menuId))})),B.value=a}))})();const O=t=>e(this,null,(function*(){const e=yield I({authorityId:N.row.authorityId,AuthorityName:N.row.authorityName,parentId:N.row.parentId,defaultRouter:t.name});0===e.code&&(p({type:"success",message:S("general.setupSuccess")}),z("changeRow","defaultRouter",e.data.authority.defaultRouter))})),P=()=>{E.value=!0},T=a(null),G=()=>e(this,null,(function*(){const e=T.value.getCheckedNodes(!1,!0);0===(yield v({menus:e,authorityId:N.row.authorityId})).code&&p({type:"success",message:S("menus.menuSetupSuccess")})}));j({enterAndNext:()=>{G()},needConfirm:E});const H=a(!1),J=a([]),M=a([]),U=a();let q="";const F=t=>e(this,null,(function*(){q=t.ID;const e=yield k({menuID:q,authorityId:N.row.authorityId});0===e.code&&(L(t),yield g(),e.data.selected&&e.data.selected.forEach((e=>{J.value.some((t=>{t.ID===e&&U.value.toggleRowSelection(t,!0)}))})))})),K=e=>{M.value=e},L=e=>{H.value=!0,J.value=e.menuBtn},Q=()=>{H.value=!1},W=()=>e(this,null,(function*(){const e=M.value.map((e=>e.ID));0===(yield w({menuID:q,selected:e,authorityId:N.row.authorityId})).code&&(p({type:"success",message:"设置成功"}),H.value=!1)}));return(e,t)=>{const a=l("el-button"),y=l("el-tree"),f=l("el-table-column"),p=l("el-table"),v=l("el-dialog");return o(),s("div",null,[n("div",b,[u(a,{class:"fl-right",size:"mini",type:"primary",onClick:G},{default:r((()=>[d(i(c(S)("general.confirm")),1)])),_:1})]),u(y,{ref_key:"menuTree",ref:T,data:A.value,"default-checked-keys":B.value,props:V.value,"default-expand-all":"","highlight-current":"","node-key":"ID","show-checkbox":"",onCheck:P},{default:r((({node:e,data:t})=>[n("span",C,[n("span",null,i(e.label),1),n("span",null,[u(a,{type:"text",size:"mini",style:m({color:D.row.defaultRouter===t.name?"#E6A23C":"#85ce61"}),disabled:!e.checked,onClick:()=>O(t)},{default:r((()=>[d(i(D.row.defaultRouter===t.name?c(S)("menus.home"):c(S)("menus.setAsHome")),1)])),_:2},1032,["style","disabled","onClick"])]),t.menuBtn.length?(o(),s("span",x,[u(a,{type:"text",size:"small",onClick:()=>F(t)},{default:r((()=>[_])),_:2},1032,["onClick"])])):h("",!0)])])),_:1},8,["data","default-checked-keys","props"]),u(v,{modelValue:H.value,"onUpdate:modelValue":t[0]||(t[0]=e=>H.value=e),title:"分配按钮","destroy-on-close":""},{footer:r((()=>[n("div",R,[u(a,{size:"small",onClick:Q},{default:r((()=>[d(i(c(S)("general.close")),1)])),_:1}),u(a,{size:"small",type:"primary",onClick:W},{default:r((()=>[d(i(c(S)("general.confirm")),1)])),_:1})])])),default:r((()=>[u(p,{ref_key:"btnTableRef",ref:U,data:J.value,"row-key":"ID",onSelectionChange:K},{default:r((()=>[u(f,{type:"selection",width:"55"}),u(f,{label:"按钮名称",prop:"name"}),u(f,{label:"按钮备注",prop:"desc"})])),_:1},8,["data"])])),_:1},8,["modelValue"])])}}});export{j as default};
