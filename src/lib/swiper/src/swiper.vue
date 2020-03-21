<template>
  <div
    class="mku-swiper"
    ref="swiper"
    :style="swiperStyle"
    @mouseenter="handleHoverSwiper('enter')"
    @mouseleave="handleHoverSwiper('leave')">
    <!-- default slot -->
    <div
      class="mku-swiper__wrap mku-global-clear"
      ref="wrap"
      :style="wrapStyle">
      <slot></slot>
    </div>

    <template v-if="arrow !== 'never'">
      <!-- prev-button -->
      <transition name="mku-swiper-animation-btn">
        <span
          class="mku-swiper__btn mku-swiper__btn--left"
          v-show="arrow === 'always' || isAtSwiper"
          @click="handlePrev">
          <slot name="prev">
            <i class="mku-icon mku-icon-double-arrow-left"></i>
          </slot>
        </span>
      </transition>
      <!-- next-button -->
      <transition name="mku-swiper-animation-btn">
        <span
          class="mku-swiper__btn mku-swiper__btn--right"
          v-show="arrow === 'always' || isAtSwiper"
          @click="handleNext">
          <slot name="next">
            <i class="mku-icon mku-icon-double-arrow-right"></i>
          </slot>
        </span>
      </transition>
    </template>

    <!-- swiper-dots -->
    <ul class="mku-swiper__dots">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="dotsClasss(index)"
        @click="handleDotsClick(index)"
        @mouseover="handleDotsHover(index)">
      </li>
    </ul>
  </div>
</template>

<script>
import kute from 'kute.js';
import { findComponentsDownward, isNumber } from '../../../utils/assist';
import { formatSize } from '../../../utils/tools';

