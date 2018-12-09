const helpers = require('./helpers')

module.exports = {
  title: 'Python Girona',
  base: '',
  themeConfig: {
    nav: [
        { text: 'Home', link: '/' },
        { text: 'Trobades', link: '/meetings/' },
        { text: 'Propostes', link: '/proposals/' },
        { text: 'Feines', link: '/jobs/' },
    ],
    sidebar: {
      '/proposals/': helpers.utils.genSidebarConfig(
        'Propostes',
        './src/proposals/',
        true,
      ),
      '/meetings/': helpers.utils.genSidebarConfig(
        'Trobades',
        './src/meetings/',
        true,
      ),
      '/jobs/': helpers.utils.genSidebarConfig(
        'Ofertes de feina',
        './src/jobs/',
        true,
      ),
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
