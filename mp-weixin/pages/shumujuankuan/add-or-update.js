(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shumujuankuan/add-or-update"],{1019:function(n,e,t){"use strict";(function(n){t("9a6e"),t("921b");a(t("66fd"));var e=a(t("5dac"));function a(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"411b":function(n,e,t){"use strict";t.r(e);var a=t("5d5c"),u=t.n(a);for(var i in a)"default"!==i&&function(n){t.d(e,n,(function(){return a[n]}))}(i);e["default"]=u.a},"4ccb":function(n,e,t){"use strict";var a=t("a176"),u=t.n(a);u.a},"5d5c":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(t("a34a"));function u(n){return n&&n.__esModule?n:{default:n}}function i(n,e,t,a,u,i,r){try{var o=n[i](r),c=o.value}catch(s){return void t(s)}o.done?e(c):Promise.resolve(c).then(a,u)}function r(n){return function(){var e=this,t=arguments;return new Promise((function(a,u){var r=n.apply(e,t);function o(n){i(r,a,u,o,c,"next",n)}function c(n){i(r,a,u,o,c,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("206b"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{juankuangonggaobiaoti:"",juankuanneirong:"",juankuanjiage:"",fengmiantu:"",zhanghao:"",nianjizhuanye:"",xingming:"",sfsh:"",shhf:"",ispay:""},user:{},ro:{juankuangonggaobiaoti:!1,juankuanneirong:!1,juankuanjiage:!1,fengmiantu:!1,zhanghao:!1,nianjizhuanye:!1,xingming:!1,sfsh:!1,shhf:!1,ispay:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var e=r(a.default.mark((function e(t){var u,i,r,o;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u=n.getStorageSync("nowTable"),e.next=3,this.$api.session(u);case 3:if(i=e.sent,this.user=i.data,this.ruleForm.userid=n.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!t.id){e.next=13;break}return this.ruleForm.id=t.id,e.next=11,this.$api.info("shumujuankuan",this.ruleForm.id);case 11:i=e.sent,this.ruleForm=i.data;case 13:if(!t.cross){e.next=48;break}r=n.getStorageSync("crossObj"),e.t0=a.default.keys(r);case 16:if((e.t1=e.t0()).done){e.next=48;break}if(o=e.t1.value,"juankuangonggaobiaoti"!=o){e.next=22;break}return this.ruleForm.juankuangonggaobiaoti=r[o],this.ro.juankuangonggaobiaoti=!0,e.abrupt("continue",16);case 22:if("juankuanneirong"!=o){e.next=26;break}return this.ruleForm.juankuanneirong=r[o],this.ro.juankuanneirong=!0,e.abrupt("continue",16);case 26:if("juankuanjiage"!=o){e.next=30;break}return this.ruleForm.juankuanjiage=r[o],this.ro.juankuanjiage=!0,e.abrupt("continue",16);case 30:if("fengmiantu"!=o){e.next=34;break}return this.ruleForm.fengmiantu=r[o],this.ro.fengmiantu=!0,e.abrupt("continue",16);case 34:if("zhanghao"!=o){e.next=38;break}return this.ruleForm.zhanghao=r[o],this.ro.zhanghao=!0,e.abrupt("continue",16);case 38:if("nianjizhuanye"!=o){e.next=42;break}return this.ruleForm.nianjizhuanye=r[o],this.ro.nianjizhuanye=!0,e.abrupt("continue",16);case 42:if("xingming"!=o){e.next=46;break}return this.ruleForm.xingming=r[o],this.ro.xingming=!0,e.abrupt("continue",16);case 46:e.next=16;break;case 48:this.styleChange();case 49:case"end":return e.stop()}}),e,this)})));function t(n){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},fengmiantuTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.fengmiantu=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=r(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!this.ruleForm.id){n.next=5;break}return n.next=3,this.$api.update("shumujuankuan",this.ruleForm);case 3:n.next=7;break;case 5:return n.next=7,this.$api.add("shumujuankuan",this.ruleForm);case 7:this.$utils.msgBack("提交成功");case 8:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),a=e.getMonth()+1,u=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),a=a>9?a:"0"+a,u=u>9?u:"0"+u,"".concat(t,"-").concat(a,"-").concat(u)},toggleTab:function(n){this.$refs[n].show()}}};e.default=c}).call(this,t("543d")["default"])},"5dac":function(n,e,t){"use strict";t.r(e);var a=t("f2fa"),u=t("411b");for(var i in u)"default"!==i&&function(n){t.d(e,n,(function(){return u[n]}))}(i);t("4ccb");var r,o=t("f0c5"),c=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,"4e2bdb2c",null,!1,a["a"],r);e["default"]=c.exports},a176:function(n,e,t){},f2fa:function(n,e,t){"use strict";var a,u=function(){var n=this,e=n.$createElement;n._self._c},i=[];t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return a}))}},[["1019","common/runtime","common/vendor"]]]);