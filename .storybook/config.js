const { configure } = require('@storybook/react')
const req = require.context('../components/', true, /story.tsx?$/)

configure(() => {
  req.keys().forEach(filename => req(filename))
}, module)
