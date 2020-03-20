import MkuTip from '../_tip';
import { singlePattern } from '../../utils/assist';

const noticeSingle = singlePattern(MkuTip.init);
const notice = noticeSingle({
  type: 'notice',
});

function createNotice(type, config) {
  const current = notice.add(type, config);
  function close() {
    notice.remove(current);
  }
  return {
    close,
  };
}

export default {
  name: 'MkuNotice',

  notice(type, config) {
    if (typeof config === 'string') {
      config = {
        title: config,
      };
    }
    const defaultCb = function () {};
    const defaultConfig = {
      title: '',
      content: '',
      render: null,
      duration: 2500,
      closeable: true,
      onShow: defaultCb,
      onClose: defaultCb,
    };
    const params = Object.assign(defaultConfig, config);
    return createNotice(type, params);
  },

  open(config) {
    return this.notice('', config);
  },

  info(config) {
    return this.notice('info', config);
  },

  success(config) {
    return this.notice('success', config);
  },

  error(config) {
    return this.notice('error', config);
  },

  warning(config) {
    return this.notice('warning', config);
  },
};
