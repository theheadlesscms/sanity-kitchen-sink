export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '602f41734b25ab621a7fa7dc',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-j8jbwwac',
                  apiId: '1e046277-cfd4-4a4f-91bd-4ae5995f4a2f'
                },
                {
                  buildHookId: '602f4173e0e30a591d4ed4f3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-529i78ob',
                  apiId: '3c57ef2a-4934-47c5-a039-347ed4c48c45'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/theheadlesscms/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-529i78ob.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
