const path = require('path')

module.exports = {
  entry: './git-app.js',
  output: {
    filename: 'git-app.bundle.js',
    path: path.resolve(__dirname, 'build')
  }
}