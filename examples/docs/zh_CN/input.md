## Input 输入框

### 基本用法
:::demo
```html
<mku-row :gutter="20">
  <mku-col span="8">
    <mku-input
      type="text"
      placeholder="请输入用户名"
      v-model="value1"
    />
  </mku-col>
</mku-row>

<script>
  export default {
    name: 'ExampleInput',
    data () {
      return {
        value1: ''
      }
    }
  }
</script>
```
:::

### 三种尺寸: large、default、small

:::demo
```html
<mku-row :gutter="20">
  <mku-col span="8">
    <div class="grid__content">
      <mku-input
        type="text"
        size="large"
        placeholder="请输入用户名"
        v-model="value2"
      />
    </div>
  </mku-col>
  <mku-col span="8">
    <div class="grid__content">
      <mku-input
        type="text"
        size="default"
        placeholder="请输入用户名"
        v-model="value3"
      />
    </div>
  </mku-col>
  <mku-col span="8">
    <div class="grid__content">
      <mku-input
        type="text"
        size="small"
        placeholder="请输入用户名"
        v-model="value4"
      />
    </div>
  </mku-col>
</mku-row>

<script>
  export default {
    name: 'ExampleInput',
    data () {
      return {
        value2: '',
        value3: '',
        value4: ''
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
