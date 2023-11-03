<script lang="ts" setup>
import useApi from '@/composables/use/api';
import type { Products } from '@/models/products.model.ts';
import ProductList from '@/components/ProductList.vue';

const { data: products } = useApi<Products>('http://localhost:3000/products');
</script>

<template>
  <div class="product-overview">
    <h1 class="product-overview__page-title">
      Buying is<span class="product-overview__highlight"> believing.</span>
    </h1>
    <ProductList :products="products" />
  </div>
</template>

<style lang="scss" scoped>
.product-overview {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__page-title {
    text-transform: uppercase;
    font-family: 'Darker Grotesque', serif;
    font-size: 3.4rem;
    margin: 2rem 0;
  }

  &__highlight {
    color: $c-pink;
  }
}
</style>