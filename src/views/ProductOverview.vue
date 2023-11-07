<script lang="ts" setup>
import ProductList from '@/components/ProductList.vue';
import type { Products } from '@/models/products.model.ts';
import useApi from '@/composables/use/api';
import { onMounted, onUnmounted, ref } from 'vue';
import SearchBar from '@/components/SearchBar.vue';

const { data: products } = useApi<Products>('http://localhost:3000/products');

const list = ref(null);
const showSearchBar = ref(false);
const hideSearchBar = ref(false);

const searchForEnlightenment = async (query: string) => {
  const response = await fetch(`http://localhost:3000/products?q=${query}`);
  products.value = await response.json();
};

const toggleSearchBar = () => (showSearchBar.value = !showSearchBar.value);
const toggleHideSearchBar = () => (hideSearchBar.value = !hideSearchBar.value);

defineExpose({
  toggleSearchBar,
  toggleHideSearchBar
});

const response = await fetch('http://localhost:3000/wishlists');
const data = await response.json();
list.value = data;

const fetchData = async () => {
  const response = await fetch('http://localhost:3000/wishlists');
  list.value = await response.json();
};

const handleScroll = () => {
  hideSearchBar.value = window.scrollY >= 25;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
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
      :list="list"
      :products="products"
      @emitReFetch="fetchData"
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