import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/dice', component: '@/pages/LearnFlex/Dice/index' },
    { path: '/grid', component: '@/pages/LearnFlex/Grid/index' },
    { path: '/percent', component: '@/pages/LearnFlex/Percent/index' },
    { path: '/holyGrail', component: '@/pages/LearnFlex/HolyGrail/index' },
    { path: '/input', component: '@/pages/LearnFlex/Input/index' },
    { path: '/flow', component: '@/pages/LearnFlex/Flow/index' },
    { path: '/hang', component: '@/pages/LearnFlex/Hang/index' },
    { path: '/fiex-footer', component: '@/pages/LearnFlex/FixedFooter/index' },

    // 项目学习的demo
    { path: '/custom-style', component: '@/pages/01_CustomStyle/parent/index' },
    { path: '/global-css', component: '@/pages/02_GlobalCSS/index' },
    {
      path: '/transfer-func',
      component: '@/pages/03_TransferFunc/parent/index',
    },
    { path: '/use-ref', component: '@/pages/03_useRef/parent' },
    { path: '/create-ref', component: '@/pages/04_createRef/parent' },
  ],
  fastRefresh: {},
  publicPath: './',
  history: {
    type: 'hash',
  },
});
