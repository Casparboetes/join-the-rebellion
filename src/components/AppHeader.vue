<script lang="ts" setup>
import type { NavItem } from '@/models/nav-item.model.ts';
import { onMounted, onUnmounted, ref } from 'vue';
import router from '@/router';

defineProps<{
  navItems: NavItem;
}>();

const emit = defineEmits<{
  emitToggle: [boolean];
  emitToggleSearchBar: [];
}>();

const windowWidth = ref(window.innerWidth);
const isOpen = ref(false);
const handleResize = () => (windowWidth.value = window.innerWidth);
const handleToggle = () => {
  isOpen.value = !isOpen.value;
  emit('emitToggle', isOpen.value);
};

const closeMenu = () => {
  if (isOpen.value) {
    handleToggle();
  }
};

const toggleSearchBar = () => {
  router.push('/');
  setTimeout(() => emit('emitToggleSearchBar'), 600);
};

defineExpose({
  closeMenu
});

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <header id="app-header" class="header">
    <div class="header__container">
      <router-link class="header__branding" to="/" @click="closeMenu">
        <img
          v-if="windowWidth <= 899"
          alt="Rebels logo"
          class="header__logo"
          src="@/assets/rebels-small.svg"
        />
        <img
          v-if="windowWidth > 899"
          alt="Rebels logo"
          class="header__logo"
          src="@/assets/rebels.svg"
        />
      </router-link>

      <nav class="header__nav">
        <ul class="header__nav-list">
          <li v-for="item in navItems" :key="item.id" class="header__nav-item">
            <router-link
              :to="{ path: item.path }"
              active-class="header__nav-link--active"
              class="header__nav-link"
              >{{ item.name }}
            </router-link>
          </li>
        </ul>
      </nav>

      <button
        class="header__button header__button--search"
        v-on:click="toggleSearchBar()"
      >
        <font-awesome-icon :icon="['fa', 'search']" size="2x" />
      </button>

      <button
        :class="{ 'header__hamburger--menu-open': isOpen }"
        class="header__hamburger"
        @click="handleToggle"
      >
        <svg
          height="24px"
          viewBox="0 0 48 48"
          width="24px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <line stroke-width="1" x1="0" x2="48" y1="17" y2="17" />
            <line stroke-width="1" x1="0" x2="48" y1="31" y2="31" />
          </g>

          <g>
            <line stroke-width="1" x1="0" x2="48" y1="24" y2="24" />
            <line stroke-width="1" x1="0" x2="48" y1="24" y2="24" />
          </g>
        </svg>
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@600&display=swap');

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
  }

  &__nav {
    display: none;
  }

  &__nav-list {
    @include list-reset;

    display: flex;
    align-items: center;
    color: $c-white;
  }

  &__nav-link {
    text-transform: uppercase;
    margin: 0 2rem;
    font-size: 1.6rem;
    line-height: 186%;
    font-weight: 600;
    font-family: 'Darker Grotesque', serif;
    letter-spacing: 0.01071em;
    text-decoration: none;
    color: $c-white;
    transition: all 0.3s ease-out;

    &:hover {
      color: $c-pink;
    }
  }

  &__button {
    all: unset;
    margin: 0;
    cursor: pointer;
    color: $c-pink--dark;

    &--search {
      margin: 0 2rem;
      transition: transform 0.275s ease-in-out;

      &:hover {
        color: $c-pink;
        transform: scale(1.25);
      }

      &:active {
        color: $c-pink;
        transform: scale(1.4);
      }

      &:focus-visible {
        outline: -webkit-focus-ring-color auto 1px;
      }
    }
  }

  &__hamburger {
    all: unset;

    &:focus {
      outline: revert;
    }

    height: 36px;
    cursor: pointer;
    z-index: 2;

    svg {
      stroke: $c-white;

      transition: 0.2s;

      g {
        &:first-child {
          opacity: 1;
          transition: opacity 0s 0.2s;

          line {
            transition: transform 0.2s 0.2s;
            transform: translateY(0px);
          }
        }

        &:last-child {
          opacity: 0;
          transition: opacity 0s 0.2s;

          line {
            transition: transform 0.2s;
            transform: rotate(0deg);
            transform-origin: center;
          }
        }
      }
    }

    &--menu-open svg {
      stroke: $c-pink;

      g {
        &:first-child {
          opacity: 0;

          line {
            transition: transform 0.2s;

            &:first-child {
              transform: translateY(0.7rem);
            }

            &:last-child {
              transform: translateY(-0.7rem);
            }
          }
        }

        &:last-child {
          opacity: 1;

          line {
            transition: transform 0.2s 0.2s;

            &:first-child {
              transform: rotate(45deg);
            }

            &:last-child {
              transform: rotate(-45deg);
            }
          }
        }
      }
    }
  }

  @include screen($screen-specific) {
    height: $h-header-large;

    &__nav {
      display: block;
    }

    &__button {
      &--search {
        margin-right: 1.7rem;
      }
    }

    &__hamburger {
      display: none;
    }
  }
}
</style>