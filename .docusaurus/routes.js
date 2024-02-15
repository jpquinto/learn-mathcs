import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '4bf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '115'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '60d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '86b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '658'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '94e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '05a'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '03e'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '7e0'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '050'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '763'),
            routes: [
              {
                path: '/docs/algebra-1/chapter-6/6-1',
                component: ComponentCreator('/docs/algebra-1/chapter-6/6-1', 'fa5'),
                exact: true,
                sidebar: "geometrySidebar"
              },
              {
                path: '/docs/algebra-1/chapter-6/6-2',
                component: ComponentCreator('/docs/algebra-1/chapter-6/6-2', '56b'),
                exact: true,
                sidebar: "geometrySidebar"
              },
              {
                path: '/docs/algebra-1/chapter-6/6-3',
                component: ComponentCreator('/docs/algebra-1/chapter-6/6-3', '1f0'),
                exact: true,
                sidebar: "geometrySidebar"
              },
              {
                path: '/docs/algebra-1/chapter-6/6-3-quiz',
                component: ComponentCreator('/docs/algebra-1/chapter-6/6-3-quiz', '27d'),
                exact: true,
                sidebar: "geometrySidebar"
              },
              {
                path: '/docs/algebra-1/overview',
                component: ComponentCreator('/docs/algebra-1/overview', '8ac'),
                exact: true,
                sidebar: "geometrySidebar"
              },
              {
                path: '/docs/category/beginner',
                component: ComponentCreator('/docs/category/beginner', 'c83'),
                exact: true,
                sidebar: "javascriptSidebar"
              },
              {
                path: '/docs/category/big-o-notation',
                component: ComponentCreator('/docs/category/big-o-notation', '644'),
                exact: true,
                sidebar: "cspSidebar"
              },
              {
                path: '/docs/category/chapter-6',
                component: ComponentCreator('/docs/category/chapter-6', '717'),
                exact: true,
                sidebar: "algebra1Sidebar"
              },
              {
                path: '/docs/category/chapter-6-1',
                component: ComponentCreator('/docs/category/chapter-6-1', 'ad4'),
                exact: true,
                sidebar: "algebra2Sidebar"
              },
              {
                path: '/docs/category/chapter-6-2',
                component: ComponentCreator('/docs/category/chapter-6-2', '187'),
                exact: true,
                sidebar: "geometrySidebar"
              },
              {
                path: '/docs/category/example-projects',
                component: ComponentCreator('/docs/category/example-projects', '624'),
                exact: true,
                sidebar: "javascriptSidebar"
              },
              {
                path: '/docs/csp/big-o/',
                component: ComponentCreator('/docs/csp/big-o/', '3ce'),
                exact: true,
                sidebar: "cspSidebar"
              },
              {
                path: '/docs/csp/big-o/mathematical-definition',
                component: ComponentCreator('/docs/csp/big-o/mathematical-definition', 'dca'),
                exact: true,
                sidebar: "cspSidebar"
              },
              {
                path: '/docs/csp/overview',
                component: ComponentCreator('/docs/csp/overview', 'e65'),
                exact: true,
                sidebar: "cspSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'e84'),
                exact: true
              },
              {
                path: '/docs/javascript/example-projects/beginner/seat-picker',
                component: ComponentCreator('/docs/javascript/example-projects/beginner/seat-picker', '670'),
                exact: true,
                sidebar: "javascriptSidebar"
              },
              {
                path: '/docs/javascript/overview',
                component: ComponentCreator('/docs/javascript/overview', '03d'),
                exact: true,
                sidebar: "javascriptSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '7ef'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '2c8'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'f0d'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'ca5'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', '508'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', 'f90'),
                exact: true
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'd64'),
                exact: true
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '16a'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'c64'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
