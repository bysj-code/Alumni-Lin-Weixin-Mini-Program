(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shugenzongzhuangtai/add-or-update"],{"1a16":function(n,t,u){"use strict";var e=u("3627"),i=u.n(e);i.a},3627:function(n,t,u){},"3d4b":function(n,t,u){"use strict";u.r(t);var e=u("57c1"),i=u.n(e);for(var r in e)"default"!==r&&function(n){u.d(t,n,(function(){return e[n]}))}(r);t["default"]=i.a},"57c1":function(n,t,u){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=i(u("a34a"));function i(n){return n&&n.__esModule?n:{default:n}}function r(n,t,u,e,i,r,a){try{var s=n[r](a),h=s.value}catch(o){return void u(o)}s.done?t(h):Promise.resolve(h).then(e,i)}function a(n){return function(){var t=this,u=arguments;return new Promise((function(e,i){var a=n.apply(t,u);function s(n){r(a,e,i,s,h,"next",n)}function h(n){r(a,e,i,s,h,"throw",n)}s(void 0)}))}}var s=function(){Promise.all([u.e("common/vendor"),u.e("components/w-picker/w-picker")]).then(function(){return resolve(u("206b"))}.bind(null,u)).catch(u.oe)},h={data:function(){return{ruleForm:{shumubianhao:"",shumumingcheng:"",suoshuke:"",suoshumu:"",shumujiankangpinggu:"",jinqitupianshangchuan:"",shuling:"",zhanghao:"",nianjizhuanye:"",xingming:"",thumbsupnum:"",crazilynum:"",clicktime:"",clicknum:""},shumubianhaoOptions:[],shumubianhaoIndex:0,shulingOptions:[],shulingIndex:0,user:{},ro:{shumubianhao:!1,shumumingcheng:!1,suoshuke:!1,suoshumu:!1,shumujiankangpinggu:!1,jinqitupianshangchuan:!1,shuling:!1,zhanghao:!1,nianjizhuanye:!1,xingming:!1,thumbsupnum:!1,crazilynum:!1,clicktime:!1,clicknum:!1}}},components:{wPicker:s},computed:{},onLoad:function(){var t=a(e.default.mark((function t(u){var i,r,a,s;return e.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=n.getStorageSync("nowTable"),t.next=3,this.$api.session(i);case 3:return r=t.sent,this.user=r.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ruleForm.nianjizhuanye=this.user.nianjizhuanye,this.ruleForm.xingming=this.user.xingming,t.next=10,this.$api.option("shumu","shumubianhao",{});case 10:if(r=t.sent,this.shumubianhaoOptions=r.data,this.shulingOptions="半个月,一个月,二个月,三个月,四个月,五个月,六个月,七个月,八个月,十个月,十一个月,一年,两年,三年,四年,五年,六年,七年,八年,九年,十年,十年以上".split(","),this.ruleForm.userid=n.getStorageSync("userid"),u.refid&&(this.ruleForm.refid=u.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!u.id){t.next=21;break}return this.ruleForm.id=u.id,t.next=19,this.$api.info("shugenzongzhuangtai",this.ruleForm.id);case 19:r=t.sent,this.ruleForm=r.data;case 21:if(!u.cross){t.next=84;break}a=n.getStorageSync("crossObj"),t.t0=e.default.keys(a);case 24:if((t.t1=t.t0()).done){t.next=84;break}if(s=t.t1.value,"shumubianhao"!=s){t.next=30;break}return this.ruleForm.shumubianhao=a[s],this.ro.shumubianhao=!0,t.abrupt("continue",24);case 30:if("shumumingcheng"!=s){t.next=34;break}return this.ruleForm.shumumingcheng=a[s],this.ro.shumumingcheng=!0,t.abrupt("continue",24);case 34:if("suoshuke"!=s){t.next=38;break}return this.ruleForm.suoshuke=a[s],this.ro.suoshuke=!0,t.abrupt("continue",24);case 38:if("suoshumu"!=s){t.next=42;break}return this.ruleForm.suoshumu=a[s],this.ro.suoshumu=!0,t.abrupt("continue",24);case 42:if("shumujiankangpinggu"!=s){t.next=46;break}return this.ruleForm.shumujiankangpinggu=a[s],this.ro.shumujiankangpinggu=!0,t.abrupt("continue",24);case 46:if("jinqitupianshangchuan"!=s){t.next=50;break}return this.ruleForm.jinqitupianshangchuan=a[s],this.ro.jinqitupianshangchuan=!0,t.abrupt("continue",24);case 50:if("shuling"!=s){t.next=54;break}return this.ruleForm.shuling=a[s],this.ro.shuling=!0,t.abrupt("continue",24);case 54:if("zhanghao"!=s){t.next=58;break}return this.ruleForm.zhanghao=a[s],this.ro.zhanghao=!0,t.abrupt("continue",24);case 58:if("nianjizhuanye"!=s){t.next=62;break}return this.ruleForm.nianjizhuanye=a[s],this.ro.nianjizhuanye=!0,t.abrupt("continue",24);case 62:if("xingming"!=s){t.next=66;break}return this.ruleForm.xingming=a[s],this.ro.xingming=!0,t.abrupt("continue",24);case 66:if("thumbsupnum"!=s){t.next=70;break}return this.ruleForm.thumbsupnum=a[s],this.ro.thumbsupnum=!0,t.abrupt("continue",24);case 70:if("crazilynum"!=s){t.next=74;break}return this.ruleForm.crazilynum=a[s],this.ro.crazilynum=!0,t.abrupt("continue",24);case 74:if("clicktime"!=s){t.next=78;break}return this.ruleForm.clicktime=a[s],this.ro.clicktime=!0,t.abrupt("continue",24);case 78:if("clicknum"!=s){t.next=82;break}return this.ruleForm.clicknum=a[s],this.ro.clicknum=!0,t.abrupt("continue",24);case 82:t.next=24;break;case 84:this.styleChange();case 85:case"end":return t.stop()}}),t,this)})));function u(n){return t.apply(this,arguments)}return u}(),methods:{styleChange:function(){this.$nextTick((function(){}))},shumubianhaoChange:function(){var n=a(e.default.mark((function n(t){var u;return e.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.shumubianhaoIndex=t.target.value,this.ruleForm.shumubianhao=this.shumubianhaoOptions[this.shumubianhaoIndex],n.next=4,this.$api.follow("shumu","shumubianhao",{columnValue:this.ruleForm.shumubianhao});case 4:u=n.sent,u.data.shumumingcheng&&(this.ruleForm.shumumingcheng=u.data.shumumingcheng),u.data.suoshuke&&(this.ruleForm.suoshuke=u.data.suoshuke),u.data.suoshumu&&(this.ruleForm.suoshumu=u.data.suoshumu);case 8:case"end":return n.stop()}}),n,this)})));function t(t){return n.apply(this,arguments)}return t}(),clicktimeConfirm:function(n){console.log(n),this.ruleForm.clicktime=n.result,this.$forceUpdate()},shulingChange:function(n){this.shulingIndex=n.target.value,this.ruleForm.shuling=this.shulingOptions[this.shulingIndex]},jinqitupianshangchuanTap:function(){var n=this;this.$api.upload((function(t){n.ruleForm.jinqitupianshangchuan=n.$base.url+"upload/"+t.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=a(e.default.mark((function n(){return e.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!this.ruleForm.thumbsupnum||this.$validate.isIntNumer(this.ruleForm.thumbsupnum)){n.next=3;break}return this.$utils.msg("赞应输入整数"),n.abrupt("return");case 3:if(!this.ruleForm.crazilynum||this.$validate.isIntNumer(this.ruleForm.crazilynum)){n.next=6;break}return this.$utils.msg("踩应输入整数"),n.abrupt("return");case 6:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){n.next=9;break}return this.$utils.msg("点击次数应输入整数"),n.abrupt("return");case 9:if(!this.ruleForm.id){n.next=14;break}return n.next=12,this.$api.update("shugenzongzhuangtai",this.ruleForm);case 12:n.next=16;break;case 14:return n.next=16,this.$api.add("shugenzongzhuangtai",this.ruleForm);case 16:this.$utils.msgBack("提交成功");case 17:case"end":return n.stop()}}),n,this)})));function t(){return n.apply(this,arguments)}return t}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var t=new Date,u=t.getFullYear(),e=t.getMonth()+1,i=t.getDate();return"start"===n?u-=60:"end"===n&&(u+=2),e=e>9?e:"0"+e,i=i>9?i:"0"+i,"".concat(u,"-").concat(e,"-").concat(i)},toggleTab:function(n){this.$refs[n].show()}}};t.default=h}).call(this,u("543d")["default"])},"8b8e":function(n,t,u){"use strict";u.r(t);var e=u("b4da"),i=u("3d4b");for(var r in i)"default"!==r&&function(n){u.d(t,n,(function(){return i[n]}))}(r);u("1a16");var a,s=u("f0c5"),h=Object(s["a"])(i["default"],e["b"],e["c"],!1,null,"7d9e37ee",null,!1,e["a"],a);t["default"]=h.exports},a722:function(n,t,u){"use strict";(function(n){u("9a6e"),u("921b");e(u("66fd"));var t=e(u("8b8e"));function e(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,u("543d")["createPage"])},b4da:function(n,t,u){"use strict";var e={"w-picker":function(){return Promise.all([u.e("common/vendor"),u.e("components/w-picker/w-picker")]).then(u.bind(null,"206b"))}},i=function(){var n=this,t=n.$createElement;n._self._c},r=[];u.d(t,"b",(function(){return i})),u.d(t,"c",(function(){return r})),u.d(t,"a",(function(){return e}))}},[["a722","common/runtime","common/vendor"]]]);