
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Ems.vue') },
      { path: 'ems', component: () => import('pages/Ems.vue') },
      { path: 'settings', component: () => import('pages/Settings.vue') },
      { path: 'case', component: () => import('pages/Case.vue') },
      { path: 'transfer', component: () => import('pages/Transfer.vue') },
      { path: 'messages', component: () => import('pages/Messages.vue') },
      { path: 'auth', component: () => import('pages/Auth.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
