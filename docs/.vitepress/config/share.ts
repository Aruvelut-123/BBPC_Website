import { defineConfig } from 'vitepress'
import timeline from "vitepress-markdown-timeline"

export const sharedConfig = defineConfig({
  /*rewrites: { // 很重要，
    'zh/:rest*': ':rest*',
  },*/
  metaChunk: true,
  lang: 'zh-CN', // 语言
  head: [ // favicon.ico 图标等
    ['link', { rel: "shortcut icon", href: `/images/icon.png` }],
    // 网站 favicon.ico 图标
    ['link', { rel: "icon", href: `/images/icon.png`, type: "image/png" }],
    // 引入 Google Fonts
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }],
    // 网页视口
    ['meta', { name: "viewport", content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,shrink-to-fit=no" }],
  ],
  appearance: true, // 主题模式，默认浅色且开启切换
  base: '/',
  lastUpdated: true, // 上次更新
  vite: {
    build: {
      chunkSizeWarningLimit: 1600
    },
    plugins: [],
    server: {
      port: 18089
    }
  },
  markdown: { // markdown 配置
    math: true,
    lineNumbers: true, // 行号显示
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
    config: (md) => {
      md.use(timeline)
    }
  },
  themeConfig: { // 主题设置
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search',
              },
              modal: {
                displayDetails: 'Display detailed list',
                resetButtonTitle: 'Reset search',
                backButtonTitle: 'Close search',
                noResultsText: 'No results for',
                footer: {
                  selectText: 'to select',
                  selectKeyAriaLabel: 'enter',
                  navigateText: 'to navigate',
                  navigateUpKeyAriaLabel: 'up arrow',
                  navigateDownKeyAriaLabel: 'down arrow',
                  closeText: 'to close',
                  closeKeyAriaLabel: 'escape',
                },
              },
            },
          },

        },
      },
    },
    logo: '/images/icon.png',  // 左上角logo
    socialLinks: [
	        {
	            icon: "github",
	            link: "https://github.com/Aruvelut-123/BBPC_Website"
	        },
	        {
	            icon: "bilibili",
	            link: "https://space.bilibili.com/475655508"
	        },
	        {
	            icon: "qq",
	            link: "https://qm.qq.com/q/ZeRn3zwz0C"
	        },
	        {
	            icon: "gamebanana",
	            link: "https://gamebanana.com/mods/610816"
	        }
        ],
  }
})