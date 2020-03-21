<template>
  <td :class="wrapClasss">
    <slot></slot>
  </td>
</template>

<script>
import { findComponentUpward } from '../../../utils/assist';

export default {
  name: 'MkuTableItem',
  props: {
    border: {
      type: Boolean,
      default: false,
    },
    zebra: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
    };
  },
  watch: {
  },
  computed: {
    wrapClasss() {
      return ['mku-table__td'];
    },
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      const parent = findComponentUpward(this, 'MkuTable');
      console.log(parent);
      if (parent) {
        parent.initTableItems(this);
      }
    },
  },
};
</script>
