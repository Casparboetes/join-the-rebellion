<script lang="ts" setup>
import type { MappedProduct, Products } from '@/models/products.model.ts';
import type { WishLists } from '@/models/wish-lists.model.ts';
import router from '@/router';
import { onMounted, PropType, ref } from 'vue';

const props = defineProps({
  products: { type: Object as PropType<Products | null>, required: true },
  list: { type: Object as PropType<WishLists | null> }
});

const wishlist = ref<MappedProduct[]>([]);

const viewProductDetails = (id: number) =>
  router.push(`/product-details/${id}`);

const addToWishlist = (id: number) => {
  const name = 'testing things';
  const groupId = 2;
  const newItem: MappedProduct = { id, name, groupId };
  wishlist.value.push(newItem);
};

const removeFromWishlist = (id: number) => {
  const index = wishlist.value.findIndex((product) => product.id === id);
  if (index !== -1) {
    wishlist.value.splice(index, 1);
  }
};

const isFavourite = (productId: number) => {
  if (!wishlist.value.length) return;
  return wishlist.value.some((item) => item.id === productId);
};

const updateWishlist = (event: Event, id: number) => {
  event.stopPropagation();

  isFavourite(id) ? removeFromWishlist(id) : addToWishlist(id);
};

onMounted(() => {
  if (props.list) {
    wishlist.value = props?.list.flatMap((item) =>
      item.products.map((productId) => ({
        id: productId,
        name: item.name,
        groupId: item.id
      }))
    );
  }
});
</script>

<template>
  <div class="products">
    <div
      v-for="product in props.products"
      :key="product.id"
      class="products__item"
      @click="viewProductDetails(product.id)"
    >
      <div class="products__item-container">
        <button
          class="products__item-button products__item-button--heart"
          @click="updateWishlist($event, product.id)"
        >
          <font-awesome-icon
            :class="{
              fas: isFavourite(product.id),
              far: !isFavourite(product.id)
            }"
            :icon="[isFavourite(product.id) ? 'fas' : 'far', 'heart']"
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
  gap: 4rem;

  &__item {
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
    cursor: pointer;
    padding: 2rem;
    width: calc(90% - 2rem);

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
      background-color: $c-grey;
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

  @include screen($screen-simple) {
    &__item {
      width: calc(45% - 4rem);
    }
  }

  @include screen($screen-normal) {
    &__item {
      width: calc(35% - 4rem);
    }
  }

  @include screen($screen-xl) {
    &__item {
      width: calc(29% - 5rem);
    }
  }
}
</style>