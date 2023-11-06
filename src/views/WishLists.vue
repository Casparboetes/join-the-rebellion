<script lang="ts" setup>
import useApi from '@/composables/use/api';
import { WishLists } from '@/models/wish-lists.model.ts';
import WishList from '@/components/WishList.vue';

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

    <WishList :wishLists="wishLists" />
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