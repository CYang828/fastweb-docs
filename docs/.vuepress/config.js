module.exports = {
    base: '/fastweb-docs/',
    title: 'Fastweb Documentation',
    description: 'A efficient web-server integration solution',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/favicon.png',
                type: 'image/x-icon'
            }
        ]
    ],
    themeConfig: {
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                nav: [
                    {
                        text: 'Guide',
                        link: '/guide/'
                    },
                    {
                        text: 'Features',
                        link: '/features/'
                    }
                ],
                sidebar: {
                    '/guide/': [
                        {
                            title: 'Essentials',
                            collapsable: false,
                        },
                        {
                            title: 'Advanced',
                            collapsable: false,
                        },
                        {
                            title: 'Other',
                            collapsable: false,
                            children: [
                                '/guide/other/gitter.md',
                                '/guide/other/release-notes.md'
                            ]
                        }
                    ],
                    '/feature/component/': [
                        '/feature/component/rich-editor.md',
                        '/feature/component/svg-icon.md',
                        '/feature/component/clipboard.md'
                    ],
                    '/feature/script/': ['/feature/script/svgo.md']
                }
            },
            '/zh/': {
                title: 'Fastweb 中文文档',
                description: '快速构建、高效开发',
                label: '简体中文',
                selectText: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                nav: [
                    {
                        text: '指南',
                        link: '/zh/guide/'
                    },
                    {
                        text: '功能',
                    }
                ],
                sidebar: {
                    '/zh/guide/': [
                        {
                            title: '基础',
                            collapsable: false,
                        },
                        {
                            title: '进阶',
                            collapsable: false,
                        }
                    ],
                    '/zh/feature/component/': [
                        '/zh/feature/component/rich-editor.md',
                        '/zh/feature/component/svg-icon.md',
                        '/zh/feature/component/clipboard.md'
                    ],
                    '/zh/feature/script/': ['/zh/feature/script/svgo.md']
                }
            }
        }
    },
    locales: {
    '/': {
      lang: 'en-US',
      description: 'A efficient web-server integration solution'
    },
    '/zh/': {
      lang: 'zh-CN',
      description: '快速构建、高效开发'
    }
  },
}