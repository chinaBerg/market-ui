## Input 输入框

### 基本用法
:::demo
```html
<template>
  <mku-input
    type="text"
    placeholder="请输入用户名"
    v-model="value"
  />
</template>

<script>
  export default {
    data () {
      return {
        value: ''
      }
    }
  }
</script>
```
:::

### 大小尺寸

可通过 size 属性指定输入框的尺寸，除了默认的大小外，还提供了 large、small 和 mini 三种尺寸

:::demo
```html
<template>
  <div>
    <mku-input
      class="doc-mb10"
      type="text"
      size="large"
      placeholder="请输入用户名"
      v-model="value1"
    />
    <mku-input
      class="doc-mb10"
      type="text"
      size="default"
      placeholder="请输入用户名"
      v-model="value2"
    />
    <mku-input
      type="text"
      size="small"
      placeholder="请输入用户名"
      v-model="value3"
    />
  </div>
</template>

<script>
  export default {
    name: 'ExampleInput',
    data () {
      return {
        value1: '',
        value2: '',
        value3: ''
      }
    }
  }
</script>
```
:::

### 多行文本框

支持高度随内容自动变化

:::demo
```html
<template>
  <mku-input
    type="textarea"
    placeholder="多行文本框"
    v-model="value"
    autosize
  />
</template>

<script>
  export default {
    name: 'ExampleInput',
    data () {
      return {
        value: ''
      }
    }
  }
</script>
```
:::

### 禁用状态
:::demo
```html
<template>
  <mku-input
    type="text"
    placeholder="禁用状态"
    v-model="value5"
    :disabled="true"
  />
</template>

<script>
export default {
  name: 'ExampleInput',
  data () {
    return {
      value5: ''
    }
  }
}
</script>
```
:::

### 只读
:::demo
```html
<template>
  <mku-input
    type="text"
    placeholder="只读的输入框"
    readonly
    v-model="value6"
  />
</template>

<script>
export default {
  name: 'ExampleInput',
  data () {
    return {
      value6: ''
    }
  }
}
</script>
```
:::

### 可清除
:::demo
```html
<template>
  <mku-input
    type="text"
    placeholder="可清除"
    v-model="value7"
    clearable
    @clear="handleClear"
  />
</template>

<script>
export default {
  name: 'ExampleInput',
  data () {
    return {
      value7: ''
    }
  },
  methods: {
    handleClear () {
      alert('handleClear')
    }
  }
}
</script>
```
:::

### 焦点
:::demo
```html
<template>
  <div>
    <mku-input
      ref="input"
      type="text"
      placeholder="请输入用户名"
      v-model="value2"
    />
    <mku-button type="primary" @click="handleButtonClick">
      使得input获取焦点
    </mku-button>
  </div>
</template>

<script>
export default {
  name: 'ExampleInput',
  data () {
    return {
      value: '',
      value2: ''
    }
  },
  methods: {
    handleButtonClick () {
      this.$refs.input.focus()
    }
  }
}
</script>
```
:::

### 自动铺满
:::demo
```html
<template>
  <mku-input
    class="doc-mb10"
    placeholder="块级属性将自动铺满父级容器"
    block
  />
  <mku-input
    type="textarea"
    placeholder="块级属性将自动铺满父级容器"
    block
  />
</template>
```
:::

### Input Attributes
| 参数           | 说明                                       |       类型        |                          可选值                          |  默认值   | 必填  |
| :------------- | :----------------------------------------- | :---------------: | :------------------------------------------------------: | :-------: | :---: |
| type           | 输入框类型                                 |     `String`      | `text`、`password`、`textarea`等所有原生输入框支持的类型 |  `text`   |  否   |
| value、v-model | 绑定的值，v-model可以进行双向数据绑定      | `String | Number` |                            -                             |     -     |   -   |
| size           | input尺寸，仅在非`textarea`下有效          |     `String`      |               `large`、`default`、`small`                | `default` |  否   |
| disabled       | 是否禁用                                   |     `Boolean`     |                            -                             |  `false`  |  否   |
| readonly       | 是否只读                                   |     `Boolean`     |                            -                             |  `false`  |  否   |
| placeholder    | 输入框类型                                 |     `Strimg`      |                            -                             |     -     |  否   |
| clearable      | 是否可以清除输入框，仅在非`textarea`下有效 |     `Boolean`     |                            -                             |  `false`  |  否   |
| autosize       | textarea高度虽内容自动变化                 |     `Boolean`     |                            -                             |  `false`  |  否   |
| rows           | textarea默认的行数                         |     `Boolean`     |                            -                             |  `false`  |  否   |
| autofocus      | 自动获取焦点                               |     `Boolean`     |                            -                             |  `false`  |  否   |
| block          | 块级属性，文本框将自动铺满父级容器         |     `Boolean`     |                            -                             |  `false`  |  否   |

### Input Events
| 事件名 | 说明                                    | 回调函数参数  |
| :----- | :-------------------------------------- | :------------ |
| focus  | 组件获取焦点时触发                      | Event         |
| blur   | 组件失去焦点时触发                      | Event         |
| change | 组件值发生变化时触发                    | value         |
| clear  | 组件由clearable属性定义的按钮清空时触发 | -             |
| clear  | 按下回车时触发                          | event，当前值 |


### Input Methods
| 方法名 | 说明           | 回调函数参数 |
| :----- | :------------- | :----------- |
| focus  | 使组件获取焦点 | Event        |
| blur   | 使组件失去焦点 | Event        |
