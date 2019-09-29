## Input 输入框

### 基本用法
:::demo
```html
<mku-row :gutter="20">
  <mku-col span="8">
    <mku-input
      type="text"
      placeholder="请输入用户名"
      v-model="value"
    />
  </mku-col>
</mku-row>

<script>
  export default {
    name: 'ExampleInput',
    data () {
      return {
        value: ''
      }
    }
  }
</script>
```
:::

### 三种尺寸: large、default、small

可通过 size 属性指定输入框的尺寸，除了默认的大小外，还提供了 large、small 和 mini 三种尺寸

:::demo
```html
<mku-row :gutter="20">
  <mku-col span="8">
    <div class="grid__content">
      <mku-input
        type="text"
        size="large"
        placeholder="请输入用户名"
        v-model="value1"
      />
    </div>
  </mku-col>
  <mku-col span="8">
    <div class="grid__content">
      <mku-input
        type="text"
        size="default"
        placeholder="请输入用户名"
        v-model="value2"
      />
    </div>
  </mku-col>
  <mku-col span="8">
    <div class="grid__content">
      <mku-input
        type="text"
        size="small"
        placeholder="请输入用户名"
        v-model="value3"
      />
    </div>
  </mku-col>
</mku-row>

<script>
  export default {
    name: 'ExampleInput',
    data () {
      return {
        value1: '',
        value2: '',
        value3: ''
      }
    }
  }
</script>
```
:::

### 禁用状态
:::demo
```html
<mku-row :gutter="20">
  <mku-col span="8">
    <mku-input
      type="text"
      placeholder="禁用状态"
      v-model="value5"
      :disabled="true"
    />
  </mku-col>
</mku-row>
<script>
export default {
  name: 'ExampleInput',
  data () {
    return {
      value5: ''
    }
  }
}
</script>
```
:::

### 只读
:::demo
```html
<mku-row :gutter="20">
  <mku-col span="8">
    <mku-input
      type="text"
      placeholder="只读的输入框"
      readonly
      v-model="value6"
    />
  </mku-col>
</mku-row>

<script>
export default {
  name: 'ExampleInput',
  data () {
    return {
      value6: ''
    }
  }
}
</script>
```
:::

### 可清除
:::demo
```html
<mku-row :gutter="20">
  <mku-col span="8">
    <mku-input
      type="text"
      placeholder="可清除"
      v-model="value7"
      clearable
      @clear="handleClear"
    />
  </mku-col>
</mku-row>

<script>
export default {
  name: 'ExampleInput',
  data () {
    return {
      value7: ''
    }
  },
  methods: {
    handleClear () {
      alert('handleClear')
    }
  }
}
</script>
```
:::

### 获取/失去焦点

:::demo
```html
<mku-row :gutter="20">
  <mku-col span="8">
    <mku-input
      type="text"
      placeholder="请在控制台查看foucs和blur事件"
      v-model="value"
      clearable
      @focus="handleFocus"
      @blur="handleBlur"
    />
  </mku-col>
</mku-row>

<mku-row :gutter="20">
  <mku-col span="8">
    <mku-input
      ref="input"
      type="text"
      placeholder="请输入用户名"
      v-model="value2"
    />
  </mku-col>
  <mku-col span="8">
    <mku-button type="primary" @click="handleButtonClick('focus')">
      使得input获取焦点
    </mku-button>
    <mku-button type="primary" @click="handleButtonClick('blur')">
      使得input失去焦点
    </mku-button>
  </mku-col>
</mku-row>

<script>
export default {
  name: 'ExampleInput',
  data () {
    return {
      value: '',
      value2: ''
    }
  },
  methods: {
    handleFocus (event) {
      console.log('input focus', event)
    },
    handleBlur (event) {
      console.log('input blur', event)
    },
    handleButtonClick (type) {
      this.$refs.input[type]()
    }
  }
}
</script>
```
:::

### Input Attributes

| 参数           | 说明                                  | 类型             | 可选值                                            | 默认值  | 示例    |
| :------------- | :------------------------------------ | :--------------- | :------------------------------------------------ | :------ | :------ |
| type           | 输入框类型                            | String           | text、password、textarea等所有原生input支持的类型 | text    | text    |
| value、v-model | 绑定的值，v-model可以进行双向数据绑定 | String 、 Number | -                                                 | -       | -       |
| size           | 大小尺寸                              | String           | large、default、small                             | default | default |
| disabled       | 是否禁用                              | Boolean          | true、false                                       | false   | false   |
| readonly       | 是否只读                              | Boolean          | true、false                                       | false   | false   |
| placeholder    | 输入框类型                            | Strimg           | -                                                 | ''      | ''      |
| clearable      | 是否可以清除输入框                    | Boolean          | true、false                                       | false   | false   |

### Input Events

 | 事件名 | 说明                                    | 回调函数参数 |
 | :----- | :-------------------------------------- | :----------- |
 | focus  | 组件获取焦点时触发                      | Event        |
 | blur   | 组件失去焦点时触发                      | Event        |
 | change | 组件值发生变化时触发                    | value        |
 | clear  | 组件由clearable属性定义的按钮清空时触发 | -            |

### Input Methods

 | 方法名 | 说明           | 回调函数参数 |
 | :----- | :------------- | :----------- |
 | focus  | 使组件获取焦点 | Event        |
 | blur   | 使组件失去焦点 | Event        |
