## Swiper 轮播

### 基本使用
:::demo
```html
<template>
  <mku-swiper>
    <mku-swiper-item>
      <div class="doc-swiper__item">1</div>
    </mku-swiper-item>
    <mku-swiper-item>
      <div class="doc-swiper__item">2</div>
    </mku-swiper-item>
    <mku-swiper-item>
      <div class="doc-swiper__item">3</div>
    </mku-swiper-item>
  </mku-swiper>
</template>
```
:::

### 模拟异步获取数据
:::demo
```html
<template>
  <mku-button class="doc-mb20" @click="getList">2s后展示轮播数据</mku-button>
  <mku-swiper :value="2">
    <mku-swiper-item v-for="item in list">
      <div class="doc-swiper__item">{{item}}</div>
    </mku-swiper-item>
  </mku-swiper>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    getList () {
      setTimeout(() => {
        this.list = [1, 2, 3, 4]
      }, 2000)
    }
  }
}
</script>
```
:::

### 其他配置
:::demo
```html
<template>
  <mku-row :gutter="40">
    <mku-col span="12">
      <mku-swiper
        :height="300"
        :autoplay="autoplay"
        trigger="hover"
        :loop="loop"
        :speed="+speed"
        :duration="+duration"
        :arrow="arrow"
        :trigger="trigger"
        ref="swiper">
        <mku-swiper-item>
          <div class="doc-swiper__item">1</div>
        </mku-swiper-item>
        <mku-swiper-item>
          <div class="doc-swiper__item">2</div>
        </mku-swiper-item>
        <mku-swiper-item>
          <div class="doc-swiper__item">3</div>
        </mku-swiper-item>
        <mku-swiper-item>
          <div class="doc-swiper__item">4</div>
        </mku-swiper-item>
      </mku-swiper>
    </mku-col>

    <mku-col span="12">
      <mku-row :gutter="20">
        <mku-col span="24" class="doc-swiper__config">
          <span>自动轮播：</span>
          <span class="doc-swiper__config-right">
            <mku-switch v-model="autoplay" />
          </span>
        </mku-col>
        <mku-col span="24" class="doc-swiper__config">
          <span>自动轮播时间：</span>
          <span class="doc-swiper__config-right">
            <mku-input v-model="duration"/>
          </span>
        </mku-col>
        <mku-col span="24" class="doc-swiper__config">
          <span>循环轮播：</span>
          <span class="doc-swiper__config-right">
            <mku-switch v-model="loop" />
          </span>
        </mku-col>
        <mku-col span="24" class="doc-swiper__config">
          <span>轮播动画时间：</span>
          <span class="doc-swiper__config-right">
            <mku-input v-model="speed" />
          </span>
        </mku-col>
        <mku-col span="24" class="doc-swiper__config">
          <span>左右箭头显示方式：</span>
          <span class="doc-swiper__config-right">
            <mku-radio-group v-model="arrow">
              <mku-radio label="hover">hover</mku-radio>
              <mku-radio label="always">always</mku-radio>
              <mku-radio label="never">never</mku-radio>
            </mku-radio-group>
          </span>
        </mku-col>
        <mku-col span="24" class="doc-swiper__config">
          <span>分页器触发方式：</span>
          <span class="doc-swiper__config-right">
            <mku-radio-group v-model="trigger">
              <mku-radio label="click">click</mku-radio>
              <mku-radio label="hover">hover</mku-radio>
            </mku-radio-group>
          </span>
        </mku-col>
        <mku-col span="24" class="doc-swiper__config">
          <span>手动切换到第&nbsp;&nbsp;</span>
          <span class="doc-swiper__config-right" style="flex: 100px 0 0;">
            <mku-input v-model="toIndex" />
          </span>
          <span>&nbsp;&nbsp;页&nbsp;&nbsp;</span>
          <mku-button type="primary" class="doc-mr10" @click="swipeTo">Go</mku-button>
          <mku-button type="primary" class="doc-mr10" @click="prev">上一页</mku-button>
          <mku-button type="primary" @click="next">下一页</mku-button>
        </mku-col>
      </mku-row>
    </mku-col>
  </mku-row>
</template>

<script>
  export default {
    data () {
      return {
        index: 1,
        autoplay: true,
        loop: true,
        speed: 300,
        duration: 4000,
        arrow: 'hover',
        trigger: 'click',
        toIndex: 0
      }
    },
    methods: {
      next () {
        this.$refs.swiper.next()
      },
      prev () {
        this.$refs.swiper.prev()
      },
      swipeTo () {
        this.$refs.swiper.swipeTo(+this.toIndex)
      }
    }
  }
</script>
```
:::

### Swiper Attributes
| 参数                   | 说明                                                   |       类型        |          可选值          | 默认值  | 必填  |
| :--------------------- | :----------------------------------------------------- | :---------------: | :----------------------: | :-----: | :---: |
| value                  | 默认的初始下标                                         |     `Number`      |            -             |   `0`   |  否   |
| width                  | 指定宽度                                               | `String | Number` |            -             | `100%`  |  否   |
| height                 | 指定高度                                               | `String | Number` |            -             | `auto`  |  否   |
| loop                   | 是否循环轮播                                           |     `Boolean`     |            -             | `true`  |  否   |
| autoplay               | 自动轮播                                               |     `Boolean`     |            -             | `true`  |  否   |
| duration               | 自动轮播时间周期，单位`ms`                             |     `Number`      |            -             | `3000`  |  否   |
| disable-on-interaction | 用户操作后停止autoplay，不会恢复。例如鼠标滑入         |     `Boolean`     |            -             | `false` |  否   |
| speed                  | 轮播动画执行速度，单位`ms`                             |     `Number`      |            -             |  `300`  |  否   |
| arrow                  | 左右切换按钮的显示方式，支持滑入时显示、一直显示、隐藏 |     `String`      | `hover | always | never` | `hover` |  否   |
| trigger                | 分页器触发方式                                         |     `String`      |     `hover | click`      | `click` |  否   |

### Swiper Events
| 事件名         | 说明                                     | 回调函数参数                       |
| :------------- | :--------------------------------------- | :--------------------------------- |
| change         | 轮播图切换时触发                         | 参数1：当前索引；参数2：上一张索引 |
| next-click     | 点击`next`切换按钮或调用`prev`方法时触发 | 参数1：当前索引；参数2：上一张索引 |
| prev-click     | 点击`prev`切换按钮或调用`next`方法时触发 | 参数1：当前索引；参数2：上一张索引 |
| animate-begin  | 动画开始前触发                           | 当前索引                           |
| animate-finish | 动画完成后触发                           | 当前索引                           |

### Swiper Methods
| 事件名  | 说明             |
| :------ | :--------------- |
| swipeTo | 滚动到指定索引处 |
| prev    | 滚动到上一页     |
| next    | 滚动到下一页     |

### Swiper Slots
| 名称 | 说明               |
| :--- | :----------------- |
| prev | 自定义prev按钮内容 |
| next | 自定义next按钮内容 |
