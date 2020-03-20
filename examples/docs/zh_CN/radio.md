## Radio 单选框

:::demo
```html
<template>
  <div>
    <mku-alert
      title="万里江山马未鞍，纵横中原驰骋还。踏破东风非吾愿，岂因艰难而不前？这四句出自哪里？"
    ></mku-alert>
    <br>

    <mku-radio-group v-model="value">
      <mku-radio :label="item.label" v-for="item in list">{{item.name}}</mku-radio>
    </mku-radio-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      list: [
        {label: 'option1', name: 'A 《水调歌头》' },
        {label: 'option2', name: 'B 《纵马吟》' },
        {label: 'option3', name: 'C 《赤壁赋》' },
        {label: 'option4', name: 'D 《登鹳雀楼》' }
      ]
    }
  },
  methods: {

  }
}
</script>
```
:::

### 垂直排版
垂直排版对`button`类型无效。

:::demo
```html
<template>
  <div>
    <mku-alert title="遥望青云千里处，鸿鹄安与燕雀游。作者是谁？"></mku-alert><br>

    <mku-radio-group v-model="value" mode="vertical">
      <mku-radio :label="item.label" v-for="item in list">{{item.name}}</mku-radio>
    </mku-radio-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      list: [
        {label: 'A', name: 'A 李白' },
        {label: 'B', name: 'B 苏轼' },
        {label: 'C', name: 'C 纳兰容若' },
        {label: 'D', name: 'D 愣锤' }
      ]
    }
  }
}
</script>
```
:::


### 作为button使用
支持`large` `default` `small`三种不同的尺寸。

:::demo
```html
<template>
  <div class="doc-radio-button_wrap">
    <mku-radio-group type="button" size="large" v-model="value1">
      <mku-radio label="option1">Vue</mku-radio>
      <mku-radio label="option2">React</mku-radio>
      <mku-radio label="option3">Angular</mku-radio>
      <mku-radio label="option4">Jquery</mku-radio>
    </mku-radio-group>

    <mku-radio-group type="button" v-model="value2">
      <mku-radio label="option1">Html</mku-radio>
      <mku-radio label="option2">Css</mku-radio>
      <mku-radio label="option3">Javascript</mku-radio>
      <mku-radio label="option4">TypeScript</mku-radio>
    </mku-radio-group>

    <mku-radio-group
      type="button"
      size="small"
      button-type="fill"
      v-model="value3"
    >
      <mku-radio label="option1">工程化</mku-radio>
      <mku-radio label="option2">组件化</mku-radio>
      <mku-radio label="option3">可视化</mku-radio>
      <mku-radio label="option4">基础建设</mku-radio>
    </mku-radio-group>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value1: 'option1',
      value2: 'option2',
      value3: 'option3'
    }
  }
}
</script>
```
:::

### 禁用

:::demo
```html
<template>
  <div class="doc-radio-button_wrap">
    <mku-radio-group>
      <mku-radio label="option1">葫芦娃</mku-radio>
      <mku-radio label="option2" disabled>三眼童子</mku-radio>
      <mku-radio label="option3">喜洋洋</mku-radio>
      <mku-radio label="option4">猫和老鼠</mku-radio>
    </mku-radio-group>

    <mku-radio-group type="button">
      <mku-radio label="option1">英雄联盟</mku-radio>
      <mku-radio label="option2" disabled>已被禁用</mku-radio>
      <mku-radio label="option3">绝地求生</mku-radio>
      <mku-radio label="option4">地下城与勇士</mku-radio>
    </mku-radio-group>
  </div>
</template>
```
:::


### Radio Attributes

| 参数     | 说明                                                           | 类型              | 可选值 | 默认值  |      |
| :------- | :------------------------------------------------------------- | :---------------- | :----- | :------ | :--- |
| value    | radio绑定的值，可用`v-model`进行双向数据绑定。仅单独使用时有效 | `String | Number` | -      | -       | 否   |
| label    | 指定当前radio项的`value`值，仅组合使用时有效                   | `String | Number` | -      | -       | 否   |
| disabled | 是否禁用当前radio项                                            | `Boolean`         | -      | `false` | 否   |

### Radio Events

 | 事件名 | 说明                                          | 回调函数参数   |
 | :----- | :-------------------------------------------- | :------------- |
 | change | 点击radio值发生变化时触发，仅在单独使用时有效 | radio的label值 |

### Radio-Group Attributes

| 参数  | 说明                                               | 类型              | 可选值                    | 默认值       |      |
| :---- | :------------------------------------------------- | :---------------- | :------------------------ | :----------- | :--- |
| value | radio-group绑定的值，可用`v-model`进行双向数据绑定 | `String | Number` | -                         | -            | 否   |
| mode  | 指定radio是水平还是垂直排列，对button组合时无效    | `String`          | `horizontal | vertical`   | `horizontal` | 否   |
| type  | 指定是作为`radio-group`还是`button-group`使用      | `String`          | `radio | button`          | `radio`      | 否   |
| size  | 指定`radio-group`组合使用时的尺寸                  | `String`          | `large | default | small` | `default`    | 否   |

### Radio-Group Events

 | 事件名 | 说明                       | 回调函数参数        |
 | :----- | :------------------------- | :------------------ |
 | change | 在点击选中项发生变化时触发 | 返回选中项的label值 |
