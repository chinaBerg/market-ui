<div align="center">
  <a href="https://github.com/chinaBerg/market-ui">
    <img width="350" src="https://statics.1data.info/market-ui/assets/img/logo.png">
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
  <a href="./LICENSE">
    <img src="https://img.shields.io/github/license/chinaBerg/market-ui?color=%232d8cf0">
  </a>

  <br>
  <a href="https://unpkg.com/market-ui">
    <img src="http://img.badgesize.io/https://unpkg.com/market-ui/lib/market-ui.min.js?compression=gzip&label=gzip%20size:%20JS">
  </a>
  <a href="https://unpkg.com/market-ui/lib/styles/index.css">
    <img src="http://img.badgesize.io/https://unpkg.com/market-ui/lib/styles/index.css?compression=gzip&label=gzip%20size:%20CSS">
  </a>
</div>


## Market-Ui

Committed to the efficient development of PC end in the background products Vue.js Component library.

![文档截图](https://statics.1data.info/market-ui/assets/img/doc-demo.png)

### Document

- [中文文档DEMO](https://lengchui.gitee.io/market-ui-docs)
- [FAQ](./FAQ.md)

### Install

```bash
npm i market-ui -S
```

### Quick Start

- Global

```javascript
import Vue from 'vue'
import MarketUi from 'market-ui'
import 'market-ui/lib/styles/index.css'

Vue.use(MarketUi);
```

- On demand

```javascript
import Vue from 'vue'
import { Button } from 'market-ui'
import 'market-ui/lib/styles/button.css';

Vue.use(Button);
```

- Through [babel-plugin-component](https://github.com/ElementUI/babel-plugin-component), the corresponding CSS file will be automatically imported!

install babel-plugin-component:
```bash
npm i babel-plugin-component -D
```

Create the `. Babelrc` configuration file in the root directory:

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

use demo：

```javascript
import Vue from 'vue'
import { Button, Switch } from 'market-ui'

Vue.use(Button).use(Switch);
```


### Organization

Welcome to the group and the author face-to-face discussion, component library infrastructure and development experience, put forward requirements and common maintenance! Looking forward to your joining ~

<div style="display: inline-block;">
  <span>QQ</span>
  <br>
  <img width="210" src="https://statics.1data.info/market-ui/assets/img/qun-qq.png" alt="qq群二维码">
</div>

<div style="display: inline-block;">
  <span>Wechat</span>
  <br>
  <img width="210" src="https://statics.1data.info/market-ui/assets/img/qun-wechat.jpeg" alt="微信群二维码">
</div>

### LICENSE
[MIT](./LICENSE)

### Star

If you like the market UI component library, thank you very much for giving a star or participating in project maintenance ~