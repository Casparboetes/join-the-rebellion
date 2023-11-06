<script lang="ts" setup>
import useApi from '@/composables/use/api';
import type { Products } from '@/models/products.model.ts';

import ProductList from '@/components/ProductList.vue';
import { ref } from 'vue';

const { data: products } = useApi<Products>('http://localhost:3000/products');

const list = ref(null);

// GET request using fetch with async/await
const response = await fetch('http://localhost:3000/wishlists');
const data = await response.json();
list.value = data;

const fetchData = async () => {
  const response = await fetch('http://localhost:3000/wishlists');
  list.value = await response.json();
};
</script>

<template>
  <div class="product-overview">
    <h1 class="product-overview__page-title">
      Buying is<span class="product-overview__highlight"> believing.</span>
    </h1>

    <ProductList
      v-if="products"
      :list="list"
      :products="products"
      @clicked-on-fav="fetchData"
    />
  </div>
</template>

<style lang="scss" scoped>
.product-overview {
  align-items: center;
  display: flex;
  flex-direction: column;
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