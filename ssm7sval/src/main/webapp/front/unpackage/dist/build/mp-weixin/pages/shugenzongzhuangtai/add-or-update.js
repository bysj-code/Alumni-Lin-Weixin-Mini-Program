(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shugenzongzhuangtai/add-or-update"],{"0d4b":function(n,u,e){"use strict";(function(n){e("907f");t(e("66fd"));var u=t(e("bc5d"));function t(n){return n&&n.__esModule?n:{default:n}}n(u.default)}).call(this,e("543d")["createPage"])},"2a7f":function(n,u,e){"use strict";(function(n){Object.defineProperty(u,"__esModule",{value:!0}),u.default=void 0;var t=a(e("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,u,e,t,a,r,i){try{var o=n[r](i),s=o.value}catch(c){return void e(c)}o.done?u(s):Promise.resolve(s).then(t,a)}function i(n){return function(){var u=this,e=arguments;return new Promise((function(t,a){var i=n.apply(u,e);function o(n){r(i,t,a,o,s,"next",n)}function s(n){r(i,t,a,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("5b13"))}.bind(null,e)).catch(e.oe)},s={data:function(){return{ruleForm:{shumubianhao:"",shumumingcheng:"",suoshuke:"",suoshumu:"",shumujiankangpinggu:"",jinqitupianshangchuan:"",shuling:"",zhanghao:"",nianjizhuanye:"",xingming:"",thumbsupnum:"",crazilynum:"",clicktime:"",clicknum:""},shumubianhaoOptions:[],shumubianhaoIndex:0,shulingOptions:[],shulingIndex:0,user:{},ro:{shumubianhao:!1,shumumingcheng:!1,suoshuke:!1,suoshumu:!1,shumujiankangpinggu:!1,jinqitupianshangchuan:!1,shuling:!1,zhanghao:!1,nianjizhuanye:!1,xingming:!1,thumbsupnum:!1,crazilynum:!1,clicktime:!1,clicknum:!1}}},components:{wPicker:o},computed:{},onLoad:function(u){var e=this;return i(t.default.mark((function a(){var r,i,o,s;return t.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=n.getStorageSync("nowTable"),a.next=3,e.$api.session(r);case 3:return i=a.sent,e.user=i.data,e.ruleForm.zhanghao=e.user.zhanghao,e.ruleForm.nianjizhuanye=e.user.nianjizhuanye,e.ruleForm.xingming=e.user.xingming,a.next=10,e.$api.option("shumu","shumubianhao",{});case 10:if(i=a.sent,e.shumubianhaoOptions=i.data,e.shulingOptions="半个月,一个月,二个月,三个月,四个月,五个月,六个月,七个月,八个月,十个月,十一个月,一年,两年,三年,四年,五年,六年,七年,八年,九年,十年,十年以上".split(","),e.ruleForm.userid=n.getStorageSync("userid"),u.refid&&(e.ruleForm.refid=u.refid,e.ruleForm.nickname=n.getStorageSync("nickname")),!u.id){a.next=21;break}return e.ruleForm.id=u.id,a.next=19,e.$api.info("shugenzongzhuangtai",e.ruleForm.id);case 19:i=a.sent,e.ruleForm=i.data;case 21:if(!u.cross){a.next=84;break}o=n.getStorageSync("crossObj"),a.t0=t.default.keys(o);case 24:if((a.t1=a.t0()).done){a.next=84;break}if(s=a.t1.value,"shumubianhao"!=s){a.next=30;break}return e.ruleForm.shumubianhao=o[s],e.ro.shumubianhao=!0,a.abrupt("continue",24);case 30:if("shumumingcheng"!=s){a.next=34;break}return e.ruleForm.shumumingcheng=o[s],e.ro.shumumingcheng=!0,a.abrupt("continue",24);case 34:if("suoshuke"!=s){a.next=38;break}return e.ruleForm.suoshuke=o[s],e.ro.suoshuke=!0,a.abrupt("continue",24);case 38:if("suoshumu"!=s){a.next=42;break}return e.ruleForm.suoshumu=o[s],e.ro.suoshumu=!0,a.abrupt("continue",24);case 42:if("shumujiankangpinggu"!=s){a.next=46;break}return e.ruleForm.shumujiankangpinggu=o[s],e.ro.shumujiankangpinggu=!0,a.abrupt("continue",24);case 46:if("jinqitupianshangchuan"!=s){a.next=50;break}return e.ruleForm.jinqitupianshangchuan=o[s],e.ro.jinqitupianshangchuan=!0,a.abrupt("continue",24);case 50:if("shuling"!=s){a.next=54;break}return e.ruleForm.shuling=o[s],e.ro.shuling=!0,a.abrupt("continue",24);case 54:if("zhanghao"!=s){a.next=58;break}return e.ruleForm.zhanghao=o[s],e.ro.zhanghao=!0,a.abrupt("continue",24);case 58:if("nianjizhuanye"!=s){a.next=62;break}return e.ruleForm.nianjizhuanye=o[s],e.ro.nianjizhuanye=!0,a.abrupt("continue",24);case 62:if("xingming"!=s){a.next=66;break}return e.ruleForm.xingming=o[s],e.ro.xingming=!0,a.abrupt("continue",24);case 66:if("thumbsupnum"!=s){a.next=70;break}return e.ruleForm.thumbsupnum=o[s],e.ro.thumbsupnum=!0,a.abrupt("continue",24);case 70:if("crazilynum"!=s){a.next=74;break}return e.ruleForm.crazilynum=o[s],e.ro.crazilynum=!0,a.abrupt("continue",24);case 74:if("clicktime"!=s){a.next=78;break}return e.ruleForm.clicktime=o[s],e.ro.clicktime=!0,a.abrupt("continue",24);case 78:if("clicknum"!=s){a.next=82;break}return e.ruleForm.clicknum=o[s],e.ro.clicknum=!0,a.abrupt("continue",24);case 82:a.next=24;break;case 84:e.styleChange();case 85:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},shumubianhaoChange:function(n){var u=this;return i(t.default.mark((function e(){var a;return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u.shumubianhaoIndex=n.target.value,u.ruleForm.shumubianhao=u.shumubianhaoOptions[u.shumubianhaoIndex],e.next=4,u.$api.follow("shumu","shumubianhao",{columnValue:u.ruleForm.shumubianhao});case 4:a=e.sent,a.data.shumumingcheng&&(u.ruleForm.shumumingcheng=a.data.shumumingcheng),a.data.suoshuke&&(u.ruleForm.suoshuke=a.data.suoshuke),a.data.suoshumu&&(u.ruleForm.suoshumu=a.data.suoshumu);case 8:case"end":return e.stop()}}),e)})))()},clicktimeConfirm:function(n){console.log(n),this.ruleForm.clicktime=n.result,this.$forceUpdate()},shulingChange:function(n){this.shulingIndex=n.target.value,this.ruleForm.shuling=this.shulingOptions[this.shulingIndex]},jinqitupianshangchuanTap:function(){var n=this;this.$api.upload((function(u){n.ruleForm.jinqitupianshangchuan=n.$base.url+"upload/"+u.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return i(t.default.mark((function u(){return t.default.wrap((function(u){while(1)switch(u.prev=u.next){case 0:if(!n.ruleForm.thumbsupnum||n.$validate.isIntNumer(n.ruleForm.thumbsupnum)){u.next=3;break}return n.$utils.msg("赞应输入整数"),u.abrupt("return");case 3:if(!n.ruleForm.crazilynum||n.$validate.isIntNumer(n.ruleForm.crazilynum)){u.next=6;break}return n.$utils.msg("踩应输入整数"),u.abrupt("return");case 6:if(!n.ruleForm.clicknum||n.$validate.isIntNumer(n.ruleForm.clicknum)){u.next=9;break}return n.$utils.msg("点击次数应输入整数"),u.abrupt("return");case 9:if(!n.ruleForm.id){u.next=14;break}return u.next=12,n.$api.update("shugenzongzhuangtai",n.ruleForm);case 12:u.next=16;break;case 14:return u.next=16,n.$api.add("shugenzongzhuangtai",n.ruleForm);case 16:n.$utils.msgBack("提交成功");case 17:case"end":return u.stop()}}),u)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var u=new Date,e=u.getFullYear(),t=u.getMonth()+1,a=u.getDate();return"start"===n?e-=60:"end"===n&&(e+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(e,"-").concat(t,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};u.default=s}).call(this,e("543d")["default"])},"727c":function(n,u,e){},"8d09":function(n,u,e){"use strict";var t=e("727c"),a=e.n(t);a.a},ae1a:function(n,u,e){"use strict";e.r(u);var t=e("2a7f"),a=e.n(t);for(var r in t)"default"!==r&&function(n){e.d(u,n,(function(){return t[n]}))}(r);u["default"]=a.a},bc5d:function(n,u,e){"use strict";e.r(u);var t=e("f254"),a=e("ae1a");for(var r in a)"default"!==r&&function(n){e.d(u,n,(function(){return a[n]}))}(r);e("8d09");var i,o=e("f0c5"),s=Object(o["a"])(a["default"],t["b"],t["c"],!1,null,"691bfb2e",null,!1,t["a"],i);u["default"]=s.exports},f254:function(n,u,e){"use strict";e.d(u,"b",(function(){return a})),e.d(u,"c",(function(){return r})),e.d(u,"a",(function(){return t}));var t={wPicker:function(){return Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(e.bind(null,"5b13"))}},a=function(){var n=this,u=n.$createElement;n._self._c},r=[]}},[["0d4b","common/runtime","common/vendor"]]]);