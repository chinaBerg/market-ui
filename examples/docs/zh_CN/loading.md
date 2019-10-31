## Loading 加载中

### 基本使用
支持自定义指令的方式使用loading。

:::demo
```html
<template>
  <div class="doc-loading__demo">
    <div
      class="doc-loading__area"
      v-loading="isLoading">
    </div>
    <div class="doc-loading__operate">
      <mku-switch v-model="isLoading"></mku-switch>
      <span>开启/关闭Loading</span>
    </div>

    <mku-alert
      style="margin-top: 10px;"
      title="自定义属性："
      content="mku-loading-textz自定义提示内容；mku-loading-text-color自定义文本颜色；mku-loading-icon-color自定义图标颜色；mku-loading-background自定义背景色"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: true
    }
  }
}
</script>
```
:::

### 自定义
支持自定义text文本、background

:::demo
```html
<template>
  <div class="doc-loading__demo">
    <div
      class="doc-loading__area"
      v-loading="isLoading"
      mku-loading-text="自定义的加载提示～"
      mku-loading-text-color="#fff"
      mku-loading-icon-color="#fff"
      mku-loading-background="rgba(0, 0, 0, .7)">
    </div>
    <div class="doc-loading__operate">
      <mku-switch v-model="isLoading"></mku-switch>
      <span>开启/关闭Loading</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: true
    }
  }
}
</script>
```
:::

### 全屏Loading
作为指令打开全屏loading时，需要screen修饰符。
Js调用打开全屏loading时，需要设置screen属性。
Js调用创建的全屏loading是一个单例。

:::demo
```html
<template>
  <div class="doc-loading__demo">
    <mku-button
      type="primary"
      v-loading.screen="isLoading"
      mku-loading-text="自定义的加载提示～"
      mku-loading-text-color="#fff"
      mku-loading-icon-color="#fff"
      mku-loading-background="rgba(0, 0, 0, .7)"
      @click="openLoading"
    >
      指令
    </mku-button>

    <mku-button type="primary" @click="openLoading2">
      Js调用
    </mku-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    openLoading () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    },
    openLoading2 () {
      const loading = this.$loading({
        screen: true,
        background: 'rgba(255, 255, 255, .7)'
      })
      setTimeout(() => {
        loading.close()
      }, 1500)
    },
  }
}
</script>
```
:::


### 通过JS调用
支持通过JS打开全屏和容器的Loading效。

:::demo
```html
<template>
  <div class="doc-loading__demo">
    <div class="doc-loading__area" id="doc-loading__area">
      容器Loading竟会在此展示
    </div>

    <div class="doc-loading__operate">
      <mku-button
        style="margin-right: 20px;"
        @click="openLocalLoading">
        打开Loading
      </mku-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    openLocalLoading () {
      const loading = this.$loading({
        target: '#doc-loading__area'
      })
      setTimeout(() => {
        loading.close()
      }, 1500)
    }
  }
}
</script>
```
:::

### Loading 参数
#### Js调用时的参数Options

| 参数       | 说明                                | 类型                | 可选值 | 默认值    | 必选 |
| :--------- | :---------------------------------- | :------------------ | :----- | :-------- | :--- |
| target     | Loading的目标对象，非screen模式必填 | `String | Node节点` | -      | -         | 否   |
| screen     | 是否作为全屏loading                 | `Boolean`           | -      | `false`   | 否   |
| text       | Loading的文字提示                   | `String`            | -      | `加载中`  | 否   |
| text-color | Loading的文字颜色                   | `String`            | -      | `#515a6e` | 否   |
| icon-color | Loading的图标颜色                   | `String`            | -      | `#2d8cf0` | 否   |
| background | Loading的背景色                     | `String`            | -      | `#fff`    | 否   |
