export default {
  functional: true,
  inject: [
    'MkuBreadcrumb'
  ],
  render (h, { injections }) {
    const { separatorRender, separator } = injections.MkuBreadcrumb
    return separatorRender ? separatorRender(h) : h('i', separator)
  }
}
