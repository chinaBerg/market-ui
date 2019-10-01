## Menu 菜单

### 基本使用

支持默认展开子菜单和默认的选中项

:::demo
```html
<mku-menu
  default-active="key3"
  :default-opened="['submenu1']"
  :duration=".3"
>
  <mku-submenu name="submenu1">
    <template slot="title">菜单一</template>
    <mku-menu-item name="key1">item1</mku-menu-item>
    <mku-menu-item name="key2">item2</mku-menu-item>
    <mku-menu-item name="key3">item3</mku-menu-item>
    <mku-submenu name="submenu1-1">
      <template slot="title">item4</template>
      <mku-menu-item name="key4">item4-1</mku-menu-item>
      <mku-menu-item name="key5">item4-2</mku-menu-item>
      <mku-menu-item name="key6">item4-3</mku-menu-item>
      <mku-submenu name="submenu1-1-1">
        <template slot="title">item4-4</template>
        <mku-menu-item name="key7">item4-4-1</mku-menu-item>
        <mku-menu-item name="key8">item4-4-2</mku-menu-item>
        <mku-menu-item name="key9">item4-4-3</mku-menu-item>
      </mku-submenu>
    </mku-submenu>
  </mku-submenu>
  <mku-submenu name="submenu2">
    <template slot="title">菜单二</template>
    <mku-menu-item name="key10">item1</mku-menu-item>
  </mku-submenu>
  <mku-submenu name="submenu3">
    <template slot="title">菜单三</template>
    <mku-menu-item name="key11">item1</mku-menu-item>
  </mku-submenu>
  <mku-submenu name="submenu4">
    <template slot="title">菜单四</template>
    <mku-menu-item name="key12">item1</mku-menu-item>
  </mku-submenu>
</mku-menu>
```
:::

### 菜单分组
:::demo
```html
<mku-menu>
  <mku-submenu name="submenu1">
    <template slot="title">食品</template>
    <mku-menu-group title="辣条">
      <mku-menu-item name="key1">卫龙</mku-menu-item>
      <mku-menu-item name="key2">唐僧肉</mku-menu-item>
      <mku-menu-item name="key3">辣棒之王</mku-menu-item>
    </mku-menu-group>
    <mku-menu-group title="碳酸饮料">
      <mku-menu-item name="key4">可口可乐</mku-menu-item>
      <mku-menu-item name="key5">七喜</mku-menu-item>
      <mku-menu-item name="key6">芬达</mku-menu-item>
    </mku-menu-group>
  </mku-submenu>
  <mku-submenu name="submenu2">
    <template slot="title">电子产品</template>
    <mku-menu-group title="电脑">
      <mku-menu-item name="key7">笔记本</mku-menu-item>
      <mku-menu-item name="key8">台式机</mku-menu-item>
      <mku-menu-item name="key9">一体机</mku-menu-item>
    </mku-menu-group>
    <mku-menu-group title="手机">
      <mku-menu-item name="key10">苹果</mku-menu-item>
      <mku-menu-item name="key11" route="https://www.baidu.com" target="_blank">华为</mku-menu-item>
    </mku-menu-group>
  </mku-submenu>
</mku-menu>
```
:::

### 跳转
支持vue-router路由跳转和外链跳转两种方式

:::demo
```html
<mku-menu>
  <mku-menu-group title="两种跳转方式">
    <mku-menu-item name="key1" route="/component/button">前往button路由</mku-menu-item>
    <mku-menu-item name="key2" route="https://www.baidu.com" target="_self">打开外链百度网</mku-menu-item>
  </mku-menu-group>
</mku-menu>
```
:::

### 自定义动画时间

:::demo
```html
<mku-menu>
  <mku-submenu
    name="submenu1"
    animate="ease-out"
    :duration=".3"
  >
    <template slot="title">0.3s动画时间</template>
    <mku-menu-item name="key1">item1</mku-menu-item>
    <mku-menu-item name="key2">item2</mku-menu-item>
    <mku-menu-item name="key3">item3</mku-menu-item>
  </mku-submenu>
  <mku-submenu name="submenu2" :duration="2">
    <template slot="title">2s的动画时间</template>
    <mku-menu-item name="key4">item1</mku-menu-item>
    <mku-menu-item name="key5">item1</mku-menu-item>
    <mku-menu-item name="key6">item1</mku-menu-item>
    <mku-menu-item name="key7">item1</mku-menu-item>
  </mku-submenu>
</mku-menu>
```
:::

