module.exports = {
    title: 'mikou',
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'VuePress', link: 'https://vuepress.vuejs.org/' },
        ],
        sidebar: [
            '/',
            '/about/',
            {
              title: '笔记',
              collapsable: true,
              children: [
                '/guide/'
              ]
            }
          ]
    },
    base: '/vue-blog/'
}