webpackJsonp([9,36],{258:function(e,t,a){a(259);var n=a(12)(a(261),a(262),null,null);e.exports=n.exports},259:function(e,t,a){var n=a(260);"string"==typeof n&&(n=[[e.id,n,""]]);a(11)(n,{});n.locals&&(e.exports=n.locals)},260:function(e,t,a){t=e.exports=a(6)(!0),t.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",file:"showTable.vue",sourceRoot:""}])},261:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(37);t.default={data:function(){var e=this;return{TableData:{options:{select:!0,state:!0},columns:[{index:0,key:"id",value:"ID",sort:{state:!1,func:function(t,a){e.sortBy(a)}}},{index:1,key:"avatar",value:"头像"},{index:2,key:"name",value:"姓名"},{index:3,key:"age",value:"年龄",sort:{state:!1,func:function(t,a){e.sortBy(a)}}},{index:4,key:"wechat",value:"微信"}],actions:[{type:"primary",text:"编辑1",func:function(t,a){e.editTable(a)}},{type:"danger",text:"删除",func:function(t,a){console.log(a),e.removeTableItem(a)}}],tableData:[{id:1,avatar:{type:"image",class:["tabel-avatar"],src:"./static/icon-me.jpg"},name:"李云龙",age:"33",wechat:"wangnima",state:{type:"success",value:"批准"},__actions:[{type:"success",disabled:!0,text:"私有",func:function(t,a){console.log(a),e.removeTableItem(a)}}],checkbox:{disabled:!1,checked:!1,text:""}},{id:2,avatar:{type:"image",class:["tabel-avatar"],src:"./static/icon-me.jpg"},name:"孔杰",age:"26",wechat:"Iron-column-zhao",__actions:[{type:"warning",text:"私有",func:function(t,a){console.log(a),e.removeTableItem(a)}}],state:{type:"info",value:"待审"},checkbox:{disabled:!1,checked:!1,text:""}},{id:3,avatar:{type:"image",class:["tabel-avatar"],src:"./static/icon-me.jpg"},name:"赵四",age:"27",wechat:"Michael Jack",state:{type:"failed",value:"拒绝"},__actions:[{type:"success",loading:!0,text:"私有",func:function(t,a){console.log(a),e.removeTableItem(a)}}],checkbox:{disabled:!1,checked:!1,text:""}}]}}},components:{olTable:n.olTable},methods:{editTable:function(e){console.log(e),this.$Notification.success("正在编辑"+e._value[0],"",5e3)},removeTableItem:function(e){var t=this;this.TableData.tableData.forEach(function(a){a.id===e.id&&t.TableData.tableData.$remove(a)}),this.$Notification.success("删除"+e._value[0]+"成功","",5e3)},sortBy:function(e){if(e._sort){this.TableData.tableData.sort(function(t,a){return t[e.key]-a[e.key]});e._sort=!1}else{this.TableData.tableData.sort(function(t,a){return a[e.key]-t[e.key]});e._sort=!0}}}}},262:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("div",[a("h4",[e._v("\n      #标签\n    ")]),e._v(" "),a("ol-table",{attrs:{table:e.TableData}})],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=9.e56d24a.js.map