### 只允许同时展开一个子菜单

:::demo
```html
<mku-menu :unique-open="true">
  <mku-submenu name="submenu1">
    <template slot="title">菜单1</template>
    <mku-menu-item name="key1">item1</mku-menu-item>
    <mku-menu-item name="key2">item2</mku-menu-item>
    <mku-menu-item name="key3">item3</mku-menu-item>
  </mku-submenu>
  <mku-submenu name="submenu2">
    <template slot="title">菜单2</template>
    <mku-menu-item name="key4">item1</mku-menu-item>
    <mku-menu-item name="key5">item1</mku-menu-item>
    <mku-menu-item name="key6">item1</mku-menu-item>
    <mku-menu-item name="key7">item1</mku-menu-item>
  </mku-submenu>
  <mku-submenu name="submenu3">
    <template slot="title">菜单3</template>
    <mku-menu-item name="key8">item1</mku-menu-item>
    <mku-menu-item name="key9">item1</mku-menu-item>
    <mku-menu-item name="key10">item1</mku-menu-item>
    <mku-menu-item name="key11">item1</mku-menu-item>
  </mku-submenu>
</mku-menu>
```
:::

### 事件和方法

支持直接打开或者关闭子菜单，并在状态变化后可以得知

:::demo
```html
<div>
  <mku-button type="primary" @click="openMenu">展开第一个submenu</mku-button>
  <mku-button type="primary" @click="closeMenu">关闭第一个子菜单</mku-button>
  <mku-button type="primary" @click="openMenu2">展开多个submenu</mku-button>
</div>

<br>

<mku-menu
  ref="menu"
  @opened-change="handleChange"
>
  <mku-submenu name="submenu1">
    <template slot="title">菜单1</template>
    <mku-menu-item name="key1">item1</mku-menu-item>
    <mku-menu-item name="key2">item2</mku-menu-item>
    <mku-menu-item name="key3">item3</mku-menu-item>
  </mku-submenu>
  <mku-submenu name="submenu2">
    <template slot="title">菜单2</template>
    <mku-menu-item name="key4">item1</mku-menu-item>
    <mku-menu-item name="key5">item1</mku-menu-item>
    <mku-menu-item name="key6">item1</mku-menu-item>
    <mku-menu-item name="key7">item1</mku-menu-item>
  </mku-submenu>
  <mku-submenu name="submenu3">
    <template slot="title">菜单3</template>
    <mku-menu-item name="key8">item1</mku-menu-item>
    <mku-menu-item name="key9">item1</mku-menu-item>
    <mku-menu-item name="key10">item1</mku-menu-item>
    <mku-menu-item name="key11">item1</mku-menu-item>
  </mku-submenu>
</mku-menu>

<script>
export default {
  methods: {
    handleChange ({name, state, closedNames, openedNames}) {
      this.$message.info(`监听到opened-change事件:${state}`)
    },
    openMenu () {
      this.$refs.menu.open('submenu1')
    },
    closeMenu () {
      this.$refs.menu.close('submenu1')
    },
    openMenu2 () {
      this.$refs.menu.open(['submenu1', 'submenu2'], true)
    },
    openMenu3 () {
      this.$refs.menu.open(['submenu1', 'submenu2'], false)
    }
  }
}
</script>
```
:::

### Menu Attributes

