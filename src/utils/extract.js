const extract = (source, type) => {
  const regExp = new RegExp(`<${type}[^>]*>`);

  const startTagMatched = source.match(regExp);
  if (!startTagMatched) return '';
  const [startTag] = startTagMatched;

  const startTagIndex = source.indexOf(startTag) + startTag.length;
  const endTagIndex = source.lastIndexOf(`</${type}>`);
  return source.slice(startTagIndex, endTagIndex);
};

const extractVueHtml = (source) => extract(source, 'template');

const extractVueStyle = (source) => extract(source, 'style');

const extractVueScript = (source) => extract(source, 'script').replace(/export default/, 'return ');

export {
  extractVueHtml,
  extractVueStyle,
  extractVueScript,
};
