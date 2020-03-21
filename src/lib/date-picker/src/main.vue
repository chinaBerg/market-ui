<template>
  <div :class="dPickerClasss" ref="dpicker">
    <mku-input
      v-model="inputText"
      :placeholder="placeholder"
      :clearable="clearable && !readonly && !disabled"
      :readonly="readonly"
      :disabled="disabled || rangeStep === 'start'"
      @click.native="handleInputClick"
      @enter="handleInputEnter"
    />

    <transition name="mku-dpicker">
      <mku-drop
        reference="dpicker"
        class-name="mku-dpicker__row-wrap"
        v-if="visivle"
        :placement="placement"
        @click.stop>

        <!-- 主体内容 -->
        <div class="mku-dpicker__date-content" v-show="!isTime">
          <mku-picker
            ref="panelStart"
            name="left"
            v-model="startCurrent"
            @click-cell="handleDatePanelClick('start', $event)"
            @mouseover="handleMouseover"
          />
          <mku-picker
            v-if="isRange"
            ref="panelEnd"
            name="right"
            v-model="endCurrent"
            @click-cell="handleDatePanelClick('end', $event)"
            @mouseover="handleMouseover"
            v-show="!isTime"
          />
        </div>
        <template v-if="type === 'datetime' || type === 'datetime-range'">
          <div class="mku-dpicker__time-content" v-show="isTime">
            <time-picker-panel
              ref="startTpicker"
              :title="type === 'datetime-range' ? '开始时间' : null"
              :value="startTime"
              @click="handleTimePanelClick('start', arguments)"
            />
            <template v-if="type === 'datetime-range'">
              <time-picker-panel
                ref="endTpicker"
                title="结束时间"
                :value="endTime"
                @click="handleTimePanelClick('end', arguments)"
              />
            </template>
          </div>
        </template>

        <!-- 底部 -->
        <div class="mku-dpicker__foot">
          <div class="mku-dpicker__foot-left">
            <a
              v-if="type === 'datetime' || type ==='datetime-range'"
              :class="['mku-dpicker__foot-now', {
                'mku-dpicker__foot-disabled': this.rangeStep === 'start'
              }]"
              href="javascript:void(0)"
              @click="handleToggleTime">
              {{!isTime ? '选择时间' : '选择日期'}}
            </a>
          </div>
          <mku-button
            v-if="clearable"
            size="small"
            class="mku-dpicker__foot-clear"
            @click="handleClear">
            清空
          </mku-button>
          <mku-button
            type="primary"
            size="small"
            @click="handleConfirm">
            确认
          </mku-button>
        </div>
      </mku-drop>
    </transition>
  </div>
</template>

<script>
import MkuInput from '../../input';
import MkuButton from '../../button';
import MkuDrop from '../../_drop';
import MkuPicker from './picker';
import Emitter from '../../../utils/emitter';
import { TimePickerPanel } from '../../time-picker';
import {
  isArray, isDate, isString, deepCopy, isNumber,
} from '../../../utils/assist';
import { withinNum, compareArrJoined, fullArray } from '../../../utils/tools';
import { onEvent, offEvent, hasClass } from '../../../utils/dom';
import {
  parseDate, pickNumInStr, generateFormatedTime, getTime,
} from '../../../utils/date';

