<template>
  <div :class="wrapClasss">
    <div class="mku-table__head">
      <table class="mku-table__tb" border="0" cellspacing="0" cellpadding="0">
        <colgroup>
          <col>
          <col width="340">
          <col width="240">
          <col>
        </colgroup>
        <thead>
          <tr>
            <th class="mku-table__th">标题</th>
            <th class="mku-table__th">内容</th>
            <th class="mku-table__th">简介</th>
            <th class="mku-table__th">来源</th>
          </tr>
        </thead>
      </table>
    </div>

    <div class="mku-table__body">
      <table class="mku-table__tb" border="0" cellspacing="0" cellpadding="0">
        <colgroup>
          <col width="">
          <col width="340">
          <col width="240">
          <col>
        </colgroup>
        <tbody>
          <tr
            class="mku-table__tr"
            v-for="(trItem, trIndex) in 4"
            :key="trIndex"
            :class="tdClasss(trItem, trIndex)">
            <slot></slot>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MkuTable',
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
      tableItems: [],
    };
  },
  watch: {
  },
  computed: {
    wrapClasss() {
      return ['mku-table', {
        'mku-table--border': this.border,
      }];
    },
    tdClasss() {
      return (item, index) => ['mku-table__tr', {
        'mku-table__tr--even': this.zebra && index % 2 === 1,
      }];
    },
  },
  methods: {
    initTableItems(item) {
      if (!this.tableItems.includes(item)) {
        this.tableItems.push(item);
      }
    },
  },
};
</script>
