"use strict";function init(){var e=require("../../../lib/react.js"),t=require("../../../cssStr/cssStr.js"),n=(require("../../../stores/windowStores.js"),require("../../../stores/webviewStores.js")),s=require("../../../actions/windowActions.js"),c=require("../../../actions/webviewActions.js"),a=function(e){s.showTipsMsg({msg:e,type:"error"})},o=e.createClass({displayName:"ScanDialog",getInitialState:function(){return{show:!1}},chooseScanImg:function(){var e=this,t=document.createElement("input");t.setAttribute("type","file"),t.style.display="none",global.contentDocumentBody.appendChild(t),t.addEventListener("change",function(n){e.setState({scancodepath:t.value}),global.contentDocumentBody.removeChild(t)}),t.addEventListener("cancel",function(e){global.contentDocumentBody.removeChild(t)}),t.click()},_scanBarcode:function(e,t,n){var s=this,c=require("../../lib/quagga.js");c.decodeSingle({decoder:{readers:["code_128_reader"]},locate:!0,src:e},function(e){e&&e.codeResult?t&&t.call(s,e.codeResult.code):n&&n.call(s)})},_scanQrcode:function(e,t,n){var s=require("../../lib/jsqrcode.js"),c=new s,a=this;c.callback=function(e,s){e?t&&t.call(a,e):n&&n.call(a)},c.decode(e)},_endScan:function(e,t){this.finishScan||(this.setState({scancodepath:"",show:!1}),0==this.state.needResult&&a("微信用默认行为处理以下扫码结果: "+e),c.scanCodeReturn({msg:"ok",result:e,scanType:t}),this.finishScan=!0)},_failScan:function(){this.scanFailCount++,this.scanFailCount==this.scanCount&&(this.setState({scancodepath:"",show:!1}),c.scanCodeReturn({msg:"fail"}))},scan:function(){var e=this,t=this.state.scancodepath,n=this.state.scanType;if(!t)return void a("请选择需要识别的扫码图片");this.finishScan=!1,this.scanCount=0,this.scanFailCount=0;for(var s=!1,o=0;o<n.length;++o){var i=n[o];"qrCode"==i?(this.scanCount++,s=!0,this._scanQrcode(t,function(t){e._endScan(t,"qrCode")},this._failScan)):"barCode"==i&&(this.scanCount++,s=!0,this._scanBarcode(t,function(t){e._endScan(t,"barCode")},this._failScan))}s||(this.setState({scancodepath:"",show:!1}),c.scanCodeReturn({msg:"fail,invalid scan type"}))},close:function(){this.setState({scancodepath:"",show:!1}),c.scanCodeReturn({msg:"cancel"})},_show:function(e){this.setState({show:!0,scanType:e.scanType||["qrCode","barCode"],needResult:e.needResult||!1})},componentDidMount:function(){n.on("SHOW_SCAN_CODE_DIALOG",this._show)},componentWillUnmount:function(){n.removeListener("SHOW_SCAN_CODE_DIALOG",this._show)},render:function(){var n=this.state.show?{}:t.displayNone;return e.createElement("div",{className:"",style:n},e.createElement("div",null,"请先保存需要扫码的图片，然后点击识别"),e.createElement("div",null,e.createElement("button",{onClick:this.chooseScanImg},"选择扫码图片")),e.createElement("div",null,"路径: ",this.state.scancodepath),e.createElement("div",null,e.createElement("button",{onClick:this.scan},"识别")),e.createElement("div",null,e.createElement("button",{onClick:this.close},"关闭")))}});_exports=o}var _exports;init(),module.exports=_exports;