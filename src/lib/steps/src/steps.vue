<script>
export default {
  name: 'MkuSteps',
  props: {
    // 布局方向
    direction: {
      type: String,
      default: 'horizontal',
      validator: (val) => ['horizontal', 'vertical'].includes(val),
    },
    // 是否居中
    center: {
      type: Boolean,
      default: false,
    },
    // 当前步骤
    current: {
      type: Number,
      default: 0,
    },
    // 当前步骤的状态
    currentStatus: {
      type: String,
      default: 'process',
      validator: (val) => ['wait', 'process', 'finish', 'error'].includes(val),
    },
    // 已完成步骤是否显示图标
    showIcon: {
      type: Boolean,
      default: true,
    },
  },
  provide() {
    return {
      MkuSteps: this,
    };
  },
  data() {
    return {
      steps: [],
    };
  },
  computed: {
    // 拼接steps的class name
    stepsClasss() {
      const prefix = 'mku-steps';
      return [prefix, {
        [`${prefix}--vertical`]: this.direction === 'vertical',
        [`${prefix}--horizontal`]: this.direction === 'horizontal',
      }];
    },
  },
  render(h) {
    return h('div', {
      class: this.stepsClasss,
    }, this.$slots.default);
  },
};
</script>
