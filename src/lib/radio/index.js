import MkuRadio from './src/radio'

MkuRadio.install = function (Vue) {
  Vue.component(MkuRadio.name, MkuRadio)
}

export default MkuRadio
