## 快速开始

<br>
<br>
<br>

### 全局引入

```javascript
import Vue from 'vue'
import MarketUi from 'market-ui'
import 'market-ui/lib/styles/index.css'

Vue.use(MarketUi);
```

<br>
<br>
<br>

### 按需加载

```javascript
import Vue from 'vue'
import { Button } from 'market-ui'
import 'market-ui/lib/styles/button.css';

Vue.use(Button);
```

<br>

- 借助[babel-plugin-component](https://github.com/ElementUI/babel-plugin-component)插件按需加载，会自动导入对应的css文件。

<br>

首先安装babel-plugin-component插件:

<br>

```shell
npm i babel-plugin-component -D
```

<br>

修改`.babelrc`配置文件:

<br>

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

<br>

最后直接导入对应的模块就好：

<br>

```javascript
import Vue from 'vue'
import { Button, Switch } from 'market-ui'

Vue.use(Button).use(Switch);
```