## Message 消息提示

### 基本使用
基本的提示，支持四种不同的提示，默认1.5秒之后关闭

:::demo
```html
<template>
  <mku-button @click="message('info')">info 消息提示</mku-button>
  <mku-button @click="message('error')">error 消息提示</mku-button>
  <mku-button @click="message('success')">success 消息提示</mku-button>
  <mku-button @click="message('warning')">warning 消息提示</mku-button>
</template>

<script>
export default {
  methods: {
    message (type) {
      this.$message[type](`这是一条${type}消息，默认1.5s之后隐藏`)
    }
  }
}
</script>
```
:::


### 自定义显示时长
支持自定义显示时间，默认显示1.5s，支持其他时长或者永久显示
:::demo
```html
<template>
  <mku-button @click="message1">默认1.5s</mku-button>
  <mku-button @click="message2">设置显示时间为3s</mku-button>
  <mku-button @click="message3">不自动关闭，可以显示关闭按钮</mku-button>
</template>

<script>
export default {
  methods: {
    message1 () {
      this.$message.success('这是一条默认的1.5s提示')
    },
    message2 () {
      this.$message.success({
        title: '这是一条3s后关闭的提示',
        duration: 3000
      })
    },
    message3 () {
      this.$message.success({
        title: '这是一条不会自动关闭的提示',
        duration: 0,
        closeable: true
      })
    }
  }
}
</script>
```
:::


### 渲染html
支持自定义显示时间，默认显示1.5s，支持其他时长或者永久显示

::: mku-doc__warning
动态渲染HTML容易导致XSS攻击。应确保render的值是安全可靠的，禁止将用户提交的内容赋值给该属性。
:::

:::demo
```html
<template>
  <mku-button @click="message">自定义html</mku-button>
</template>

<script>
export default {
  data () {
    return {
      nums: 11
    }
  },
  methods: {
    message () {
      const html = `本次共提交<i style="color: red;"> ${this.nums} </i>条数据`
      this.$message.success({
        render: html
      })
    }
  }
}
</script>
```
:::

### Message Attributes

| 参数      | 说明                                                          | 类型     | 可选值 | 默认值 | 必填 |
| :-------- | :------------------------------------------------------------ | :------- | :----- | :----- | :--- |
| title   | 提示的标题内容                                                | String   | -      | -      | 否   |
| render    | 以v-html方式渲染render的内容，设置该属性时自动忽略content内容 | String   | -      | -      | 否   |
| duration  | 提示的时间                                                    | Number   | -      | 1500   | 否   |
| closeable | 是否显示关闭按钮                                              | Boolean  | -      | false  | 否   |
| onShow    | 显示的回调函数                                                | Function | -      | -      | 否   |
| onClose   | 关闭的回调函数                                                | Function | -      | -      | 否   |

### Message 实例方法
| 方法名 | 说明                | 参数 |
| :----- | :------------------ | :--- |
| close  | 关闭当前message实例 | -    |
