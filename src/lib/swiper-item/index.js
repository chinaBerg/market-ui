import MkuSwiperItem from '../swiper/src/item';

MkuSwiperItem.install = function (Vue) {
  Vue.component(MkuSwiperItem.name, MkuSwiperItem);
};

export default MkuSwiperItem;
