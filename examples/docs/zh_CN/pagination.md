## Pagination 分页

### 基本使用
:::demo
```html
<template>
  <div>
    <mku-pagination :total="55"></mku-pagination><br/>
    <mku-pagination :total="77"></mku-pagination><br/>
    <mku-pagination :total="10000"></mku-pagination><br/>
    <mku-alert
      title="提示"
      content="小于7页的时候，默认全部展示；7-8页的时候只会有一个省略号展示；大于等于9页的时候，根据当前选中的情况展示一个或两个省略号"
    ></mku-alert>
  </div>
</template>
```
:::

### 简约类型
:::demo
```html
<template>
  <div>
    <mku-pagination :total="55" type="simple"></mku-pagination><br/>
    <mku-pagination :total="77" type="simple"></mku-pagination><br/>
    <mku-pagination :total="10000" type="simple"></mku-pagination>
  </div>
</template>
```
:::

### 简约类型
:::demo
```html
<template>
  <div>
    <mku-pagination :total="55" type="conjoin"></mku-pagination><br/>
    <mku-pagination :total="77" type="conjoin"></mku-pagination><br/>
    <mku-pagination :total="10000" type="conjoin"></mku-pagination>
  </div>
</template>
```
:::

### 三种尺寸
:::demo
```html
<template>
  <div>
    <mku-pagination :total="55" size="small" type="simple"></mku-pagination><br/>
    <mku-pagination :total="77" size="default" type="simple"></mku-pagination><br/>
    <mku-pagination :total="10000" size="large" type="simple"></mku-pagination><br/>

    <mku-pagination :total="55" size="small"></mku-pagination><br/>
    <mku-pagination :total="77" size="default"></mku-pagination><br/>
    <mku-pagination :total="10000" size="large"></mku-pagination><br/>

    <mku-pagination :total="55" size="small" type="conjoin"></mku-pagination><br/>
    <mku-pagination :total="77" size="default" type="conjoin"></mku-pagination><br/>
    <mku-pagination :total="10000" size="large" type="conjoin"></mku-pagination>
  </div>
</template>
```
:::


### 快捷控件
支持快捷跳转、切换每页展示条数控件。
:::demo
```html
<template>
  <div>
    <mku-pagination
      :total="559"
      size="small"
      type="simple"
      show-total
      show-jumper
      show-page-size
    />
    <br/>
    <mku-pagination
      :current-page.sync="current"
      :total="551"
      show-total
      show-jumper
      show-page-size
      :page-sizes="[25, 50, 75, 100]"
      @current-change="change"
      @prev-click="change"
      @next-mutiple-click="change"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      current: 3
    }
  },
  methods: {
    change (data) {
      this.$notice.success({
        title: '提示',
        content: data
      })
    }
  }
}
</script>
```
:::

### Pagination Attributes

| 参数           | 说明                              | 类型      | 可选值 | 默认值                       | 必选 |
| :------------- | :-------------------------------- | :-------- | :----- | :--------------------------- | :--- |
| total          | 数据总量                          | `Number`  | -      | 0                            | 是   |
| page-size      | 每页数据条数                      | `Number`  | -      | -                            | 否   |
| current-page   | 当前页数，支持`.sync`语法双向绑定 | `Number`  | -      | `1Í`                         | 否   |
| type           | 分页器的类型                      | `String`  | -      | `simple | default | conjoin` | 否   |
| size           | 分页器的尺寸                      | `String`  | -      | `small | default | large`    | 否   | Í |
| show-total     | 显示总数                          | `Boolean` | -      | `false`                      | 否   |
| show-jumper    | 显示快捷跳转控件                  | `Boolean` | -      | `false`                      | 否   |
| show-page-size | 显示每页展示条数控件              | `Boolean` | -      | `false`                      | 否   |
| page-sizes     | 每页展示条数控件的配置            | `Array`   | -      | `[10, 20, 50, 100]`          | 否   |

### Pagination Events

 | 事件名             | 说明                       | 回调函数参数 |
 | :----------------- | :------------------------- | :----------- |
 | current-change     | current发生变化时触发      | 当前current  |
 | prev-click         | 点击上一页按钮时触发       | 当前current  |
 | next-click         | 点击下一页按钮时触发       | 当前current  |
 | prev-mutiple-click | 点击上一多页跳转按钮时触发 | 当前current  |
 | next-mutiple-click | 点击下一多页页跳按钮时触发 | 当前current  |
 | page-size-change   | 切换每页展示条数时触发     | 当前current  |

### Pagination Slots

 | 名称 | 说明               |
 | :--- | :----------------- |
 | prev | 自定义上一页的内容 |
 | next | 自定义下一页的内容 |
