<template>
  <div class="mku-example">
    <div class="mku-example__component">
      <slot name="source"></slot>
    </div>
    <div class="mku-example__code" v-show="isShowCode">
      <slot name="highlight"></slot>
    </div>
    <div class="mku-example__button" @click="handleClick">
      {{isShowCode ? '收起代码' : '展开代码'}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MkuExample',
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
@import '../../src/styles/color';
.mku-example {
  position: relative;
  margin-top: 10px;
  margin-bottom: 20px;
  padding-bottom: 40px;
  border: 1px solid @border-color-lighter;
  border-radius: 4px;
  transition: box-shadow .3s;
  &:hover {
    box-shadow: @shadow-primary;
  }
  .mku-example__component {
    padding: 20px;
  }
  .mku-example__code {
    padding: 20px;
    border-radius: 4px;
    border-top: 1px solid @border-color-lighter;
    background: #fafafa;
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
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-top: 1px solid @border-color-lighter;
    background: @background-color-base;
    text-align: center;
    font-size: 12px;
    cursor: pointer;
    transition: all .3s;
    &:hover {
      opacity: .8;
      background: @border-color-lighter;
      color: @color-primary;
    }
  }
}
</style>
