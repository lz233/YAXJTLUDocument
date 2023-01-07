import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'YAXJTLU',
  head: [['link', { rel: 'icon', href: '/icon-color.png' }]],
  description: 'Yet another XJTLU APP.',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/en/': {
      lang: 'en-US'
    },
    '/': {
      lang: 'zh-CN'
    },
  },
  theme: defaultTheme({
    home: '/index.md',
    locales: {
      '/en/': {
        selectLanguageName: 'English',
        navbar: [
        {
            text: 'Home',
            link: './',
        },
        {
            text: 'Privacy Policy',
            link: './privacy',
        },
        ],
      },
      '/': {
        selectLanguageName: '简体中文',
        navbar: [
        {
            text: '首页',
            link: './',
        },
        {
            text: '隐私政策',
            link: './privacy',
        },
        ],
      },
    },
  }),
  dest: 'public',
})
