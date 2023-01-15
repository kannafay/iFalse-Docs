const sidebar = require('./sidebar');
const nav = require('./nav');

export default {
  base: '/docs/',
  lang: 'zh-CN',
  title: 'iFalse主题文档',
  titleTemplate: '一款界面清新、轻松上手的WordPress开源主题！',
  description: '一款界面清新、轻松上手的WordPress开源主题！',
  lastUpdated: true,
  markdown: {
    theme: 'material-palenight',
    lineNumbers: false,
  },
  head: [
    ['link', { rel: 'shortcut icon', href: './favicon.png' }]
  ],
  themeConfig: {
    logo: '/favicon.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kannafay/iFalse' },
    ],
    lastUpdatedText: '最后更新',
    nav: nav,
    sidebar: sidebar,
    footer: {
      copyright: 'Copyright © 2022-2023 神秘布偶猫'
    }
  },
}