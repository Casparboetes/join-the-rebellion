import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: () => ({ path: '/product-overview' })
  },
  {
    path: '/product-overview',
    name: 'product-overview',
    components: {
      default: () => import('@/views/ProductOverview.vue'),
      RightSidebar: () => import('@/components/SideBar.vue')
    }
  },
  {
    path: '/product-details/:id',
    name: 'productDetails',
    component: () => import('@/views/ProductDetails.vue')
  },
  {
    path: '/wish-lists',
    name: 'wish-lists',
    component: () => import('@/views/WishLists.vue')
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
