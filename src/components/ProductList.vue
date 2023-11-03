<script lang="ts" setup>
import type { Products } from '@/models/products.model.ts';

defineProps<{
  products: Products;
}>();
</script>

<template>
  <div class="products">
    <div v-for="product in products" :key="product.id" class="products__item">
      <img
        :alt="product.name"
        :src="product.image"
        class="products__item-image"
      />
      <h2 class="products__item-name">{{ product.name }}</h2>
      <p class="products__item-brand">{{ product.brand }}</p>
      <p class="products__item-category">{{ product.category }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &__item {
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
    padding: 2rem;
    width: calc(75% - 2rem);

    &-image {
      height: auto;
      width: 100%;
    }

    &-name {
      font-size: 1.8rem;
      font-weight: bold;
    }

    &-brand,
    &-category {
      color: #666;
      font-size: 1.4rem;
    }
  }
}
</style>