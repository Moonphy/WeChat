"use strict";function init(){var e="darwin"===process.platform,r=global.appConfig.isDev,i=require("fs"),n=require("path"),o=require("../utils/tools.js"),t=require("glob"),s=require("async"),c=require("../../config/dirConfig.js"),a=c.WeappVendor,p=require("mkdir-p"),u=require("./initAppConfig.js"),l=require("./initAppServiceJs.js"),f=(require("child_process").spawn,require("../../common/log/log.js")),d=require("babel-core"),j=require("autoprefixer"),v=require("postcss"),m=r?n.join(__dirname,"../vendor/"):a,q=(e?n.join(m,"wcc"):n.join(m,"wcc.exe"),["iOS >= 8"]),w=c.Weappdest,g=o.whiteFileExtName;_exports=function(e,r,o){var c=(e.projectpath,e.es6),a=e.minified,m=e.postcss,h=n.join(w,""+ +new Date);p.sync(h);var y={};y.appconfig=function(i){u(e,r,function(e,r){i(e,r)})},y.appservicejs=function(i){l(e,r,function(e,r){i(e,r)})},s.parallel(y,function(r,s){return r?void o(r.toString()):void t("./**",{nodir:!0,cwd:e.projectpath,ignore:["./node_modules/**/*"]},function(r,t){for(var s=0;s<t.length;s++){var u=t[s],l=n.extname(u);if(g[l]){var w=n.join(h,u),y=n.dirname(w);if(p.sync(y),c&&".js"===l){var x=i.readFileSync(n.join(e.projectpath,u),"utf8");try{var S=d.transform(x,{presets:["es2015"],babelrc:!1,minified:a,comments:!a});i.writeFileSync(w,S.code)}catch(b){return void o(b)}}else if(m&&".wxss"===l){var F=i.readFileSync(n.join(e.projectpath,u),"utf8");try{var _=v([j({browsers:q})]).process(F).css;i.writeFileSync(w,_,"utf8")}catch(b){return void o(b)}}else{var C=i.readFileSync(n.join(e.projectpath,u));i.writeFileSync(w,C)}}else f.info("build.js find file not in whiteList "+u)}o(null,h)})})}}var _exports;init(),module.exports=_exports;