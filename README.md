<div align="center">
  <a href="https://github.com/chinaBerg/market-ui">
    <img width="350" src="http://q7kvtumoa.bkt.clouddn.com/market-ui/images/logo.png?e=1584855375&token=kapOfBKVqNMRy8IF58K74QP1t7om0aZT6JlZ8j1q:v726z1GrCHHDgPsT8HOqoRHyF3U=">
  </a>
</div>

<div align="center">
  <a href="https://www.npmjs.com/package/market-ui">
    <img src="https://img.shields.io/npm/dm/market-ui.svg?color=%232d8cf0">
  </a>
  <a href="https://github.com/chinaBerg/market-ui/stargazers">
    <img src="https://img.shields.io/github/stars/chinaBerg/market-ui?color=%232d8cf0">
  </a>
  <a href="https://github.com/chinaBerg/market-ui/network/members">
    <img src="https://img.shields.io/github/forks/chinaBerg/market-ui?color=%232d8cf0">
  </a>
  <a href="https://github.com/chinaBerg/market-ui/network/members">
    <img src="https://img.shields.io/github/issues/chinaBerg/market-ui?color=%232d8cf0">
  </a>

  <br>
  <a href="https://unpkg.com/market-ui">
    <img src="http://img.badgesize.io/https://unpkg.com/market-ui/lib/market-ui.min.js?compression=gzip&label=gzip%20size:%20JS">
  </a>
  <a href="https://unpkg.com/market-ui/lib/styles/index.css">
    <img src="http://img.badgesize.io/https://unpkg.com/market-ui/lib/styles/index.css?compression=gzip&label=gzip%20size:%20CSS">
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/github/license/chinaBerg/market-ui?color=%232d8cf0">
  </a>
</div>


# Market-Ui

> 致力于高效开发PC端中后台产品的Vue.js组件库。  
> 众多vue爱好者共同维护一个友好的组件社区。

![首页展示图](http://q7kvtumoa.bkt.clouddn.com/market-ui/images/docs-home.png)
![文档展示gif](http://q7kvtumoa.bkt.clouddn.com/market-ui/images/docs-preview.gif)

## 链接

- [中文文档 & 在线演示DEMO](https://lengchui.gitee.io/market-ui-docs)
- [FAQ](./FAQ.md)

## 安装

```shell
npm i market-ui -S
```

## 使用

- 全局引入

```javascript
import Vue from 'vue'
import MarketUi from 'market-ui'
import 'market-ui/lib/styles/index.css'

Vue.use(MarketUi);
```

- 按需加载

```javascript
import Vue from 'vue'
import { Button } from 'market-ui'
import 'market-ui/lib/styles/button.css';

Vue.use(Button);
```

- 借助[babel-plugin-component](https://github.com/ElementUI/babel-plugin-component)插件按需加载，会自动导入对应的css文件。

首先安装babel-plugin-component插件:

```shell
npm i babel-plugin-component -D
```

修改`.babelrc`配置文件:

```json
{
  "plugins": [
    [
      "component",
      {
        "libraryName": "market-ui",
        "styleLibraryName": "styles"
      }
    ]
  ]
}
```

最后直接导入对应的模块就好：

```javascript
import Vue from 'vue'
import { Button, Switch } from 'market-ui'

Vue.use(Button).use(Switch);
```


## 加群讨论

欢迎进群与作者面对面讨论问题、组件库基础架构与开发经验、提出需求和共同维护！期待你的加入～～

<div>
  <span>QQ讨论群</span>
  <br>
  <img width="210" src="http://q7kvtumoa.bkt.clouddn.com/market-ui/images/qq-tlak.jpeg" alt="qq群二维码">
</div>

<div>
  <span>微信讨论群</span>
  <br>
  <img width="210" src="http://q7kvtumoa.bkt.clouddn.com/market-ui/images/wechat-talk.jpeg" alt="微信群二维码">
</div>


## 捐赠

如果您喜欢market-ui这个组件库，您可以打赏我们一杯续命的咖啡～

<div>
  <span>支付宝扫一扫</span>
  <br>
  <img width="210" src="http://q7kvtumoa.bkt.clouddn.com/market-ui/images/zfb-pay.jpg" alt="donation">
</div>

<div>
  <span>微信扫一扫</span>
  <br>
  <img width="210" src="http://q7kvtumoa.bkt.clouddn.com/market-ui/images/wechat-pay.jpg" alt="donation">
</div>

## 协议
[MIT](./LICENSE)
