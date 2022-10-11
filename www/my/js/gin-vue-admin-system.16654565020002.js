/*! 
 Build based on gin-vue-admin 
 Time : 1665456502000 */
var e=(e,l,a)=>new Promise(((u,o)=>{var t=e=>{try{d(a.next(e))}catch(l){o(l)}},s=e=>{try{d(a.throw(e))}catch(l){o(l)}},d=e=>e.done?u(e.value):Promise.resolve(e.value).then(t,s);d((a=a.apply(e,l)).next())}));import{a as l,s as a}from"./gin-vue-admin-system.1665456502000.js";import{W as u,u as o,b as t,r as s,c as d,o as m,d as n,f as i,h as v,g as V,ad as y,m as p,t as b,M as r,k as c,e as f,L as w,p as _,j as g}from"../gva/gin-vue-admin-index.1665456502000.js";const U={class:"system"},h=f("h2",null,"qiniu上传配置",-1),T=f("h2",null,"腾讯云COS上传配置",-1),k=f("h2",null,"阿里云OSS上传配置",-1),q=f("h2",null,"华为云Obs上传配置",-1),x={class:"gva-btn-list"},C={name:"Config"},z=Object.assign(C,{setup(C){const{t:z}=o(),P=t([]),S=s({system:{"iplimit-count":0,"iplimit-time":0},jwt:{},casbin:{},mysql:{},pgsql:{},excel:{},autocode:{},redis:{},qiniu:{},"tencent-cos":{},"aliyun-oss":{},"hua-wei-obs":{},captcha:{},zap:{},local:{},email:{},timer:{detail:{}},language:{}}),M=()=>e(this,null,(function*(){const e=yield l();0===e.code&&(S.value=e.data.config)}));M();const j=()=>{},L=()=>e(this,null,(function*(){0===(yield a({config:S.value})).code&&(_({type:"success",message:z("view.systemTools.system.configSetupSuccess")}),yield M())})),K=()=>e(this,null,(function*(){var e;0===(yield u({url:"/email/emailTest",method:"post",data:e})).code?(_({type:"success",message:z("view.systemTools.system.emailSentSuccess")}),yield M()):_({type:"error",message:z("view.systemTools.system.emailSentError")})}));return(e,l)=>{const a=d("el-input"),u=d("el-form-item"),o=d("el-option"),t=d("el-select"),s=d("el-checkbox"),_=d("el-input-number"),C=d("el-collapse-item"),M=d("el-button"),D=d("el-collapse"),R=d("el-form");return m(),n("div",U,[i(R,{ref:"form",model:S.value,"label-width":"240px"},{default:v((()=>[i(D,{modelValue:V(P),"onUpdate:modelValue":l[89]||(l[89]=e=>y(P)?P.value=e:P=e)},{default:v((()=>[i(C,{title:V(z)("view.systemTools.system.systemConfig"),name:"1"},{default:v((()=>[i(u,{label:V(z)("view.systemTools.system.envValue")},{default:v((()=>[i(a,{modelValue:S.value.system.env,"onUpdate:modelValue":l[0]||(l[0]=e=>S.value.system.env=e)},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.portValue")},{default:v((()=>[i(a,{modelValue:S.value.system.addr,"onUpdate:modelValue":l[1]||(l[1]=e=>S.value.system.addr=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.dbType")},{default:v((()=>[i(t,{modelValue:S.value.system["db-type"],"onUpdate:modelValue":l[2]||(l[2]=e=>S.value.system["db-type"]=e),style:{width:"100%"}},{default:v((()=>[i(o,{value:"mysql"}),i(o,{value:"pgsql"})])),_:1},8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.ossType")},{default:v((()=>[i(t,{modelValue:S.value.system["oss-type"],"onUpdate:modelValue":l[3]||(l[3]=e=>S.value.system["oss-type"]=e),style:{width:"100%"}},{default:v((()=>[i(o,{value:"local"}),i(o,{value:"qiniu"}),i(o,{value:"tencent-cos"}),i(o,{value:"aliyun-oss"}),i(o,{value:"huawei-obs"})])),_:1},8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.blockMultiSignOn")},{default:v((()=>[i(s,{modelValue:S.value.system["use-multipoint"],"onUpdate:modelValue":l[4]||(l[4]=e=>S.value.system["use-multipoint"]=e)},{default:v((()=>[p(b(V(z)("general.enable")),1)])),_:1},8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.enableRedis")},{default:v((()=>[i(s,{modelValue:S.value.system["use-redis"],"onUpdate:modelValue":l[5]||(l[5]=e=>S.value.system["use-redis"]=e)},{default:v((()=>[p(b(V(z)("general.enable")),1)])),_:1},8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.ipLimitCount")},{default:v((()=>[i(_,{modelValue:S.value.system["iplimit-count"],"onUpdate:modelValue":l[6]||(l[6]=e=>S.value.system["iplimit-count"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.ipLimitTime")},{default:v((()=>[i(_,{modelValue:S.value.system["iplimit-time"],"onUpdate:modelValue":l[7]||(l[7]=e=>S.value.system["iplimit-time"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1},8,["label"])])),_:1},8,["title"]),i(C,{title:V(z)("view.systemTools.system.jwtSignature"),name:"2"},{default:v((()=>[i(u,{label:V(z)("view.systemTools.system.jwtSignature")},{default:v((()=>[i(a,{modelValue:S.value.jwt["signing-key"],"onUpdate:modelValue":l[8]||(l[8]=e=>S.value.jwt["signing-key"]=e)},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.expirartionSec")},{default:v((()=>[i(a,{modelValue:S.value.jwt["expires-time"],"onUpdate:modelValue":l[9]||(l[9]=e=>S.value.jwt["expires-time"]=e)},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.bufferPeriodSec")},{default:v((()=>[i(a,{modelValue:S.value.jwt["buffer-time"],"onUpdate:modelValue":l[10]||(l[10]=e=>S.value.jwt["buffer-time"]=e)},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.issuer")},{default:v((()=>[i(a,{modelValue:S.value.jwt.issuer,"onUpdate:modelValue":l[11]||(l[11]=e=>S.value.jwt.issuer=e)},null,8,["modelValue"])])),_:1},8,["label"])])),_:1},8,["title"]),i(C,{title:V(z)("view.systemTools.system.zapLogConfig"),name:"3"},{default:v((()=>[i(u,{label:V(z)("view.systemTools.system.level")},{default:v((()=>[i(a,{modelValue:S.value.zap.level,"onUpdate:modelValue":l[12]||(l[12]=e=>S.value.zap.level=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.output")},{default:v((()=>[i(a,{modelValue:S.value.zap.format,"onUpdate:modelValue":l[13]||(l[13]=e=>S.value.zap.format=e)},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.logPrefix")},{default:v((()=>[i(a,{modelValue:S.value.zap.prefix,"onUpdate:modelValue":l[14]||(l[14]=e=>S.value.zap.prefix=e)},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.logFolder")},{default:v((()=>[i(a,{modelValue:S.value.zap.director,"onUpdate:modelValue":l[15]||(l[15]=e=>S.value.zap.director=e)},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.encodeLevel")},{default:v((()=>[i(a,{modelValue:S.value.zap["encode-level"],"onUpdate:modelValue":l[16]||(l[16]=e=>S.value.zap["encode-level"]=e)},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.stackName")},{default:v((()=>[i(a,{modelValue:S.value.zap["stacktrace-key"],"onUpdate:modelValue":l[17]||(l[17]=e=>S.value.zap["stacktrace-key"]=e)},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.showLine")},{default:v((()=>[i(s,{modelValue:S.value.zap["show-line"],"onUpdate:modelValue":l[18]||(l[18]=e=>S.value.zap["show-line"]=e)},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.outputConsole")},{default:v((()=>[i(s,{modelValue:S.value.zap["log-in-console"],"onUpdate:modelValue":l[19]||(l[19]=e=>S.value.zap["log-in-console"]=e)},null,8,["modelValue"])])),_:1},8,["label"])])),_:1},8,["title"]),i(C,{title:V(z)("view.systemTools.system.redisAdminDBConfig"),name:"4"},{default:v((()=>[i(u,{label:"db"},{default:v((()=>[i(a,{modelValue:S.value.redis.db,"onUpdate:modelValue":l[20]||(l[20]=e=>S.value.redis.db=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"addr"},{default:v((()=>[i(a,{modelValue:S.value.redis.addr,"onUpdate:modelValue":l[21]||(l[21]=e=>S.value.redis.addr=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"password"},{default:v((()=>[i(a,{modelValue:S.value.redis.password,"onUpdate:modelValue":l[22]||(l[22]=e=>S.value.redis.password=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["title"]),i(C,{title:V(z)("view.systemTools.system.emailConfig"),name:"5"},{default:v((()=>[i(u,{label:V(z)("view.systemTools.system.recipientEmail")},{default:v((()=>[i(a,{modelValue:S.value.email.to,"onUpdate:modelValue":l[23]||(l[23]=e=>S.value.email.to=e),placeholder:V(z)("view.systemTools.system.emailNote")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.port")},{default:v((()=>[i(a,{modelValue:S.value.email.port,"onUpdate:modelValue":l[24]||(l[24]=e=>S.value.email.port=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.emailSender")},{default:v((()=>[i(a,{modelValue:S.value.email.from,"onUpdate:modelValue":l[25]||(l[25]=e=>S.value.email.from=e)},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:"Host"},{default:v((()=>[i(a,{modelValue:S.value.email.host,"onUpdate:modelValue":l[26]||(l[26]=e=>S.value.email.host=e)},null,8,["modelValue"])])),_:1}),i(u,{label:V(z)("view.systemTools.system.enableSSL")},{default:v((()=>[i(s,{modelValue:S.value.email["is-ssl"],"onUpdate:modelValue":l[27]||(l[27]=e=>S.value.email["is-ssl"]=e)},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:"Secret"},{default:v((()=>[i(a,{modelValue:S.value.email.secret,"onUpdate:modelValue":l[28]||(l[28]=e=>S.value.email.secret=e)},null,8,["modelValue"])])),_:1}),i(u,{label:V(z)("view.systemTools.system.testEmail")},{default:v((()=>[i(M,{onClick:K},{default:v((()=>[p(b(V(z)("view.systemTools.system.testEmail")),1)])),_:1})])),_:1},8,["label"])])),_:1},8,["title"]),i(C,{title:V(z)("view.systemTools.system.casbinConfig"),name:"6"},{default:v((()=>[i(u,{label:V(z)("view.systemTools.system.modelAddress")},{default:v((()=>[i(a,{modelValue:S.value.casbin["model-path"],"onUpdate:modelValue":l[29]||(l[29]=e=>S.value.casbin["model-path"]=e)},null,8,["modelValue"])])),_:1},8,["label"])])),_:1},8,["title"]),i(C,{title:V(z)("view.systemTools.system.verCodeConfig"),name:"7"},{default:v((()=>[i(u,{label:"keyLong"},{default:v((()=>[i(a,{modelValue:S.value.captcha["key-long"],"onUpdate:modelValue":l[30]||(l[30]=e=>S.value.captcha["key-long"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),i(u,{label:"imgWidth"},{default:v((()=>[i(a,{modelValue:S.value.captcha["img-width"],"onUpdate:modelValue":l[31]||(l[31]=e=>S.value.captcha["img-width"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),i(u,{label:"imgHeight"},{default:v((()=>[i(a,{modelValue:S.value.captcha["img-height"],"onUpdate:modelValue":l[32]||(l[32]=e=>S.value.captcha["img-height"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1})])),_:1},8,["title"]),i(C,{title:V(z)("view.systemTools.system.dbConfig"),name:"9"},{default:v((()=>["mysql"===S.value.system["db-type"]?(m(),n(r,{key:0},[i(u,{label:"username"},{default:v((()=>[i(a,{modelValue:S.value.mysql.username,"onUpdate:modelValue":l[33]||(l[33]=e=>S.value.mysql.username=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"password"},{default:v((()=>[i(a,{modelValue:S.value.mysql.password,"onUpdate:modelValue":l[34]||(l[34]=e=>S.value.mysql.password=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"path"},{default:v((()=>[i(a,{modelValue:S.value.mysql.path,"onUpdate:modelValue":l[35]||(l[35]=e=>S.value.mysql.path=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"dbname"},{default:v((()=>[i(a,{modelValue:S.value.mysql["db-name"],"onUpdate:modelValue":l[36]||(l[36]=e=>S.value.mysql["db-name"]=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"maxIdleConns"},{default:v((()=>[i(a,{modelValue:S.value.mysql["max-idle-conns"],"onUpdate:modelValue":l[37]||(l[37]=e=>S.value.mysql["max-idle-conns"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),i(u,{label:"maxOpenConns"},{default:v((()=>[i(a,{modelValue:S.value.mysql["max-open-conns"],"onUpdate:modelValue":l[38]||(l[38]=e=>S.value.mysql["max-open-conns"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),i(u,{label:"logMode"},{default:v((()=>[i(s,{modelValue:S.value.mysql["log-mode"],"onUpdate:modelValue":l[39]||(l[39]=e=>S.value.mysql["log-mode"]=e)},null,8,["modelValue"])])),_:1})],64)):c("",!0),"pgsql"===S.value.system.dbType?(m(),n(r,{key:1},[i(u,{label:"username"},{default:v((()=>[i(a,{modelValue:S.value.pgsql.username,"onUpdate:modelValue":l[40]||(l[40]=e=>S.value.pgsql.username=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"password"},{default:v((()=>[i(a,{modelValue:S.value.pgsql.password,"onUpdate:modelValue":l[41]||(l[41]=e=>S.value.pgsql.password=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"path"},{default:v((()=>[i(a,{modelValue:S.value.pgsql.path,"onUpdate:modelValue":l[42]||(l[42]=e=>S.value.pgsql.path=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"dbname"},{default:v((()=>[i(a,{modelValue:S.value.pgsql.dbname,"onUpdate:modelValue":l[43]||(l[43]=e=>S.value.pgsql.dbname=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"maxIdleConns"},{default:v((()=>[i(a,{modelValue:S.value.pgsql["max-idle-conns"],"onUpdate:modelValue":l[44]||(l[44]=e=>S.value.pgsql["max-idle-conns"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),i(u,{label:"maxOpenConns"},{default:v((()=>[i(a,{modelValue:S.value.pgsql["max-open-conns"],"onUpdate:modelValue":l[45]||(l[45]=e=>S.value.pgsql["max-open-conns"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),i(u,{label:"logMode"},{default:v((()=>[i(s,{modelValue:S.value.pgsql["log-mode"],"onUpdate:modelValue":l[46]||(l[46]=e=>S.value.pgsql["log-mode"]=e)},null,8,["modelValue"])])),_:1})],64)):c("",!0)])),_:1},8,["title"]),i(C,{title:V(z)("view.systemTools.system.ossConfig"),name:"10"},{default:v((()=>["local"===S.value.system["oss-type"]?(m(),n(r,{key:0},[f("h2",null,b(V(z)("view.systemTools.system.localFileConfig")),1),i(u,{label:V(z)("view.systemTools.system.localFilePath")},{default:v((()=>[i(a,{modelValue:S.value.local.path,"onUpdate:modelValue":l[47]||(l[47]=e=>S.value.local.path=e)},null,8,["modelValue"])])),_:1},8,["label"])],64)):c("",!0),"qiniu"===S.value.system["oss-type"]?(m(),n(r,{key:1},[h,i(u,{label:"存储区域"},{default:v((()=>[i(a,{modelValue:S.value.qiniu.zone,"onUpdate:modelValue":l[48]||(l[48]=e=>S.value.qiniu.zone=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"空间名称"},{default:v((()=>[i(a,{modelValue:S.value.qiniu.bucket,"onUpdate:modelValue":l[49]||(l[49]=e=>S.value.qiniu.bucket=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"CDN加速域名"},{default:v((()=>[i(a,{modelValue:S.value.qiniu["img-path"],"onUpdate:modelValue":l[50]||(l[50]=e=>S.value.qiniu["img-path"]=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"是否使用https"},{default:v((()=>[i(s,{modelValue:S.value.qiniu["use-https"],"onUpdate:modelValue":l[51]||(l[51]=e=>S.value.qiniu["use-https"]=e)},{default:v((()=>[p(b(V(z)("general.enable")),1)])),_:1},8,["modelValue"])])),_:1}),i(u,{label:"accessKey"},{default:v((()=>[i(a,{modelValue:S.value.qiniu["access-key"],"onUpdate:modelValue":l[52]||(l[52]=e=>S.value.qiniu["access-key"]=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"secretKey"},{default:v((()=>[i(a,{modelValue:S.value.qiniu["secret-key"],"onUpdate:modelValue":l[53]||(l[53]=e=>S.value.qiniu["secret-key"]=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"上传是否使用CDN上传加速"},{default:v((()=>[i(s,{modelValue:S.value.qiniu["use-cdn-domains"],"onUpdate:modelValue":l[54]||(l[54]=e=>S.value.qiniu["use-cdn-domains"]=e)},{default:v((()=>[p(b(V(z)("general.enable")),1)])),_:1},8,["modelValue"])])),_:1})],64)):c("",!0),"tencent-cos"===S.value.system["oss-type"]?(m(),n(r,{key:2},[T,i(u,{label:"bucket"},{default:v((()=>[i(a,{modelValue:S.value["tencent-cos"].bucket,"onUpdate:modelValue":l[55]||(l[55]=e=>S.value["tencent-cos"].bucket=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"region"},{default:v((()=>[i(a,{modelValue:S.value["tencent-cos"].region,"onUpdate:modelValue":l[56]||(l[56]=e=>S.value["tencent-cos"].region=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"secretID"},{default:v((()=>[i(a,{modelValue:S.value["tencent-cos"].secretID,"onUpdate:modelValue":l[57]||(l[57]=e=>S.value["tencent-cos"].secretID=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"secretKey"},{default:v((()=>[i(a,{modelValue:S.value["tencent-cos"].secretKey,"onUpdate:modelValue":l[58]||(l[58]=e=>S.value["tencent-cos"].secretKey=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"pathPrefix"},{default:v((()=>[i(a,{modelValue:S.value["tencent-cos"].pathPrefix,"onUpdate:modelValue":l[59]||(l[59]=e=>S.value["tencent-cos"].pathPrefix=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"baseURL"},{default:v((()=>[i(a,{modelValue:S.value["tencent-cos"].baseURL,"onUpdate:modelValue":l[60]||(l[60]=e=>S.value["tencent-cos"].baseURL=e)},null,8,["modelValue"])])),_:1})],64)):c("",!0),"aliyun-oss"===S.value.system["oss-type"]?(m(),n(r,{key:3},[k,i(u,{label:"endpoint"},{default:v((()=>[i(a,{modelValue:S.value["aliyun-oss"].endpoint,"onUpdate:modelValue":l[61]||(l[61]=e=>S.value["aliyun-oss"].endpoint=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"accessKeyId"},{default:v((()=>[i(a,{modelValue:S.value["aliyun-oss"]["access-key-id"],"onUpdate:modelValue":l[62]||(l[62]=e=>S.value["aliyun-oss"]["access-key-id"]=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"accessKeySecret"},{default:v((()=>[i(a,{modelValue:S.value["aliyun-oss"]["access-key-secret"],"onUpdate:modelValue":l[63]||(l[63]=e=>S.value["aliyun-oss"]["access-key-secret"]=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"bucketName"},{default:v((()=>[i(a,{modelValue:S.value["aliyun-oss"]["bucket-name"],"onUpdate:modelValue":l[64]||(l[64]=e=>S.value["aliyun-oss"]["bucket-name"]=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"bucketUrl"},{default:v((()=>[i(a,{modelValue:S.value["aliyun-oss"]["bucket-url"],"onUpdate:modelValue":l[65]||(l[65]=e=>S.value["aliyun-oss"]["bucket-url"]=e)},null,8,["modelValue"])])),_:1})],64)):c("",!0),"huawei-obs"===S.value.system["oss-type"]?(m(),n(r,{key:4},[q,i(u,{label:"path"},{default:v((()=>[i(a,{modelValue:S.value["hua-wei-obs"].path,"onUpdate:modelValue":l[66]||(l[66]=e=>S.value["hua-wei-obs"].path=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"bucket"},{default:v((()=>[i(a,{modelValue:S.value["hua-wei-obs"].bucket,"onUpdate:modelValue":l[67]||(l[67]=e=>S.value["hua-wei-obs"].bucket=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"endpoint"},{default:v((()=>[i(a,{modelValue:S.value["hua-wei-obs"].endpoint,"onUpdate:modelValue":l[68]||(l[68]=e=>S.value["hua-wei-obs"].endpoint=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"accessKey"},{default:v((()=>[i(a,{modelValue:S.value["hua-wei-obs"]["access-key"],"onUpdate:modelValue":l[69]||(l[69]=e=>S.value["hua-wei-obs"]["access-key"]=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"secretKey"},{default:v((()=>[i(a,{modelValue:S.value["hua-wei-obs"]["secret-key"],"onUpdate:modelValue":l[70]||(l[70]=e=>S.value["hua-wei-obs"]["secret-key"]=e)},null,8,["modelValue"])])),_:1})],64)):c("",!0)])),_:1},8,["title"]),i(C,{title:V(z)("view.systemTools.system.excelUploadConfig"),name:"11"},{default:v((()=>[i(u,{label:V(z)("view.systemTools.system.excelDir")},{default:v((()=>[i(a,{modelValue:S.value.excel.dir,"onUpdate:modelValue":l[71]||(l[71]=e=>S.value.excel.dir=e)},null,8,["modelValue"])])),_:1},8,["label"])])),_:1},8,["title"]),i(C,{title:V(z)("view.systemTools.system.autoCodeConfig"),name:"12"},{default:v((()=>[i(u,{label:V(z)("view.systemTools.system.autoRestart")},{default:v((()=>[i(s,{modelValue:S.value.autocode["transfer-restart"],"onUpdate:modelValue":l[72]||(l[72]=e=>S.value.autocode["transfer-restart"]=e)},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.projectRootPath")},{default:v((()=>[i(a,{modelValue:S.value.autocode.root,"onUpdate:modelValue":l[73]||(l[73]=e=>S.value.autocode.root=e),disabled:""},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.backendCodePath")},{default:v((()=>[i(a,{modelValue:S.value.autocode["transfer-restart"],"onUpdate:modelValue":l[74]||(l[74]=e=>S.value.autocode["transfer-restart"]=e)},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.backendApiPath")},{default:v((()=>[i(a,{modelValue:S.value.autocode["server-api"],"onUpdate:modelValue":l[75]||(l[75]=e=>S.value.autocode["server-api"]=e)},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.backendInitPath")},{default:v((()=>[i(a,{modelValue:S.value.autocode["server-initialize"],"onUpdate:modelValue":l[76]||(l[76]=e=>S.value.autocode["server-initialize"]=e)},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.backendModelPath")},{default:v((()=>[i(a,{modelValue:S.value.autocode["server-model"],"onUpdate:modelValue":l[77]||(l[77]=e=>S.value.autocode["server-model"]=e)},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.backendRequestPath")},{default:v((()=>[i(a,{modelValue:S.value.autocode["server-request"],"onUpdate:modelValue":l[78]||(l[78]=e=>S.value.autocode["server-request"]=e)},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.backendRouterPath")},{default:v((()=>[i(a,{modelValue:S.value.autocode["server-router"],"onUpdate:modelValue":l[79]||(l[79]=e=>S.value.autocode["server-router"]=e)},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.backendServicePath")},{default:v((()=>[i(a,{modelValue:S.value.autocode["server-service"],"onUpdate:modelValue":l[80]||(l[80]=e=>S.value.autocode["server-service"]=e)},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.frontendCodePath")},{default:v((()=>[i(a,{modelValue:S.value.autocode.web,"onUpdate:modelValue":l[81]||(l[81]=e=>S.value.autocode.web=e)},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.frontendApiPath")},{default:v((()=>[i(a,{modelValue:S.value.autocode["web-api"],"onUpdate:modelValue":l[82]||(l[82]=e=>S.value.autocode["web-api"]=e)},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.frontendFormPath")},{default:v((()=>[i(a,{modelValue:S.value.autocode["web-form"],"onUpdate:modelValue":l[83]||(l[83]=e=>S.value.autocode["web-form"]=e)},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.frontendTablePath")},{default:v((()=>[i(a,{modelValue:S.value.autocode["web-table"],"onUpdate:modelValue":l[84]||(l[84]=e=>S.value.autocode["web-table"]=e)},null,8,["modelValue"])])),_:1},8,["label"])])),_:1},8,["title"]),i(C,{title:V(z)("view.systemTools.system.timedTask"),name:"13"},{default:v((()=>[i(u,{label:V(z)("view.systemTools.system.startEnableDisable")},{default:v((()=>[i(t,{modelValue:S.value.timer["w-table"],"onUpdate:modelValue":l[85]||(l[85]=e=>S.value.timer["w-table"]=e)},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.cronExp")},{default:v((()=>[i(a,{modelValue:S.value.timer.spec,"onUpdate:modelValue":l[86]||(l[86]=e=>S.value.timer.spec=e)},null,8,["modelValue"])])),_:1},8,["label"]),(m(!0),n(r,null,w(S.value.timer.detail,((e,l)=>(m(),n(r,null,[(m(!0),n(r,null,w(e,((o,t)=>(m(),n("div",{key:t},[(m(),g(u,{key:l+t,label:t},{default:v((()=>[i(a,{modelValue:e[t],"onUpdate:modelValue":l=>e[t]=l},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"]))])))),128))],64)))),256))])),_:1},8,["title"]),i(C,{title:V(z)("view.systemTools.system.i18n"),name:"14"},{default:v((()=>[i(u,{label:V(z)("view.systemTools.system.langFilesPath")},{default:v((()=>[i(a,{modelValue:S.value.language.dir,"onUpdate:modelValue":l[87]||(l[87]=e=>S.value.language.dir=e)},null,8,["modelValue"])])),_:1},8,["label"]),i(u,{label:V(z)("view.systemTools.system.language")},{default:v((()=>[i(a,{modelValue:S.value.language.language,"onUpdate:modelValue":l[88]||(l[88]=e=>S.value.language.language=e)},null,8,["modelValue"])])),_:1},8,["label"])])),_:1},8,["title"])])),_:1},8,["modelValue"])])),_:1},8,["model"]),f("div",x,[i(M,{type:"primary",size:"small",onClick:L},{default:v((()=>[p(b(V(z)("view.systemTools.system.updateNow")),1)])),_:1}),i(M,{type:"primary",size:"small",onClick:j},{default:v((()=>[p(b(V(z)("view.systemTools.system.restartService")),1)])),_:1})])])}}});export{z as default};
