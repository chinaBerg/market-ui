<template>
  <transition name="mku-loading-aniamte">
    <div class="mku-loading"
      v-show="isVisiable"
      :style="domStyle"
    >
      <div class="mku-loading-wrap">
        <div class="mku-loading__icon">
          <mku-icon type="loading" size="36px" :color="iconColor"></mku-icon>
        </div>
        <div class="mku-loading__tip" v-if="text" :style="{color: textColor}">
          {{text}}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import MkuIcon from '../../icon';

export default {
  name: 'MkuLoading',
  components: {
    MkuIcon,
  },
  data() {
    return {
      isVisiable: false,
      text: '',
      textColor: '',
      iconColor: '',
      background: '',
    };
  },
  computed: {
    domStyle() {
      const obj = {
        position: this.screen ? 'fixed' : 'absolute',
        background: this.background,
      };
      return obj;
    },
  },
};
</script>
