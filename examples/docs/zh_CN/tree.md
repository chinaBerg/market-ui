## Tree 树形控件

### 基本使用
基本的Tree数据结构展示

:::demo
```html
<template>
  <div>
    <mku-tree :data="list" />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {
            label: 'node1-1',
            children: [
              {
                label: 'node2-1',
                children: [
                  {
                    label: 'node3-1'
                  }
                ]
              },
              {
                label: 'node2-2',
                children: [
                  {
                    label: 'node3-1'
                  }
                ]
              }
            ]
          },
          {
            label: 'node1-2',
            children: [
              {
                label: 'node2-1'
              }
            ]
          }
        ]
      }
    }
  }
</script>
```
:::


### 可选择
支持层级选择，同时这个例子还演示了自定义数据结构的键名。

:::demo
```html
<template>
  <div>
    <mku-tree
      show-checkbox
      label="name"
      children="childrenNodes"
      :data="list"
    />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {
            name: 'node1-1',
            childrenNodes: [
              {
                name: 'node2-1',
                childrenNodes: [
                  {
                    name: 'node3-1'
                  }
                ]
              },
              {
                name: 'node2-2',
                childrenNodes: [
                  {
                    name: 'node3-1'
                  }
                ]
              }
            ]
          },
          {
            name: 'node1-2',
            childrenNodes: [
              {
                name: 'node2-1'
              }
            ]
          }
        ]
      }
    }
  }
</script>
```
:::

### 禁用项
在节点数据上添加disabled属性设置禁用。

:::demo
```html
<template>
  <div>
    <mku-tree
      show-checkbox
      node-key="id"
      :data="list"
      default-expand-all
      :default-checked-keys="[3]"
    />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {
            id: 1,
            label: 'node1-1',
            disabled: true,
            children: [
              {
                id: 2,
                label: 'node2-1',
                disabled: true,
                children: [
                  {
                    id: 3,
                    label: 'node3-1',
                    disabled: true
                  }
                ]
              },
              {
                id: 4,
                label: 'node2-2',
                children: [
                  {
                    id: 5,
                    label: 'node3-1'
                  }
                ]
              }
            ]
          },
          {
            id: 6,
            label: 'node1-2',
            children: [
              {
                id: 7,
                label: 'node2-1'
              }
            ]
          }
        ]
      }
    }
  }
</script>
```
:::

### 默认展开和选中
支持默认展开和选中，但是必须要设置node-key属性。
支持默认展开所有选项

:::demo
```html
<template>
  <div>
    <p>自定义展开和选中：</p>
    <mku-tree
      :data="list"
      show-checkbox
      node-key="id"
      :default-expanded-keys="[1]"
      :default-checked-keys="[2, 7]"
    />

    <br>
    <p>展开所有项：</p>
    <mku-tree
      :data="list"
      show-checkbox
      default-expand-all
    />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {
            label: 'node1-1',
            id: 1,
            children: [
              {
                label: 'node2-1',
                id: 2,
                children: [
                  {
                    label: 'node3-1',
                    id: 3
                  }
                ]
              },
              {
                label: 'node2-2',
                id: 4,
                children: [
                  {
                    label: 'node3-1',
                    id: 5
                  }
                ]
              }
            ]
          },
          {
            label: 'node1-2',
            id: 6,
            children: [
              {
                label: 'node2-1',
                id: 7
              }
            ]
          }
        ]
      }
    }
  }
</script>
```
:::


### 节点的设置和获取

:::demo
```html
<template>
  <div>
    <mku-tree
      ref="tree"
      :data="list"
      node-key="id"
      show-checkbox
      default-expand-all
    />

    <br>
    <div>
      <mku-button type="primary" @click="setCheckedKeys">通过node-key设置选中</mku-button>
      <mku-button type="primary" @click="setCheckedNodes">通过node数据节点设置选中</mku-button>
      <mku-button type="primary" @click="getCheckedKeys">获取选中项的keys数组</mku-button>
      <mku-button type="primary" @click="getCheckedNodes">获取选中项的数据数组</mku-button>
      <mku-button type="primary" @click="resetChecked">重置所有选中项目</mku-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {
            label: 'node1-1',
            id: 1,
            children: [
              {
                label: 'node2-1',
                id: 2,
                children: [
                  {
                    label: 'node3-1',
                    id: 3
                  }
                ]
              },
              {
                label: 'node2-2',
                id: 4,
                children: [
                  {
                    label: 'node3-1',
                    id: 5
                  }
                ]
              }
            ]
          },
          {
            label: 'node1-2',
            id: 6,
            children: [
              {
                label: 'node2-1',
                id: 7
              }
            ]
          }
        ]
      }
    },
    methods: {
      setCheckedKeys () {
        this.$refs.tree.setCheckedKeys([3])
      },
      setCheckedNodes () {
        this.$refs.tree.setCheckedNodes([
          { label: 'node3-1', id: 5 }
        ])
      },
      getCheckedNodes () {
        const nodes = this.$refs.tree.getCheckedNodes()
        console.log(nodes)
        this.$message.success('节点获取成功，请在控制台查看')
      },
      getCheckedKeys () {
        const nodes = this.$refs.tree.getCheckedKeys()
        console.log(nodes)
        this.$message.success('节点获取成功，请在控制台查看')
      },
      resetChecked () {
        this.$refs.tree.setCheckedKeys([])
      }
    }
  }
</script>
```
:::

