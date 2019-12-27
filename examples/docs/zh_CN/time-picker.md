## TimePicker 时间选择器

### 基本使用
如果不传入默认时间，则以当前时间作为默认时间。支持传入Date对象，Date格式的字符串。组件会智能截取字符串中的合法数值，并控制在合法区域内。
:::demo
```html
<template>
  <div>
    <mku-time-picker placeholder="请选择时间" :clearable="false" />
    <mku-time-picker placeholder="请选择时间" v-model="value1" />
    <mku-time-picker placeholder="请选择时间" v-model="value2" />
    <mku-time-picker placeholder="请选择时间" v-model="value3" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: new Date(2019, 12, 24, 2, 12, 45),
      value2: '14:22:34',
      value3: '999:9错误演示88'
    }
  }
}
</script>
```
:::

### 时间格式
支持通过`format-text`设置显示的时间格式，单仅仅是用于展示。同样支持通过`format-value`设置绑定值的输出格式。
:::demo
```html
<template>
  <div>
    <mku-time-picker format-text="HH'mm'ss" v-model="value1"/>
    <mku-time-picker format-text="HH时mm分ss秒" v-model="value2"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: new Date(),
      value2: '14:22:34'
    }
  }
}
</script>
```
:::

### 时间范围
:::demo
```html
<template>
  <div>
    <mku-time-picker
      type="timerange"
      placeholder="请选择时间范围"
      v-model="value"
      @change="handleChange"
      @confirm="handleChange"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ['12:32:44', '11:22:31']
    }
  },
  methods: {
    handleChange(time) {
      this.$message.success(time)
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
  <div>
    <mku-time-picker
      placeholder="请选择时间范围"
      v-model="value"
      readonly
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '12:32:44'
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
    <mku-time-picker
      placeholder="请选择时间范围"
      v-model="value"
      disabled
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '12:32:44'
    }
  }
}
</script>
```
:::

### Time-Picker Attributes
| 参数        | 说明                                                                                                                                                                                                                                                          |          类型           |                                                              可选值                                                               | 默认值         | 必填 |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------: | :-------------------------------------------------------------------------------------------------------------------------------: | :------------- | :--- |
| value       | 绑定的值，可使用`v-model`双向绑定。<br>为Date类型时，例如`new Date()`；<br>也可以为包含2个Date类型或String类型的数组，eg：`['12:22:14', '14:42:45']`；<br>为String类型时，例如`'12:32:42'`，组件会自动解析其中的日期参数，完整的参数请查阅`Date Attributes`。 | `Date | String | Array` |                                                                 -                                                                 | -              | 否   |
| type        | 类型，支持选择单个时间或者选择时间范围                                                                                                                                                                                                                        |        `String`         |                                                        `time | timerange`                                                         | `time`         | 否   |
| formatText  | 格式化时间，仅用于input上展示                                                                                                                                                                                                                                 |        `String`         |                                                                 -                                                                 | `HH:mm:ss`     | 否   |
| formatValue | 格式化时候，仅用于输出，例如change事件的回调参数                                                                                                                                                                                                              |        `String`         |                                                                 -                                                                 | `HH:mm:ss`     | 否   |
| placeholder | 占位符                                                                                                                                                                                                                                                        |        `String`         |                                                                 -                                                                 | -              | 否   |
| separator   | 范围选择时，开始和结束事件直接的连接文本                                                                                                                                                                                                                      |        `String`         |                                                                 -                                                                 | ` - `          | 否   |
| is-foot     | 是否显示底部                                                                                                                                                                                                                                                  |        `Boolean`        |                                                                 -                                                                 | `true`         | 否   |
| clearable   | 可以清除                                                                                                                                                                                                                                                      |        `Boolean`        |                                                                 -                                                                 | `true`         | 否   |
| readonly    | 只读                                                                                                                                                                                                                                                          |        `Boolean`        |                                                                 -                                                                 | `false`        | 否   |
| disabled    | 禁用                                                                                                                                                                                                                                                          |        `Boolean`        |                                                                 -                                                                 | `false`        | 否   |
| placement   | 面板位置                                                                                                                                                                                                                                                      |        `String`         | `top | top-start | top-end | right | right-start | right-end | bottom | bottom-start | bottom-end | left | left-start | left-end` | `bottom-start` | 否   |

### Date Attributes
| 参数  | 说明                                             |
| :---: | :----------------------------------------------- |
|  HH   | 小时，24时制，2位展示。即小于10时会在前面自动补0 |
|   H   | 小时，24时制，1位展示                            |
|  hh   | 小时，12时制，2位展示                            |
|   h   | 小时，12时制，1位展示                            |
|  mm   | 分钟，2位展示                                    |
|   m   | 分钟，1位展示                                    |
|  ss   | 秒，2位展示                                      |
|   s   | 秒，1位展示                                      |

### Time-Picker Events
| 事件名    | 说明                                           | 回调函数参数                        |
| :-------- | :--------------------------------------------- | :---------------------------------- |
| change    | 手动选择时间时触发                             | format-vale格式化后的当前选择的时间 |
| confirm   | 点击确认按钮时触发                             | format-vale格式化后的当前选择的时间 |
| click-now | 点击此刻按钮时触发                             | format-vale格式化后的当前时间       |
| clear     | 通过输入框的清除按钮或底部的清除按钮清空时触发 | -                                   |
