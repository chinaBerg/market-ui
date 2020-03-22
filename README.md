<p align="center">
  <img width="350" src="http://q7kvtumoa.bkt.clouddn.com/market-ui/images/logo.png?e=1584855375&token=kapOfBKVqNMRy8IF58K74QP1t7om0aZT6JlZ8j1q:v726z1GrCHHDgPsT8HOqoRHyF3U=">
</p>

<p align="center">
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
</p>


# Market-Ui

> A beautiful component library of Vue.js2+.

## Links

- [Document](https://lengchui.gitee.io/market-ui-docs)
- [FAQ](./FAQ.md)

## Install

```shell
npm i market-ui -S
```

## Usage

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

- 借助[babel-plugin-component]()插件按需加载，会自动导入对应的css文件。

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
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
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

## Donation

If you like market-ui, you can buy us a cup of coffee.

<p>
  <span>支付宝扫一扫</span>
  <br>
  <img width="200" src="http://q7kvtumoa.bkt.clouddn.com/market-ui/images/wechat_pay_code.jpeg" alt="donation">
</p>

<p>
  <span>微信扫一扫</span>
  <br>
  <img width="200" src="http://q7kvtumoa.bkt.clouddn.com/market-ui/images/zfb_pay_code.jpeg" alt="donation">
</p>

## LICENSE
[MIT](./LICENSE)
