<script lang="ts" setup>
import type { NavItem } from '@/models/nav-item.model.ts';

defineProps<{
  navItems: NavItem;
}>();
</script>

<template>
  <header id="app-header" class="header">
    <div class="header__container">
      <a class="header__branding" href="/">
        <img alt="Rebels logo" class="header__logo" src="@/assets/vue.svg" />
      </a>

      <nav class="header__nav">
        <ul class="header__nav-list">
          <li
            v-for="item in navItems"
            v-bind:key="item.id"
            class="header__nav-item header__nav-item--link"
          >
            <router-link :to="{ path: item.path }">{{ item.name }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>