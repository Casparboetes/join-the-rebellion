<script lang="ts" setup>
import useApi from '@/composables/use/api';
import type { Products } from '@/models/products.model.ts';

const { data: products, loading: isLoading } = useApi<Products>(
  'http://localhost:3000/products'
);
</script>

<template>
  <h1>Product Overview</h1>
  <p>
    Present a list of all digital products with a search bar to quickly find
    favorites!
  </p>
</template>

<style lang="scss" scoped></style>