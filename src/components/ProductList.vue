<script lang="ts" setup>
import type { Products } from '@/models/products.model.ts';

defineProps<{
  products: Products | null;
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
      <h3 class="products__item-title">
        {{ product.brand }} - {{ product.name }}
      </h3>
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
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
    margin-bottom: 2rem;
    padding: 2rem;
    width: calc(90% - 2rem);

    &-image {
      min-height: 24.6rem;
      height: auto;
      width: 100%;
    }

    &-title {
      font-size: 1.6rem;
      font-weight: bold;
      margin: 0.5rem 0;
    }

    &-category {
      color: #666;
      font-size: 1.4rem;
      margin: 0.5rem 0;
    }
  }
}
</style>