export default {
  name: 'MkuDatePicker',
  mixins: [Emitter],
  components: {
    MkuInput,
    MkuDrop,
    MkuButton,
    MkuPicker,
    TimePickerPanel,
  },
  props: {
    // 绑定的值
    value: {
      type: [Date, String, Array, Number],
    },
    // 类型
    type: {
      type: String,
      default: 'date',
      validator: (val) => ['date', 'date-range', 'datetime', 'datetime-range'].includes(val),
    },
    // 展示的时间格式
    formatText: {
      type: String,
    },
    // 绑定的输出值格式
    formatValue: {
      type: String,
    },
    // 提示占位符
    placeholder: {
      type: String,
      default: '',
    },
    // 开始和结束时间之间的分隔符
    separator: {
      type: String,
      default: ' ~ ',
    },
    // 面板不联动
    unlinkPanels: {
      type: Boolean,
      default: false,
    },
    // 可清除
    clearable: {
      type: Boolean,
      default: true,
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 只读
    readonly: {
      type: Boolean,
      default: false,
    },
    // 面板位置
    placement: {
      type: String,
      default: 'bottom-start',
    },
  },
  data() {
    return {
      visivle: false, // drag的显示隐藏
      startValue: null, // 选中的开始值
      endValue: null, // 选中的结束值
      startTime: [], // 开始时间，包含时分秒的数组
      endTime: [], // 结束时间，包含时分秒的数组
      inputText: '', // 输入框的展示内容
      startCurrent: '', // start picker的当前值，控制picker数据的切换
      endCurrent: '', // end piccker的当前值，控制picker数据的切换
      pickerSelectedStart: null, // 供picker组件使用的已选的开始日期时间
      pickerSelectedEnd: null, // 供picker组件使用的已选的结束日期时间
      rangeStep: 'none', // 范围选择时，当前选择所处的步骤，'none'未开始, 'start'已选开始, 'end'选择完成
      pickerHoverItem: {}, // 当前鼠标划过的位置
      isTime: false, // 时间面板的切换
      isFirstChange: true, // TODO：需要优化检查change的方式
    };
  },
  watch: {
    value: {
      handler: 'watchValueChange',
      immediate: true,
    },
    visivle: 'watchVisibleChange',
    isTime: 'resetTpicker',
  },
  computed: {
    // 拼接容器class name
    dPickerClasss() {
      return ['mku-dpicker', {
        'mku-dpicker__range': this.type === 'date-range',
        'mku-dpicker__rangetime': this.type === 'datetime-range',
      }];
    },
    // 范围选择
    isRange() {
      return this.type === 'date-range' || this.type === 'datetime-range';
    },
  },
  mounted() {
    this.initWindowEvent();
  },
  methods: {
    /**
     * @method initWindowEvent
     * @description 初始化事件监听
     */
    initWindowEvent() {
      const onWinClick = () => (this.visivle = false);
      onEvent(document, 'click', onWinClick);
      this.$once('hook:beforeDestroy', () => offEvent(document, 'click', onWinClick));
    },

    // 监听value变化，提取对应的startValue和endValue
    watchValueChange(newVal, oldVal) {
      const getValue = (v) => {
        if (isString(v)) {
          if (!v) return '';
          const nums = pickNumInStr(v);
          if (!nums || !nums.length) return '';
          const year = withinNum(nums[0], 0, Infinity);
          const month = withinNum(nums[1] - 1, 0, 59) || 0;
          const date = withinNum(nums[2], 0, new Date(year, month + 1, 0).getDate()) || 0;
          const hour = withinNum(nums[3], 0, 23) || 0;
          const minute = withinNum(nums[4], 0, 59) || 0;
          const second = withinNum(nums[5], 0, 59) || 0;
          return new Date(year, month, date, hour, minute, second);
        }
        if (isDate(v) || isNumber(v)) {
          return new Date(v);
        }
      };

      // 单个选择
      const handleRange = () => {
        const val = getValue(newVal);
        const parsed = parseDate(val);
        this.startValue = val;
        this.startTime = [parsed.hour, parsed.minute, parsed.second];
        this.startCurrent = val;
        this.pickerSelectedStart = val;
      };

      // 范围选择
      const handleNotRange = () => {
        if (!newVal) {
          this.startValue = '';
          this.endValue = '';
          this.startTime = [0, 0, 0];
          this.pickerSelectedStart = '';
          this.pickerSelectedEnd = '';
          this.startCurrent = new Date(Date.now());
          const end = parseDate(this.startCurrent);
          this.endCurrent = new Date(end.year, end.month + 1, end.date);
        } else if (isArray(newVal)) {
          const sv = getValue(newVal[0]);
          const ev = getValue(newVal[1]);
          const svParsed = parseDate(sv);
          const evParsed = parseDate(ev);
          this.startValue = getValue(newVal[0]);
          this.endValue = getValue(newVal[1]);
          this.startTime = [svParsed.hour, svParsed.minute, svParsed.second];
          this.endTime = [evParsed.hour, evParsed.minute, evParsed.second];
          this.pickerSelectedStart = getValue(newVal[0]);
          this.pickerSelectedEnd = getValue(newVal[1]);
          this.startCurrent = sv;
          if (svParsed.month === evParsed.month || !ev) {
            this.endCurrent = new Date(
              svParsed.year,
              svParsed.month + 1,
              svParsed.date,
              svParsed.hour,
              svParsed.minute,
              svParsed.second,
            );
          } else {
            this.endCurrent = ev;
          }
        }
      };

      if (!this.isRange) {
        handleRange();
      } else {
        handleNotRange();
      }

      this.resetTpicker(true);
      this.generateInputText();

      // 检查是否发生变化
      if (this.checkIsChange(newVal, oldVal)) {
        const emitVal = this.generateEmitValue();
        this.dispatch('MkuFormItem', 'onFormItemChange', emitVal);
        this.$emit('change', emitVal);
      }
      this.isFirstChange = false;
    },
    watchVisibleChange(newVal) {
      if (newVal) {
        this.resetTpicker(this.isTime);
      }
    },
    checkIsChange(newVal, oldVal) {
      if (this.isFirstChange) return false;
      if (!this.isRange) return getTime(newVal) !== getTime(oldVal);

      const newArr = newVal || [];
      const oldArr = oldVal || [];
      if (!newArr.length && oldArr.length) return true;
      return newArr.some((item, index) => item !== oldArr[index]);
    },

    /**
     * @method handleDatePanelClick
     * @description 点击日期面板上的选项
     * - 更新对应的日期、时间
     * - 更新date-picker的选中数据、date-picker的面板数据
     * - 手动调用input text的计算函数
     */
    handleDatePanelClick(type, data) {
      const t = new Date(data.Y, data.M, data.D);
      if (!this.isRange) {
        const val = this.generateOutputValue(t, this.formatValue);
        this.startValue = val;
        this.startCurrent = val;
        this.startTime = [];
        this.pickerSelectedStart = val;
        this.$emit('input', val);
      } else if (this.rangeStep === 'none' || this.rangeStep === 'end') {
        this.rangeStep = 'start';
        this.pickerHoverItem = null;
        this.pickerSelectedStart = t;
        this.pickerSelectedEnd = '';
      } else if (this.rangeStep === 'start') { // 此时进行的是第二步骤
        const t1 = getTime(t);
        const t2 = getTime(this.pickerSelectedStart);
        const t1Formated = this.generateOutputValue(Math.min(t1, t2), this.formatValue);
        const t2Formated = this.generateOutputValue(Math.max(t1, t2), this.formatValue);
        this.startValue = t1Formated;
        this.endValue = t2Formated;
        this.startTime = [];
        this.endTime = [];
        this.pickerSelectedEnd = t2Formated;
        this.rangeStep = 'end';
        this.pickerHoverItem = null;
        this.$emit('input', [t1Formated, t2Formated]);
      }
      this.generateInputText();
    },
    /**
     * @method handleTimePanelClick
     * @description 点击时间面板上的选项
     * - 更新时间
     * - 手动调用input text的计算函数
     */
    handleTimePanelClick(type, arg) {
      const colIndex = arg[0] === 'hour' ? 0 : (arg[0] === 'minute' ? 1 : 2);
      const colVal = arg[1];
      // 如果点击的开始时间面板
      if (type === 'start') {
        // 获取填充0后的时间数组
        const startTime = fullArray(deepCopy(this.startTime), 3, 0);
        startTime[colIndex] = colVal;
        // 更新开始日期和时间
        this.startTime = startTime;
        this.startValue = this.generateFullDateTime(this.startValue, startTime);
        // 如果开始时间大于结束时间，则需将结束时间更新到和开始时间一样
        const greaterThanEnd = compareArrJoined(startTime, this.endTime);
        if (this.isRange && greaterThanEnd) {
          this.endTime = deepCopy(startTime);
          this.endValue = this.generateFullDateTime(this.endValue, startTime);
          this.$nextTick(() => this.$refs.endTpicker.resetScroll(startTime));
        }
      } else { // 点击的结束时间面板
        const end = fullArray(deepCopy(this.endTime), 3, 0);
        end[colIndex] = colVal;
        this.endTime = end;
        this.endValue = this.generateFullDateTime(this.endValue, end);
      }
      this.$emit('input', this.generateEmitValue());
      this.generateInputText();
      arg[2] && arg[2]();
    },

    /**
     * @method generateOutputValue
     * @description 根据Date规则格式化输出
     * @returns 格式化后的时间：
     * - 不传则默认返回Date对象
     * - timestamp 返回时间戳
     * - 按照Date规则返回，eg: 'YYYY-MM-DD'
     */
    generateOutputValue(time, rule) {
      if (!rule) return new Date(time);
      if (rule === 'timestamp') return getTime(time);
      return generateFormatedTime(time, rule);
    },
    /**
     * @method generateEmitValue
     * @description 生成最终的emit值
     */
    generateEmitValue() {
      const sv = this.startValue;
      const svP = parseDate(sv);
      const ev = this.endValue;
      const evP = parseDate(ev);
      const gen = (v) => this.generateOutputValue(v, this.formatValue);
      if (this.type === 'date') {
        if (!sv) return '';
        return gen(sv);
      }
      if (this.type === 'datetime') {
        if (!sv) return '';
        const t = new Date(svP.year, svP.month, svP.date, ...this.startTime);
        return gen(t);
      }
      if (this.type === 'date-range') {
        if (!sv) return [];
        return [gen(sv), gen(ev)];
      }
      if (this.type === 'datetime-range') {
        if (!sv) return [];
        const t1 = new Date(svP.year, svP.month, svP.date, ...this.startTime);
        const t2 = new Date(evP.year, evP.month, evP.date, ...this.endTime);
        return [gen(t1), gen(t2)];
      }
    },
    /**
     * @method generateInputText
     * @description 计算input展示的内容
     * - 不使用计算属性原因：
     *    - 手动编辑后组件智能取值算法为提取字符串中的数字，
     *    - 如若只是添加其他非数字内容，会导致截取后的值没有发生变化，
     *    - 即依赖不没有发生变化，input内容不会更新
     */
    generateInputText() {
      if (!this.startValue) {
        this.inputText = '';
        return;
      }
      let rule = null;
      switch (this.type) {
        case 'date':
        case 'date-range':
          rule = this.formatText || 'YYYY-MM-DD';
          break;
        case 'datetime':
        case 'datetime-range':
          rule = this.formatText || 'YYYY-MM-DD HH:mm:ss';
          break;
        default:
          return;
      }
      if (!this.isRange) {
        this.inputText = generateFormatedTime(this.startValue, rule);
      } else {
        const start = generateFormatedTime(this.startValue, rule);
        const end = generateFormatedTime(this.endValue, rule);
        this.inputText = `${start}${this.separator}${end}`;
      }
    },
    /**
     * @method generateFullDateTime
     * @description 根据日期和时间，计算完整的日期时间
     */
    generateFullDateTime(date, time = []) {
      const t = parseDate(date);
      return this.generateOutputValue(new Date(t.year, t.month, t.date, ...time));
    },

    /**
     * @method handleToggleDpicker
     * @description 显示隐藏组件
     */
    handleToggleDpicker(bool) {
      this.visivle = bool;
    },
    /**
     * @method handleInputClick
     * @description 点击输入框，展开日历组件
     */
    handleInputClick(event) {
      if (this.disabled) return;
      const isClearBtn = hasClass(event.target, 'mku-input__clear');
      isClearBtn ? this.handleClear() : this.handleToggleDpicker(true);
      event.stopPropagation();
    },
    /**
     * @method handleConfirm
     * @description 点击确认按钮触发
     */
    handleConfirm() {
      this.handleToggleDpicker();
      this.$emit('confirm', this.generateEmitValue());
    },
    /**
     * @method handleClear
     * @description 点击输入框上的清除按钮
     * - 清除已选日期时间
     * - 对外暴露clear事件
     */
    handleClear() {
      this.startValue = '';
      this.endValue = '';
      this.startTime = [];
      this.endTime = [];
      this.$emit('input', this.generateEmitValue());
      this.$emit('clear');
    },
    /**
     * @method handleInputEnter
     * @description 输入框的回车事件,自动识别输入框新值进行更新
     * - 对外暴露enter事件
     */
    handleInputEnter(event, val) {
      this.watchValueChange(!this.isRange ? val : val.split(this.separator), true);
      const emitVal = this.generateEmitValue();
      this.$emit('input', emitVal);
      this.$emit('enter', emitVal, val, event);
    },
    /**
     * @method handleToggleTime
     * @description 选择时间和日期的切换
     */
    handleToggleTime() {
      if (this.rangeStep === 'start') return;
      this.isTime = !this.isTime;
    },
    /**
     * @method handleMouseover
     * @description 鼠标划过日期面板上的日期时，缓存当前指针位置对应的日期对象
     * - 作用为多选日期时的开始和结束日期的连接效果
     * - 如若划过内容超出本月范畴，则自动取本月第一天或者最后一天
     */
    handleMouseover(item, dataList) {
      if (this.rangeStep === 'start' && this.isRange) {
        const curData = dataList.filter((e) => e.isCurMonth);
        if (item.isNextMonth) {
          this.pickerHoverItem = curData[curData.length - 1];
        } else if (item.isPrevMonth) {
          this.pickerHoverItem = curData[0];
        } else {
          this.pickerHoverItem = item;
        }
      }
    },

    /**
     * @method updatePanelDataManual
     * @description 鼠标划过日期面板上的日期时，缓存当前指针位置对应的日期对象
     * - 作用为多选日期时的开始和结束日期的连接效果
     * - 如若划过内容超出本月范畴，则自动取本月第一天或者最后一天
     */
    useDatePanelMethod(ref, type) {
      this.$nextTick(() => {
        const reference = this.$refs[ref];
        reference && reference.togglePanelData(type);
      });
    },
    /**
     * @method resetTpicker
     * @description 调用时间面板的方法，使其运动到对应位置
     */
    resetTpicker(newVal) {
      if (newVal) {
        this.$nextTick(() => {
          this.$refs.startTpicker && this.$refs.startTpicker.resetScroll();
          if (this.type === 'datetime-range') {
            this.$refs.endTpicker && this.$refs.endTpicker.resetScroll();
          }
        });
      }
    },
  },
};
</script>
