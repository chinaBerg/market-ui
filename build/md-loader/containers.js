const mdContainer = require('markdown-it-container');

module.exports = (md) => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return params.trim().match(/^demo\s*(.*)$/);
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : '';
        const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';
        return `<mku-example>
        ${description ? `<div>${md.render(description)}</div>` : ''}
        <!--mku-example-character: ${content}:mku-example-character-->
        `;
      }
      return '</mku-example>';
    },
  });

  md.use(mdContainer, 'mku-doc__tip');
  md.use(mdContainer, 'mku-doc__warning');
};
