import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'b9e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '0a3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'd07'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'b30'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '7b9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'cb8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'fcd'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'f18'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '173'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'b12'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'f9a'),
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
                path: '/docs/csp/big-o/big-theta-and-omega',
                component: ComponentCreator('/docs/csp/big-o/big-theta-and-omega', 'a0f'),
                exact: true,
                sidebar: "cspSidebar"
              },
              {
                path: '/docs/csp/big-o/comparisons',
                component: ComponentCreator('/docs/csp/big-o/comparisons', '442'),
                exact: true,
                sidebar: "cspSidebar"
              },
              {
                path: '/docs/csp/big-o/examples',
                component: ComponentCreator('/docs/csp/big-o/examples', '873'),
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
                path: '/docs/csp/big-o/space-complexity',
                component: ComponentCreator('/docs/csp/big-o/space-complexity', '576'),
                exact: true,
                sidebar: "cspSidebar"
              },
              {
                path: '/docs/csp/big-o/space-examples',
                component: ComponentCreator('/docs/csp/big-o/space-examples', 'b15'),
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
                path: '/docs/other/4th-grade/adding-fractions',
                component: ComponentCreator('/docs/other/4th-grade/adding-fractions', '247'),
                exact: true,
                sidebar: "otherSidebar"
              },
              {
                path: '/docs/other/4th-grade/fractions-practice',
                component: ComponentCreator('/docs/other/4th-grade/fractions-practice', '605'),
                exact: true,
                sidebar: "otherSidebar"
              },
              {
                path: '/docs/precalculus/intro-to-trig',
                component: ComponentCreator('/docs/precalculus/intro-to-trig', 'da0'),
                exact: true,
                sidebar: "precalculusSidebar"
              },
              {
                path: '/docs/precalculus/trig-functions',
                component: ComponentCreator('/docs/precalculus/trig-functions', '57d'),
                exact: true,
                sidebar: "precalculusSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '678'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
