<template>
  <div class="mku-dpicker__row">
    <div class="mku-dpicker__row-head">
      <template v-if="!linkPanels || name === 'left'">
        <button
          :class="['mku-icon mku-icon-double-arrow-left', {
            'mku-dpicker__icon--disabled': operateButtonDisabled('prev', 'year')
          }]"
          :disabled="operateButtonDisabled('prev', 'year')"
          @click="handleToggleButton('prevYear')">
        </button>
        <button
          :class="['mku-icon mku-icon-arrow-left', {
            'mku-dpicker__icon--disabled': operateButtonDisabled('prev', 'month')
          }]"
          :disabled="operateButtonDisabled('prev', 'month')"
          @click="handleToggleButton('prevMonth')">
        </button>
      </template>

      <span class="mku-dpicker__head-title">{{titleText}}</span>

      <template v-if="!linkPanels || name === 'right'">
        <button
          :class="['mku-icon mku-icon-arrow-right', {
            'mku-dpicker__icon--disabled': operateButtonDisabled('next', 'month')
          }]"
          :disabled="operateButtonDisabled('next', 'month')"
          @click="handleToggleButton('nextMonth')">
        </button>
        <button
          :class="['mku-icon mku-icon-double-arrow-right', {
            'mku-dpicker__icon--disabled': operateButtonDisabled('next', 'year')
          }]"
          :disabled="operateButtonDisabled('next', 'year')"
          @click="handleToggleButton('nextYear')">
        </button>
      </template>
    </div>

    <table class="mku-dpicker__table">
      <thead>
        <tr>
          <th class="mku-dpicker__th" v-for="(item, index) in titleList" :key="index">
            <div class="mku-dpicker__cell">{{item}}</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(trItem, trIndex) in 6" :key="trIndex">
          <td
            :class="tdClasss(currentItem(trIndex, tdIndex))"
            v-for="(tdItem, tdIndex) in 7" :key="tdIndex"
            @click="handleItemClick(currentItem(trIndex, tdIndex))"
            @mouseover="$emit('mouseover', currentItem(trIndex, tdIndex), dataList)">
            <div class="mku-dpicker__cell-rope" v-if="isRope(currentItem(trIndex, tdIndex))"></div>
            <div class="mku-dpicker__cell">
              {{currentItem(trIndex, tdIndex).D}}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { parseDate, getTime } from '../../../utils/date';
import { isEqual } from '../../../utils/tools';
import { findComponentUpward } from '../../../utils/assist';

