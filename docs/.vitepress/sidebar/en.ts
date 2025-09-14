import { DefaultTheme } from 'vitepress'
export const enSidebar: DefaultTheme.Sidebar = {
  '/en/': [
    {
      text: 'Guide',
      collapsed: false,
      items: [
        { text: 'Getting started', link: `/en/getting-started/` },
        { text: 'FAQs', link: `/en/faqs/` },
        { text: 'Mod Compatible Table', link: '/en/compatible_table' },
      ]
    },
    {
      text: 'Universal Tutorials',
      collapsed: false,
      items: [
        { text: 'index', link: `/en/tutorials/` },
      ]
    },
  ]
}