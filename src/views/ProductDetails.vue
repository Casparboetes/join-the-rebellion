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
  <div v-if="productDetails" class="product-details">
    <h1 class="product-details__page-title">{{ productDetails.brand }}</h1>
    <img
      :alt="productDetails.name"
      :src="productDetails.image"
      class="product-details__image"
    />
    <h1 class="product-details__name">
      <span class="product-details__highlight">{{ productDetails.name }}</span>
    </h1>
    <p class="product-details__copy">
      Feugiat scelerisque varius morbi enim nunc. Porta nibh venenatis cras sed
      felis eget velit. Leo integer malesuada nunc vel risus commodo viverra
      maecenas accumsan. Porta lorem mollis aliquam ut porttitor.
    </p>

    {{ productDetails.brand }}
    {{ productDetails.name }}
    {{ productDetails.category }}
    {{ productDetails.image }}
    {{ productDetails.specifications }}
  </div>
</template>

<style lang="scss" scoped>
.product-details {
  align-items: center;
  background-color: $c-black;
  height: 100vh;
  display: flex;
  flex-direction: column;

  &__page-title {
    //font-family: 'Darker Grotesque', serif;
    font-size: 4rem;
    font-weight: 600;
    margin: 2rem 0;
  }

  &__image {
    min-height: 24.6rem;
    height: auto;
    width: calc(90% - 2rem);
  }

  &__name {
    text-align: center;
    font-size: 3rem;
    font-weight: 400;
    margin: 2rem 0;
  }

  &__highlight {
    color: $c-white;
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
}
</style>