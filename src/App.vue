<script lang="ts" setup>
import { ref } from 'vue';
import type { NavItem } from '@/models/nav-item.model.ts';
import AppHeader from '@/components/AppHeader.vue';
import AppDrawer from '@/components/AppDrawer.vue';

const navItems = ref<NavItem>([
  { name: 'Product Overview', path: '/product-overview', id: 1 },
  { name: 'Wish Lists', path: '/wish-lists', id: 2 }
]);
const toggle = ref(false);
const handleToggle = (toggles: boolean) => (toggle.value = toggles);
</script>

<template>
  <div class="app">
    <AppHeader :nav-items="navItems" @emit-toggle="handleToggle" />
    <div class="app__main">
      <AppDrawer :is-open="toggle" :nav-items="navItems" />
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  &__main {
    padding-top: $h-header;
  }

  @include screen($screen-specific) {
    &__main {
      margin-top: $h-header-large;
    }
  }
}
</style>