export default {
  name: 'MkuSwiper',
  props: {
    value: {
      type: Number,
      default: 0,
    },
    // 宽度
    width: {
      type: [String, Number],
      default: '100%',
    },
    // 高度
    height: {
      type: [String, Number],
      default: 'auto',
    },
    // 是否循环
    loop: {
      type: Boolean,
      default: true,
    },
    // 自动轮播
    autoplay: {
      type: Boolean,
      default: true,
    },
    // 自动轮播的时间间隔
    duration: {
      type: Number,
      default: 3000,
    },
    // 用户操作后是否禁止轮播
    disableOnInteraction: {
      type: Boolean,
      default: false,
    },
    // 轮播的动画速度
    speed: {
      type: Number,
      default: 300,
    },
    // 左右按钮显示方式
    arrow: {
      type: String,
      default: 'hover',
      validator: (val) => ['hover', 'always', 'never'].includes(val),
    },
    // 分页器触发方式
    trigger: {
      type: String,
      default: 'click',
      validator: (val) => ['hover', 'click'].includes(val),
    },
  },
  provide() {
    return {
      root: this,
    };
  },
  data() {
    return {
      items: [],
      swiperWidth: 0,
      totalWidth: 0,
      current: null,
      isAtSwiper: false,
    };
  },
  watch: {
    value: {
      handler: 'watchValueChange',
      immediate: true,
    },
    currentIndex: 'watchCurIdxChange',
    autoplay: 'watchAutoplay',
  },
  computed: {
    // 拼接swiper的宽高样式
    swiperStyle() {
      const width = formatSize(this.width);
      const height = formatSize(this.height);
      return { width, height };
    },
    // 拼接wrap容器的宽度
    wrapStyle() {
      const width = `${this.swiperWidth * (this.items.length + 1)}px`;
      return { width };
    },
    // 拼接分页器的class name
    dotsClasss() {
      return (index) => ['mku-swiper__dot', {
        'mku-swiper__dot--active': this.currentIndex === index,
      }];
    },
    // 当前的下标，指当前所应该展示的下标（不考虑是否拼接的占位）
    currentIndex() {
      if (this.current < 0) return this.items.length;
      if (this.current >= this.items.length) return 0;
      return this.current;
    },
  },
  mounted() {
    this.initDoms();
  },
  methods: {
    /**
     * @method updateItems
     * @description 由子组件调用，初始化items和dom
     */
    updateItems() {
      const childs = findComponentsDownward(this, 'MkuSwiperItem');
      this.items = childs || [];
      this.initDoms();
    },
    /**
     * @method initDoms
     * @description 初始化dom
     * - 拷贝第一个元素的dom插入到最后进行无缝滚动轮播的占位
     */
    initDoms() {
      this.swiperWidth = this.$refs.swiper.clientWidth;
      if (this.items && this.items.length) {
        const { wrap } = this.$refs;
        wrap.innerHTML = '';

        const fragment = document.createDocumentFragment();
        this.items.forEach((item) => {
          fragment.appendChild(item.$el);
        });

        // 将第一个节点复制插入最后
        const firstNodeClone = this.items[0].$el.cloneNode(true);
        firstNodeClone.style.width = `${this.swiperWidth}px`;
        fragment.appendChild(firstNodeClone);
        wrap.appendChild(fragment);
        this.resetTranslate();
        this.startAutoplay();
      }
    },
    // 自动轮播
    startAutoplay() {
      if (this.autoplay) {
        this.stopAutoplay();
        this.timer = setInterval(() => {
          this.handleNext();
        }, this.duration);
      }
    },
    // 停止自动轮播
    stopAutoplay() {
      if (this.timer) clearInterval(this.timer);
    },
    /**
     * @method animate
     * @description 轮播切换动画
     */
    animate() {
      this.$emit('animate-begin', this.current);
      const { wrap } = this.$refs;
      if (!wrap) return;
      const toState = {
        translateX: `${-this.current * this.swiperWidth}px`,
      };
      const config = {
        duration: this.speed,
        complete: () => {
          this.$emit('animate-finish', this.current);
        },
      };
      kute.to(wrap, toState, config).start();
    },
    /**
     * @method resetTranslate
     * @description 根据current，将wrap瞬间移动到指定位置
     * 主要用于极限值的瞬间切换、value变化的瞬间切换
     */
    resetTranslate() {
      const { wrap } = this.$refs;
      if (wrap) {
        const offset = `-${this.current * this.swiperWidth}px, 0, 0`;
        wrap.style.transform = `translate3d(${offset})`;
      }
    },
    /**
     * @method handlePrev
     * @description 点击prev-button，切换swiper
     * - 极限值是0
     * - 判断是否循环轮播
     */
    handlePrev() {
      if (!this.items.length) return;
      const curRecord = this.current;
      if (this.loop) {
        if (this.current <= 0) {
          this.current = this.items.length;
          this.resetTranslate();
        }
        this.current--;
      } else {
        if (this.current <= 0) return;
        this.current--;
      }
      this.$emit('prev-click', this.current, curRecord);
      this.animate();
    },
    /**
     * @method handleNext
     * @description 点击next-button，切换swiper
     * - 极限值是轮播图的长度
     * - 判断是否循环轮播
     */
    handleNext() {
      if (!this.items.length) return;
      const curRecord = this.current;
      if (this.loop) {
        if (this.current >= this.items.length) {
          this.current = 0;
          this.resetTranslate();
        }
        this.current++;
      } else {
        if (this.current >= this.items.length - 1) return;
        this.current++;
      }
      this.$emit('next-click', this.current, curRecord);
      this.animate();
    },
    /**
     * @method handleDotsClick
     * @description 点击指示器，切换swiper
     * - 仅指示器触发方式为click时生效
     */
    handleDotsClick(index) {
      if (this.trigger !== 'click') return;
      this.current = index;
      this.animate();
    },
    /**
     * @method handleDotsHover
     * @description 鼠标滑过指示器，切换swiper
     * - 仅指示器触发方式为click时生效
     */
    handleDotsHover(index) {
      if (this.trigger !== 'hover') return;
      this.current = index;
      this.animate();
    },
    /**
     * @method handleHoverSwiper
     * @description 鼠标滑过swiper
     * - 是否禁止自动轮播
     * - 是否显示左右按钮
     */
    handleHoverSwiper(type) {
      if (!this.disableOnInteraction) {
        if (type === 'enter') this.stopAutoplay();
        else this.startAutoplay();
      }
      if (this.arrow === 'hover') {
        this.isAtSwiper = type === 'enter';
      }
    },
    /**
     * @method watchValueChange
     * @description 监听value变化，更新current，将组件位移到对应位置
     */
    watchValueChange(newVal) {
      this.current = newVal;
      this.resetTranslate();
      this.startAutoplay();
    },
    /**
     * @method watchCurIdxChange
     * @description 监听currentIndex变化，对外暴露change事件
     * @return 返回当前下标和上一张下标
     */
    watchCurIdxChange(newVal, oldVal) {
      if (newVal === oldVal) return;
      this.$emit('change', newVal, oldVal);
    },
    /**
     * @method watchAutoplay
     * @description 监听watchAutoplay变化，停止/开启自动轮播
     */
    watchAutoplay(newVal) {
      if (newVal) this.startAutoplay();
      else this.stopAutoplay();
    },
    /**
     * @method swipeTo
     * @description 对外暴露方法，切换到对应的索引位置
     */
    swipeTo(index) {
      if (isNumber(index)) {
        const max = this.items.length - 1;
        this.current = index > max ? max : (index <= 0 ? 0 : index);
        this.animate();
      }
    },
    /**
     * @method prev
     * @description 对外暴露方法，切换到上一张
     */
    prev() {
      this.handlePrev();
    },
    /**
     * @method next
     * @description 对外暴露方法，切换到下一张
     */
    next() {
      this.handleNext();
    },
  },
};
</script>
