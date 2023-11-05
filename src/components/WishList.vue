<script lang="ts" setup>
import type { WishLists } from '@/models/wish-lists.model.ts';
import { WishList } from '@/models/wish-lists.model.ts';

defineProps<{
  wishLists: WishLists | null;
}>();

const viewList = (id: WishList['id']) => console.log('Hi', id);
</script>

<template>
  <div class="wish-list">
    <div
      v-for="wishList in wishLists"
      :key="wishList.id"
      class="wish-list__item"
      @click="viewList(wishList.id)"
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
  justify-content: center;
  gap: 4rem;

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
    cursor: pointer;
    padding: 2rem;
    width: calc(100% - 2rem);
    max-width: 43rem;
  }

  &__item-count {
    color: $c-grey;
    font-weight: bold;
  }

  &__image {
    background-color: #666;
    min-height: 24.6rem;
    height: auto;
    width: 100%;
  }

  &__title {
    font-size: 1.6rem;
    font-weight: bold;
    margin: 0.5rem 0;
  }

  @include screen($screen-simple) {
    &__item {
      width: calc(45%);
      max-width: 100%;
    }
  }
}
</style>