## Form 表单

### 基本使用
包含的所有可用的表单组件，例如单选框、复选框、输入框、选择器、开关等等。

:::demo
```html
<template>
  <div class="doc-form-container">
    <mku-form :label-width="100">
      <mku-form-item label="Text：">
        <mku-input type="text" placeholder="This is a text box." />
      </mku-form-item>
      <mku-form-item label="Password：">
        <mku-input type="password" placeholder="This is a password box."/>
      </mku-form-item>
      <mku-form-item label="Select：">
        <mku-select class="doc-select">
          <mku-options value="1">选项1</mku-options>
          <mku-options value="2">选项2</mku-options>
          <mku-options value="3">选项3</mku-options>
        </mku-select>
      </mku-form-item>
      <mku-form-item label="Select：">
        <mku-slider :value="30" />
      </mku-form-item>
      <mku-form-item label="Switch：">
        <mku-switch />
      </mku-form-item>
      <mku-form-item label="Checkbox：">
        <mku-checkbox>同意</mku-checkbox>
      </mku-form-item>
      <mku-form-item label="Radio：">
        <mku-radio-group>
          <mku-radio label="option1">选项1</mku-radio>
          <mku-radio label="option2">选项2</mku-radio>
          <mku-radio label="option3">选项3</mku-radio>
          <mku-radio label="option4">选项4</mku-radio>
        </mku-radio-group>
      </mku-form-item>
      <mku-form-item>
        <mku-button type="primary" block>提交</mku-button>
      </mku-form-item>
    </mku-form>
  </div>
</template>
```
:::


### 对齐方式
包含的所有可用的表单组件，例如单选框、复选框、输入框、选择器、开关等等。

:::demo
```html
<template>
  <div class="doc-form-container">
    <mku-form :label-width="100">
      <mku-form-item label="用户名：">
        <mku-input type="text" />
      </mku-form-item>
      <mku-form-item label="密码：">
        <mku-input type="password" />
      </mku-form-item>
      <mku-form-item>
        <mku-checkbox>
          同意<a href="" class="doc-form-agreement">《用户注册协议》</a>
        </mku-checkbox>
      </mku-form-item>
      <mku-form-item>
        <mku-button>重置</mku-button>
        <mku-button type="primary">提交</mku-button>
      </mku-form-item>
    </mku-form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>
```
:::


### 表单验证

:::demo
```html
<template>
  <div class="doc-form-container">
    <mku-form
      ref="form"
      :model="formData"
      :rules="rules"
      :label-width="100">
      <mku-form-item prop="userName" label="用户名：">
        <mku-input
          type="text"
          clearable
          placeholder="请输入用户名"
          v-model="formData.userName"
        />
      </mku-form-item>
      <mku-form-item prop="password" label="密码：">
        <mku-input
          type="password"
          clearable
          placeholder="请输入密码"
          v-model="formData.password"
        />
      </mku-form-item>
      <mku-form-item>
        <mku-button @click="handleReset">重置</mku-button>
        <mku-button type="primary" @click="handleSubmit">提交</mku-button>
      </mku-form-item>
    </mku-form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        formData: {
          userName: '',
          password: '',
          slider: [10, 20]
        },
        rules: {
          userName: [
            { required: true, message: '用户名不能为空', trigger: ['change', 'blur'] }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: ['change', 'blur'] },
            { min: 6, message: '密码至少6位数', trigger: ['change', 'blur'] },
            { max: 20, message: '密码长度不能大于20位', trigger: ['change', 'blur'] }
          ]
        }
      }
    },
    methods: {
      handleSubmit () {
        this.$refs.form.validate(res => {
          if (!res) return
          // 提交表单
          // ...
        })
      },
      handleReset () {
        this.$refs.form.resetFields()
      }
    }
  }
</script>
```
:::


### 自定义验证规则

