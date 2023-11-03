<script lang="ts" setup>
import type { Products } from '@/models/products.model.ts';
import { ref } from 'vue';
import router from '@/router';

defineProps<{
  products: Products | null;
}>();

const wishlist = ref<number[]>([]);

const addToWishlist = (id: number) => {
  wishlist.value.push(id);
};

const removeFromWishlist = (id: number) => {
  const index = wishlist.value.indexOf(id);
  if (index !== -1) {
    wishlist.value.splice(index, 1);
  }
};

const goToDetailPage = (id: number) => router.push(`/product-details/${id}`);
const updateWishlist = (event: Event, id: number) => {
  event.stopPropagation();
  wishlist.value.includes(id) ? removeFromWishlist(id) : addToWishlist(id);
};
</script>

<template>
  <div class="products">
    <div
      v-for="product in products"
      :key="product.id"
      class="products__item"
      @click="goToDetailPage(product.id)"
    >
      <div class="products__item-container">
        <button
          class="products__item-button products__item-button--heart"
          @click="updateWishlist($event, product.id)"
        >
          <font-awesome-icon
            :class="{
              fas: wishlist.includes(product.id),
              far: !wishlist.includes(product.id)
            }"
            :icon="[wishlist.includes(product.id) ? 'fas' : 'far', 'heart']"
            class="products__item-icon"
            size="3x"
          />
        </button>
      </div>

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
    cursor: pointer;

    &-container {
      display: flex;
      justify-content: center;
      text-align: center;
      height: 3.5rem;
      width: 3.5rem;
      background-color: $c-white;
      border-radius: 50%;
      position: absolute;
      transform: translateX(calc(10%)) translateY(calc(10%));
    }

    &-button {
      all: unset;
      cursor: pointer;
      caret-color: $c-pink;
      margin: 0;
      transform: translateY(0.2rem);

      &--heart {
        transition: transform 0.1s ease-in-out;

        &:hover {
          color: $c-pink;
        }

        &:focus-visible {
          outline: -webkit-focus-ring-color auto 1px;
        }
      }
    }

    &-icon {
      color: $c-pink--dark;

      transition: color 0.3s ease;

      &.fas {
        color: $c-pink;
        animation: bounce 0.3s ease;
      }

      @keyframes bounce {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(1);
        }
      }
    }

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