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
          title: 'Menu 菜单',
        },
        component: () => import('../../docs/zh_CN/menu.md'),
      },
      {
        path: '/component/breadcrumb',
        name: 'Breadcrumb',
        meta: {
          type: 'component',
          title: 'Breadcrumb 面包屑',
        },
        component: () => import('../../docs/zh_CN/breadcrumb.md'),
      },
      {
        path: '/component/dropdown',
        name: 'Dropdown',
        meta: {
          type: 'component',
          title: 'Dropdown 下拉菜单',
        },
        component: () => import('../../docs/zh_CN/dropdown.md'),
      },
      {
        path: '/component/pagination',
        name: 'Page',
        meta: {
          type: 'component',
          title: 'Pagination 分页',
        },
        component: () => import('../../docs/zh_CN/pagination.md'),
      },
      {
        path: '/component/steps',
        name: 'Steps',
        meta: {
          type: 'component',
          title: 'Steps 步骤条',
        },
        component: () => import('../../docs/zh_CN/steps.md'),
      },
    ],
  },
];
