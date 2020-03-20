## Checkbox 复选框

### 基本使用
可以使用`v-model`进行双向数据绑定。

:::demo
```html
<template>
  <div>
    <mku-checkbox v-model="value">同意用户协议</mku-checkbox>
    <p>当前checkbox的值：{{value}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: false
    }
  }
}
</script>
```
:::


### 禁用

:::demo
```html
<template>
  <div>
    <mku-checkbox v-model="value" disabled>禁用的复选框</mku-checkbox>
    <mku-checkbox v-model="value2" disabled>禁用的复选框</mku-checkbox>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: false,
      value2: true
    }
  }
}
</script>
```
:::

### 组合使用

:::demo
```html
<template>
  <div>
  <mku-checkbox
    v-model="checkAll"
    :indeterminate="indeterminate"
    @change="handleAllChange"
  >
    全部
  </mku-checkbox>

  <mku-checkbox-group v-model="value" @change="handleGroupChange">
    <mku-checkbox label="a">选项1</mku-checkbox>
    <mku-checkbox label="b">选项2</mku-checkbox>
    <mku-checkbox label="c">选项3</mku-checkbox>
    <mku-checkbox label="d">选项4</mku-checkbox>
  </mku-checkbox-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checkAll: false,
      indeterminate: true,
      value: ['a', 'b']
    }
  },
  methods: {
    handleAllChange (val) {
      this.indeterminate = false
      this.value = val ? ['a', 'b', 'c', 'd'] : []
      console.log(val)
    },
    handleGroupChange (val) {
      this.indeterminate = val.length > 0 && val.length < 4
      this.checkAll = val.length === 4
    }
  }
}
</script>
```
:::


### Checkbox Attributes

| 参数          | 说明                                                                  | 类型                    | 可选值 | 默认值  | 必填 |
| :------------ | :-------------------------------------------------------------------- | :---------------------- | :----- | :------ | :--- |
| value         | 复选框绑定的值，可以使用`v-model`进行双向数据绑定。仅单独使用时有效。 | `String|Boolean|Number` | -      | false   | 否   |
| label         | 指定当前选项的`value`值，仅组合使用时有效。                           | `String|Boolean|Number` | -      | false   | 否   |
| trueValue     | 自定义`true`的值                                                      | `String|Boolean|Number` | -      | true    | 否   |
| falseValue    | 自定义`false`的值                                                     | `String|Boolean|Number` | -      | false   | 否   |
| disabled      | 禁用复选框                                                            | `Boolean`               | -      | `false` | 否   |
| indeterminate | 设置半选状态，仅单独使用时有效                                        | `Boolean`               | -      | `false` | 否   |

### Checkbox Events

 | 事件名 | 说明                     | 回调函数参数 |
 | :----- | :----------------------- | :----------- |
 | change | 复选框选中状态变化时触发 | `true|false` |

 ### Checkbox-Group Attributes

| 参数  | 说明       | 类型    | 可选值 | 默认值 | 必填 |
| :---- | :--------- | :------ | :----- | :----- | :--- |
| value | 设置选中项 | `Array` | -      | `[]`   | 否   |

### Checkbox-Group Events

 | 事件名 | 说明                            | 回调函数参数            |
 | :----- | :------------------------------ | :---------------------- |
 | change | `check-group`选中状态变化时触发 | 所有选中项的`label`集合 |