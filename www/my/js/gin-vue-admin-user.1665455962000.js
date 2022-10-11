/*! 
 Build based on gin-vue-admin 
 Time : 1665455962000 */
var e=(e,a,l)=>new Promise(((t,i)=>{var r=e=>{try{o(l.next(e))}catch(a){i(a)}},s=e=>{try{o(l.throw(e))}catch(a){i(a)}},o=e=>e.done?t(e.value):Promise.resolve(e.value).then(r,s);o((l=l.apply(e,a)).next())}));import{u as a,r as l,O as t,c as i,o as r,d as s,f as o,g as u,e as n,h as d,m as c,t as m,k as p,a8 as g,X as v,a9 as h,p as y,aa as f,ab as b,n as k,G as w,ac as I}from"../gva/gin-vue-admin-index.1665455962000.js";import{g as N}from"./gin-vue-admin-authority.16654559620002.js";import{C as _}from"./gin-vue-admin-index.16654559620009.js";import{_ as V}from"./gin-vue-admin-index.166545596200011.js";import{W as C}from"./gin-vue-admin-warningBar.1665455962000.js";const x={class:"gva-table-box"},U={class:"gva-btn-list"},z={key:0,class:"nickName"},S={key:1,class:"nickName"},D={style:{"text-align":"right","margin-top":"8px"}},F={class:"gva-pagination"},j=["src"],P={key:1,class:"header-img-box"},R={class:"dialog-footer"},q={name:"User"},T=Object.assign(q,{setup(q){const{t:T}=a(),B=l("/api"),E=(e,a)=>{e&&e.forEach((e=>{if(e.children&&e.children.length){const l={authorityId:e.authorityId,authorityName:e.authorityName,children:[]};E(e.children,l.children),a.push(l)}else{const l={authorityId:e.authorityId,authorityName:e.authorityName};a.push(l)}}))},L=l(1),O=l(0),A=l(10),G=l([]),W=e=>{A.value=e,H()},X=e=>{L.value=e,H()},H=()=>e(this,null,(function*(){const e=yield g({page:L.value,pageSize:A.value});0===e.code&&(G.value=e.data.list,O.value=e.data.total,L.value=e.data.page,A.value=e.data.pageSize)}));t(G,(()=>{K()}));(()=>{e(this,null,(function*(){H();const e=yield N({page:1,pageSize:999});Z(e.data.list)}))})();const J=a=>{v.confirm(T("user.resetPasswordConfrim"),T("general.warning"),{confirmButtonText:T("general.confirm"),cancelButtonText:T("general.cancel"),type:"warning"}).then((()=>e(this,null,(function*(){const e=yield h({ID:a.ID});0===e.code?y({type:"success",message:e.msg}):y({type:"error",message:e.msg})}))))},K=()=>{G.value&&G.value.forEach((e=>{const a=e.authorities&&e.authorities.map((e=>e.authorityId));e.authorityIds=a}))},M=l(null),Q=()=>{M.value.open()},Y=l([]),Z=e=>{Y.value=[],E(e,Y.value)},$=l(""),ee=a=>e(this,null,(function*(){0===(yield f({nickName:a.nickName,ID:a.ID})).code&&y({type:"success",message:T("general.setupSuccess")}),$.value=l(""),a.editFlag=!1})),ae=a=>e(this,null,(function*(){0===(yield b({id:a.ID})).code&&(y.success(T("general.deleteSuccess")),yield H(),a.visible=!1)})),le=l({username:"",password:"",nickName:"",headerImg:"",authorityId:"",authorityIds:[]}),te=l({username:[{required:!0,message:T("user.userNameNote"),trigger:"blur"},{min:5,message:T("user.userNameLenNote"),trigger:"blur"}],password:[{required:!0,message:T("user.passwordNote"),trigger:"blur"},{min:6,message:T("user.passwordLenNote"),trigger:"blur"}],nickName:[{required:!0,message:T("user.nickNameNote"),trigger:"blur"}],authorityId:[{required:!0,message:T("user.userRoleNote"),trigger:"blur"}]}),ie=l(null),re=()=>e(this,null,(function*(){le.value.authorityId=le.value.authorityIds[0],ie.value.validate((a=>e(this,null,(function*(){if(a){0===(yield k(le.value)).code&&y({type:"success",message:T("user.userAddedNote")}),yield H(),oe()}}))))})),se=l(!1),oe=()=>{ie.value.resetFields(),le.value.headerImg="",le.value.authorityIds=[],se.value=!1},ue=()=>{se.value=!0},ne=(a,l)=>e(this,null,(function*(){if(l)return;yield w();0===(yield I({ID:a.ID,authorityIds:a.authorityIds})).code&&y({type:"success",message:T("user.roleSetNote")})}));return(e,a)=>{const l=i("el-button"),t=i("el-table-column"),g=i("edit"),v=i("el-icon"),h=i("el-input"),f=i("check"),b=i("close"),k=i("el-cascader"),w=i("el-popover"),I=i("el-table"),N=i("el-pagination"),q=i("el-form-item"),E=i("el-form"),H=i("el-dialog");return r(),s("div",null,[o(C,{title:u(T)("authority.authorityNote")},null,8,["title"]),n("div",x,[n("div",U,[o(l,{size:"mini",type:"primary",icon:"plus",onClick:ue},{default:d((()=>[c(m(u(T)("user.addUser")),1)])),_:1})]),o(I,{data:G.value},{default:d((()=>[o(t,{align:"left",label:u(T)("user.avatar"),"min-width":"50"},{default:d((e=>[o(_,{style:{"margin-top":"8px"},"pic-src":e.row.headerImg},null,8,["pic-src"])])),_:1},8,["label"]),o(t,{align:"left",label:"UUID","min-width":"250",prop:"uuid"}),o(t,{align:"left",label:u(T)("user.userName"),"min-width":"150",prop:"userName"},null,8,["label"]),o(t,{align:"left",label:u(T)("user.nickName"),"min-width":"100",prop:"nickName"},{default:d((e=>[e.row.editFlag?p("",!0):(r(),s("p",z,[c(m(e.row.nickName)+" ",1),o(v,{class:"pointer",color:"#66b1ff",onClick:a=>{return l=e.row,void(G.value.some((e=>e.editFlag))?y(T("user.anotherUserEdit")):($.value=l.nickName,l.editFlag=!0));var l}},{default:d((()=>[o(g)])),_:2},1032,["onClick"])])),e.row.editFlag?(r(),s("p",S,[o(h,{modelValue:e.row.nickName,"onUpdate:modelValue":a=>e.row.nickName=a},null,8,["modelValue","onUpdate:modelValue"]),o(v,{class:"pointer",color:"#67c23a",onClick:a=>ee(e.row)},{default:d((()=>[o(f)])),_:2},1032,["onClick"]),o(v,{class:"pointer",color:"#f23c3c",onClick:a=>{return(l=e.row).nickName=$.value,$.value="",void(l.editFlag=!1);var l}},{default:d((()=>[o(b)])),_:2},1032,["onClick"])])):p("",!0)])),_:1},8,["label"]),o(t,{align:"left",label:u(T)("user.userRole"),"min-width":"150"},{default:d((e=>[o(k,{modelValue:e.row.authorityIds,"onUpdate:modelValue":a=>e.row.authorityIds=a,options:Y.value,"show-all-levels":!1,"collapse-tags":"",props:{multiple:!0,checkStrictly:!0,label:"authorityName",value:"authorityId",disabled:"disabled",emitPath:!1},clearable:!1,onVisibleChange:a=>{ne(e.row,a)},onRemoveTag:()=>{ne(e.row,!1)}},null,8,["modelValue","onUpdate:modelValue","options","onVisibleChange","onRemoveTag"])])),_:1},8,["label"]),o(t,{align:"left",label:u(T)("general.operations"),"min-width":"150"},{default:d((e=>[o(w,{visible:e.row.visible,"onUpdate:visible":a=>e.row.visible=a,placement:"top",width:"160"},{reference:d((()=>[o(l,{type:"text",icon:"delete",size:"mini"},{default:d((()=>[c(m(u(T)("general.delete")),1)])),_:1})])),default:d((()=>[n("p",null,m(u(T)("user.deleteUserConfrim")),1),n("div",D,[o(l,{size:"mini",type:"text",onClick:a=>e.row.visible=!1},{default:d((()=>[c(">"+m(u(T)("general.cancel")),1)])),_:2},1032,["onClick"]),o(l,{type:"primary",size:"mini",onClick:a=>ae(e.row)},{default:d((()=>[c(m(u(T)("general.confirm")),1)])),_:2},1032,["onClick"])])])),_:2},1032,["visible","onUpdate:visible"]),o(l,{type:"text",icon:"magic-stick",size:"mini",onClick:a=>J(e.row)},{default:d((()=>[c(m(u(T)("user.resetPassword")),1)])),_:2},1032,["onClick"])])),_:1},8,["label"])])),_:1},8,["data"]),n("div",F,[o(N,{"current-page":L.value,"page-size":A.value,"page-sizes":[10,30,50,100],total:O.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:X,onSizeChange:W},null,8,["current-page","page-size","total"])])]),o(H,{modelValue:se.value,"onUpdate:modelValue":a[4]||(a[4]=e=>se.value=e),"custom-class":"user-dialog",title:u(T)("user.addUser")},{footer:d((()=>[n("div",R,[o(l,{size:"small",onClick:oe},{default:d((()=>[c(m(u(T)("general.close")),1)])),_:1}),o(l,{size:"small",type:"primary",onClick:re},{default:d((()=>[c(m(u(T)("general.confirm")),1)])),_:1})])])),default:d((()=>[o(E,{ref_key:"userForm",ref:ie,rules:te.value,model:le.value,"label-width":"90px"},{default:d((()=>[o(q,{label:u(T)("user.userName"),prop:"username"},{default:d((()=>[o(h,{modelValue:le.value.username,"onUpdate:modelValue":a[0]||(a[0]=e=>le.value.username=e)},null,8,["modelValue"])])),_:1},8,["label"]),o(q,{label:u(T)("user.password"),prop:"password"},{default:d((()=>[o(h,{modelValue:le.value.password,"onUpdate:modelValue":a[1]||(a[1]=e=>le.value.password=e)},null,8,["modelValue"])])),_:1},8,["label"]),o(q,{label:u(T)("user.nickName"),prop:"nickName"},{default:d((()=>[o(h,{modelValue:le.value.nickName,"onUpdate:modelValue":a[2]||(a[2]=e=>le.value.nickName=e)},null,8,["modelValue"])])),_:1},8,["label"]),o(q,{label:u(T)("user.userRole"),prop:"authorityId"},{default:d((()=>[o(k,{modelValue:le.value.authorityIds,"onUpdate:modelValue":a[3]||(a[3]=e=>le.value.authorityIds=e),style:{width:"100%"},options:Y.value,"show-all-levels":!1,props:{multiple:!0,checkStrictly:!0,label:"authorityName",value:"authorityId",disabled:"disabled",emitPath:!1},clearable:!1},null,8,["modelValue","options"])])),_:1},8,["label"]),o(q,{label:u(T)("user.avatar"),"label-width":"80px"},{default:d((()=>[n("div",{style:{display:"inline-block"},onClick:Q},[le.value.headerImg?(r(),s("img",{key:0,class:"header-img-box",src:le.value.headerImg&&"http"!==le.value.headerImg.slice(0,4)?B.value+le.value.headerImg:le.value.headerImg},null,8,j)):(r(),s("div",P,m(u(T)("user.mediaLibrary")),1))])])),_:1},8,["label"])])),_:1},8,["rules","model"])])),_:1},8,["modelValue","title"]),o(V,{ref_key:"chooseImg",ref:M,target:le.value,"target-key":"headerImg"},null,8,["target"])])}}});export{T as default};
