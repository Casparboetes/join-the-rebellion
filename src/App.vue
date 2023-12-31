<script lang="ts" setup>
import { ref } from 'vue';
import type { NavItem } from '@/models/nav-item.model.ts';
import AppHeader from '@/components/AppHeader.vue';
import AppDrawer from '@/components/AppDrawer.vue';
import AppFooter from '@/components/AppFooter.vue';
import router from '@/router';

const navItems = ref<NavItem>([
  { name: 'Product Overview', path: '/product-overview', id: 1 },
  { name: 'Wish Lists', path: '/wish-lists', id: 2 }
]);
const exposeHeader = ref();
const exposeComponent = ref();
const toggle = ref(false);

const closeHeaderMenu = () => {
  exposeHeader?.value?.closeMenu();
};
const handleToggle = (toggles: boolean) => {
  toggle.value = toggles;

  if (router.currentRoute.value.path.includes('wish-lists')) return;

  if (router.currentRoute.value.name === 'product-overview') {
    setTimeout(
      () => exposeComponent?.value?.toggleHideSearchBar(),
      !toggles ? 500 : 0
    );
  }
};
const handleToggleSearchBar = () => exposeComponent?.value?.toggleSearchBar();
</script>

<template>
  <div class="app">
    <AppHeader
      ref="exposeHeader"
      :nav-items="navItems"
      @emit-toggle="handleToggle"
      @emit-toggle-search-bar="handleToggleSearchBar"
    />
    <AppDrawer
      :is-open="toggle"
      :nav-items="navItems"
      @emit-close-menu="closeHeaderMenu"
    />
    <div class="app__main">
      <suspense>
        <router-view v-slot="{ Component }">
          <transition mode="out-in" name="fade">
            <component :is="Component" ref="exposeComponent" />
          </transition>
        </router-view>
      </suspense>
    </div>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
.app {
  &__main {
    min-height: 100vh;
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
