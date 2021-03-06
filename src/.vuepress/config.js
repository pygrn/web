const helpers = require('./helpers')

module.exports = {
  title: 'Python Girona',
  //base: '/web/',
  themeConfig: {
    nav: [
        { text: 'Inici', link: '/' },
        { text: 'Trobades', link: '/meetings/' },
        { text: 'Propostes', link: '/proposals/' },
        { text: 'Feines', link: '/jobs/' },
        { text: 'Contacte', link: '/contact/' },
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
