<script lang="ts" setup>
import type { WishLists } from '@/models/wish-lists.model.ts';
import router from '@/router';
import { useRoute } from 'vue-router';
import useAsyncApi from '@/composables/use/asyncApi.ts';
import WishListEmpty from '@/components/WishListEmpty.vue';
import WishList from '@/components/WishList.vue';

const route = useRoute();

const { data: wishLists } = await useAsyncApi<WishLists>(
  'GET',
  'http://localhost:3000/wishlists'
);

const deleteWishList = async () => {
  await useAsyncApi<WishLists>(
    'DELETE',
    `http://localhost:3000/wishlists/${route.params.id}`
  );

  const { data } = await useAsyncApi<WishLists>(
    'GET',
    'http://localhost:3000/wishlists'
  );

  wishLists.value = data.value;

  await router.push('/wish-lists');
};
</script>

<template>
  <div class="wish-lists">
    <h1 class="wish-lists__page-title">
      The Products You <span class="wish-lists__highlight"> Love.</span>
    </h1>

    <hr class="wish-lists__horizontal-line" />

    <div
      v-if="router.currentRoute.value.fullPath !== '/wish-lists'"
      class="wish-lists__button-container"
    >
      <button
        class="wish-lists__button wish-lists__button--back"
        @click="router.back()"
      >
        <font-awesome-icon :icon="['fas', 'arrow-left-long']" size="3x" />
      </button>

      <button
        class="wish-lists__button wish-lists__button--delete"
        @click="deleteWishList()"
      >
        <font-awesome-icon
          :icon="['fas', 'xmark']"
          class="product-details__button-icon"
          size="3x"
        />
        <span class="wish-lists__button-label">Remove</span>
      </button>
    </div>

    <WishListEmpty
      v-if="
        !wishLists?.length &&
        router.currentRoute.value.fullPath === '/wish-lists'
      "
      class="wish-lists__is-empty"
    />

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
  @include container($w-header);

  display: flex;
  flex-direction: column;
  padding-bottom: 10rem;

  &__page-title {
    text-align: center;
    text-transform: uppercase;
    font-family: 'Darker Grotesque', serif;
    font-size: 3rem;
    margin: 2rem 0;
  }

  &__horizontal-line {
    align-self: center;
    border-top: 2px solid $c-black;
    margin-bottom: 4rem;
    width: 65%;
  }

  &__highlight {
    color: $c-pink;
  }

  &__button-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  &__button {
    align-items: center;
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    display: inline-flex;
    font: inherit;
    margin: 2rem 1rem 4rem 1rem;
    outline: inherit;
    padding: 0;
    text-align: center;

    &--back {
      &:hover {
        color: $c-pink;
        transform: scale(1.1);
      }
    }

    &--delete {
      &:hover {
        color: $c-pink;
      }
    }
  }

  &__button-label {
    font-size: 2rem;
    margin-left: 0.8rem;
    transform: translateY(-0.2rem);
  }

  &__is-empty {
    text-align: center;
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