import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ProductDetails from '@/views/ProductDetails.vue';
import Wishlist from '@/views/Wishlist.vue';
import ProductList from '@/views/ProductList.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: () => ({ path: '/product-list' })
  },
  {
    path: '/product-list',
    name: 'product-list',
    component: ProductList
  },
  {
    path: '/product-details',
    name: 'productDetails',
    component: ProductDetails
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: Wishlist
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
