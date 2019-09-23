export default [
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
  },
  {
    path: '/component/menu',
    name: 'Menu',
    meta: {
      type: 'component',
      title: 'Menu 菜单'
    },
    component: () => import('../docs/zh_CN/menu.md')
  },
  {
    path: '/component/tabs',
    name: 'Tabs',
    meta: {
      type: 'component',
      title: 'Tabs 标签页'
    },
    component: () => import('../docs/zh_CN/tabs.md')
  },
  {
    path: '/component/input',
    name: 'Input',
    meta: {
      type: 'component',
      title: 'Input 输入框'
    },
    component: () => import('../docs/zh_CN/input.md')
  },
  {
    path: '/component/dropdown',
    name: 'Dropdown',
    meta: {
      type: 'component',
      title: 'Dropdown 下拉菜单'
    },
    component: () => import('../docs/zh_CN/dropdown.md')
  },
  {
    path: '/component/page',
    name: 'Page',
    meta: {
      type: 'component',
      title: 'Page 分页'
    },
    component: () => import('../docs/zh_CN/page.md')
  },
  {
    path: '/component/crumb',
    name: 'Crumb',
    meta: {
      type: 'component',
      title: 'Crumb 面包屑'
    },
    component: () => import('../docs/zh_CN/crumb.md')
  }
]
