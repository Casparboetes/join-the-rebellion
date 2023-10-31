<script lang="ts" setup>
import { ref } from 'vue';
import type { NavItem } from '@/models/nav-item.model.ts';
import AppHeader from '@/components/AppHeader.vue';

const navItems = ref<NavItem>([
  { name: 'Product Overview', path: '/product-overview', id: 1 },
  { name: 'Wish Lists', path: '/wish-lists', id: 2 }
]);
</script>

<template>
  <AppHeader :nav-items="navItems" class="app__header" />

  <div class="app__main">
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
