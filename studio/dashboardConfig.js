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
                  buildHookId: '602181c29cb5b500e8bdfdef',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-mx5rbnsb',
                  apiId: '248e3696-7a81-4fbc-9aa5-7864c55d578f'
                },
                {
                  buildHookId: '602181c265a09d008d338a40',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-b88np89x',
                  apiId: '61e47d01-4154-4371-8bd3-3243467f869e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mosjeffinately/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-b88np89x.netlify.app', category: 'apps'}
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
