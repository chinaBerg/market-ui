## Select 选择器

### 基本使用

:::demo
```html
<template>
  <div>
    <mku-select style="width: 230px;">
      <mku-options value="1">1</mku-options>
      <mku-options value="2">2</mku-options>
      <mku-options value="3">3</mku-options>
      <mku-options value="4">4</mku-options>
      <mku-options value="5">5</mku-options>
      <mku-options value="6">6</mku-options>
    </mku-select>
  </div>
</template>
```
:::

### 禁用
支持禁用`select`和禁用`options`

:::demo
```html
<template>
  <div>
    <mku-select
      class="doc-select doc-select-disabled"
      disabled
      placeholder="select被禁用">
      <mku-options value="1">1</mku-options>
      <mku-options value="2">2</mku-options>
      <mku-options value="3">3</mku-options>
      <mku-options value="4">4</mku-options>
      <mku-options value="5">5</mku-options>
      <mku-options value="6">6</mku-options>
    </mku-select>

    <mku-select
      class="doc-select-disabled"
      placeholder="部分options被禁用">
      <mku-options value="1" disabled>禁用项1</mku-options>
      <mku-options value="2">橘子</mku-options>
      <mku-options value="3" disabled>禁用项2</mku-options>
      <mku-options value="4">苹果</mku-options>
      <mku-options value="5">菠萝</mku-options>
      <mku-options value="6">西瓜</mku-options>
    </mku-select>
  </div>
</template>
```
:::

### 多选
:::demo
```html
<template>
  <div>
    <p>选中的值：{{value}}</p>
    <mku-select multiple class="doc-select" v-model="value">
      <mku-options value="1">选项1</mku-options>
      <mku-options value="2">选项2</mku-options>
      <mku-options value="3">选项3</mku-options>
      <mku-options value="4">选项4</mku-options>
      <mku-options value="5">选项5</mku-options>
      <mku-options value="6">选项6</mku-options>
    </mku-select>
  </div>
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

### 清空
仅可以在非多选的时候清空。

:::demo
```html
<template>
  <div>
    <mku-select clearable class="doc-select" @clear="handleClear">
      <mku-options value="1">选项1</mku-options>
      <mku-options value="2">选项2</mku-options>
      <mku-options value="3">选项3</mku-options>
      <mku-options value="4">选项4</mku-options>
      <mku-options value="5">选项5</mku-options>
      <mku-options value="6">选项6</mku-options>
    </mku-select>
  </div>
</template>

<script>
  export default {
    methods: {
      handleClear () {
        this.$message.success('触发了clear事件')
      }
    }
  }
</script>
```
:::


### 自定义options

:::demo
```html
<template>
  <div>
    <p>当前选中项：{{value}}</p>
    <mku-select class="doc-select" v-model="value">
      <mku-options :value="item.value" :label="item.name" v-for="item in list">
        <div class="doc-options-iphones">
          <span class="doc-options-iphones__title">{{item.name}}</span>
          <span class="doc-options-iphones__price">¥{{item.price}}</span>
        </div>
      </mku-options>
    </mku-select>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value: '',
        list: [
          { name: '苹果', value: 1, price: 9999 },
          { name: '华为', value: 2, price: 3888},
          { name: '三星', value: 3, price: 2999 },
          { name: '小米', value: 4, price: 888 },
          { name: '黑莓', value: 5, price: 1999 }
        ]
      }
    },
    methods: {
      handleClear () {
        this.$message.success('触发了clear事件')
      }
    }
  }
</script>
```
:::
