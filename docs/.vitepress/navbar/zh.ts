import { DefaultTheme } from 'vitepress'

// 中文导航
export const zhNav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/zh/' },
  { text: '快速开始', link: '/zh/getting-started/', activeMatch: '/getting-started/' },
  { text: '常见问题', link: '/zh/faqs/', activeMatch: '/faqs/' },
]