## Drawer 抽屉

### 基本使用
支持从上下左右四个方向弹出抽屉
:::demo
```html
<template>
  <div>
    <mku-radio-group type="button" v-model="direction">
      <mku-radio label="left">左侧弹出</mku-radio>
      <mku-radio label="top">顶部弹出</mku-radio>
      <mku-radio label="right">右侧弹出</mku-radio>
      <mku-radio label="bottom">底部弹出</mku-radio>
    </mku-radio-group>
    <mku-button
      type="primary"
      class="doc-mt20"
      @click="handleClick">
      点击打开抽屉
    </mku-button>

    <mku-drawer
      v-model="visible"
      title="抽屉标题"
      :size="400"
      :direction="direction"
      :mask="true">
      <div style="padding: 20px;">
        <mku-form :label-width="100">
          <mku-form-item label="Text：">
            <mku-input type="text" placeholder="This is a text box." />
          </mku-form-item>
          <mku-form-item label="Password：">
            <mku-input type="password" placeholder="This is a password box."/>
          </mku-form-item>
          <mku-form-item label="Select：">
            <mku-select class="doc-select">
              <mku-options value="1">选项1</mku-options>
              <mku-options value="2">选项2</mku-options>
              <mku-options value="3">选项3</mku-options>
            </mku-select>
          </mku-form-item>
          <mku-form-item label="Checkbox：">
            <mku-checkbox>同意</mku-checkbox>
          </mku-form-item>
          <mku-form-item>
            <mku-button type="primary">提交</mku-button>
          </mku-form-item>
        </mku-form>
      </div>
    </mku-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      direction: 'right'
    }
  },
  methods: {
    handleClick () {
      this.visible = true
    }
  }
}
</script>
```
:::

### 自定义title
:::demo
```html
<template>
  <div>
    <mku-button type="primary" @click="visible = true">
      点击打开抽屉
    </mku-button>

    <mku-drawer v-model="visible">
      <div style="padding: 20px;">
        内容区域
      </div>
      <div slot="title">
        <mku-badge :value="8">
          消息面板
        </mku-badge>
      </div>
    </mku-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  }
}
</script>
```
:::

### 多级抽屉
:::demo
```html
<template>
  <div>
    <mku-button type="primary" @click="visible = true">
      点击打开抽屉
    </mku-button>

    <mku-drawer v-model="visible" :size="600" title="第1个抽屉">
      <div style="padding: 20px;">
        <mku-button type="primary" @click="visible2 = true">
          再打开一个抽屉
        </mku-button>
      </div>
    </mku-drawer>

    <mku-drawer v-model="visible2" title="第2个抽屉">
      <div style="padding: 20px;">
        Hello Drawer!
      </div>
    </mku-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      visible2: false
    }
  }
}
</script>
```
:::

### 拖拽宽度

:::demo
```html
<template>
  <div>
    <span>size: {{size}}, 单位px</span>
    <mku-button
      type="primary"
      @click="handleClick">
      可拖拽宽度的抽屉
    </mku-button>

    <mku-drawer
      v-model="visible"
      draggable
      title="可拖拽宽度的抽屉"
      :size.sync="size"
      :mask="true">
      <div style="padding: 20px;">
        通过给size属性的sync写法，可以在拖拽改变宽度时同步更新size值
      </div>
    </mku-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      size: 300
    }
  },
  methods: {
    handleClick () {
      this.visible = true
    }
  }
}
</script>
```
:::

### Drawer Attributes
| 参数          | 说明                                                         |       类型        |            可选值             | 默认值  | 必填 |
| :------------ | :----------------------------------------------------------- | :---------------: | :---------------------------: | :------ | :--- |
| value         | 是否显示，可使用`v-model`双向绑定                            |     `Boolean`     |               -               | -       | 否   |
| direction     | 弹出的方向                                                   |     `String`      | `left | top | right | bottom` | `right` | 否   |
| duration      | 动画执行时间                                                 |     `Number`      |               -               | `300ms` | 否   |
| title         | 标题                                                         |     `String`      |               -               | -       | 否   |
| size          | 抽屉大小尺寸，左右时为宽度，上下时为高度。可以使用`sync`语法 | `String | Number` |               -               | `300px` | 否   |
| closable      | 是否显示关闭按钮                                             |     `Boolean`     |               -               | `true`  | 否   |
| mask          | 是否展示蒙层                                                 |     `Boolean`     |               -               | `true`  | 否   |
| mask-closable | 点击蒙层是否收起抽屉                                         |     `Boolean`     |               -               | `true`  | 否   |
| draggable     | 是否可以拖拽                                                 |     `Boolean`     |               -               | `false` | 否   |

### Drawer Events
| 事件名 | 说明                           | 回调函数参数             |
| :----- | :----------------------------- | :----------------------- |
| change | 组件显示隐藏状态发生变化时触发 | 当前状态：`true | false` |
| close  | 抽屉关闭时触发                 | -                        |
| drag   | 拖拽改变大小时触发             | 当前的大小尺寸，单位px   |

### Drawer Slots
| name      | 说明               |
| :-------- | :----------------- |
| default   | 主体内容           |
| title     | 自定义title        |
| draggable | 自定义拖拽区的内容 |
