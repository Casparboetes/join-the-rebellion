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
  <AppHeader :navItems="navItems" class="app__header" />

  <div class="content">
    <!--    <h1>Temp Nav</h1>-->
    <!--    <nav>-->
    <!--      <p>-->
    <!--        <router-link to="/product-overview">Product Overview</router-link>-->
    <!--        |-->
    <!--        <router-link to="/product-details">Product Details</router-link>-->
    <!--        |-->
    <!--        <router-link to="/wish-lists">Wish Lists</router-link>-->
    <!--      </p>-->
    <!--    </nav>-->
    <router-view></router-view>
  </div>
</template>

<style scoped></style>