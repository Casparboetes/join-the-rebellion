<script lang="ts" setup>
import useApi from '@/composables/use/api';
import { WishLists } from '@/models/wish-lists.model.ts';
import WishList from '@/components/WishList.vue';
import WishListEmpty from '@/components/WishListEmpty.vue';
import { ref, watch } from 'vue';
import router from '@/router';

const { data: wishLists } = useApi<WishLists>(
  'http://localhost:3000/wishlists'
);
</script>

<template>
  <div class="wish-lists">
    <h1 class="wish-lists__page-title">
      The Products You <span class="wish-lists__highlight"> Love.</span>
    </h1>
    <hr />
    <WishListEmpty v-if="!wishLists" />

    <WishList
      v-if="wishLists && router.currentRoute.value.fullPath === '/wish-lists'"
      :wishLists="wishLists"
    />

    <button
      v-if="router.currentRoute.value.fullPath !== '/wish-lists'"
      @click="router.back()"
    >
      BACK
    </button>
    <router-view></router-view>
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

  &__highlight {
    color: $c-pink;
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