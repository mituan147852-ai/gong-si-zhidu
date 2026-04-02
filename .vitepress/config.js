import { defineConfig } from 'vitepress'
import { getSidebar } from 'vitepress-plugin-auto-sidebar'

export default defineConfig({
  title: '二公司制度库',
  description: '中建一局集团第二建筑有限公司制度宣贯平台',
  ignoreDeadLinks: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '财务资金制度', link: '/finance/' },
      { text: '商务制度', link: '/business/' },
      { text: '项目管理部制度', link: '/project/' }
    ],

    sidebar: getSidebar({
      contentRoot: '/',
      contentDirs: [
        { path: 'finance', title: '财务资金制度' },
        { path: 'business', title: '商务制度' },
        { path: 'project', title: '项目管理部制度' }
      ],
      collapsible: true,
      collapsed: false,
      useFrontmatter: true
    }),

    search: {
      provider: 'local'
    },

    footer: {
      message: '中建一局集团第二建筑有限公司',
      copyright: 'Copyright © 2024-2025'
    }
  }
})