| 参数           | 说明                                                                           | 类型    | 可选值                                  | 默认值   | 必填 |
| :------------- | :----------------------------------------------------------------------------- | :------ | :-------------------------------------- | :------- | :--- |
| mode           | 菜单类型，水平菜单或者垂直菜单                                                 | String  | horizontal、vertical                    | vertical | 否   |
| theme          | 主题，默认提供了两种主题                                                       | String  | light、dark                             | light    | 否   |
| default-active | 设置默认选中的菜单项name                                                       | String  | -                                       | -        | 否   |
| default-opened | 设置默认展开的submenu，若设置了unique-open属性则只展开数组第一项               | String  | -                                       | -        | 否   |
| duration       | 子菜单动画的时间                                                               | String  | push、replace等vue-router支持的跳转方式 | push     | 否   |
| target         | 使route以外链进行跳转，类似a标签的target属性                                   | String  | _blank、_self等链接跳转方式的值         | _blank   | 否   |
| disabled       | 禁用当前菜单项                                                                 | Boolean | -                                       | false    | 否   |
| className      | 自定义菜单项的class name名称                                                   | String  | -                                       | -        | 否   |
| duration       | 自定义所有submenu的动画时间，单位秒                                            | Number  | -                                       | 0.5      | 否   |
| animate        | 自定义所有submenu的动画类型，支持所有css3 transition-timing-function的所有类型 | String  | -                                       | linear   | 否   |
| unique-open    | 只允许同时展开一个子菜单                                                       | Boolean | -                                       | false    | 否   |


### Menu Events
| 事件名        | 说明                 | 回调函数参数                                                                                                                                                                            |
| :------------ | :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| select        | 选中菜单项时触发     | 返回选中菜单项的name值                                                                                                                                                                  |
| opended       | 菜单展开时触发       | 返回一个对象，eg：{name: 当前触发的submenu的name, state: 该submenu的状态, openedNames: 所有展开状态的submenu name数组, closedNames: 所有关闭状态的submenu, allNames: 所有submenu的name} |
| closed        | 菜单收起时触发       | 返回一个对象，eg：{name: 当前触发的submenu的name, state: 该submenu的状态, openedNames: 所有展开状态的submenu name数组, closedNames: 所有关闭状态的submenu, allNames: 所有submenu的name} |
| opened-change | 菜单展开或收起时触发 | 返回一个对象，eg：{name: 当前触发的submenu的name, state: 该submenu的状态, openedNames: 所有展开状态的submenu name数组, closedNames: 所有关闭状态的submenu, allNames: 所有submenu的name} |

### Menu Methods
| 方法名 | 说明              | 参数                                            |
| :----- | :---------------- | :---------------------------------------------- |
| open   | 展开指定的submenu | 需要打开的submenu的name字符串或者name字符串数组 |
| close  | 收起指定的submenu | 需要关闭的submenu的name字符串或者name字符串数组 |

### Menu-Submenu Attributes
| 参数     | 说明                                                                                                      | 类型   | 可选值 | 默认值 | 必填 |
| :------- | :-------------------------------------------------------------------------------------------------------- | :----- | :----- | :----- | :--- |
| duration | 自定义单个submenu菜单的动画时间，单位秒。权重高于menu定义的duration                                       | Number | -      | 0.5    | 否   |
| animate  | 自定义单个submenu的动画类型，支持所有css3 transition-timing-function的所有类型。权重高于menu定义的animate | String | -      | linear | 否   |


### Menu-Group Attributes
| 参数  | 说明     | 类型   | 可选值 | 默认值 | 必填 |
| :---- | :------- | :----- | :----- | :----- | :--- |
| title | 分类名称 | String | -      | -      | 否   |


### Menu-Item Attributes

| 参数      | 说明                                                                | 类型    | 可选值                                  | 默认值 | 必填 |
| :-------- | :------------------------------------------------------------------ | :------ | :-------------------------------------- | :----- | :--- |
| name      | 菜单项的唯一标识                                                    | String  | -                                       | -      | 是   |
| route     | 路由跳转，支持vue-router和外链两种方式，需配合routeType或target使用 | Object  | 值为vue-router跳转参数或外链地址        | -      | 否   |
| routeType | 使route以vue-router方式进行跳转                                     | String  | push、replace等vue-router支持的跳转方式 | push   | 否   |
| target    | 使route以外链进行跳转，类似a标签的target属性                        | String  | _blank、_self等链接跳转方式的值         | _blank | 否   |
| disabled  | 禁用当前菜单项                                                      | Boolean | -                                       | false  | 否   |
| className | 自定义菜单项的class name名称                                        | String  | -                                       | -      | 否   |
