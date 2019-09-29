<template>
  <div :class="['mku-col', `mku-col-${span}`, className]" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MkuCol',
  props: {
    span: {
      type: [String, Number],
      validator: val => {
        return +val >= 0 && +val <= 24
      },
      default: 24
    },
    className: {
      type: String,
      default: ''
    }
  },
  inject: ['gutter'],
  computed: {
    colStyle () {
      let offset = this.gutter / 2 + 'px'
      return {
        paddingLeft: offset,
        paddingRight: offset
      }
    }
  }
}
</script>

<style lang="less">
@one: 100% / 24;

.mku-col {
  display: block;
  float: left;
}

.mku-col-1 {
  width: @one * 1;
}
.mku-col-2 {
  width: @one * 2;
}
.mku-col-3 {
  width: @one * 3;
}
.mku-col-4 {
  width: @one * 4;
}
.mku-col-5 {
  width: @one * 5;
}
.mku-col-6 {
  width: @one * 6;
}
.mku-col-7 {
  width: @one * 7;
}
.mku-col-8 {
  width: @one * 8;
}
.mku-col-9 {
  width: @one * 9;
}
.mku-col-10 {
  width: @one * 10;
}
.mku-col-11 {
  width: @one * 11;
}
.mku-col-12 {
  width: @one * 12;
}
.mku-col-13 {
  width: @one * 13;
}
.mku-col-14 {
  width: @one * 14;
}
.mku-col-15 {
  width: @one * 15;
}
.mku-col-16 {
  width: @one * 16;
}
.mku-col-17 {
  width: @one * 17;
}
.mku-col-18 {
  width: @one * 18;
}
.mku-col-19 {
  width: @one * 19;
}
.mku-col-20 {
  width: @one * 20;
}
.mku-col-21 {
  width: @one * 21;
}
.mku-col-22 {
  width: @one * 22;
}
.mku-col-23 {
  width: @one * 23;
}
.mku-col-24 {
  width: @one * 24;
}
</style>
