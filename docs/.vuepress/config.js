module.exports = {
    base:'/fastweb-docs/',
    themeConfig: {
        locales: {
            '/': {
                lang: 'English',
                title: 'Fastweb Documentation',
                description: 'A efficient web-server integration solution',
                nav: [
                    {
                        text: 'en'
                        { text: 'Index', link: '/' },
                        { text: 'Guide', link: '/guide/' },
                    }
                    ]
            },
            '/zh/': {
              lang: '中文',
              title: 'Fastweb 中文文档',
              description: '快速构建、高效开发的后端框架'
            }
        }
    },

}