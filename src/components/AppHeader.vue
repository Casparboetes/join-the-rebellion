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
        <img
          alt="Rebels logo"
          class="header__logo"
          src="@/assets/rebels-small.svg"
        />
      </a>

      <nav class="header__nav">
        <ul class="header__nav-list">
          <li
            v-for="item in navItems"
            :key="item.id"
            class="header__nav-item header__nav-item--link"
          >
            <router-link :to="{ path: item.path }">{{ item.name }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  $self: &;

  background: $c-black;
  display: block;
  height: $h-header;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition:
    box-shadow 0.2s ease,
    height 0.2s ease,
    transform 0.2s ease;
  width: 100%;
  z-index: 10;

  &__container {
    @include container($w-header);

    align-items: center;
    display: flex;
    height: 100%;
    justify-content: flex-end;
    padding: 1.2rem 1.7rem;
  }

  &__branding {
    flex-shrink: 0;
    margin-right: auto;
    transition: transform 0.3s ease;
    padding: 0 1rem 0 0;

    &:hover {
      transform: rotate(-1deg);
    }
  }

  &__logo {
    &--horizontal {
    }
  }

  &__nav {
  }

  &__nav-list {
    display: block;
    list-style: none;
  }

  &__nav-item {
    &--link {
      display: none;
    }
  }

  &__button {
    all: unset;
    margin: 0;
    cursor: pointer;
    z-index: 15;
    color: $c-pink--dark;

    &--search {
      transition: transform 0.1s ease-in-out;

      &:hover {
        color: $c-pink;
      }

      &:active {
        transform: scale(1.2);
      }

      &:focus-visible {
        outline: -webkit-focus-ring-color auto 1px;
      }
    }
  }

  @include screen($screen-simple) {
    &__container {
      justify-content: space-between;
    }

    &__branding {
      margin-right: 2rem;
    }

    &__nav-list {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    &__nav-item {
      display: flex;

      &--link {
        margin-right: 2rem;
      }
    }
  }

  @include screen($screen-normal) {
    &__container {
      padding: $p-gutter;
    }

    &__branding {
      margin-right: $p-gutter;
    }
  }
}
</style>