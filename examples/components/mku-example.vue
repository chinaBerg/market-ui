<template>
  <div class="mku-example">
    <div class="mku-example__component">
      <slot name="source"></slot>
    </div>
    <mku-collapse-transition :duration=".3">
      <div class="mku-example__code" v-show="isShowCode">
        <slot name="highlight"></slot>
      </div>
    </mku-collapse-transition>
    <div class="mku-example__button" @click="handleClick">
      {{isShowCode ? '收起代码' : '展开代码'}}
    </div>
  </div>
</template>

<script>
import MkuCollapseTransition from '../../src/lib/collapse-transition'
export default {
  name: 'MkuExample',
  components: {
    MkuCollapseTransition
  },
  data () {
    return {
      isShowCode: false
    }
  },
  methods: {
    handleClick () {
      this.isShowCode = !this.isShowCode
    }
  }
}
</script>

<style lang="less">
@border-color-lighter: #EBEEF5;
.mku-example {
  position: relative;
  margin-top: 10px;
  margin-bottom: 50px;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  transition: box-shadow .3s;
  &:hover {
    box-shadow: 0 0 6px #dcdee2;
  }
  .mku-example__component {
    padding: 20px;
  }
  .mku-example__code {
    border-radius: 4px;
    border-top: 1px solid @border-color-lighter;
    background: #fafafa;
    > pre {
      padding: 20px;
    }
    pre {
      margin: 0;
    }
    .hljs {
      padding: 0;
      line-height: 1.6;
      background: transparent;
    }
  }
  .mku-example__button {
    height: 40px;
    line-height: 40px;
    border-top: 1px solid @border-color-lighter;
    background: #fff;
    text-align: center;
    font-size: 12px;
    cursor: pointer;
    transition: all .3s;
    &:hover {
      opacity: .8;
      background: @border-color-lighter;
      color: #2d8cf0;
    }
  }
}
</style>
