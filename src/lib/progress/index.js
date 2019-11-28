import MkuProgress from './src/progress'

MkuProgress.install = function (Vue) {
  Vue.component(MkuProgress.name, MkuProgress)
}

export default MkuProgress
