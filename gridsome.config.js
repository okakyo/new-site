// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'DENX',
  // siteUrl: 'https://okakyo.myvnc.com',
  template:{
    Doc: '/blog/:slugs',
  },
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        
      ]
    }
  },

  plugins: [
     'gridsome-plugin-pug' ,
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        route: "/article/:slugs",
        typeName: 'Doc',
        refs: {
          tags: {
            typeName: "tagPage",
            route: "/tag/:id",
            create: true
          }
        },
        remark: {
          plugins: [
            '@gridsome/remark-prismjs',
            [ '@noxify/gridsome-plugin-remark-embed', {
              'enabledProviders' : ['Youtube', 'Twitter', 'Gist'],
          }]
          ]
        }
      }
    },
  ]
}
