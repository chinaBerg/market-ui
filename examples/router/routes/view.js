// routes of basic
export default [
  {
    code: 'view',
    name: '视图',
    children: [
      {
        path: '/component/drawer',
        name: 'Drawer',
        meta: {
          type: 'component',
          title: 'Drawer 抽屉',
        },
        component: () => import('../../docs/zh_CN/drawer.md'),
      },
      // {
      //   path: '/component/table',
      //   name: 'Table',
      //   meta: {
      //     type: 'component',
      //     title: 'Table 表格'
      //   },
      //   component: () => import('../../docs/zh_CN/table.md')
      // },
      {
        path: '/component/tabs',
        name: 'Tabs',
        meta: {
          type: 'component',
          title: 'Tabs 选项卡',
        },
        component: () => import('../../docs/zh_CN/tabs.md'),
      },
      {
        path: '/component/tree',
        name: 'Tree',
        meta: {
          type: 'component',
          title: 'Tree 树',
        },
        component: () => import('../../docs/zh_CN/tree.md'),
      },
      {
        path: '/component/swiper',
        name: 'Swiper',
        meta: {
          type: 'component',
          title: 'Swiper 轮播',
        },
        component: () => import('../../docs/zh_CN/swiper.md'),
      },
      {
        path: '/component/progress',
        name: 'Progress',
        meta: {
          type: 'component',
          title: 'Progress 进度条',
        },
        component: () => import('../../docs/zh_CN/progress.md'),
      },
    ],
  },
];
