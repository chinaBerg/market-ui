<template functional>
  <div class="mku-example">
    <div class="mku-example__component">
      <slot name="source" />
    </div>
    <div class="mku-example__code">
      <slot name="highlight" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'MkuExample',
};
</script>

<style lang="less">
@border-color-lighter: #EBEEF5;
.mku-example {
  position: relative;
  padding: 20px !important;
  margin-top: 20px !important;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 6px #dcdee2;
  .mku-example__code {
    margin-top: 20px;
    background: #fafafa;
    border: 1px solid @border-color-lighter;
    border-radius: 4px;
    .hljs {
      display: block;
      margin: 0;
      padding: 20px;
      line-height: 1.6;
      background: transparent;
      font-family: Consolas,Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    }
  }
}
</style>
