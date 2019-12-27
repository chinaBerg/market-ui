import MkuTimePicker from './src/main'
import TimePickerPanel from './src/picker'

MkuTimePicker.install = function (Vue) {
  Vue.component(MkuTimePicker.name, MkuTimePicker)
}

export {
  TimePickerPanel
}

export default MkuTimePicker
