import{Kb as S,_ as I,aa as U}from"./chunk-FAEB4IGB.js";import{Be as D,Db as h,Fa as u,Jb as i,Oe as M,Xb as s,Yb as y,Yd as T,Zb as c,ec as C,gc as z,lb as r,le as p,md as _,qb as f,ud as v,ue as N,xb as g}from"./chunk-MBZ3SOVO.js";function E(o,n){if(o&1&&c(0,"i",4),o&2){let e=z();i("title",e.$t("_upload"))}}function R(o,n){o&1&&c(0,"i",5),o&2&&i("nzType","loading")}var $=class o{constructor(n){this.message=n}onChange=new u;$t=p;uploading=!1;id=`f${Date.now()}${parseInt(Math.random()*1e6)}`;onChangeFile(n){if(this.uploading)return;let{files:e}=n.target;if(e.length<=0)return;let t=e[0];if(!t.type.startsWith("image"))return this.message.error(p("_notUpload"));this.onUpload(t).finally(()=>{n.target.value=""})}onUpload(n){let e=this;return new Promise((t,l)=>{let a=new FileReader;a.readAsDataURL(n),a.onerror=l,a.onload=function(){e.uploading=!0;let b=this.result.split(",")[1],w=n.name.replace(/\s/gi,""),m=`${Date.now()}_${w}`;D({branch:N().branch,message:"create image",content:b,isEncode:!1,path:m}).then(F=>{let d={cdn:T?F?.data?.fullImagePath:M(m)};e.onChange.emit(d),e.message.success(p("_uploadSuccess")),t(d)}).catch(l).finally(()=>{e.uploading=!1})}})}static \u0275fac=function(e){return new(e||o)(f(S))};static \u0275cmp=g({type:o,selectors:[["app-upload"]],outputs:{onChange:"onChange"},decls:4,vars:4,consts:[[3,"id"],["nz-icon","","nzType","upload","nzTheme","outline","class","cursor-pointer",3,"title",4,"ngIf"],["nz-icon","",3,"nzType",4,"ngIf"],["type","file","accept","image/*",1,"!hidden",3,"change","name"],["nz-icon","","nzType","upload","nzTheme","outline",1,"cursor-pointer",3,"title"],["nz-icon","",3,"nzType"]],template:function(e,t){e&1&&(s(0,"label",0),h(1,E,1,1,"i",1)(2,R,1,1,"i",2),s(3,"input",3),C("change",function(a){return t.onChangeFile(a)}),y()()),e&2&&(i("id",t.id),r(),i("ngIf",!t.uploading),r(),i("ngIf",t.uploading),r(),i("name",t.id))},dependencies:[v,_,U,I],encapsulation:2})};export{$ as a};
