## Alert 警告

### 基本使用

通过`type`控制alert类型
:::demo
```html
<div class="doc-alert-wrapper">
  <mku-alert type="info" title="这是一条info提示"></mku-alert>
  <mku-alert type="success" title="这是一条success提示"></mku-alert>
  <mku-alert type="error" title="这是一条error提示"></mku-alert>
  <mku-alert type="warning" title="这是一条warning提示"></mku-alert>
</div>
```
:::

### 带图标

:::demo
```html
<div class="doc-alert-wrapper">
  <mku-alert
    type="info"
    title="将进酒"
    content="君不见，黄河之水天上来，奔流到海不复回。君不见，高堂明镜悲白发，朝如青丝暮成雪。人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来。烹羊宰牛且为乐，会须一饮三百杯。岑夫子，丹丘生，将进酒，杯莫停。与君歌一曲，请君为我倾耳听。钟鼓馔玉不足贵，但愿长醉不复醒。古来圣贤皆寂寞，惟有饮者留其名。陈王昔时宴平乐，斗酒十千恣欢谑。主人何为言少钱，径须沽取对君酌。五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。"
    showIcon
    :content-line="2"
  />
  <mku-alert
    type="success"
    title="这是一条success提示"
    content="这是一小段副标题"
    showIcon
  />
  <mku-alert
    type="error"
    title="这是一条error提示"
    content="这是一小段副标题"
    showIcon
  />
  <mku-alert
    type="warning"
    title="这是一条warning提示"
    content="这是一小段副标题"
    showIcon
  />
</div>
```
:::

### 可关闭

:::demo
```html
<div class="doc-alert-wrapper">
  <mku-alert
    type="info"
    title="这是一条info提示"
    content="这是一小段副标题"
    showIcon
    closeable
  />
  <mku-alert
    type="success"
    title="这是一条success提示"
    content="这是一小段副标题"
    showIcon
    closeable
  />
  <mku-alert
    type="error"
    title="这是一条error提示"
    content="这是一小段副标题"
    showIcon
    closeable
  />
  <mku-alert
    type="warning"
    title="这是一条warning提示"
    content="这是一小段副标题"
    showIcon
    closeable
  />
</div>
```
:::

### Alert Attributes

| 参数         | 说明                                | 类型    | 可选值                        | 默认值 | 必填 |
| :----------- | :---------------------------------- | :------ | :---------------------------- | :----- | :--- |
| type         | alert警告类型                       | String  | info、error、success、warning | info   | 否   |
| title        | alert的标题                         | String  | -                             | -      | 是   |
| showIcon     | 是否显示图标                        | Boolean | -                             | false  | 否   |
| content      | alert的描述，为空或不填时不显示描述 | String  | -                             | -      | 否   |
| content-line | 描述最多显示几行，溢出隐藏          | String  | -                             | -      | 否   |
| closeable    | 是否可以关闭，开启会显示关闭按钮    | Boolean | -                             | false  | 否   |

### Icon Events

 | 事件名 | 说明           | 回调函数参数 |
 | :----- | :------------- | :----------- |
 | close  | 点击关闭时触发 | -            |
