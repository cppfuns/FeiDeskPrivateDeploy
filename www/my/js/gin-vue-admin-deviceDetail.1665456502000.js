/*! 
 Build based on gin-vue-admin 
 Time : 1665456502000 */
var e=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,r=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,s=(e,a,l)=>new Promise(((t,r)=>{var s=e=>{try{n(l.next(e))}catch(a){r(a)}},o=e=>{try{n(l.throw(e))}catch(a){r(a)}},n=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,o);n((l=l.apply(e,a)).next())}));import{W as o,u as n,r as u,c as i,o as d,d as c,e as p,f as v,h as g,g as m,m as f,t as b,j as h,k as y,p as w}from"../gva/gin-vue-admin-index.1665456502000.js";import{f as C}from"./gin-vue-admin-format.1665456502000.js";import"./gin-vue-admin-dictionary.1665456502000.js";import"./gin-vue-admin-sysDictionary.1665456502000.js";const I={class:"gva-search-box"},_={class:"gva-table-box"},j={class:"gva-pagination"},k={name:"DeviceDetail"},z=Object.assign(k,{setup(e){const{t:k}=n();u({id:"",uuid:"",macId:"",groupId:0,platform:0,status:0});const z=u(1),D=u(0),S=u(10),V=u([]),x=u({});u(!0);const O=()=>{x.value={}},P=()=>{z.value=1,S.value=10,E()},U=e=>{S.value=e,E()},A=e=>{z.value=e,E()},E=()=>s(this,null,(function*(){const e=yield(s=((e,s)=>{for(var o in s||(s={}))l.call(s,o)&&r(e,o,s[o]);if(a)for(var o of a(s))t.call(s,o)&&r(e,o,s[o]);return e})({page:z.value,pageSize:S.value},x.value),o({url:"/deviceDetail/getDeviceDetailList",method:"get",params:s}));var s;0===e.code&&(V.value=e.data.list,D.value=e.data.total,z.value=e.data.page,S.value=e.data.pageSize)}));E();(()=>{s(this,null,(function*(){}))})();const L=(e,a)=>s(this,null,(function*(){e.status=a;var l;0===(yield(l=e,o({url:"/deviceDetail/updateDeviceDetail",method:"put",data:l}))).code?w({type:"success",message:k("general.createUpdateSuccess")}):w({type:"warning",message:k("general.deleteSuccess")})}));return(e,a)=>{const l=i("el-input"),t=i("el-form-item"),r=i("el-button"),s=i("el-form"),o=i("el-table-column"),n=i("el-table"),u=i("el-pagination");return d(),c("div",null,[p("div",I,[v(s,{inline:!0,model:x.value,class:"demo-form-inline"},{default:g((()=>[v(t,{label:m(k)("devres.groupId")},{default:g((()=>[v(l,{modelValue:x.value.groupId,"onUpdate:modelValue":a[0]||(a[0]=e=>x.value.groupId=e),placeholder:m(k)("general.searchCriteria")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),v(t,{label:m(k)("devres.platform")},{default:g((()=>[v(l,{modelValue:x.value.platform,"onUpdate:modelValue":a[1]||(a[1]=e=>x.value.platform=e),placeholder:m(k)("general.searchCriteria")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),v(t,{label:m(k)("devres.status")},{default:g((()=>[v(l,{modelValue:x.value.status,"onUpdate:modelValue":a[2]||(a[2]=e=>x.value.status=e),placeholder:m(k)("general.searchCriteria")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),v(t,null,{default:g((()=>[v(r,{size:"small",type:"primary",icon:"search",onClick:P},{default:g((()=>[f(b(m(k)("general.search")),1)])),_:1}),v(r,{size:"small",icon:"refresh",onClick:O},{default:g((()=>[f(b(m(k)("general.reset")),1)])),_:1})])),_:1})])),_:1},8,["model"])]),p("div",_,[v(n,{ref:"multipleTable",style:{width:"100%"},"tooltip-effect":"dark",data:V.value,"row-key":"ID",onSelectionChange:e.handleSelectionChange},{default:g((()=>[v(o,{type:"selection",width:"55"}),v(o,{align:"left",label:m(k)("general.createdAt"),width:"180"},{default:g((e=>[f(b(m(C)(e.row.CreatedAt)),1)])),_:1},8,["label"]),v(o,{align:"left",label:m(k)("devres.deviceId"),prop:"ID",width:"120"},null,8,["label"]),v(o,{align:"left",label:m(k)("devres.macId"),prop:"macId",width:"120"},null,8,["label"]),v(o,{align:"left",label:m(k)("devres.groupId"),prop:"groupId",width:"120"},null,8,["label"]),v(o,{align:"left",label:m(k)("devres.platform"),prop:"platform",width:"120"},null,8,["label"]),v(o,{align:"left",label:m(k)("devres.status"),prop:"status",width:"220"},{default:g((e=>[p("span",null,b(1==e.row.status?m(k)("devres.enabled"):m(k)("devres.disabled")),1)])),_:1},8,["label"]),v(o,{align:"left",label:m(k)("general.operations")},{default:g((e=>[1==e.row.status?(d(),h(r,{key:0,type:"warning",size:"small",class:"table-button",onClick:a=>L(e.row,0)},{default:g((()=>[f(b(m(k)("devres.stop")),1)])),_:2},1032,["onClick"])):y("",!0),0==e.row.status?(d(),h(r,{key:1,type:"success",size:"small",class:"table-button",onClick:a=>L(e.row,1)},{default:g((()=>[f(b(m(k)("devres.start")),1)])),_:2},1032,["onClick"])):y("",!0)])),_:1},8,["label"])])),_:1},8,["data","onSelectionChange"]),p("div",j,[v(u,{layout:"total, sizes, prev, pager, next, jumper","current-page":z.value,"page-size":S.value,"page-sizes":[10,30,50,100],total:D.value,onCurrentChange:A,onSizeChange:U},null,8,["current-page","page-size","total"])])])])}}});export{z as default};
