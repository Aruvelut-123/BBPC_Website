import { DefaultTheme } from 'vitepress'
export const zhSidebar: DefaultTheme.Sidebar = {
  '/': [
    {
      text: '使用指南',
      collapsed: false,
      items: [
        { text: '快速开始', link: `/zh/getting-started/` },
        { text: '常见问题', link: `/zh/faqs/` },
      ]
    },
    {
      text: '通用教程',
      collapsed: false,
      items: [
        { text: '目录', link: `/zh/tutorials/` },
      ]
    },
  ]
}