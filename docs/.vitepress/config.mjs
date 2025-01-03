import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'pt-BR',
  title: "Meu projeto teste",
  description: "A VitePress Site",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/config/markdown-examples' },
      { text: 'API', link: '/guide/api-examples' },

      { 
        text: 'Menu Dropdown', 
        items: [
          {
            text: 'Titulo da Seção A',
            items: [
              {text: 'Markdown', link: '/guide/api-examples'},
              {text: 'API', link: '/config/markdown-examples'}
            ]
          }
        ]
      },
      { 
        text: 'Menu Dropdown', 
        items: [
          {
            text: 'Titulo da Seção B',
            items: [
              {text: 'Item A da Seção A', link: '...'},
              {text: 'Item B da Seção B', link: '...'}
            ]
          }
        ]
      }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' },
    //       { text: 'Runtime', link: '/runtime' }
    //     ]
    //   },
    //   {
    //     text: 'Testando',
    //     items: [
    //       { text: 'Item 1', link: "..." },
    //       { text: 'Item 2', link: "..." },
    //     ]
    //   }
    // ],

    sidebar: {
      '/guide/': [
        {
          text: "Guide",
          items: [
            { text: 'Texto 1', link: '/guide/' },
            { text: 'Texto 2', link: '/guide/api-examples' }
          ]
        }
      ],
      '/config/': [
        {
          text: 'Guia',
          items: [
            { text: 'Markdown', link: '/config/markdown-examples' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    head: [
      ['link', { rel: 'icon', href: '/dist/assets/favicon-48x48.png' }]
    ],

    footer: {
      message: 'Lançado sob a Licença MIT.',
      copyright: 'Direitos autorais © 2019-presente Evan You'
    },

    editLink: {
      pattern: 'https://github.com/danilotc/testevitepress/edit/main/docs/:path',
      text: 'Editar esta página no GitHub'
    },

    lastUpdated: {
      text: 'Atualizado em'
    },

    docFooter: {
      prev: 'Anterior',
      next: 'Próximo'
    }
  }
})