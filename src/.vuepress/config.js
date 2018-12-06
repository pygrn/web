const helpers = require('./helpers')

module.exports = {
  title: 'Python Girona',
  themeConfig: {
    nav: [
        { text: 'Home', link: '/' },
        { text: 'Feines', link: '/jobs/' },
    ],
    sidebar: {
      '/jobs/': helpers.utils.genSidebarConfig(
        'Ofertes de feina',
        './src/jobs/',
        true,
      )
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@src': './src'
      }
    }
  },
  plugins: [
  ]
}
