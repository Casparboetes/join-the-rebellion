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
      default: () => import('@/views/ProductOverview.vue')
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
    component: () => import('@/views/WishLists.vue'),
    children: [
      {
        path: ':id',
        component: () => import('@/views/EditWishList.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 };
  }
});

export default router;
