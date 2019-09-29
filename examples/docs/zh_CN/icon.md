### Icon 图标

### 基本使用

:::demo
```html
<mku-icon type="delete" />
<mku-icon type="delete" size="32px" color="#f00" />
<mku-button type="primary" icon="download">下载</mku-button>
```
:::

### 所有图标

:::demo
```html
<mku-row class-name="doc-icons-wrapper">
  <mku-col
    class-name="doc-icons__item"
    v-for="(item, index) in icons"
    :key="index"
    :span="3"
  >
    <mku-icon :type="item" size="30px"/>
    <p>{{item}}</p>
  </mku-col>
</mku-row>

<script>
export default {
  data () {
    return {
      icons: [
        'caret-left', 'caret-right', 'caret-up', 'caret-down',
        'arrow-to-left', 'arrow-to-right', 'arrow-to-up', 'arrow-to-down',
        'arrow-left', 'arrow-right', 'arrow-up', 'arrow-down',
        'circle-left', 'circle-right', 'circle-up', 'circle-down',
        'fullscreen', 'fullscreen-exit', 'input', 'simple-fullscreen-exit',
        'tip', 'warning', 'success-circle', 'error-circle',
        'menu-unflod', 'menu-flod', 'layout', 'grid',
        'position', 'position-line', 'location', 'location-map',
        'notice', 'letter', 'message', 'play',
        'user', 'team', 'search', 'position-fill',
        'user-head', 'user-head-fill', 'user-fill', 'image',
        'cloud-download', 'download', 'cloud-loadup', 'loadup',
        'fontsize-bigger', 'fontsize-small', 'plus-circle', 'reduce-circle',
        'edit-white', 'close', 'loading', 'order',
        'home-fill', 'home', 'plus', 'reduce'
      ]
    }
  }
}
</script>
```
:::


### Icon Attributes

| 参数      | 说明             | 类型   | 可选值               | 默认值 | 必填 |
| :-------- | :--------------- | :----- | :------------------- | :----- | :--- |
| type      | 图标名称         | String | 所有图标库支持的图标 | -      | 否   |
| color     | 图标颜色         | String | 组件库默认字体色     | -      | 否   |
| size      | 图标尺寸         | String | eg: 20px、1.6em等    | 18px   | 否   |
| className | 自定义class name | String | -                    | -      | 否   |


### Icon Events

 | 事件名 | 说明           | 回调函数参数 |
 | :----- | :------------- | :----------- |
 | click  | 点击按钮时触发 | -            |
