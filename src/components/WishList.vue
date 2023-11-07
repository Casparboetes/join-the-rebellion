<script lang="ts" setup>
import type { WishLists } from '@/models/wish-lists.model.ts';
import router from '@/router';

defineProps<{
  wishLists: WishLists | null;
}>();

const viewWishlist = (id: number) => router.push(`/wish-lists/${id}`);
</script>

<template>
  <div class="wish-list">
    <div
      v-for="wishList in wishLists"
      :key="wishList.id"
      class="wish-list__item"
      @click="viewWishlist(wishList.id)"
    >
      <h3 class="wish-list__title">
        {{ wishList.name }}
      </h3>
      <div class="wish-list__item-count">
        {{ wishList.products.length }} products
      </div>
      <div class="wish-list__image"></div>
      <!--      <img-->
      <!--        :alt="wishList.name"-->
      <!--        :src="wishlist.image"-->
      <!--        class="wish-list__item-image"-->
      <!--      />-->
      <div class="wish-list__cta">View List</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wish-list {
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: center;

  &__item {
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
    color: $c-black;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 43rem;
    padding: 2rem;
    width: calc(100% - 2rem);
  }

  &__item-count {
    color: $c-grey;
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  &__image {
    background-color: $c-grey;
    height: auto;
    min-height: 20rem;
    width: 100%;
  }

  &__title {
    font-size: 1.6rem;
    font-weight: bold;
    margin: 0.5rem 0;
  }

  &__cta {
    font-size: 1.6rem;
    font-weight: bold;
    margin: 2rem 0 1rem;
    text-align: center;
    text-transform: uppercase;
  }

  @include screen($screen-simple) {
    &__item {
      max-width: 100%;
      width: calc(40%);
    }
  }
}
</style>