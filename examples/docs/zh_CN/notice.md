## Notice 通知

### 基本使用

:::demo
```html
<template>
  <div>
    <mku-button @click="openNotice('open')">普通通知</mku-button>
    <mku-button @click="openNotice('info')">info类型通知</mku-button>
    <mku-button @click="openNotice('error')">error类型通知</mku-button>
    <mku-button @click="openNotice('success')">success类型通知</mku-button>
    <mku-button @click="openNotice('warning')">warning类型通知</mku-button>
  </div>
</template>

<script>
export default {
  methods: {
    openNotice (type) {
      this.$notice[type]({
        title: '提示',
        content: `这是一条 ${type} 类型的通知`
      })
    }
  }
}
</script>
```
:::


### 描述内容

描述内容也支持v-html进行动态渲染。

::: mku-doc__warning
动态渲染HTML容易导致XSS攻击。应确保render的值是安全可靠的，禁止将用户提交的内容赋值给该属性。
:::

:::demo
```html
<template>
  <div>
    <mku-button @click="openNotice">render渲染的描述内容</mku-button>
  </div>
</template>

<script>
export default {
  methods: {
    openNotice () {
      const expirationDate = 3
      const couponNums = 2
      this.$notice.warning({
        title: `提示`,
        render: `<p>您还有 <i style="color:red;">${couponNums} </i>张优惠券将在 <i style="color:red;">${couponNums} </i>天后过期，请及时消费。</p>祝您生活愉快！`
      })
    }
  }
}
</script>
```
:::


### 自定义显示时间

默认显示2.5s，支持自定义显示时间，0表示不会自动关闭。

:::demo
```html
<template>
  <div>
    <mku-button @click="openNotice1">自定义2s关闭</mku-button>
    <mku-button @click="openNotice2">不会自定关闭</mku-button>
  </div>
</template>

<script>
export default {
  methods: {
    openNotice1 () {
      this.$notice.success({
        title: '提示',
        content: '这是一条2s后关闭的通知',
        duration: 2000
      })
    },
    openNotice2 () {
      this.$notice.success({
        title: '提示',
        content: '这是一条不会自动关闭的通知',
        duration: 0,
        onClose: () => {
          this.$message.success('关闭成功')
        }
      })
    }
  }
}
</script>
```
:::

### 事件回调

:::demo
```html
<template>
  <div>
    <mku-button @click="openNotice">notice</mku-button>
  </div>
</template>

<script>
export default {
  methods: {
    openNotice () {
      this.$notice.success({
        title: '提示',
        content: '点击关闭按钮会执行回调函数',
        duration: 0,
        onClose: () => {
          this.$message.success('关闭成功')
        }
      })
    }
  }
}
</script>
```
:::

### Notice Attributes

| 参数      | 说明                                                            |   类型   | 可选值 | 默认值 | 必填  |
| :-------- | :-------------------------------------------------------------- | :------: | :----: | :----: | :---: |
| title     | 提示的标题内容                                                  |  String  |   -    |   -    |  否   |
| content   | 提示的描述部分                                                  |  String  |   -    |   -    |  否   |
| render    | 以v-html方式渲染`render`的内容，设置该属性时自动忽略content内容 |  String  |   -    |   -    |  否   |
| duration  | 提示的时间,单位：`ms`                                           |  Number  |   -    |  2500  |  否   |
| closeable | 是否显示关闭按钮                                                | Boolean  |   -    |  true  |  否   |
| onShow    | 显示的回调函数                                                  | Function |   -    |   -    |  否   |
| onClose   | 关闭的回调函数                                                  | Function |   -    |   -    |  否   |

### Notice 实例方法
| 方法名 | 说明                | 参数 |
| :----- | :------------------ | :--- |
| close  | 关闭当前message实例 | -    |

