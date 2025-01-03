import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'pt-BR',
  title: "Meu projeto teste",
  description: "A VitePress Site",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // Este trecho adiciona menu na parte superior da página
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/config/markdown-examples' },
      { text: 'API', link: '/guide/api-examples' },
      // Adicionando dropdown no menu
      { 
        text: 'Menu Dropdown', 
        items: [
          {
            items: [
              {text: 'Markdown', link: '/config/markdown-examples'},
              {text: 'API', link: '/guide/api-examples'}
            ]
          }
        ]
      },
      { 
        text: 'Menu Dropdown', 
        items: [
          {
            items: [
              {text: 'Item A da Seção A', link: '...'},
              {text: 'Item B da Seção B', link: '...'}
            ]
          }
        ]
      }
    ],

    /**
     * Este trecho mostra links na barra lateral (sidebar) para
     * levar até arquivos específicos. Os links estão agrupados
     * sem recurso de colapse.
     */
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

    /**
     * Este trecho mostra links na barra lateral (sidebar) para
     * levar até arquivos específicos. Os links estão agrupados
     * com recurso de colapse (ou não).
     */
    sidebar: {
      '/guide/': [
        {
          text: "Guide",
          collapsed: false,
          items: [
            { text: 'Indice', link: '/guide/' },
            { text: 'API Exemplo', link: '/guide/api-examples' }
          ]
        }
      ],
      '/config/': [
        {
          text: 'Configuração',
          items: [
            { text: 'Markdown', link: '/config/markdown-examples' }
          ]
        }
      ]
    },

    /**
     * Este trecho mostra icones ao lado direito do menu principal
     * como github, facebook, x, linkedin, etc.
     */
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // analisar o motivo pelo qual este trecho não funcionou
    head: [
      ['link', { rel: 'icon', href: '/dist/assets/favicon-48x48.png' }]
    ],

    /**
     * Este trecho adiciona um rodapé na página, mas parece
     * que só funciona na página inicial.
     */
    footer: {
      message: 'Lançado sob a Licença MIT.',
      copyright: 'Direitos autorais © 2019-presente Evan You'
    },

    /**
     * Este trecho mostra um link ao lado da última atualização
     * do arquivo. Ao clicar é possível editar diretamente no
     * github o arquivo .md
     */
    editLink: {
      pattern: 'https://github.com/danilotc/testevitepress/edit/main/docs/:path',
      text: 'Editar esta página no GitHub'
    },

    /**
     * Este código modifica o texto da última alteração feita no
     * arquivo. Em defineConfig é preciso adicionar o trecho de
     * código lastUpdated: true
     * Isso irá mostrar a data e hora da última atualização feita
     * naquele arquivo.
     */
    lastUpdated: {
      text: 'Atualizado em'
    },

    /**
     * Adicionando rodapé na página, aparentemente este recurso
     * só funciona na página inicial.
     */
    docFooter: {
      prev: 'Anterior',
      next: 'Próximo'
    },

    /**
     * Adicionando campo de busca no menu principal que pode ser
     * acessado com atalho Ctrl K.
     */
    search: {
      provider: 'local'
    }
  }
})