/**
 * nav的路由配置
 * [
 *    {
 *      code: '', // 分类的code
 *      name: '', // 分类名称
 *      children: [ // 该分类下所有组件
 *        {
 *          path: '', // 路由
 *          name: '', // 路由Name
 *          meta: {
 *            type: '', // 路由类型，component为组件
 *            title: '' // 显示在nav的名称
 *          }
 *        }
 *      ]
 *    }
 * ]
 */
export default [
  {
    code: 'basic',
    name: '基础',
    children: [
      {
        path: '/component/icon',
        name: 'Icon',
        meta: {
          type: 'component',
          title: 'Icon 图标'
        },
        component: () => import('../docs/zh_CN/icon.md')
      },
      {
        path: '/component/button',
        name: 'Button',
        meta: {
          type: 'component',
          title: 'Button 按钮'
        },
        component: () => import('../docs/zh_CN/button.md')
      },
      {
        path: '/component/grid',
        name: 'Grid',
        meta: {
          type: 'component',
          title: 'Grid 栅格'
        },
        component: () => import('../docs/zh_CN/grid.md')
      }
    ]
  },
  {
    code: 'navigation',
    name: '导航',
    children: [
      {
        path: '/component/menu',
        name: 'Menu',
        meta: {
          type: 'component',
          title: 'Menu 菜单'
        },
        component: () => import('../docs/zh_CN/menu.md')
      }
    ]
  },
  {
    code: 'form',
    name: '表单',
    children: [
      {
        path: '/component/input',
        name: 'Input',
        meta: {
          type: 'component',
          title: 'Input 输入框'
        },
        component: () => import('../docs/zh_CN/input.md')
      }
    ]
  },
  {
    code: 'tip',
    name: '提示',
    children: [
      {
        path: '/component/alert',
        name: 'Alert',
        meta: {
          type: 'component',
          title: 'Alert 警告'
        },
        component: () => import('../docs/zh_CN/alert.md')
      },
      {
        path: '/component/message',
        name: 'Message',
        meta: {
          type: 'component',
          title: 'Message 消息提示'
        },
        component: () => import('../docs/zh_CN/message.md')
      }
    ]
  }
  // {
  //   path: '/component/tabs',
  //   name: 'Tabs',
  //   meta: {
  //     type: 'component',
  //     title: 'Tabs 标签页'
  //   },
  //   component: () => import('../docs/zh_CN/tabs.md')
  // },
  // {
  //   path: '/component/dropdown',
  //   name: 'Dropdown',
  //   meta: {
  //     type: 'component',
  //     title: 'Dropdown 下拉菜单'
  //   },
  //   component: () => import('../docs/zh_CN/dropdown.md')
  // },
  // {
  //   path: '/component/page',
  //   name: 'Page',
  //   meta: {
  //     type: 'component',
  //     title: 'Page 分页'
  //   },
  //   component: () => import('../docs/zh_CN/page.md')
  // },
  // {
  //   path: '/component/crumb',
  //   name: 'Crumb',
  //   meta: {
  //     type: 'component',
  //     title: 'Crumb 面包屑'
  //   },
  //   component: () => import('../docs/zh_CN/crumb.md')
  // },
  // {
  //   path: '/component/badge',
  //   name: 'badge',
  //   meta: {
  //     type: 'component',
  //     title: 'Badge 徽章'
  //   },
  //   component: () => import('../docs/zh_CN/badge.md')
  // },
  // {
  //   path: '/component/steps',
  //   name: 'Steps',
  //   meta: {
  //     type: 'component',
  //     title: 'Steps 步骤条'
  //   },
  //   component: () => import('../docs/zh_CN/steps.md')
  // },
  // {
  //   path: '/component/radio',
  //   name: 'Radio',
  //   meta: {
  //     type: 'component',
  //     title: 'Radio 单选框'
  //   },
  //   component: () => import('../docs/zh_CN/radio.md')
  // },
  // {
  //   path: '/component/checkbox',
  //   name: 'Checkbox',
  //   meta: {
  //     type: 'component',
  //     title: 'Checkbox 复选框'
  //   },
  //   component: () => import('../docs/zh_CN/checkbox.md')
  // },
  // {
  //   path: '/component/switch',
  //   name: 'Switch',
  //   meta: {
  //     type: 'component',
  //     title: 'Switch 开关'
  //   },
  //   component: () => import('../docs/zh_CN/switch.md')
  // },
  // {
  //   path: '/component/select',
  //   name: 'Select',
  //   meta: {
  //     type: 'component',
  //     title: 'Select 选择器'
  //   },
  //   component: () => import('../docs/zh_CN/select.md')
  // },
  // {
  //   path: '/component/form',
  //   name: 'Form',
  //   meta: {
  //     type: 'component',
  //     title: 'Form 选择器'
  //   },
  //   component: () => import('../docs/zh_CN/form.md')
  // },
  // {
  //   path: '/component/table',
  //   name: 'Table',
  //   meta: {
  //     type: 'component',
  //     title: 'Table 表格'
  //   },
  //   component: () => import('../docs/zh_CN/table.md')
  // },
  // {
  //   path: '/component/date-picker',
  //   name: 'DatePicker',
  //   meta: {
  //     type: 'component',
  //     title: 'DatePicker 日期选择器'
  //   },
  //   component: () => import('../docs/zh_CN/date-picker.md')
  // },
  // {
  //   path: '/component/cascader',
  //   name: 'Cascader',
  //   meta: {
  //     type: 'component',
  //     title: 'Cascader 级联选择器'
  //   },
  //   component: () => import('../docs/zh_CN/cascader.md')
  // },
  // {
  //   path: '/component/alert',
  //   name: 'Alert',
  //   meta: {
  //     type: 'component',
  //     title: 'Alert 警告'
  //   },
  //   component: () => import('../docs/zh_CN/alert.md')
  // },
  // {
  //   path: '/component/message',
  //   name: 'Message',
  //   meta: {
  //     type: 'component',
  //     title: 'Message 提示'
  //   },
  //   component: () => import('../docs/zh_CN/message.md')
  // },
  // {
  //   path: '/component/notice',
  //   name: 'Notice',
  //   meta: {
  //     type: 'component',
  //     title: 'Notice 通知'
  //   },
  //   component: () => import('../docs/zh_CN/notice.md')
  // },
  // {
  //   path: '/component/dialog',
  //   name: 'Dialog',
  //   meta: {
  //     type: 'component',
  //     title: 'Dialog 对话框'
  //   },
  //   component: () => import('../docs/zh_CN/dialog.md')
  // },
  // {
  //   path: '/component/dialog',
  //   name: 'Tree',
  //   meta: {
  //     type: 'component',
  //     title: 'Tree 树形控件'
  //   },
  //   component: () => import('../docs/zh_CN/tree.md')
  // },
  // {
  //   path: '/component/tooltip',
  //   name: 'Tooltip',
  //   meta: {
  //     type: 'component',
  //     title: 'Tooltip 文字提示'
  //   },
  //   component: () => import('../docs/zh_CN/tooltip.md')
  // },
  // {
  //   path: '/component/popover',
  //   name: 'Popover',
  //   meta: {
  //     type: 'component',
  //     title: 'Popover 气泡提示'
  //   },
  //   component: () => import('../docs/zh_CN/popover.md')
  // },
  // {
  //   path: '/component/loading',
  //   name: 'Loading',
  //   meta: {
  //     type: 'component',
  //     title: 'Loading 加载中'
  //   },
  //   component: () => import('../docs/zh_CN/loading.md')
  // }
]
