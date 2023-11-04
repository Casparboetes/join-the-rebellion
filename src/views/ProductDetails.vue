<script lang="ts" setup>
import { useRoute } from 'vue-router';
import useApi from '@/composables/use/api.ts';
import type { Product } from '@/models/products.model.ts';

const route = useRoute();
const id = parseInt(<string>route.params.id);
const { data: productDetails } = useApi<Product>(
  `http://localhost:3000/products/${id}`
);
</script>

<template>
  <h1>Product Details</h1>

  <div v-if="productDetails">
    {{ productDetails.brand }}
    {{ productDetails.name }}
    {{ productDetails.category }}
    {{ productDetails.image }}
    {{ productDetails.specifications }}
  </div>
</template>

<style scoped></style>
