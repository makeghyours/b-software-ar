export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e22ea92915f40179405a0bb',
                  title: 'Sanity Studio',
                  name: 'b-software-ar-studio',
                  apiId: 'ee95807b-081a-424d-bb9a-d7701391aaf5'
                },
                {
                  buildHookId: '5e22ea923992608d9a0c42a3',
                  title: 'Blog Website',
                  name: 'b-software-ar',
                  apiId: '0feb49e5-3228-46b3-bc15-ceb5318386ca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/makeghyours/b-software-ar',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://b-software-ar.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
