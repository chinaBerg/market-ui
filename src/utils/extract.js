const _extract = (source, type) => {
  const regExp = new RegExp(`<${type}[^>]*>`)
  let startTag = source.match(regExp)
  if (!startTag) return ''
  startTag = startTag[0]
  const startTagIndex = source.indexOf(startTag) + startTag.length
  const endTagIndex = source.lastIndexOf(`</${type}>`)
  return source.slice(startTagIndex, endTagIndex)
}

const extractVueHtml = (source) => {
  return _extract(source, 'template')
}

const extractVueStyle = (source) => {
  return _extract(source, 'style')
}

const extractVueScript = (source) => {
  return _extract(source, 'script').replace(/export default/, 'return ')
}

export {
  extractVueHtml,
  extractVueStyle,
  extractVueScript
}
