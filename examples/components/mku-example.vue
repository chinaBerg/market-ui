<template>
  <div class="mku-example">
    <div class="mku-example__component">
      <slot name="source"></slot>
    </div>
    <div class="mku-example__code">
      <mku-collapse-transition :duration=".3">
        <div v-show="isShowCode">
          <slot name="highlight" ></slot>
        </div>
      </mku-collapse-transition>
    </div>
    <div :class="['mku-example__button', {'mku-example__button--open': !isShowCode}]" @click="handleClick">
      <i class="mku-icon mku-icon-arrow-to-up" v-if="isShowCode"></i>
      <i class="mku-icon mku-icon-arrow-to-down" v-else></i>
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
  padding: 20px 20px 0 !important;
  margin-top: 10px;
  margin-bottom: 50px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 6px #dcdee2;
  .mku-example__code {
    padding-top: 20px;
    > pre {
      padding: 20px;
    }
    pre {
      margin: 0;
    }
    .hljs {
      display: block;
      margin: 0;
      padding: 20px;
      line-height: 1.6;
      background: transparent;
      border: 1px solid @border-color-lighter;
      border-radius: 4px;
      background: #fafafa;
    }
  }
  .mku-example__button {
    height: 40px;
    line-height: 40px;
    border-top: 1px solid transparent;
    background: #fff;
    text-align: center;
    font-size: 12px;
    cursor: pointer;
    border-radius: 0 0 4px 4px;
    transition: all .3s;
    .mku-icon {
      font-weight: bold;
    }
    &:hover .mku-icon {
      color: #2d8cf0;
      animation: transfr .8s linear infinite;
    }
    &.mku-example__button--open {
      border-top: 1px solid @border-color-lighter;
    }
  }
}
@keyframes transfr {
  from, 50%, to {
    transform: translateY(0)
  }
  40% {
    transform: translateY(6px)
  }
  60% {
    transform: translateY(-6px)
  }
}
</style>
