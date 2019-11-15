export default {
  functional: true,
  props: {
    separator: String,
    separatorRender: Function
  },
  render (h, { props }) {
    const { separatorRender, separator } = props
    return separatorRender ? separatorRender(h) : separator
  }
}
