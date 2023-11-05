<script lang="ts" setup>
import { ref } from 'vue';
import type { NavItem } from '@/models/nav-item.model.ts';
import AppHeader from '@/components/AppHeader.vue';
import AppDrawer from '@/components/AppDrawer.vue';
import AppFooter from '@/components/AppFooter.vue';

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
    <AppDrawer :is-open="toggle" :nav-items="navItems" />
    <div class="app__main">
      <router-view></router-view>
      <!--      <router-view class="app__side-bar" name="RightSidebar"></router-view>-->
    </div>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
.app {
  &__main {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: $h-header;
  }

  &__side-bar {
    display: none;
  }

  @include screen($screen-specific) {
    &__main {
      padding-top: $h-header-large;
    }
  }

  @include screen($screen-normal) {
    &__side-bar {
      display: flex;
    }
  }
}
</style>
