import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../pages/MainPage.vue';
import CatalogPage from '../pages/CatalogPage.vue';
import AddNewPage from '../pages/AddNewPage.vue';

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/catalog',
    component: CatalogPage,
  },
  {
    path: '/new',
    component: AddNewPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
