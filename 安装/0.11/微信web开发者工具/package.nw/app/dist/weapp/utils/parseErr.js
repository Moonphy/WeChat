"use strict";function init(){function r(r,e,t){for(var n=r.split("\n"),s=e-3>0?e-3:0,a=t?[t]:[],p=s;p<e;p++){var o=p===e-1?">":" ";a.push(o+" "+(p+1)+" | "+n[p])}return a}var e=require("path"),t=require("fs"),n=require("../../config/config.js"),s=require("../../lib/jsonlint.js").parser,a=require("../../stores/projectStores.js");s.parseError=s.lexer.parseError=function(r,e){throw e};var p=n.WXML_ERROR,o=n.WXML_LOSE_ERROR;_exports={},_exports.parseWXMLRuntimeErr=function(s){var p=a.getCurrentProject(),o=s.message.replace(n.WXML_RUNTIME_ERROR,""),i=o.split(":"),c=parseInt(i[2]);if(c!==-1){for(var l=t.readFileSync(e.join(p.projectpath,i[0]),"utf8"),u=o.replace(i[0]+":"+i[1]+":"+i[2]+":"+i[3]+":","").replace(/`/g,'"'),f=r(l,c,u),g="",j=0;j<i[3]-1;j++)g+=" ";f.push("  "+i[2].replace(/\d/g," ")+" | "+g+"^");var d={file:i[0],reason:u,msg:f.join("\n")};return d}},_exports.parseJsFileErr=function(r){var n=r.file.replace(/\.js$/,""),s=r.project,a=JSON.parse(t.readFileSync(e.join(s.projectpath,"app.json"),"utf8")),p=a.pages,o=p.findIndex(function(r){return r==n});return{file:n,msg:" app.json.pages\n > | pages["+o+"] : "+p[o]}},_exports.parseJsonEntranceErr=function(r){var e=JSON.parse(r.data),t=e.pages;return{file:r.file,msg:"未找到入口页面\napp.json 中定义的 pages : "+JSON.stringify(t)}},_exports.parseJsonFileErr=function(r){return{file:r.file,msg:"未找到入口 app.json 文件，或者文件读取失败，请检查后重新编译。"}},_exports.parseJsonParseErr=function(e){var t=e.data,n=e.e;try{s.parse(t)}catch(n){for(var a="Expecting "+n.expected+", got "+n.token,p=r(t,n.line,a),o="",i=n.loc,c=0;c<i.last_column;c++)o+=" ";return p.push("  "+n.line.toString().replace(/\d/g," ")+" | "+o+"^"),e.msg=p.join("\n"),delete e.data,delete e.e,e}},_exports.parseWxmlErr=function(n,s){var a=(s||"").trim().split(":");try{if(a.length){for(var o=e.join(n.projectpath,a[0]),i=(t.readFileSync(o,"utf8").split("\n"),parseInt(a[1])-1),c=r(t.readFileSync(o,"utf8"),i,a[3]),l="",u=0;u<a[2]-1;u++)l+=" ";c.push("  "+a[1].replace(/\d/g," ")+" | "+l+"^");var f={file:a[0],msg:c};return""+p+encodeURIComponent(JSON.stringify(f))}}catch(g){throw g}},_exports.parseWxmlLoseErr=function(r,e){var t=e.match(/(\d.*?)\:/),n=t[1],s=JSON.parse(e.replace(t[0],"")),a="未找到 "+s.pages[n]+".wxml 文件 \n > "+n+" "+s.pages[n];return""+o+encodeURIComponent(a)},_exports.parseWxssErr=function(n){var s=n.msg,p=a.getCurrentProject();try{s=s.split("\n")[0];for(var o=s.match(/ERR:\s(.+)\((\d*):(\d*)\):\s*?(.+)/),i=parseInt(o[2]),c=o[4].replace(/`/g,'"'),l=o[1],u=t.readFileSync(e.join(p.projectpath,l),"utf8"),f=r(u,i,c),g="",j=0;j<o[3]-1;j++)g+=" ";f.push("  "+o[2].replace(/\d/g," ")+" | "+g+"^");var d={file:l,reason:c,msg:f.join("\n")};return d}catch(m){}}}var _exports;init(),module.exports=_exports;