### 手风琴模式
手风琴模式，只允许同时展开一个节点。

:::demo
```html
<template>
  <div>
    <mku-tree :data="list" accordion />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {
            label: 'node1-1',
            id: 1,
            children: [
              {
                label: 'node2-1',
                id: 2,
                children: [
                  {
                    label: 'node3-1',
                    id: 3
                  }
                ]
              },
              {
                label: 'node2-2',
                id: 4,
                children: [
                  {
                    label: 'node3-1',
                    id: 5
                  }
                ]
              }
            ]
          },
          {
            label: 'node1-2',
            id: 6,
            children: [
              {
                label: 'node2-1',
                id: 7
              }
            ]
          }
        ]
      }
    }
  }
</script>
```
:::

### 自定义渲染节点内容

:::demo
```html
<template>
  <div>
    <mku-tree
      show-checkbox
      default-expand-all
      :data="list"
      :render-content="renderContent"
      @toggle-change="handleToggle"
      @checked-change="handleChecked"
    />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {
            label: 'node1-1',
            id: 1,
            children: [
              {
                label: 'node2-1',
                id: 2,
                children: [
                  {
                    label: 'node3-1',
                    id: 3
                  }
                ]
              },
              {
                label: 'node2-2',
                id: 4,
                children: [
                  {
                    label: 'node3-1',
                    id: 5
                  }
                ]
              }
            ]
          },
          {
            label: 'node1-2',
            id: 6,
            children: [
              {
                label: 'node2-1',
                id: 7
              }
            ]
          }
        ]
      }
    },
    methods: {
      renderContent (h, { data, parent }) {
        return h('div', {
          class: 'doc-tree__item'
        }, [
          h('span', {
            class: 'doc-tree__label'
          }, data.label),
          h('mku-button', {
            style: {
              margin: '0 10px'
            },
            props: {
              size: 'small'
            },
            nativeOn: {
              click: (e) => this.remove(data, parent, e)
            }
          }, '-'),
          h('mku-button', {
            props: {
              size: 'small'
            },
            nativeOn: {
              click: (e) => this.append(data, e)
            }
          }, '+')
        ])
      },
      append (data, e) {
        let children = data.children || []
        children.push({
          label: 'children-node'
        })
        this.$set(data, 'children', children)
        e.stopPropagation()
      },
      remove (data, parent, e) {
        const index = parent.indexOf(data)
        if (index > -1) {
          parent.splice(index, 1)
        }
        e.stopPropagation()
      },
      handleToggle (data, node) {
        console.log(data, node)
      },
      handleChecked (nodes, data) {
        console.log(nodes, data)
      }
    }
  }
</script>
```
:::

### Tree Attributes

| 参数                  | 说明                                                         | 类型              | 可选值          | 默认值     | 必选   |
| :-------------------- | :----------------------------------------------------------- | :---------------- | :-------------- | :--------- | :----- |
| data                  | 数据对象                                                     | `Array`           | -               | -          | 是     |
| node-key              | 每个树节点的标识，该值在整个tree内应该是唯一的               | `String | Number` | -               | -          | 否     |
| label                 | 定义子节点名称在data数据对象中的键名                         | `String`          | -               | `label`    | 否     |
| children              | 定义子节点数据在data数据对象中的键名                         | `String`          | -               | `children` | 否     | <!--  --> |
| show-checkbox         | 节点可被选择                                                 | `Boolean`         | -               | `false`    | 否     |
| default-expanded-keys | 设置默认的展开项                                             | `Array`           | -               | -          | 否     |
| default-expand-all    | 设置默认所有项展开                                           | `Boolean`         | -               | `false`    | 否     |
| default-checked-keys  | 设置默认的选中项                                             | `Array`           | -               | -          | 否     |
| accordion             | 只允许同时展开一个节点                                       | `Boolean`         | -               | `false`    | 否     |
| render-content        | 自定义渲染内容，第一个参数为节点数据，第二个参数为父节点数据 | `Function`        | -               | -          | 否     |
| expand-on-click-node  | 点击节点时是否可以展开收起                                   | Boolean           | -               | `true`     | 否     |
| check-on-click-node   | 点击节点时是否可以选中/取消，仅`show-checkbox`开始时有效     | Boolean           | -               | `false`    | 否     |
| disabled              | 是否禁用                                                     | Boolean           | `true`、`false` | `false`    | `true` |

### Tree Events

 | 事件名         | 说明                  | 回调函数参数                     |
 | :------------- | :-------------------- | :------------------------------- |
 | toggle-change  | 展开/收起子节点时触发 | 当前节点                         |
 | checked-change | 节点选中/取消时触发   | 所有选中节点的数组、当前节点数据 |

### Tree Methods
| 方法名          | 说明                             | 参数         |
| :-------------- | :------------------------------- | :----------- |
| getCheckedKeys  | 返回所有选中节点的key组成的数组  | -            |
| getCheckedNodes | 返回所有选中节点的数据组成的数组 | -            |
| setCheckedKeys  | 通过key设置选中的节点            | key数组      |
| setCheckedNodes | 通过node节点数据设置选中的节点   | 节点数据数组 |
