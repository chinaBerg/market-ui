## dropdown 下拉菜单

### 基本使用
一般使用mku-dropdown-menu作为下拉菜单的内容。

:::demo
```html
<template>
  <div>
    <mku-dropdown @click="handleClick">
      <mku-button type="primary">下拉菜单</mku-button>
      <mku-dropdown-menu slot="menu">
        <mku-dropdown-item name="a1">披萨</mku-dropdown-item>
        <mku-dropdown-item name="a2">汉堡</mku-dropdown-item>
        <mku-dropdown-item name="a3">新疆羊肉串</mku-dropdown-item>
        <mku-dropdown-item name="a4">意大利面</mku-dropdown-item>
      </mku-dropdown-menu>
    </mku-dropdown>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick (name) {
      this.$message.success(`点击了：${name}`)
    }
  }
}
</script>
```
:::

### 触发条件
:::demo
```html
<template>
  <div>
    <mku-dropdown trigger="hover">
      <mku-button type="primary">hover触发</mku-button>
      <mku-dropdown-menu slot="menu">
        <mku-dropdown-item>蒙牛早餐奶</mku-dropdown-item>
        <mku-dropdown-item>伊利纯牛奶</mku-dropdown-item>
        <mku-dropdown-item>果粒橙</mku-dropdown-item>
        <mku-dropdown-item>可口可乐</mku-dropdown-item>
      </mku-dropdown-menu>
    </mku-dropdown>

    <mku-dropdown trigger="click">
      <mku-button type="primary">click触发</mku-button>
      <mku-dropdown-menu slot="menu">
        <mku-dropdown-item name="a1">披萨</mku-dropdown-item>
        <mku-dropdown-item name="a2">汉堡</mku-dropdown-item>
        <mku-dropdown-item name="a3">新疆羊肉串</mku-dropdown-item>
        <mku-dropdown-item name="a4">意大利面</mku-dropdown-item>
      </mku-dropdown-menu>
    </mku-dropdown>
  </div>
</template>
```
:::

### 禁用项
mku-dropdown-menu菜单项支持通过disabled属性设置禁用项。

:::demo
```html
<template>
  <div>
    <mku-dropdown>
      <mku-button type="primary">下拉菜单</mku-button>
      <mku-dropdown-menu slot="menu">
        <mku-dropdown-item disabled>禁用项目1</mku-dropdown-item>
        <mku-dropdown-item>橘子</mku-dropdown-item>
        <mku-dropdown-item disabled>禁用项目2</mku-dropdown-item>
        <mku-dropdown-item>苹果</mku-dropdown-item>
      </mku-dropdown-menu>
    </mku-dropdown>
  </div>
</template>
```
:::

### 选中项
mku-dropdown-menu菜单项支持通过active属性设置禁用项。

:::demo
```html
<template>
  <div>
    <mku-dropdown>
      <mku-button type="primary">下拉菜单</mku-button>
      <mku-dropdown-menu slot="menu">
        <mku-dropdown-item active>凤梨</mku-dropdown-item>
        <mku-dropdown-item>橘子</mku-dropdown-item>
        <mku-dropdown-item active>菠萝</mku-dropdown-item>
        <mku-dropdown-item>苹果</mku-dropdown-item>
      </mku-dropdown-menu>
    </mku-dropdown>
  </div>
</template>
```
:::

### Dropdown Attributes
| 参数      | 说明               | 类型     | 可选值          | 默认值         | 必填 |
| :-------- | :----------------- | :------- | :-------------- | :------------- | :--- |
| trigger   | 触发方式           | `String` | `click | hover` | `click`        | 否   |
| placement | dropdown显示的位置 | `String` | 同`popper.js`   | `bottom-start` | 否   |

### Dropdown Events
| 事件名         | 说明                           | 回调函数参数              |
| :------------- | :----------------------------- | :------------------------ |
| click          | 点击dropdown-item时触发        | 当前dropdown-item的name值 |
| visible-change | dropdown展开收起状态变化时触发 | 当前状态                  |
| click-aside    | 点击空白区域关闭dropdown时触发 | -                         |

### Dropdown Slots
| name | 说明                                          |
| :--- | :-------------------------------------------- |
| menu | dropdown的下拉内容，一般使用dropdown-menu组件 |

### Dropdown—Item Attributes

| 参数     | 说明       | 类型              | 可选值 | 默认值  | 必填 |
| :------- | :--------- | :---------------- | :----- | :------ | :--- |
| name     | 当前项的值 | `String | Number` | -      | -       | 否   |
| disbaled | 是否禁用   | `Boolean`         | -      | `false` | 否   |
| active   | 是否选中   | `Boolean`         | -      | `false` | 否   |
