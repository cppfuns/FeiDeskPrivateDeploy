/*! 
 Build based on gin-vue-admin 
 Time : 1665455962000 */
!function(){function e(e,t,n,r,a,u,i){try{var o=e[u](i),c=o.value}catch(s){return void n(s)}o.done?t(c):Promise.resolve(c).then(r,a)}function t(t){return function(){var n=this,r=arguments;return new Promise((function(a,u){var i=t.apply(n,r);function o(t){e(i,a,u,o,c,"next",t)}function c(t){e(i,a,u,o,c,"throw",t)}o(void 0)}))}}System.register(["./gin-vue-admin-api-legacy.16654559620002.js","../gva/gin-vue-admin-index-legacy.1665455962000.js"],(function(e){"use strict";var n,r,a,u,i,o,c,s,p,l,d,f,h,v;return{setters:[function(e){n=e.e},function(e){r=e.W,a=e.u,u=e.r,i=e.c,o=e.o,c=e.d,s=e.e,p=e.f,l=e.h,d=e.m,f=e.t,h=e.g,v=e.p}],execute:function(){var m={class:"clearflex"},y={name:"Apis"};e("default",Object.assign(y,{props:{row:{default:function(){return{}},type:Object}},setup:function(e,y){var g=y.expose,b=e,x=a().t,k=u({children:"children",label:"description"}),w=u([]),I=u([]),j=u(""),O=function(){var e=t(regeneratorRuntime.mark((function e(){var t,a,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:return t=e.sent,a=t.data.apis,w.value=R(a),e.next=7,i={authorityId:b.row.authorityId},r({url:"/casbin/getPolicyPathByAuthorityId",method:"post",data:i});case 7:u=e.sent,j.value=b.row.authorityId,I.value=[],u.data.paths&&u.data.paths.forEach((function(e){I.value.push("p:"+e.path+"m:"+e.method)}));case 11:case"end":return e.stop()}var i}),e)})));return function(){return e.apply(this,arguments)}}();O();var P=u(!1),C=function(){P.value=!0},R=function(e){var t={};e&&e.forEach((function(e){e.onlyId="p:"+e.path+"m:"+e.method,Object.prototype.hasOwnProperty.call(t,e.apiGroup)?t[e.apiGroup].push(e):Object.assign(t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e.apiGroup,[e]))}));var n=[];for(var r in t){var a={ID:r,description:r+x("api.group"),children:t[r]};n.push(a)}return n},A=u(null),E=function(){var e=t(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=A.value.getCheckedNodes(!0),n=[],t&&t.forEach((function(e){var t={path:e.path,method:e.method};n.push(t)})),e.next=5,a={authorityId:j.value,casbinInfos:n},r({url:"/casbin/updateCasbin",method:"post",data:a});case 5:0===e.sent.code&&v({type:"success",message:x("api.setupSuccess")});case 7:case"end":return e.stop()}var a}),e)})));return function(){return e.apply(this,arguments)}}();return g({needConfirm:P,enterAndNext:function(){E()}}),function(e,t){var n=i("el-button"),r=i("el-tree");return o(),c("div",null,[s("div",m,[p(n,{class:"fl-right",size:"mini",type:"primary",onClick:E},{default:l((function(){return[d(f(h(x)("general.confirm")),1)]})),_:1})]),p(r,{ref_key:"apiTree",ref:A,data:w.value,"default-checked-keys":I.value,props:k.value,"default-expand-all":"","highlight-current":"","node-key":"onlyId","show-checkbox":"",onCheck:C},null,8,["data","default-checked-keys","props"])])}}}))}}}))}();
