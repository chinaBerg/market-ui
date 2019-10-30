export default {
  functional: true,
  props: [
    'data',
    'label',
    'renderContent',
    'parentData'
  ],
  render: function (h, { props, parent }) {
    const { data, label, renderContent, parentData } = props
    return (
      /* eslint-disable-next-line */
      renderContent ? renderContent(h, { data, parent: parentData }) : h('span', data[label])
    )
  }
}
