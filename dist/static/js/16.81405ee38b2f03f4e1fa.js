webpackJsonp([16],{"zn+L":function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=l("4YfN"),i=l.n(a),v={name:"component-doc",components:{"element-demo0":i()({render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[[l("mku-input",{attrs:{type:"text",placeholder:"请输入用户名"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})]],2)},staticRenderFns:[]},{data:function(){return{value:""}}}),"element-demo1":i()({render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[[l("div",[l("mku-input",{staticClass:"doc-mb10",attrs:{type:"text",size:"large",placeholder:"请输入用户名"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),t._v(" "),l("mku-input",{staticClass:"doc-mb10",attrs:{type:"text",size:"default",placeholder:"请输入用户名"},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}}),t._v(" "),l("mku-input",{attrs:{type:"text",size:"small",placeholder:"请输入用户名"},model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}})],1)]],2)},staticRenderFns:[]},{name:"ExampleInput",data:function(){return{value1:"",value2:"",value3:""}}}),"element-demo2":i()({render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[[l("mku-input",{attrs:{type:"textarea",placeholder:"多行文本框",autosize:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})]],2)},staticRenderFns:[]},{name:"ExampleInput",data:function(){return{value:""}}}),"element-demo3":i()({render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[[l("mku-input",{attrs:{type:"text",placeholder:"禁用状态",disabled:!0},model:{value:t.value5,callback:function(e){t.value5=e},expression:"value5"}})]],2)},staticRenderFns:[]},{name:"ExampleInput",data:function(){return{value5:""}}}),"element-demo4":i()({render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[[l("mku-input",{attrs:{type:"text",placeholder:"只读的输入框",readonly:""},model:{value:t.value6,callback:function(e){t.value6=e},expression:"value6"}})]],2)},staticRenderFns:[]},{name:"ExampleInput",data:function(){return{value6:""}}}),"element-demo5":(n={name:"ExampleInput",data:function(){return{value7:""}},methods:{handleClear:function(){alert("handleClear")}}},i()({render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[[l("mku-input",{attrs:{type:"text",placeholder:"可清除",clearable:""},on:{clear:t.handleClear},model:{value:t.value7,callback:function(e){t.value7=e},expression:"value7"}})]],2)},staticRenderFns:[]},n)),"element-demo6":i()({render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[[l("div",[l("mku-input",{ref:"input",attrs:{type:"text",placeholder:"请输入用户名"},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}}),t._v(" "),l("mku-button",{attrs:{type:"primary"},on:{click:t.handleButtonClick}},[t._v("\n      使得input获取焦点\n    ")])],1)]],2)},staticRenderFns:[]},{name:"ExampleInput",data:function(){return{value:"",value2:""}},methods:{handleButtonClick:function(){this.$refs.input.focus()}}}),"element-demo7":i()({render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[[e("mku-input",{staticClass:"doc-mb10",attrs:{placeholder:"块级属性将自动铺满父级容器",block:""}}),this._v(" "),e("mku-input",{attrs:{type:"textarea",placeholder:"块级属性将自动铺满父级容器",block:""}})]],2)},staticRenderFns:[]},{})}},c={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"market-doc-container"},[l("h2",[t._v("Input 输入框")]),t._v(" "),l("h3",[t._v("基本用法")]),t._v(" "),l("mku-example",[l("template",{slot:"source"},[l("element-demo0")],1),t._v(" "),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <mku-input\n    type="text"\n    placeholder="请输入用户名"\n    v-model="value"\n  />\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        value: \'\'\n      }\n    }\n  }\n<\/script>\n')])])])],2),l("h3",[t._v("大小尺寸")]),t._v(" "),l("p",[t._v("可通过 size 属性指定输入框的尺寸，除了默认的大小外，还提供了 large、small 和 mini 三种尺寸")]),t._v(" "),l("mku-example",[l("template",{slot:"source"},[l("element-demo1")],1),t._v(" "),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div>\n    <mku-input\n      class="doc-mb10"\n      type="text"\n      size="large"\n      placeholder="请输入用户名"\n      v-model="value1"\n    />\n    <mku-input\n      class="doc-mb10"\n      type="text"\n      size="default"\n      placeholder="请输入用户名"\n      v-model="value2"\n    />\n    <mku-input\n      type="text"\n      size="small"\n      placeholder="请输入用户名"\n      v-model="value3"\n    />\n  </div>\n</template>\n\n<script>\n  export default {\n    name: \'ExampleInput\',\n    data () {\n      return {\n        value1: \'\',\n        value2: \'\',\n        value3: \'\'\n      }\n    }\n  }\n<\/script>\n')])])])],2),l("h3",[t._v("多行文本框")]),t._v(" "),l("p",[t._v("支持高度随内容自动变化")]),t._v(" "),l("mku-example",[l("template",{slot:"source"},[l("element-demo2")],1),t._v(" "),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <mku-input\n    type="textarea"\n    placeholder="多行文本框"\n    v-model="value"\n    autosize\n  />\n</template>\n\n<script>\n  export default {\n    name: \'ExampleInput\',\n    data () {\n      return {\n        value: \'\'\n      }\n    }\n  }\n<\/script>\n')])])])],2),l("h3",[t._v("禁用状态")]),t._v(" "),l("mku-example",[l("template",{slot:"source"},[l("element-demo3")],1),t._v(" "),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <mku-input\n    type="text"\n    placeholder="禁用状态"\n    v-model="value5"\n    :disabled="true"\n  />\n</template>\n\n<script>\nexport default {\n  name: \'ExampleInput\',\n  data () {\n    return {\n      value5: \'\'\n    }\n  }\n}\n<\/script>\n')])])])],2),l("h3",[t._v("只读")]),t._v(" "),l("mku-example",[l("template",{slot:"source"},[l("element-demo4")],1),t._v(" "),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <mku-input\n    type="text"\n    placeholder="只读的输入框"\n    readonly\n    v-model="value6"\n  />\n</template>\n\n<script>\nexport default {\n  name: \'ExampleInput\',\n  data () {\n    return {\n      value6: \'\'\n    }\n  }\n}\n<\/script>\n')])])])],2),l("h3",[t._v("可清除")]),t._v(" "),l("mku-example",[l("template",{slot:"source"},[l("element-demo5")],1),t._v(" "),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <mku-input\n    type="text"\n    placeholder="可清除"\n    v-model="value7"\n    clearable\n    @clear="handleClear"\n  />\n</template>\n\n<script>\nexport default {\n  name: \'ExampleInput\',\n  data () {\n    return {\n      value7: \'\'\n    }\n  },\n  methods: {\n    handleClear () {\n      alert(\'handleClear\')\n    }\n  }\n}\n<\/script>\n')])])])],2),l("h3",[t._v("焦点")]),t._v(" "),l("mku-example",[l("template",{slot:"source"},[l("element-demo6")],1),t._v(" "),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div>\n    <mku-input\n      ref="input"\n      type="text"\n      placeholder="请输入用户名"\n      v-model="value2"\n    />\n    <mku-button type="primary" @click="handleButtonClick">\n      使得input获取焦点\n    </mku-button>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'ExampleInput\',\n  data () {\n    return {\n      value: \'\',\n      value2: \'\'\n    }\n  },\n  methods: {\n    handleButtonClick () {\n      this.$refs.input.focus()\n    }\n  }\n}\n<\/script>\n')])])])],2),l("h3",[t._v("自动铺满")]),t._v(" "),l("mku-example",[l("template",{slot:"source"},[l("element-demo7")],1),t._v(" "),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <mku-input\n    class="doc-mb10"\n    placeholder="块级属性将自动铺满父级容器"\n    block\n  />\n  <mku-input\n    type="textarea"\n    placeholder="块级属性将自动铺满父级容器"\n    block\n  />\n</template>\n')])])])],2),l("h3",[t._v("Input Attributes")]),t._v(" "),t._m(0),t._v(" "),l("h3",[t._v("Input Events")]),t._v(" "),t._m(1),t._v(" "),l("h3",[t._v("Input Methods")]),t._v(" "),t._m(2)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"center"}},[t._v("可选值")]),t._v(" "),l("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),l("th",{staticStyle:{"text-align":"center"}},[t._v("必填")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("输入框类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[l("code",[t._v("String")])]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[l("code",[t._v("text")]),t._v("、"),l("code",[t._v("password")]),t._v("、"),l("code",[t._v("textarea")]),t._v("等所有原生输入框支持的类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[l("code",[t._v("text")])]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("value、v-model")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("绑定的值，v-model可以进行双向数据绑定")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[l("code",[t._v("String | Number")])]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("size")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("input尺寸，仅在非"),l("code",[t._v("textarea")]),t._v("下有效")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[l("code",[t._v("String")])]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[l("code",[t._v("large")]),t._v("、"),l("code",[t._v("default")]),t._v("、"),l("code",[t._v("small")])]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[l("code",[t._v("default")])]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁用")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[l("code",[t._v("Boolean")])]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[l("code",[t._v("false")])]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("readonly")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否只读")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[l("code",[t._v("Boolean")])]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[l("code",[t._v("false")])]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("placeholder")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("输入框类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[l("code",[t._v("Strimg")])]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("clearable")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否可以清除输入框，仅在非"),l("code",[t._v("textarea")]),t._v("下有效")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[l("code",[t._v("Boolean")])]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[l("code",[t._v("false")])]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("autosize")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("textarea高度虽内容自动变化")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[l("code",[t._v("Boolean")])]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[l("code",[t._v("false")])]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("rows")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("textarea默认的行数")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[l("code",[t._v("Boolean")])]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[l("code",[t._v("false")])]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("autofocus")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("自动获取焦点")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[l("code",[t._v("Boolean")])]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[l("code",[t._v("false")])]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("block")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("块级属性，文本框将自动铺满父级容器")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[l("code",[t._v("Boolean")])]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[l("code",[t._v("false")])]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("否")])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("事件名")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("回调函数参数")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("focus")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("组件获取焦点时触发")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Event")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("blur")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("组件失去焦点时触发")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Event")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("change")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("组件值发生变化时触发")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("value")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("clear")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("组件由clearable属性定义的按钮清空时触发")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("clear")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("按下回车时触发")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("event，当前值")])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("方法名")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("回调函数参数")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("focus")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("使组件获取焦点")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Event")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("blur")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("使组件失去焦点")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Event")])])])])}]},r=l("C7Lr")(v,c,!1,null,null,null);e.default=r.exports}});
//# sourceMappingURL=16.81405ee38b2f03f4e1fa.js.map