## DatePicker 日期选择器

### 基本使用
:::demo
```html
<template>
  <div>
    <mku-date-picker
      v-model="value"
      placeholder="请选择日期"
    />
    <mku-date-picker
      v-model="value2"
      placeholder="请选择日期"
    />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value: '',
        value2: new Date(2019, 11, 12)
      }
    }
  }
</script>
```
:::

### 日期范围
:::demo
```html
<template>
  <div>
    <mku-date-picker
      type="date-range"
      v-model="value1"
      format-value="YYYY-MM-DD"
      placeholder="请选择日期范围"
    />
    <mku-date-picker
      type="date-range"
      v-model="value2"
      format-value="YYYY-MM-DD"
      placeholder="请选择日期范围"
    />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value1: '',
        value2: [new Date(2019, 12, 12), new Date(2019, 12, 20)],
      }
    }
  }
</script>
```
:::

### 日期时间选择器
:::demo
```html
<template>
  <div>
    <mku-date-picker
      type="datetime"
      :value="value1"
      placeholder="选择日期时间"
    />
    <mku-date-picker
      type="datetime"
      v-model="value2"
      placeholder="选择日期时间"
    />
    <mku-date-picker
      type="datetime-range"
      v-model="value3"
      format-value="YYYY-MM-DD HH:mm:ss"
      placeholder="选择日期时间"
      unlink-panels
    />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value1: '',
        value2: Date.now(),
        value3: [],
      }
    }
  }
</script>
```
:::

### 面板联动和非联动
:::demo
```html
<template>
  <div>
    <mku-date-picker
      type="date-range"
      v-model="value1"
      format-value="YYYY-MM-DD"
      placeholder="默认联动"
    />
    <mku-date-picker
      type="date-range"
      v-model="value2"
      format-value="YYYY-MM-DD"
      placeholder="支持不联动"
      unlink-panels
    />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value1: [],
        value2: [],
      }
    }
  }
</script>
```
:::

### 只读和禁用
只读模式下，输入框不可以手动编辑。而禁用之后，整个日期组件不可以操作。
:::demo
```html
<template>
  <div>
    <mku-date-picker
      v-model="value1"
      readonly
      placeholder="请选择时间"
    />
    <mku-date-picker
      v-model="value2"
      disabled
      placeholder="请选择时间"
    />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value1: [],
        value2: [],
      }
    }
  }
</script>
```
:::


### Date-Picker Attributes
| 参数        | 说明                                                                                                                                                                                                                                                                                          |               类型               |                                                              可选值                                                               | 默认值         | 必填 |
| :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: | :------------- | :--- |
| value       | 绑定的值，可使用`v-model`双向绑定。<br>为Date类型时，例如`new Date()`；<br>也可以为包含2个Date类型、String类型或者时间戳的数组，eg：`['2019-12-22 12:22:14', Date.now()]`；<br>为String类型时，例如`'2019-12-22 12:22:14'`，组件会自动解析其中的日期参数，完整的参数请查阅`Date Attributes`。 | `Date | String | Number | Array` |                                                                 -                                                                 | -              | 否   |
| type        | 类型，支持选择日期、日期时间、日期范围、日期时间范围。                                                                                                                                                                                                                                        |             `String`             |                                          `date | datetime | date-range | datetime-range`                                          | `time`         | 否   |
| formatText  | 格式化时间，仅用于input上展示。`date | date-range`类型时默认为"YYYY:MM:DD"; `datetime | datetime-range`类型时默认为"YYYY:MM:DD HH:mm:ss";                                                                                                                                                     |             `String`             |                                                                 -                                                                 | -              | 否   |
| formatValue | 格式化时间，用于输出，默认为Date对象。例如change事件的回调参数                                                                                                                                                                                                                                |             `String`             |                                                                 -                                                                 | `HH:mm:ss`     | 否   |
| placeholder | 文本提示占位符                                                                                                                                                                                                                                                                                |             `String`             |                                                                 -                                                                 | -              | 否   |
| separator   | 范围选择时，开始和结束事件直接的连接文本                                                                                                                                                                                                                                                      |             `String`             |                                                                 -                                                                 | ` ～ `         | 否   |
| clearable   | 可以清除                                                                                                                                                                                                                                                                                      |            `Boolean`             |                                                                 -                                                                 | `true`         | 否   |
| readonly    | 只读                                                                                                                                                                                                                                                                                          |            `Boolean`             |                                                                 -                                                                 | `false`        | 否   |
| disabled    | 禁用                                                                                                                                                                                                                                                                                          |            `Boolean`             |                                                                 -                                                                 | `false`        | 否   |
| placement   | 面板位置                                                                                                                                                                                                                                                                                      |             `String`             | `top | top-start | top-end | right | right-start | right-end | bottom | bottom-start | bottom-end | left | left-start | left-end` | `bottom-start` | 否   |

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

### Date-Picker Events
| 事件名  | 说明                                           | 回调函数参数                        |
| :------ | :--------------------------------------------- | :---------------------------------- |
| change  | value绑定值发生变化时触发，即v-model时生效     | format-vale格式化后的当前选择的时间 |
| confirm | 点击确认按钮时触发                             | format-vale格式化后的当前选择的时间 |
| clear   | 通过输入框的清除按钮或底部的清除按钮清空时触发 | -                                   |
