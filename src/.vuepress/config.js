const helpers = require('./helpers')

module.exports = {
  title: 'Python Girona',
  themeConfig: {
    nav: [
        { text: 'Home', link: '/' },
        { text: 'Feines', link: '/jobs/' },
    ],
  },
  sidebar: [
    '/',
    '/blog/'
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@src': './src'
      }
    }
  }
}