export default {
  props: [
    'value',
    'name',
  ],
  data() {
    return {
      root: null,
      titleList: Object.freeze(['日', '一', '二', '三', '四', '五', '六']),
      dataList: [],
      currentDate: this.value, // 当前所处的日期对象，年月的切换也会更新
    };
  },
  watch: {
    value: {
      handler: 'watchValueChange',
      immediate: true,
    },
  },
  computed: {
    startSelected() {
      return this.root.pickerSelectedStart || '';
    },
    endSelected() {
      return this.root.pickerSelectedEnd || '';
    },
    // 面板联动
    linkPanels() {
      if (!this.root.isRange) return false;
      return !this.root.unlinkPanels;
    },
    startCurrent() {
      return this.root.startCurrent;
    },
    endCurrent() {
      return this.root.endCurrent;
    },
    rootType() {
      return this.root.type;
    },
    // 切换年月按钮的是否禁用
    operateButtonDisabled() {
      return (item, type) => {
        // 单选时所有切换按钮可用
        if (this.rootType === 'date' || this.rootType === 'datetime') return false;

        // 日期区域选择时，根据情况判断是否禁用
        const leftNext = this.name === 'left' && item === 'next';
        const rightPrev = this.name === 'right' && item === 'prev';
        if (leftNext || rightPrev) {
          const sc = parseDate(this.startCurrent);
          const ec = parseDate(this.endCurrent);
          if (type === 'year') {
            return sc.month >= ec.month ? sc.year >= (ec.year - 1) : sc.year >= ec.year;
          }
          if (type === 'month') {
            return getTime(sc.year, sc.month + 1, 1) >= getTime(ec.year, ec.month, 1);
          }
        }
        return false;
      };
    },
    currentItem() {
      return (trIndex, tdIndex) => this.dataList[trIndex * 7 + tdIndex];
    },
    tdClasss() {
      const st = this.startSelected ? parseDate(this.startSelected) : {};
      const ed = this.endSelected ? parseDate(this.endSelected) : {};
      const eq = (v1, v2) => isEqual(v1.year, v2.Y)
        && isEqual(v1.month, v2.M)
        && isEqual(v1.date, v2.D);
      return (item) => {
        const isEqSt = eq(st, item) && item.isCurMonth;
        const isEqEt = eq(ed, item) && item.isCurMonth;
        const isMoreThan = item.timeStamp > this.root.pickerHoverItem.timeStamp;
        const isLessHover = this.root.pickerHoverItem && isMoreThan;
        return ['mku-dpicker__td', {
          'mku-dpicker__cell-today': item.isToday,
          'mku-dpicker__cell-otherday': !item.isCurMonth,
          'mku-dpicker__selected-start': isEqSt && !isLessHover,
          'mku-dpicker__selected-end': isEqEt || (isEqSt && isLessHover),
        }];
      };
    },
    titleText() {
      const { year, month } = parseDate(this.currentDate);
      return `${year}年${month + 1}月`;
    },
    // 选中项之间的连接符号
    isRope() {
      return (item) => {
        if (!this.root.isRange) return false;
        if (!item.isCurMonth) return false;
        const hoverItem = this.root.pickerHoverItem;
        const cur = getTime(item.Y, item.M, item.D);
        const start = getTime(this.startSelected);

        if (this.root.rangeStep === 'start') {
          if (!hoverItem) return false;
          const min = Math.min(start, hoverItem.timeStamp);
          const max = Math.max(start, hoverItem.timeStamp);
          return min <= cur && cur <= max;
        }
        return start <= cur && cur <= getTime(this.endSelected);
      };
    },
  },
  created() {
    this.root = findComponentUpward(this, 'MkuDatePicker');
  },
  methods: {
    // 监听value变化，生成日历面板数据
    watchValueChange(newVal, oldValue) {
      if (!newVal) {
        this.currentDate = '';
        this.dataList = this.generatetPaneData(Date.now());
      } else {
        const newParsed = parseDate(newVal);
        const dateParsed = parseDate(this.currentDate);

        const isChange = (!isEqual(newParsed.year, dateParsed.year)
          || !isEqual(newParsed.month, dateParsed.month))
          || !oldValue;
        if (isChange) {
          const time = new Date(newParsed.year, newParsed.month, 1);
          this.dataList = this.generatetPaneData(time);
        }
        this.currentDate = newVal;
      }
    },
    /**
     * @method generatetPaneData
     * @description 生成一个面板的日期数据
     */
    generatetPaneData(time) {
      const res = [];
      const checkToday = (year, month, date) => {
        const today = parseDate(Date.now());
        return today.year === year && today.month === month && today.date === date;
      };
      // 解析本月第一天和最后一天的日期对象
      const timeParsed = parseDate(time);
      const first = new Date(timeParsed.year, timeParsed.month, 1);
      const last = new Date(timeParsed.year, timeParsed.month + 1, 0);
      // 解析第一天和最后一天对应的分解对象
      const firstParsed = parseDate(first);
      const lastParsed = parseDate(last);

      // 前置的上一月的日期
      const prevParsed = parseDate(new Date(timeParsed.year, timeParsed.month, 0));
      // 一定要当前月第一天的星期几作循环条件，而不能是上一月最后一天的星期几
      for (let i = 0; i < firstParsed.day; i++) {
        const Y = prevParsed.year;
        const M = prevParsed.month;
        const D = prevParsed.date - (firstParsed.day - 1 - i);
        const isToday = checkToday(Y, M, D);
        const timeStamp = getTime(Y, M, D);
        res.push({
          Y, M, D, isToday, timeStamp, isPrevMonth: true,
        });
      }
      // 当月的所有日期
      const curYear = timeParsed.year;
      const curMonth = timeParsed.month;
      for (let i = 1; i <= lastParsed.date; i++) {
        res.push({
          Y: curYear,
          M: curMonth,
          D: i,
          isToday: checkToday(curYear, curMonth, i),
          timeStamp: getTime(curYear, curMonth, i),
          isCurMonth: true,
        });
      }
      // 后置的下一月的日期
      const nextParese = parseDate(new Date(curYear, curMonth + 1, 1));
      const len = 42 - res.length;
      for (let i = 1; i <= len; i++) {
        const Y = nextParese.year;
        const M = nextParese.month;
        const isToday = checkToday(Y, M, i);
        const timeStamp = getTime(curYear, curMonth, i);
        res.push({
          Y, M, D: i, isToday, timeStamp, isNextMonth: true,
        });
      }
      return res;
    },
    /**
     * @method handleToggleButton
     * @description 点击日期面板的上一月、下一月、上一年、下一年按钮
     */
    handleToggleButton(type) {
      this.togglePanelData(type, true);
    },
    /**
     * @method togglePanelData
     * @description 切换面板数据
     * - 通过更新value的值更新自身面板数据
     * - 如果支持日期面板联动效果，则需要更新兄弟组件的面板数据
     */
    togglePanelData(type, action) {
      const { year, month } = parseDate(this.currentDate);
      const maps = {
        prevMonth: { value: new Date(year, month - 1, 1), ref: 'panelEnd' },
        nextMonth: { value: new Date(year, month + 1, 1), ref: 'panelStart' },
        prevYear: { value: new Date(year - 1, month, 1), ref: 'panelEnd' },
        nextYear: { value: new Date(year + 1, month, 1), ref: 'panelStart' },
      };
      this.$emit('input', maps[type].value);

      if (!action) return;
      if (this.linkPanels) {
        this.root.useDatePanelMethod(maps[type].ref, type);
      }
    },
    /**
     * @method handleItemClick
     * @description 点击日期面板选项
     */
    handleItemClick(item) {
      this.$emit('click-cell', item);
    },
  },
};
</script>
