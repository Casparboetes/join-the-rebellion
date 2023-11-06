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
      <router-view v-slot="{ Component }">
        <transition mode="out-in" name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
.app {
  &__main {
    min-height: 100vh;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: $h-header;
  }

  @include screen($screen-specific) {
    &__main {
      padding-top: $h-header-large;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
}
</style>