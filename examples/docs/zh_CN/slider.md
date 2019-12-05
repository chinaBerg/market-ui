## Slider 滑块

### 基本使用
slider支持拖拽和点击改变其值。
:::demo
```html
<template>
  <mku-row :gutter="20">
    <mku-col span="24" class="doc-mb20">
      <mku-slider :value="20" />
    </mku-col>
    <mku-col span="24">
      <mku-slider v-model="value" />
    </mku-col>
  </mku-row>
</template>

<script>
export default {
  data () {
    return {
      value: 50
    }
  }
}
</script>
```
:::

### 离散值
:::demo
```html
<template>
  <mku-row :gutter="20">
    <mku-col span="24" class="doc-mb20">
      <p class="doc-mb10">隐藏断点</p>
      <mku-slider v-model="value" :step="10" />
    </mku-col>
    <mku-col span="24">
      <p class="doc-mb10">显示断点</p>
      <mku-slider v-model="value2"  :step="10" show-stops />
    </mku-col>
  </mku-row>
</template>

<script>
export default {
  data () {
    return {
      value: 20,
      value2: 30,
    }
  }
}
</script>
```
:::

### 起止值
:::demo
```html
<template>
  <mku-row :gutter="20">
    <mku-col span="24" class="doc-mb20">
      <mku-slider
        v-model="value"
        show-stops
        :min="30"
        :max="50"
      />
    </mku-col>
    <mku-col span="24">
      <mku-slider
        v-model="value2"
        :min="80"
        :max="120"
      />
    </mku-col>
  </mku-row>
</template>

<script>
export default {
  data () {
    return {
      value: 35,
      value2: 92,
    }
  }
}
</script>
```
:::

### 选择范围
:::demo
```html
<template>
  <mku-row :gutter="20">
    <mku-col span="24" class="doc-mb20">
      <p class="doc-mb10">value:{{value}}</p>
      <mku-slider
        v-model="value"
        range
        show-stops
        :min="50"
        :max="80"
        :step="4"
      />
    </mku-col>
    <mku-col span="24">
      <p class="doc-mb10">value:{{value2}}</p>
      <mku-slider
        v-model="value2"
        range
        show-stops
        :min="10"
        :max="150"
        :step="10"
      />
    </mku-col>
  </mku-row>
</template>

<script>
export default {
  data () {
    return {
      value: [58, 62],
      value2: [30, 80]
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
  <mku-slider v-model="value" disabled></mku-slider>
</template>

<script>
export default {
  data () {
    return {
      value: 12
    }
  }
}
</script>
```
:::

### 自定义标记
:::demo
```html
<template>
  <mku-slider v-model="value" :masks="masks" />
</template>

<script>
export default {
  data () {
    return {
      value: 38,
      masks: {
        0: '0ml',
        10: '10ml',
        30: '30ml',
        50: h => {
          return [
            h('span', {
              style: {
                color: '#2d8cf0'
              }
            }, '标准值 '),
            h('strong', {
              style: {
                color: '#2d8cf0'
              }
            }, 50)
          ]
        },
        80: h => h('span', {
          style: {
            color: '#f00'
          }
        }, '极限值 80')
      }
    }
  }
}
</script>
```
:::

### Drawer Attributes
| 参数      | 说明                                                                                        |       类型       | 可选值 | 默认值  | 必填  |
| :-------- | :------------------------------------------------------------------------------------------ | :--------------: | :----: | :-----: | :---: |
| value     | 绑定的值，可使用`v-model`双向绑定                                                           | `Number | Array` |   -    |   `0`   |  否   |
| min       | 选择区间的最小值                                                                            |     `Number`     |   -    |   `0`   |  否   |
| max       | 选择区间的最大值                                                                            |     `Number`     |   -    |  `100`  |  否   |
| step      | 步长                                                                                        |     `Number`     |   -    |   `1`   |  否   |
| showStops | 是否展示离散值的断点                                                                        |    `Boolean`     |   -    | `false` |  否   |
| range     | 开启范围选择，开启后`value`绑定的值为Array                                                  |    `Boolean`     |   -    | `false` |  否   |
| masks     | 自定义标记，`key`值必须为`Number`，值为`String`直接展示，值为`Function`时作为render函数时候 |     `Object`     |   -    |    -    |  否   |
| disabled  | 禁用                                                                                        |    `Boolean`     |   -    | `false` |  否   |

### Drawer Events
| 事件名       | 说明                             | 回调函数参数 |
| :----------- | :------------------------------- | :----------- |
| change       | value发生变化时触发              | 变化后的值   |
| click-change | 点击导致value发生变化时触发      | 变化后的值   |
| drag-change  | 鼠标拖拽松开后导致值发生变化时发 | 变化后的值   |
