<script lang="ts" setup>
import ProductList from '@/components/ProductList.vue';
import type { Products } from '@/models/products.model.ts';
import { onMounted, onUnmounted, ref } from 'vue';
import SearchBar from '@/components/SearchBar.vue';
import useAsyncApi from '@/composables/use/asyncApi.ts';
import type { WishListsModel } from '@/models/wish-lists.model.ts';

const showSearchBar = ref(false);
const hideSearchBar = ref(false);
const toggleSearchBar = () => (showSearchBar.value = !showSearchBar.value);
const toggleHideSearchBar = () => (hideSearchBar.value = !hideSearchBar.value);

defineExpose({
  toggleSearchBar,
  toggleHideSearchBar
});

const { data: products } = await useAsyncApi<Products>(
  'GET',
  'http://localhost:3000/products'
);

const { data: wishListArray } = await useAsyncApi<WishListsModel>(
  'GET',
  'http://localhost:3000/wishlists'
);

const searchForEnlightenment = async (query: string) => {
  const { data: response } = await useAsyncApi<Products>(
    'GET',
    `http://localhost:3000/products?q=${query}`
  );
  products.value = response.value;
};

const fetchData = async () => {
  const { data: response } = await useAsyncApi<WishListsModel>(
    'GET',
    'http://localhost:3000/wishlists'
  );
  wishListArray.value = response.value;
};

const handleScroll = () => (hideSearchBar.value = window.scrollY >= 25);

onMounted(() => window.addEventListener('scroll', handleScroll));

onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<template>
  <div class="product-overview">
    <SearchBar
      v-if="showSearchBar"
      :class="{ 'product-overview__search-bar--hide': hideSearchBar }"
      class="product-overview__search-bar"
      @emit-search-query="searchForEnlightenment"
    />
    <h1 class="product-overview__page-title">
      Buying is<span class="product-overview__highlight"> believing.</span>
    </h1>

    <ProductList
      v-if="products"
      :list="wishListArray"
      :products="products"
      @emit-re-fetch="fetchData"
    />
  </div>
</template>

<style lang="scss" scoped>
.product-overview {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding-bottom: 10rem;

  &__page-title {
    text-transform: uppercase;
    font-family: 'Darker Grotesque', serif;
    font-size: 3.4rem;
    margin: 2rem 0;
  }

  &__highlight {
    color: $c-pink;
  }

  &__search-bar {
    margin-top: 2rem;
    transform: scale(0.65);
    z-index: 20;

    &--hide {
      z-index: 0;
    }
  }

  @include screen($screen-minimal) {
    &__page-title {
      font-size: 5rem;
    }
  }

  @include screen($screen-simple) {
    &__page-title {
      font-size: 7rem;
    }
  }

  @include screen($screen-specific) {
    &__search-bar {
      margin-top: 3rem;
    }

    &__page-title {
      font-size: 8rem;
      margin: 0 0 2rem 0;
    }
  }

  @include screen($screen-normal) {
    @include container($w-header);
    &__search-bar {
      transform: scale(0.8);

      &--scrolled {
        //z-index: unset;
      }
    }
  }
  @include screen($screen-xl) {
    &__search-bar {
      transform: scale(0.9);
    }
  }
}
</style>
