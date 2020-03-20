import { isString, isFunction } from '../../../utils/assist';

export default {
  functional: true,
  props: {
    data: Object,
  },
  render(h, { props }) {
    const { data } = props;
    const isStr = isString(data.val);
    if (!data.val || (!isStr && !isFunction(data.val))) return '';

    const content = isStr ? data.val : [data.val.call(this, h)];
    return h('span', {
      class: 'mku-slider__marks-item',
      style: {
        left: `${data.key}%`,
      },
    }, content);
  },
};
