## Switch 开关

### 基本使用

:::demo
```html
<template>
  <div>
    <mku-switch v-model="value" @change="handleChange" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: true
    }
  },
  methods: {
    handleChange (val) {
      this.$message.success(`switch状态:${val}`)
    }
  }
}
</script>
```
:::

### 三种尺寸

:::demo
```html
<template>
  <div>
    <mku-switch size="large" />
    <mku-switch size="default" />
    <mku-switch size="small" />
  </div>
</template>
```
:::

### 自定义颜色

:::demo
```html
<template>
  <div>
    <mku-switch active-color="#ff0000" inactive-color="#984747" :value="true"/>
    <mku-switch active-color="#fdf000" inactive-color="#5a5823" :value="true"/>
    <mku-switch active-color="#1fd2ea" inactive-color="#89b7bd" :value="true"/>
    <mku-switch active-color="#ea1faf" inactive-color="#984781" :value="true"/>
  </div>
</template>
```
:::

### 文字和图标

:::demo
```html
<template>
  <div>
    <mku-switch size="large">
      <span slot="close">关</span>
      <span slot="open">开</span>
    </mku-switch>
    <mku-switch size="default">
      <mku-icon type="arrow-to-right" slot="close"/>
      <mku-icon type="arrow-to-left" slot="open"/>
    </mku-switch>
    <mku-switch size="small">
      <span slot="close">关</span>
      <span slot="open">开</span>
    </mku-switch>
  </div>
</template>
```
:::

### 禁用状态

:::demo
```html
<template>
  <div>
    <mku-switch disabled v-model="value" />
    <mku-switch disabled v-model="value2" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: true,
      value2: false
    }
  }
}
</script>
```
:::

### loading
laoding的颜色取open时的背景色

:::demo
```html
<template>
  <div>
    <mku-switch loading />
    <mku-switch loading :value="true"/>
    <mku-switch loading :value="true" active-color="#f00"/>
  </div>
</template>
```
:::

###  自定义`true`和`false`的值
:::demo
```html
<template>
  <div>
    <mku-switch
      v-model="value"
      :true-value="1"
      :false-value="0"
      @change="handleChange"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 1
    }
  },
  methods: {
    handleChange (val) {
      this.$message.success(`switch状态:${val}`)
    }
  }
}
</script>
```
:::


### Switch Attributes

| 参数           | 说明                                    | 类型                        | 可选值                    | 默认值        | 必填 |
| :------------- | :-------------------------------------- | :-------------------------- | :------------------------ | :------------ | :--- |
| value          | 绑定的值，使用`v-model`进行双向数据绑定 | `String | Number | Boolean` | -                         | -             | 否   |
| width          | 自定义switch的宽度                      | `Number`                    | -                         | 50 （单位px） | 否   |
| size           | switch尺寸                              | String                      | `large | default | small` | `default`     | 否   |
| active-color   | open时的背景色                          | String                      | -                         | 主题蓝        | 否   |
| inactive-color | close时的背景色                         | String                      | -                         | 主题灰        | 否   |
| true-value     | 自定义true的值                          | `String | Number | Boolean` | -                         | `true`        | 否   |
| false-value    | 自定义false的值                         | `String | Number | Boolean` | -                         | `false`       | 否   |
| disabled       | 禁用switch                              | Boolean                     | -                         | `false`       | 否   |
| loading        | 展示loading效果，此时点击不会更改状态   | Boolean                     | -                         | `false`       | 否   |

### Switch Events
| 事件名        | 说明                 | 回调函数参数                                                                                                                                                                            |
| :------------ | :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| change        | 在switch值变化时触发     | 返回switch值                                                                                                                                                                  |
