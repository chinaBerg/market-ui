## Select 选择器

### 基本使用

:::demo
```html
<template>
  <div>
    <mku-select class="doc-select">
      <mku-options :value="item.value" v-for="item in optionsList" :key="item.value">
        {{item.name}}
      </mku-options>
    </mku-select>

    <mku-select class="doc-select" v-model="value1">
      <mku-options :value="item.value" v-for="item in optionsList" :key="item.value">
        {{item.name}}
      </mku-options>
    </mku-select>

    <mku-select class="doc-select" v-model="value2" multiple>
      <mku-options :value="item.value" v-for="item in optionsList" :key="item.value">
        {{item.name}}
      </mku-options>
    </mku-select>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value1: 0,
        value2: [0, 1],
        optionsList: [
          { name: 'vue', value: 0 },
          { name: 'React', value: 1 },
          { name: 'Ng', value: 2 },
          { name: 'Jq', value: 3 },
          { name: 'RxJs', value: 4 }
        ]
      }
    }
  }
</script>
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
        value: []
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

### 分组

:::demo
```html
<template>
  <div>
    <mku-select class="doc-select">
      <mku-options-group label="水果">
        <mku-options value="1">荔枝</mku-options>
        <mku-options value="2">橘子</mku-options>
        <mku-options value="3">西瓜</mku-options>
      </mku-options-group>
      <mku-options-group label="坚果">
        <mku-options value="4">夏威夷果</mku-options>
        <mku-options value="5">腰果</mku-options>
        <mku-options value="6">瓜子</mku-options>
      </mku-options-group>
    </mku-select>
  </div>
</template>
```
:::


### Select Attributes

| 参数        | 说明                                    | 类型                                        | 可选值                                                                                                                            | 默认值         | 必填 |
| :---------- | :-------------------------------------- | :------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------- | :------------- | :--- |
| value       | Select绑定的值，可使用`v-model`双向绑定 | 单选时：`Object | Number`， 多选时：`Array` | -                                                                                                                                 | -              | 否   |
| multiple    | 支持多选                                | `Boolean`                                   | -                                                                                                                                 | -              | -    | 否 |
| placeholder | 选择框默认的占位符内容                  | `String`                                    | -                                                                                                                                 | `请选择`       | 否   |
| placement   | 下拉菜单出现的位置                      | `String`                                    | `top | top-start | top-end | right | right-start | right-end | bottom | bottom-start | bottom-end | left | left-start | left-end` | `bottom-start` | 否   |
| disabled    | 禁用当前Select                          | `Boolean`                                   | -                                                                                                                                 | false          | 否   |
| clearable   | 是否可清除，仅单选时有效                | `Boolean`                                   | -                                                                                                                                 | false          | 否   |

### Select Events

 | 事件名      | 说明                   | 回调函数参数   |
 | :---------- | :--------------------- | :------------- |
 | change      | 选中项发生变化时触发   | 选中项的值     |
 | clear       | 清空时触发             | -              |
 | drop-change | dropdown展开收起时触发 | dropdown的状态 |

 ### Options Attributes

| 参数     | 说明                                                                                                         | 类型              | 可选值 | 默认值  | 必填 |
| :------- | :----------------------------------------------------------------------------------------------------------- | :---------------- | :----- | :------ | :--- |
| value    | options的值                                                                                                  | `String | Number` | -      | -       | 是   |
| label    | Opitons显示的内容优先级：slot > label > value; Select显示的文本内容优先级：label > slot读取的textContent文本 | `String | Number` | -      | -       | 否   |
| disabled | 禁用当前选项                                                                                                 | `Boolean`         | -      | `false` | 否   |

### Options Slot

| 名称  | 说明       |
| :---- | :--------- |
| default | 自定义Options的内容 |

### Options-Group Attributes

| 参数  | 说明       | 类型     | 可选值 | 默认值 | 必填 |
| :---- | :--------- | :------- | :----- | :----- | :--- |
| label | 分组的名称 | `String` | -      | -      | 否   |

### Options-Group Slot

| 名称  | 说明       |
| :---- | :--------- |
| default | 自定义分组的内容 |