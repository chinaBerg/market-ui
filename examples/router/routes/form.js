// routes of form
export default [
  {
    code: 'form',
    name: '表单',
    children: [
      {
        path: '/component/radio',
        name: 'Radio',
        meta: {
          type: 'component',
          title: 'Radio 单选框',
        },
        component: () => import('../../docs/zh_CN/radio.md'),
      },
      {
        path: '/component/checkbox',
        name: 'Checkbox',
        meta: {
          type: 'component',
          title: 'Checkbox 复选框',
        },
        component: () => import('../../docs/zh_CN/checkbox.md'),
      },
      {
        path: '/component/input',
        name: 'Input',
        meta: {
          type: 'component',
          title: 'Input 输入框',
        },
        component: () => import('../../docs/zh_CN/input.md'),
      },
      {
        path: '/component/select',
        name: 'Select',
        meta: {
          type: 'component',
          title: 'Select 选择器',
        },
        component: () => import('../../docs/zh_CN/select.md'),
      },
      {
        path: '/component/switch',
        name: 'Switch',
        meta: {
          type: 'component',
          title: 'Switch 开关',
        },
        component: () => import('../../docs/zh_CN/switch.md'),
      },
      {
        path: '/component/slider',
        name: 'Slider',
        meta: {
          type: 'component',
          title: 'Slider 滑块',
        },
        component: () => import('../../docs/zh_CN/slider.md'),
      },
      {
        path: '/component/time-picker',
        name: 'TimePicker',
        meta: {
          type: 'component',
          title: 'TimePicker 时间选择器',
        },
        component: () => import('../../docs/zh_CN/time-picker.md'),
      },
      {
        path: '/component/date-picker',
        name: 'DatePicker',
        meta: {
          type: 'component',
          title: 'DatePicker 日期选择器',
        },
        component: () => import('../../docs/zh_CN/date-picker.md'),
      },
      {
        path: '/component/form',
        name: 'Form',
        meta: {
          type: 'component',
          title: 'Form 表单',
        },
        component: () => import('../../docs/zh_CN/form.md'),
      },
    ],
  },
];
