module.exports = {
    base : '/restful-fast-request-doc/',
    title: 'Restful Fast Request',
    description: 'Intellij Restful Fast Request',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/img/fastRequest.svg'
            }
        ]
    ],
    markdown: {
        lineNumbers: true
    },
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN',
        },
        '/en/': {
            lang: 'en-US'
        }
    },
    themeConfig: {
        logo:'/img/fastRequest_dark.svg',
      // 以下为可选的编辑链接选项
      // 假如你的文档仓库和项目本身不在一个仓库：
      docsRepo: 'kings1990/restful-fast-request-doc',
      // 假如文档不是放在仓库的根目录下：
      docsDir: 'docs',
      // 假如文档放在一个特定的分支下：
      docsBranch: 'master',
      // 默认是 false, 设置为 true 来启用
      editLinks: true,
        locales: {
            '/en/': {

                selectText: 'Languages',
                label: 'English',
                nav: [
                    {
                        text: 'Guid',
                        link: '/en/guide/'
                    },
                    {
                        text: 'Changelog',
                        link: 'https://plugins.jetbrains.com/plugin/16988-restful-fast-request/change-log'
                    },
                    {
                        text: 'Code',
                        items: [
                            {
                                text: 'Github',
                                link: 'https://github.com/kings1990/fast-request'
                            },
                            {
                                text: 'Gitee',
                                link: 'https://gitee.com/kings/fast-request'
                            }
                        ]
                    }
                ],
                sidebar: {
                    '/en/guide/': [{
                        title: 'Getting started',
                        collapsable: false,
                        children: [
                            '',
                            'install',
                            'feature',
                            'getstarted',
                            'faq'
                        ]
                    }]
                }
            },
            '/': {
                // 多语言下拉菜单的标题
                selectText: 'Languages',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},
                nav: [
                    {
                        text: '指南',
                        link: '/guide/'
                    },
                    {
                        text: '更新日志',
                        link: 'https://plugins.jetbrains.com/plugin/16988-restful-fast-request/change-log'
                    },
                    {
                        text: '代码',
                        items: [
                            {
                                text: 'Github',
                                link: 'https://github.com/kings1990/fast-request'
                            },
                            {
                                text: 'Gitee',
                                link: 'https://gitee.com/kings/fast-request'
                            }
                        ]
                    }
                ],
                sidebar: {
                    '/guide/': [{
                        title: '快速入门',
                        collapsable: false,
                        children: [
                            '',
                            'install',
                            'feature',
                            'getstarted',
                            'faq',
                            'donate'
                        ]
                    }]
                }
            }
        }
    }
}
