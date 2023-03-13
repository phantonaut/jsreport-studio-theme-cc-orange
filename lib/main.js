const path = require('path')

module.exports = (reporter, definition) => {
  if (reporter.studio) {
    reporter.studio.registerTheme({
      name: 'cc-or',
      variablesPath: path.join(__dirname, './themeVars.json'),
      previewColor: '#9A7800',
      editorTheme: 'chrome'
    })
  }
}
