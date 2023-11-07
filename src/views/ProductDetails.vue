<script lang="ts" setup>
import { useRoute } from 'vue-router';
import useApi from '@/composables/use/api.ts';
import type { Product } from '@/models/products.model.ts';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref } from 'vue';

const route = useRoute();
const id = parseInt(<string>route.params.id);
const { data: productDetails } = useApi<Product>(
  `http://localhost:3000/products/${id}`
);

const wishlist = ref<number[]>([]);
const adding = ref<boolean>(false);
const removing = ref<boolean>(false);
const addToWishlist = (id: number) => {
  adding.value = true;

  wishlist.value.push(id);
  setTimeout(() => (adding.value = false), 500);
};

const removeFromWishlist = (id: number) => {
  const index = wishlist.value.indexOf(id);
  if (index !== -1) {
    removing.value = true;

    wishlist.value.splice(index, 1);
  }
  setTimeout(() => (removing.value = false), 500);
};

const updateWishlist = (event: Event, id: number) => {
  event.stopPropagation();
  wishlist.value.includes(id) ? removeFromWishlist(id) : addToWishlist(id);
};
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

    <ul class="product-details__specifications-list">
      <li
        v-for="(value, key, index) in productDetails.specifications"
        :key="index"
        class="product-details__specifications-item"
      >
        <div class="product-details__specifications-value">
          {{ value }}
        </div>
        <div class="product-details__specifications-key">
          {{ key }}
        </div>
      </li>
    </ul>

    <div class="product-details__button-container">
      <button
        class="product-details__button"
        @click="updateWishlist($event, productDetails.id)"
      >
        <span v-if="adding">Adding...</span>
        <span v-else-if="removing">Removing...</span>
        <span v-else>
          <font-awesome-icon
            :icon="[
              'fas',
              wishlist.includes(productDetails.id) ? 'xmark' : 'plus'
            ]"
            class="product-details__button-icon"
          />
          <span class="product-details__button-label"
            >{{ productDetails.category }} list</span
          >
        </span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-details {
  align-items: center;
  background-color: $c-black;
  color: $c-white;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20rem;
  width: 100%;

  &__page-title {
    font-family: 'Darker Grotesque', serif;
    font-size: 5rem;
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
    color: $c-pink;
  }

  &__copy {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 400;
    margin: 2rem;
  }

  &__specifications-list {
    @include list-reset;

    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 3rem 2rem;
  }

  &__specifications-item {
    margin: 1rem;
  }

  &__specifications-value {
    background: -webkit-linear-gradient(#eee, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 6rem;
  }

  &__specifications-key {
    font-size: 2rem;
    text-transform: uppercase;
  }

  &__button-container {
    margin: 6rem 2rem;
  }

  &__button {
    align-items: center;
    appearance: none;
    background-color: $c-pink;
    border-radius: 7rem;
    border: 0.2rem solid transparent;
    box-shadow: none;
    box-sizing: border-box;
    color: $c-white;
    cursor: pointer;
    display: inline-flex;
    font-family: 'Darker Grotesque', serif;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    height: 5.5rem;
    justify-content: center;
    margin: 0;
    min-width: 15rem;
    outline: 0;
    padding: 1.4rem 3.4rem 1.6rem;
    position: unset;
    text-decoration: none;
    text-transform: uppercase;
    transition:
      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    user-select: none;
    vertical-align: middle;

    &:hover {
      border: 0.2rem solid $c-pink;
      color: $c-pink;
      background-color: $c-black;
    }
  }

  &__button-icon {
    transform: translateY(0.1rem);
  }

  &__button-label {
    margin-left: 0.5rem;
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

    &__copy,
    &__image {
      width: 65rem;
    }
  }

  @include screen($screen-specific) {
    &__page-title {
      font-size: 8rem;
      margin: 0 0 2rem 0;
    }
  }

  @include screen($screen-normal) {
    &__page-title {
      font-size: 8rem;
      margin: 0 0 2rem 0;
    }
  }
}
</style>
