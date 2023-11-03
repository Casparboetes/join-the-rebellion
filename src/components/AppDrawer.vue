<script lang="ts" setup>
import type { NavItem } from '@/models/nav-item.model.ts';

defineProps<{
  isOpen: boolean;
  navItems: NavItem;
}>();
</script>

<template>
  <div :class="{ 'drawer--open': isOpen }" class="drawer">
    <nav class="drawer__nav">
      <ul class="drawer__nav-list">
        <li
          v-for="item in navItems"
          :key="item.id"
          class="drawer__nav-item drawer__nav-item--link"
        >
          <router-link
            :to="{ path: item.path }"
            active-class="drawer__nav-link--active"
            class="drawer__nav-link"
            >{{ item.name }}
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="drawer__footer">
      <p class="drawer__label">Interested in my work?</p>
      <div class="drawer__button-container">
        <button class="drawer__button">Contact me</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.drawer {
  $self: &;

  align-items: center;
  background: $c-black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: $c-white;
  font-family: 'Darker Grotesque', serif;
  font-size: 3.6rem;
  height: 0;
  top: $h-header;
  overflow: hidden;
  position: absolute;
  transition: all 0.4s ease-in-out;
  width: 100%;

  &--open {
    height: calc(100vh - $h-header);

    #{ $self }__footer {
      opacity: 1;
    }
  }

  &__nav {
    justify-content: center;
  }

  &__nav-list {
    @include list-reset;
  }

  &__nav-item {
    margin: 2rem 0;
  }

  &__nav-link {
    color: $c-white;
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: 0.01071em;
    line-height: 186%;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.3s ease-out;

    &:hover {
      color: $c-pink;
    }
  }

  &__footer {
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    justify-content: center;
    margin-bottom: 8rem;
    opacity: 0;
    transition-delay: 400ms;
    transition-property: opacity;
  }

  &__label {
    margin: 2rem 0;
    text-align: center;
  }

  &__button-container {
    padding: 1rem;
  }

  &__button {
    align-items: center;
    appearance: none;
    background-color: $c-pink;
    border-radius: 7rem;
    border: 0.2rem solid transparent;
    box-shadow: none;
    box-sizing: border-box;
    color: $c-white;
    cursor: pointer;
    display: inline-flex;
    font-family: 'Darker Grotesque', serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    height: 5.5rem;
    justify-content: center;
    margin: 0;
    min-width: 15rem;
    outline: 0;
    padding: 1.4rem 3.4rem 1.6rem;
    position: unset;
    text-decoration: none;
    text-transform: uppercase;
    transition:
      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    user-select: none;
    vertical-align: middle;
    z-index: unset;

    &:hover {
      border: 0.2rem solid $c-pink;
      color: $c-pink;
      background-color: $c-black;
    }
  }

  @include screen($screen-specific) {
    visibility: hidden;
    display: none;
  }
}
</style>