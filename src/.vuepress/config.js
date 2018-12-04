module.exports = {
  title: 'Python Girona',
  themeConfig: {
    nav: [
        { text: 'Home', link: '/' },
        { text: 'Jobs', link: '/jobs/' }
    ]
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