:::demo
```html
<template>
  <div class="doc-form-container">
    <mku-form
      ref="form"
      :model="formData"
      :rules="rules"
      :label-width="140"
    >
      <mku-form-item prop="passwodOld" label="旧密码：">
        <mku-input
          type="text"
          placeholder="请输入旧的密码"
          v-model="formData.passwodOld"
        />
      </mku-form-item>
      <mku-form-item prop="passwordNew" label="新密码：">
        <mku-input
          type="password"
          placeholder="请设置新的密码"
          v-model="formData.passwordNew"
        />
      </mku-form-item>
      <mku-form-item prop="passwordNewAgain" label="确认新密码：">
        <mku-input
          type="password"
          placeholder="请再次确认新的密码"
          v-model="formData.passwordNewAgain"
        />
      </mku-form-item>
      <mku-form-item>
        <mku-button type="primary" block @click="handleSubmit">确认修改</mku-button>
      </mku-form-item>
    </mku-form>
  </div>
</template>

<script>
  export default {
    data () {
      const validatePassword = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('密码不能为空'))
        }
        if (value.length < 6 || value.length > 20) {
          return callback(new Error('密码长度在6-20位'))
        }
        callback()
      }
      const validatePasswordAgain = (rule, value, callback) => {
        if (value !== this.formData.passwordNew) {
          return callback(new Error('两次密码不一致，请重新输入'))
        }
        callback()
      }
      return {
        formData: {
          passwodOld: '',
          passwordNew: '',
          passwordNewAgain: ''
        },
        rules: {
          passwodOld: [
            { required: true, validator: validatePassword }
          ],
          passwordNew: [
            { required: true, validator: validatePassword },
          ],
          passwordNewAgain: [
            { required: true, validator: validatePassword },
            { validator: validatePasswordAgain },
          ]
        }
      }
    },
    methods: {
      handleSubmit () {
        this.$refs.form.validate(res => {
          if (!res) return
          // 提交表单
          // ...
        })
      },
      handleReset () {
        this.$refs.form.resetFields()
      }
    }
  }
</script>
```
:::

### Form Attributes

| 参数         | 说明                                                                                         | 类型      | 可选值 | 默认值 | 必填 |
| :----------- | :------------------------------------------------------------------------------------------- | :-------- | :----- | :----- | :--- |
| model        | 表单的数据对象                                                                               | `Object`  | -      | -      | `{}` | 否 |
| rules        | 表单的验证规则，支持所有 [async-validator](https://github.com/yiminghe/async-validator) 规则 | `Object`  | -      | -      | `{}` | 否 |
| label-width  | 表单域标签的宽度，所有form-item都会继承                                                      | `Number`  | -      | -      | 否   |
| show-message | 石佛显示表单的校验错误提示信息，所有form-item都会继承                                        | `Boolean` | -      | true   | 否   |

:::mku-doc__warning
强烈建议`rules`对象中的字段需要和`model`对象中的字段对应
:::


### Form Methods

 | 事件名        | 说明                                       | 回调函数参数                                                                                                                                                                |
 | :------------ | :----------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 | validate      | 对整个表单进行验证                         | 第一参数是验证完成的回调函数，该函数会回填一个`Boolean`参数表示是否通过验证;<br>第二个参数为验证发生错误的回调函数，会回填一个`error`对象（注意：不是验证失败，是发生错误） |
 | validateField | 对表单部分字段进行校验                     | 第一参数是需要校验的字段`（String|Array<string>）`<br>第二个参数和第三个参数同`validate`方法的参数                                                                          |
 | resetFields   | 移除表单的验证结果，并将数据恢复到初始状态 | -                                                                                                                                                                           |

 ### Form-Item Attributes

| 参数  | 说明       | 类型    | 可选值 | 默认值 | 必填 |
| :---- | :--------- | :------ | :----- | :----- | :--- |
| prop | 对应model中的字段，用于指定验证和重置等方法时的字段 | `String` | -      | -  | 否   |
| label | 标签的文本内容 | `String` | -      | -  | 否   |
| labelWidth | 标签的宽度，优先级高于`Form`的该属性 | `Number` | -      | -  | 否   |
| labelPosition | 标签的位置，优先级高于`Form`的该属性 | `String` | `left|top|right`      | -  | 否   |
| showMessage | 是否显示当前`FormItem`验证结果的错误信息，优先级高于`Form`的该属性 | `String` | -      | -  | 否   |
