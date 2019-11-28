## Progress 进度条

### 基本使用
:::demo
```html
<template>
  <div class="doc-progress-wrap">
    <mku-progress :percent="10" class="doc-mb10" />
    <mku-progress :percent="30" status="success" class="doc-mb10" />
    <mku-progress :percent="50" status="warning" class="doc-mb10" />
    <mku-progress :percent="80" status="error" />
  </div>
</template>
```
:::

### 尺寸
:::demo
```html
<template>
  <div class="doc-progress-wrap">
    <mku-progress :percent="24" :size="12" color="" class="doc-mb20"></mku-progress>
    <mku-progress :percent="36" :size="16" class="doc-mb20"></mku-progress>
    <mku-progress :percent="58" :size="18"></mku-progress>
  </div>
</template>
```
:::

### 颜色
支持自定义颜色和更复杂的背景色渐变
:::demo
```html
<template>
  <div class="doc-progress-wrap">
    <mku-progress
      class="doc-mb20"
      :percent="34"
      :size="14"
      :background="['to bottom', '#e2e1e1', '#777', '#e2e1e1']"
      color="#4282bb"
    />
    <mku-progress :percent="58" :size="14" :color="['#f30808', '#f7f973']" class="doc-mb20"></mku-progress>
    <mku-progress :percent="68" :size="14" :color="['to right', '#f30808', '#f7f973']" class="doc-mb20"></mku-progress>
    <mku-progress :percent="88" :size="14" :color="['45deg', '#f30808', '#2dd7f5', '#f7f973']" class="doc-mb20"></mku-progress>
  </div>
</template>
```
:::

### active动效
:::demo
```html
<template>
  <div class="doc-progress-wrap">
    <mku-progress :percent="38" :size="14" active-animate="line" class="doc-mb20"></mku-progress>
    <mku-progress :percent="88" :size="14" active-animate="zebra"></mku-progress>
  </div>
</template>
```
:::

### 自定义文字提示部分
:::demo
```html
<template>
  <div class="doc-progress-wrap">
    <mku-button class="doc-mb10" type="primary" @click="handleAdd">add 5</mku-button>
    <mku-progress
      :percent="percent"
      :size="14"
      :text-render="textRender">
    </mku-progress>
  </div>
</template>

<script>
export default {
  data () {
    return {
      percent: 38
    }
  },
  methods: {
    textRender (h, percent) {
      if (percent === 100) return h('span', {
        style: { color: 'green' }
      }, '下载完成')
      return h('span', {
        style: {
          marginLeft: '10px'
        }
      }, [
        `已下载`,
        h('i', {
          style: { color: '#f00' }
        }, percent),
        '%'
      ])
    },
    handleAdd () {
      if (this.percent >= 100) {
        this.percent = 100
      } else {
        this.percent += 5
      }
    }
  }
}
</script>
```
:::

### 文字提示的位置
:::demo
```html
<template>
  <div class="doc-progress-wrap">
    <mku-progress :percent="28" :size="14" class="doc-mb20" text-placement="end"/>
    <mku-progress :percent="48" :size="14" class="doc-mb20" text-placement="start"/>
    <mku-progress :percent="68" :size="20" class="doc-mb20" text-placement="end-inside"/>
    <mku-progress :percent="88" :size="20" class="doc-mb30" text-placement="start-inside"/>
    <mku-progress :percent="50" :size="20" class="doc-mb30" text-placement="top-follow" :auto-success="false"/>
    <mku-progress :percent="100" :size="20" class="doc-mb30" text-placement="top-follow" :auto-success="false"/>
    <mku-progress :percent="100" :size="20" text-placement="top-follow" />
  </div>
</template>
```
:::

### Progress Attributes
| 参数           | 说明                                              |       类型       |                         可选值                         |  默认值   | 必填  |
| :------------- | :------------------------------------------------ | :--------------: | :----------------------------------------------------: | :-------: | :---: |
| percent        | 百分比                                            |     `Number`     |                           -                            | `0 ~ 100` |  是   |
| status         | 进度条状态                                        |     `String`     |          `active | success | warning | error`          | `active`  |  否   |
| auto-success   | `percent`为`100`时，自动将`status`切换为`success` |    `Boolean`     |                           -                            |  `true`   |  否   |
| color          | 进度条颜色，支持复杂的渐变色                      | `String | Array` |                           -                            |     -     |  否   |
| background     | 进度条背景色，支持复杂的渐变色                    | `String | Array` |                           -                            |     -     |  否   |
| active-animate | 进度条active时的动画效果                          |     `String`     |                 `none | zebra | line`                  |  `none`   |  否   |
| size           | 进度大小尺寸，单位`px`                            |     `Number`     |                           -                            |    `0`    |  否   |
| text-hidden    | 隐藏进度条提示部分                                |     `Number`     |                           -                            |  `3000`   |  否   |
| text-render    | 自定义提示部分内容，接收render函数                |    `Function`    |                           -                            |     -     |  否   |
| text-placement | 提示部分所在的位置                                |     `String`     | `start | end | start-inside | end-inside | top-follow` |   `end`   |  否   |
