# Grid 栅格

### 基础用法

:::demo
```html
<div class="grid-container">
  <mku-row>
    <mku-col span="24">
      <div class="grid__content">col-24</div>
    </mku-col>
  </mku-row>
  <mku-row>
    <mku-col span="12">
      <div class="grid__content">col-12</div>
    </mku-col>
    <mku-col span="12">
      <div class="grid__content">col-12</div>
    </mku-col>
  </mku-row>
  <mku-row>
    <mku-col span="8">
      <div class="grid__content">col-8</div>
    </mku-col>
    <mku-col span="8">
      <div class="grid__content">col-8</div>
    </mku-col>
    <mku-col span="8">
      <div class="grid__content">col-8</div>
    </mku-col>
  </mku-row>
  <mku-row>
    <mku-col span="6">
      <div class="grid__content">col-6</div>
    </mku-col>
    <mku-col span="6">
      <div class="grid__content">col-6</div>
    </mku-col>
    <mku-col span="6">
      <div class="grid__content">col-6</div>
    </mku-col>
    <mku-col span="6">
      <div class="grid__content">col-6</div>
    </mku-col>
  </mku-row>
  <mku-row>
    <mku-col span="8">
      <div class="grid__content">col-8</div>
    </mku-col>
    <mku-col span="4">
      <div class="grid__content">col-4</div>
    </mku-col>
  </mku-row>
</div>
```
:::

### 分栏间隔

:::demo
```html
<div class="grid-container">
  <mku-row :gutter="40">
    <mku-col span="6">
      <div class="grid__content">col-6</div>
    </mku-col>
    <mku-col span="6">
      <div class="grid__content">col-6</div>
    </mku-col>
    <mku-col span="6">
      <div class="grid__content">col-6</div>
    </mku-col>
    <mku-col span="6">
      <div class="grid__content">col-6</div>
    </mku-col>
  </mku-row>
</div>

<style lang="less" scoped>
@import '../../../src/styles/color';

.grid-container {
  .mku-row {
    margin-top: 10px;
  }
  .grid__content {
    height: 32px;
    text-align: center;
    line-height: 32px;
    color: @color-white;
  }
  .mku-col:nth-child(odd) .grid__content {
    background: @color-primary;
  }
  .mku-col:nth-child(even) .grid__content {
    background: @color-primary-light;
  }
}
</style>

