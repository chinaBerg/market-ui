## Tabs 选项卡

### 基本使用
:::demo
```html
  <template>
    <div>
      <mku-tabs v-model="value">
        <mku-tab-pane label="网页" name="value1" class="doc-tabs__pane">
          网页的内容
        </mku-tab-pane>
        <mku-tab-pane label="视频资源" name="value2" class="doc-tabs__pane">
          视频资源的内容
        </mku-tab-pane>
        <mku-tab-pane label="音乐" name="value3" class="doc-tabs__pane">
          音乐的内容
        </mku-tab-pane>
        <mku-tab-pane label="最新贴吧数据" name="value4" class="doc-tabs__pane">
          最新贴吧数据内容
        </mku-tab-pane>
        <mku-tab-pane label="新文库" name="value5" class="doc-tabs__pane">
          新文库的内容
        </mku-tab-pane>
      </mku-tabs>
    </div>
  </template>

  <script>
  export default {
    data () {
      return {
        value: 'value2'
      }
    }
  }
  </script>
```
:::

### 卡片样式
:::demo
```html
  <template>
    <div>
      <mku-tabs type="card">
        <mku-tab-pane label="网页" class="doc-tabs__pane">
          网页的内容
        </mku-tab-pane>
        <mku-tab-pane label="视频资源" class="doc-tabs__pane">
          视频资源的内容
        </mku-tab-pane>
        <mku-tab-pane label="音乐" class="doc-tabs__pane">
          音乐的内容
        </mku-tab-pane>
        <mku-tab-pane label="最新贴吧数据" class="doc-tabs__pane">
          最新贴吧数据内容
        </mku-tab-pane>
        <mku-tab-pane label="新文库" class="doc-tabs__pane">
          新文库的内容
        </mku-tab-pane>
      </mku-tabs>
    </div>
  </template>
```
:::

### 使用图标
:::demo
```html
  <template>
    <div>
      <mku-tabs>
        <mku-tab-pane label="首页" icon="home" class="doc-tabs__pane">
          首页
        </mku-tab-pane>
        <mku-tab-pane label="上传" icon="cloud-loadup" class="doc-tabs__pane">
          上传
        </mku-tab-pane>
        <mku-tab-pane label="下载" icon="cloud-download" class="doc-tabs__pane">
          下载
        </mku-tab-pane>
      </mku-tabs>
    </div>
  </template>
```
:::

### 禁用项
:::demo
```html
  <template>
    <div>
      <mku-tabs>
        <mku-tab-pane label="选项一" class="doc-tabs__pane">
          选项一内容
        </mku-tab-pane>
        <mku-tab-pane label="禁用项" class="doc-tabs__pane" disabled>
          禁用项内容
        </mku-tab-pane>
        <mku-tab-pane label="选项二" class="doc-tabs__pane">
          选项二内容
        </mku-tab-pane>
      </mku-tabs>
    </div>
  </template>
```
:::

### 可删除
:::demo
```html
<template>
  <div>
    <mku-tabs closable @close="handleClose" @click="handleClick">
      <mku-tab-pane
        class="doc-tabs__pane"
        v-for="item in tabs"
        :name="item + ''"
        :key="item"
        :label="`选项${item}`">
        选项{{item}}的内容
      </mku-tab-pane>

      <div slot="extra">
        <mku-button @click="tabs++" type="primary">add</mku-button>
      </div>
    </mku-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: 3
    }
  },
  methods: {
    handleClick (name) {
      this.$message.success(`点击项的name值为：${name}`)
    },
    handleClose (name) {
      this.$message.success(`删除项的name值为：${name}`)
    }
  }
}
</script>
```
:::

### Tabs Attributes
| 参数     | 说明                                |       类型        |    可选值     | 默认值  | 必选  |
| :------- | :---------------------------------- | :---------------: | :-----------: | :-----: | :---: |
| value    | 绑定的值，支持`v-model`进行双向绑定 | `String | Number` |       -       |    -    |  否   |
| type     | tabs类型，支持线形和卡片            |     `String`      | `line | card` | `line`  |  否   |
| closable | 是否可以删除                        |     `Boolean`     |       -       | `false` |  否   |

### Tabs Events
| 事件名 | 说明                       | 回调参数       |
| :----- | :------------------------- | :------------- |
| click  | 点击选项卡头部时触发       | 当前项的name值 |
| close  | 点击选项卡头部的删除时触发 | 当前项的name值 |

### Tab-Pane Attributes
| 参数     | 说明                           |       类型        |    可选值     | 默认值  | 必选  |
| :------- | :----------------------------- | :---------------: | :-----------: | :-----: | :---: |
| name     | 选项卡唯一标识，不穿则为下标值 | `String | Number` |       -       | `false` |  否   |
| label    | tabs类型，支持线形和卡片       | `String | Number` | `line | card` | `line`  |  否   |
| icon     | 选项卡名称图标                 |     `String`      |       -       |    -    |  否   |
| disabled | 是否禁用当前项                 |     `Boolean`     |       -       | `false` |  否   |

### Tabs Slots
| 名称    | 说明                                                 |
| :------ | :--------------------------------------------------- |
| default | 默认用来放置tab-pane                                 |
| extra   | 选项卡头部菜单右侧的位置，用来放在一些额外的操作区域 |
