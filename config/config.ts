import { defineConfig } from 'dumi';

// more config: https://d.umijs.org/config
export default defineConfig({
  title: 'snail-ui',
  mode: 'site',
  navs: [
    {
      title: '指南',
      path: '/guide',
    },
    {
      title: '样式',
      path: '/components',
    },
  ],
});
