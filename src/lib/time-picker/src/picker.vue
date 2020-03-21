<template>
  <div class="mku-tpicker__row-wrap">
    <!-- 头部 -->
    <div class="mku-tpicker__row-title" v-if="title">{{title}}</div>

    <!-- 日期列表 -->
    <div class="mku-tpicker__row">
      <div class="mku-tpicker__col" ref="hourCol">
        <ul class="mku-tpicker__list mku-tpicker__list--short">
          <li
            v-for="(item, index) in hours"
            :key="index"
            :class="pickerClasss(value[0], item)"
            @click="handleClick('hour', item)">
            {{item | formatNumber}}
          </li>
        </ul>
      </div>
      <div class="mku-tpicker__col" ref="minuteCol">
        <ul class="mku-tpicker__list mku-tpicker__list--long">
          <li
            v-for="(item, index) in minutes"
            :key="index"
            :class="pickerClasss(value[1], item)"
            @click="handleClick('minute', item, index)">
            {{item | formatNumber}}
          </li>
        </ul>
      </div>
      <div class="mku-tpicker__col" ref="secondCol">
        <ul class="mku-tpicker__list mku-tpicker__list--long">
          <li
            v-for="(item, index) in seconds"
            :key="index"
            :class="pickerClasss(value[2], item)"
            @click="handleClick('second', item, index)">
            {{item | formatNumber}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import kute from 'kute.js';
import { fillZero } from '../../../utils/tools';

// 生成0开始的叠加数组
const genIncreaseArray = (n) => {
  const res = [];
  for (let i = 0; i < n; i++) res.push(i);
  return res;
};

export default {
  props: [
    'value',
    'title',
  ],
  data() {
    return {
      hours: genIncreaseArray(24),
      minutes: genIncreaseArray(60),
      seconds: genIncreaseArray(60),
    };
  },
  filters: {
    formatNumber(num) {
      return fillZero(num);
    },
  },
  computed: {
    pickerClasss() {
      return (val1, val2) => ['mku-tpicker__col-item', {
        'mku-tpicker__col-item--active': parseInt(val1, 10) === parseInt(val2, 10),
      }];
    },
  },
  methods: {
    /**
     * @method resetScroll
     * @description 重置滚动位置，对外暴露使用
     * @param { Array } 三项的目标滚动下标
     */
    resetScroll(arr, duration) {
      this.$nextTick(() => {
        ['hourCol', 'minuteCol', 'secondCol'].forEach((ref, index) => {
          this.scrollTo(this.$refs[ref], (arr || this.value || [])[index] || 0, duration);
        });
      });
    },
    /**
     * @method resetScroll
     * @description 点击时间项：
     * - 根据type将对应target滚动到对应位置
     * - 派发emit事件
     */
    handleClick(type, item) {
      const targetMaps = {
        hour: this.$refs.hourCol,
        minute: this.$refs.minuteCol,
        second: this.$refs.secondCol,
      };
      const target = targetMaps[type];
      const scroll = () => {
        if (target) {
          this.scrollTo(target, item);
        }
      };
      this.$emit('click', type, item, scroll);
    },
    /**
     * @method scrollTo
     * @description 滚动动画
     * @param { Element } target 滚动目标
     * @param { Number } index 滚动到的下标
     * @param { Number } duration 滚动时长
     */
    scrollTo(target, index, duration = 250) {
      const firstItemHeight = target.querySelector('.mku-tpicker__col-item').clientHeight;
      kute.to(target, {
        scroll: index * firstItemHeight,
      }, {
        duration,
      }).start();
    },
  },
};
</script>
