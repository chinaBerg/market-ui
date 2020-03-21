export default {
  functional: true,
  props: [
    'data',
    'label',
    'renderContent',
    'parentData',
  ],
  render(h, { props }) {
    const {
      data, label, renderContent, parentData,
    } = props;
    return (
      /* eslint-disable-next-line */
      renderContent ? renderContent(h, { data, parent: parentData }) : h('span', data[label])
    );
  },
};
