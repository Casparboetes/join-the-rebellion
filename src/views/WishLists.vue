<script lang="ts" setup>
import useApi from '@/composables/use/api';
import type { WishLists } from '@/models/wish-lists.model.ts';
import WishList from '@/components/WishList.vue';
import WishListEmpty from '@/components/WishListEmpty.vue';
import router from '@/router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const { data: wishLists } = useApi<WishLists>(
  'http://localhost:3000/wishlists'
);
</script>

<template>
  <div class="wish-lists">
    <h1 class="wish-lists__page-title">
      The Products You <span class="wish-lists__highlight"> Love.</span>
    </h1>

    <hr class="wish-lists__horizontal-line" />

    <button
      v-if="router.currentRoute.value.fullPath !== '/wish-lists'"
      class="wish-lists__button-back"
      @click="router.back()"
    >
      <font-awesome-icon :icon="['fas', 'arrow-left-long']" size="3x" />
    </button>

    <WishListEmpty v-if="!wishLists" />

    <WishList
      v-if="wishLists && router.currentRoute.value.fullPath === '/wish-lists'"
      :wish-lists="wishLists"
    />

    <suspense>
      <router-view></router-view>
    </suspense>
  </div>
</template>

<style lang="scss" scoped>
.wish-lists {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 10rem;

  &__page-title {
    text-transform: uppercase;
    font-family: 'Darker Grotesque', serif;
    font-size: 3rem;
    margin: 2rem 0;
  }

  &__horizontal-line {
    border-top: 2px solid $c-black;
    margin-bottom: 4rem;
    width: 70%;
  }

  &__highlight {
    color: $c-pink;
  }

  &__button-back {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    float: left;
    font: inherit;
    margin: 2rem 80% 4rem auto;
    outline: inherit;
    padding: 0;

    &:hover {
      color: $c-pink;
      transform: scale(1.1);
    }
  }

  @include screen($screen-minimal) {
    &__page-title {
      font-size: 4.5rem;
    }
  }

  @include screen($screen-simple) {
    &__page-title {
      font-size: 7rem;
    }
  }

  @include screen($screen-specific) {
    &__page-title {
      font-size: 8rem;
      margin: 0 0 2rem 0;
    }
  }

  @include screen($screen-normal) {
    @include container($w-header);
  }
}
</style>
