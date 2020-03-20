## Backtop 回到顶部

### 基本使用
:::demo
```html
<template>
  <div>
    <p>滚动距离大于等于200时，将显示滚动组件，请将目光移动到右下角</p>
    <mku-backtop target=".main_content"></mku-backtop>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick (name) {
      this.$message.success(`点击了：${name}`)
    }
  }
}
</script>
```
:::

### 自定义内容
支持自定义样式
:::demo
```html
<template>
  <div>
    <mku-backtop
      target=".main_content"
      :height="0"
      :fixed="false">
      <mku-button type="primary">点击滚动到顶部</mku-button>
    </mku-backtop>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick (name) {
      this.$message.success(`点击了：${name}`)
    }
  }
}
</script>
```
:::

### Backtop Attributes
| 参数         | 说明                                                                  |       类型        | 可选值 |            默认值             | 必填  |
| :----------- | :-------------------------------------------------------------------- | :---------------: | :----: | :---------------------------: | :---: |
| target       | 滚动目标，可直接传入dom节点，否则`document.querySelector`方法查询元素 | `String | Object` |   -    |            `body`             |  否   |
| scroll       | 滚动到距离顶部的位置，默认回到顶部                                    |     `Number`      |   -    |              `0`              |  否   |
| duration     | 滚动时间，单位`ms`                                                    |     `Number`      |   -    |             `300`             |  否   |
| scroll-top   | 滚动到距离顶部的位置，默认回到顶部                                    |     `Number`      |   -    |              `0`              |  否   |
| height       | 容器滚动到该值时才显示Backtop组件，设置`0`可一直展示                  |     `Number`      |   -    |             `200`             |  否   |
| fixed        | 是否使用固定定位                                                      |     `Boolean`     |   -    |             `200`             |  否   |
| fixed-config | `fixed`属性的`left、top、right、right`值，仅`fixed`开启后有效         |     `Object`      |   -    | `{right: 40px, bottom: 60px}` |  否   |

### Backtop Events
| 事件名        | 说明           | 回调函数参数 |
| :------------ | :------------- | :----------- |
| scroll        | 容器滚动时触发 | 当前滚动的值 |
| scroll-finish | 滚动完成后触发 | -            |

### Backtop Slots
| name    | 说明                    |
| :------ | :---------------------- |
| default | 自定义Backtop组件的内容 |
