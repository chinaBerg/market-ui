### Steps 步骤条

### 基本使用
:::demo
```html
<template>
  <div>
    <mku-steps :current="current" class="doc-mb20">
      <mku-step title="第一步" content="这是第一条描述"></mku-step>
      <mku-step title="第二步" content="这是第二条描述"></mku-step>
      <mku-step title="第三步" content="这是第三条描述"></mku-step>
      <mku-step title="第四步" content="这是第四条描述"></mku-step>
    </mku-steps>

    <mku-button type="primary" @click="handleNext">下一步</mku-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      current: 0
    }
  },
  methods: {
    handleNext () {
      if (this.current >= 3) {
        this.current = 0
      } else {
        this.current++
      }
    }
  }
}
</script>
```
:::

### 已完成步骤始终显示序号
:::demo
```html
<template>
  <div>
    <mku-steps :current="current" :show-icon="false" class="doc-mb20">
      <mku-step title="第一步" content="这是第一条描述"></mku-step>
      <mku-step title="第二步" content="这是第二条描述"></mku-step>
      <mku-step title="第三步" content="这是第三条描述"></mku-step>
      <mku-step title="第四步" content="这是第四条描述"></mku-step>
    </mku-steps>

    <mku-button type="primary" @click="handleNext">下一步</mku-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      current: 0
    }
  },
  methods: {
    handleNext () {
      if (this.current >= 3) {
        this.current = 0
      } else {
        this.current++
      }
    }
  }
}
</script>
```
:::

### 当前项的状态
:::demo
```html
<template>
  <div>
    <mku-steps :current="2" current-status="wait">
      <mku-step title="第一步" content="这是第一条描述"></mku-step>
      <mku-step title="第二步" content="这是第二条描述"></mku-step>
      <mku-step title="第三步" content="这是第三条描述"></mku-step>
      <mku-step title="第四步" content="这是第四条描述"></mku-step>
    </mku-steps>
    <mku-steps :current="2" current-status="process">
      <mku-step title="第一步" content="这是第一条描述"></mku-step>
      <mku-step title="第二步" content="这是第二条描述"></mku-step>
      <mku-step title="第三步" content="这是第三条描述"></mku-step>
      <mku-step title="第四步" content="这是第四条描述"></mku-step>
    </mku-steps>
    <mku-steps :current="2" current-status="finish">
      <mku-step title="第一步" content="这是第一条描述"></mku-step>
      <mku-step title="第二步" content="这是第二条描述"></mku-step>
      <mku-step title="第三步" content="这是第三条描述"></mku-step>
      <mku-step title="第四步" content="这是第四条描述"></mku-step>
    </mku-steps>
    <mku-steps :current="2" current-status="error">
      <mku-step title="第一步" content="这是第一条描述"></mku-step>
      <mku-step title="第二步" content="这是第二条描述"></mku-step>
      <mku-step title="第三步" content="这是第三条描述"></mku-step>
      <mku-step title="第四步" content="这是第四条描述"></mku-step>
    </mku-steps>
  </div>
</template>
```
:::

### 居中展示
:::demo
```html
<template>
  <div>
    <mku-steps center>
      <mku-step title="第一步" content="这是第一条描述"></mku-step>
      <mku-step title="第二步" content="这是第二条描述"></mku-step>
      <mku-step title="第三步" content="这是第三条描述"></mku-step>
      <mku-step title="第四步" content="这是第四条描述"></mku-step>
    </mku-steps>
  </div>
</template>
```
:::

### 自定义title和content
:::demo
```html
<template>
  <div>
    <mku-steps center>
      <mku-step>
        <template slot="title">
          <span class="doc-demo__steps-title">这是一条自定义的title</span>
        </template>
        <template slot="content">
          <span class="doc-demo__steps-content">这是一条自定义的content</span>
        </template>
      </mku-step>
      <mku-step>
        <template slot="title">
          <span class="doc-demo__steps-title">这是一条自定义的title</span>
        </template>
        <template slot="content">
          <span class="doc-demo__steps-content">这是一条自定义的content</span>
        </template>
      </mku-step>
      <mku-step>
        <template slot="title">
          <span class="doc-demo__steps-title">这是一条自定义的title</span>
        </template>
        <template slot="content">
          <span class="doc-demo__steps-content">这是一条自定义的content</span>
        </template>
      </mku-step>
    </mku-steps>
  </div>
</template>
```
:::

### 垂直布局
:::demo
```html
<template>
  <div>
    <mku-button type="primary"  @click="handleNext">下一步</mku-button>

    <mku-steps :current="current" direction="vertical">
      <mku-step title="第一步" content="这是第一条描述"></mku-step>
      <mku-step title="第二步" content="这是第二条描述"></mku-step>
      <mku-step title="第三步" content="这是第三条描述"></mku-step>
      <mku-step title="第四步" content="这是第四条描述"></mku-step>
    </mku-steps>
  </div>
</template>

<script>
export default {
  data () {
    return {
      current: 2
    }
  },
  methods: {
    handleNext () {
      if (this.current >= 3) {
        this.current = 0
      } else {
        this.current++
      }
    }
  }
}
</script>
```
:::

### Steps Attributes

| 参数           | 说明                                             |   类型    |              可选值               |   默认值   | 必选  |
| :------------- | :----------------------------------------------- | :-------: | :-------------------------------: | :--------: | :---: |
| current        | 当前的步骤                                       | `Number`  |                 -                 |    `0`     |  否   |
| current-status | 当前步骤的状态                                   | `String`  | `wait | process | finish | error` | `process`  |  否   |
| direction      | 步骤条的方向，支持水平和垂直两种方式             | `String`  |      `horizontal | vertical`      | `vertical` |  否   |
| center         | 是否内容居中                                     | `Boolean` |                 -                 |  `false`   |  否   |
| show-icon      | 已完成的步骤是否展示对号图标，也支持依旧展示序号 | `Boolean` |                 -                 |   `true`   |  否   |

### Step Attributes
| 参数    | 说明       |   类型   | 可选值 | 默认值 | 必选  |
| :------ | :--------- | :------: | :----: | :----: | :---: |
| title   | step的标题 | `String` |   -    |  `''`  |  否   |
| content | step的内容 | `String` |   -    |   -    |  否   |

### Step Slots
| 名称    | 说明       |
| :------ | :--------- |
| title   | 自定义标题 |
| content | 自定义内容 |
