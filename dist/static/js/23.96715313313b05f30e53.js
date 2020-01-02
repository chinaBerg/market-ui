webpackJsonp([23],{jKuM:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,n=l("4YfN"),v=l.n(n),c={name:"component-doc",components:{"element-demo0":v()({render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[[l("div",[l("mku-checkbox",{model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[t._v("同意用户协议")]),t._v(" "),l("p",[t._v("当前checkbox的值："+t._s(t.value))])],1)]],2)},staticRenderFns:[]},{data:function(){return{value:!1}}}),"element-demo1":v()({render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[[l("div",[l("mku-checkbox",{attrs:{disabled:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[t._v("禁用的复选框")]),t._v(" "),l("mku-checkbox",{attrs:{disabled:""},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}},[t._v("禁用的复选框")])],1)]],2)},staticRenderFns:[]},{data:function(){return{value:!1,value2:!0}}}),"element-demo2":(a={data:function(){return{checkAll:!1,indeterminate:!0,value:["a","b"]}},methods:{handleAllChange:function(t){this.indeterminate=!1,this.value=t?["a","b","c","d"]:[],console.log(t)},handleGroupChange:function(t){this.indeterminate=t.length>0&&t.length<4,this.checkAll=4===t.length}}},v()({render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[[l("div",[l("mku-checkbox",{attrs:{indeterminate:t.indeterminate},on:{change:t.handleAllChange},model:{value:t.checkAll,callback:function(e){t.checkAll=e},expression:"checkAll"}},[t._v("\n    全部\n  ")]),t._v(" "),l("mku-checkbox-group",{on:{change:t.handleGroupChange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[l("mku-checkbox",{attrs:{label:"a"}},[t._v("选项1")]),t._v(" "),l("mku-checkbox",{attrs:{label:"b"}},[t._v("选项2")]),t._v(" "),l("mku-checkbox",{attrs:{label:"c"}},[t._v("选项3")]),t._v(" "),l("mku-checkbox",{attrs:{label:"d"}},[t._v("选项4")])],1)],1)]],2)},staticRenderFns:[]},a))}},i={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"market-doc-container"},[l("h2",[t._v("Checkbox 复选框")]),t._v(" "),l("h3",[t._v("基本使用")]),t._v(" "),t._m(0),t._v(" "),l("mku-example",[l("template",{slot:"source"},[l("element-demo0")],1),t._v(" "),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div>\n    <mku-checkbox v-model="value">同意用户协议</mku-checkbox>\n    <p>当前checkbox的值：{{value}}</p>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      value: false\n    }\n  }\n}\n<\/script>\n')])])])],2),l("h3",[t._v("禁用")]),t._v(" "),l("mku-example",[l("template",{slot:"source"},[l("element-demo1")],1),t._v(" "),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div>\n    <mku-checkbox v-model="value" disabled>禁用的复选框</mku-checkbox>\n    <mku-checkbox v-model="value2" disabled>禁用的复选框</mku-checkbox>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      value: false,\n      value2: true\n    }\n  }\n}\n<\/script>\n')])])])],2),l("h3",[t._v("组合使用")]),t._v(" "),l("mku-example",[l("template",{slot:"source"},[l("element-demo2")],1),t._v(" "),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div>\n  <mku-checkbox\n    v-model="checkAll"\n    :indeterminate="indeterminate"\n    @change="handleAllChange"\n  >\n    全部\n  </mku-checkbox>\n\n  <mku-checkbox-group v-model="value" @change="handleGroupChange">\n    <mku-checkbox label="a">选项1</mku-checkbox>\n    <mku-checkbox label="b">选项2</mku-checkbox>\n    <mku-checkbox label="c">选项3</mku-checkbox>\n    <mku-checkbox label="d">选项4</mku-checkbox>\n  </mku-checkbox-group>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      checkAll: false,\n      indeterminate: true,\n      value: [\'a\', \'b\']\n    }\n  },\n  methods: {\n    handleAllChange (val) {\n      this.indeterminate = false\n      this.value = val ? [\'a\', \'b\', \'c\', \'d\'] : []\n      console.log(val)\n    },\n    handleGroupChange (val) {\n      this.indeterminate = val.length > 0 && val.length < 4\n      this.checkAll = val.length === 4\n    }\n  }\n}\n<\/script>\n')])])])],2),l("h3",[t._v("Checkbox Attributes")]),t._v(" "),t._m(1),t._v(" "),l("h3",[t._v("Checkbox Events")]),t._v(" "),t._m(2),t._v(" "),l("h3",[t._v("Checkbox-Group Attributes")]),t._v(" "),t._m(3),t._v(" "),l("h3",[t._v("Checkbox-Group Events")]),t._v(" "),t._m(4)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("可以使用"),e("code",[this._v("v-model")]),this._v("进行双向数据绑定。")])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("必填")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("复选框绑定的值，可以使用"),l("code",[t._v("v-model")]),t._v("进行双向数据绑定。仅单独使用时有效。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("String|Boolean|Number")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("否")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("label")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("指定当前选项的"),l("code",[t._v("value")]),t._v("值，仅组合使用时有效。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("String|Boolean|Number")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("否")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("trueValue")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("自定义"),l("code",[t._v("true")]),t._v("的值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("String|Boolean|Number")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("否")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("falseValue")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("自定义"),l("code",[t._v("false")]),t._v("的值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("String|Boolean|Number")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("否")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("禁用复选框")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Boolean")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("false")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("否")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("indeterminate")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置半选状态，仅单独使用时有效")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Boolean")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("false")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("否")])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("事件名")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("回调函数参数")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("change")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("复选框选中状态变化时触发")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("true|false")])])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("必填")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置选中项")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Array")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("[]")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("否")])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("事件名")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("回调函数参数")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("change")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("check-group")]),t._v("选中状态变化时触发")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("所有选中项的"),l("code",[t._v("label")]),t._v("集合")])])])])}]},_=l("C7Lr")(c,i,!1,null,null,null);e.default=_.exports}});
//# sourceMappingURL=23.96715313313b05f30e53.js.map