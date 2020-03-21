<template>
  <li :class="optionsClasss" @click="handleOptionsClick">
    <slot>
      {{label || value}}
    </slot>
  </li>
</template>

<script>
export default {
  name: 'MkuOptions',
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    label: {
      type: [String, Number],
    },
    disabled: Boolean,
  },
  inject: [
    'MkuSelect',
  ],
  computed: {
    // 返回所有被选中的options
    optionsSelected() {
      return this.MkuSelect.optionsSelected;
    },
    // 拼接options的className
    optionsClasss() {
      const isActived = this.optionsSelected.some((item) => item.value === this.value);
      return [
        'mku-options', {
          'mku-options--actived': isActived,
          'mku-options--disabled': this.disabled,
        },
      ];
    },
  },
  methods: {
    /**
     * @method handleOptionsClick
     * @description options的点击事件
     * - 如果是disabled项，则阻止冒泡
     * - 触发select组件的change函数
     */
    handleOptionsClick(event) {
      if (this.disabled) {
        return event.stopPropagation();
      }

      return this.MkuSelect.change(this.formatEmitData());
    },
    formatEmitData() {
      return {
        value: this.value,
        text: this.label || (this.$el && this.$el.textContent),
      };
    },
  },
};
</script>
