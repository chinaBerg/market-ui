// routes of navigation
export default [
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
        component: () => import('../../docs/zh_CN/menu.md')
      },
      {
        path: '/component/dropdown',
        name: 'Dropdown',
        meta: {
          type: 'component',
          title: 'Dropdown 下拉菜单'
        },
        component: () => import('../../docs/zh_CN/dropdown.md')
      },
      {
        path: '/component/pagination',
        name: 'Page',
        meta: {
          type: 'component',
          title: 'Pagination 分页'
        },
        component: () => import('../../docs/zh_CN/pagination.md')
      }
    ]
  }
]
