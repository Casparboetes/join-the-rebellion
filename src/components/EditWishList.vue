<script lang="ts" setup>
import useApi from '@/composables/use/api.ts';
import { ref, UnwrapRef, watch } from 'vue';
import { useRoute } from 'vue-router';
import { WishListInterface } from '@/models/wish-lists.model.ts';
import ProductList from '@/components/ProductList.vue';

const route = useRoute();

const id = parseInt(<string>route.params.id);
const { data } = useApi<WishListInterface>(
  `http://localhost:3000/wishlists/${id}`
);
const products = ref<any>(null);

watch(data, async (newData) => {
  if (newData) {
    await fetchData(newData.products);
  }
});

const fetchData = async (
  productIds: UnwrapRef<WishListInterface['products']>
) => {
  const queryParams: string[] = productIds.map((num) => `id=${num}`);
  const queryString: string = queryParams.join('&');
  const finalQueryString: string = `?${queryString}`;

  try {
    const response = await fetch(
      `http://localhost:3000/products${finalQueryString}`
    );
    products.value = await response.json();
    // isLoading.value = false;
  } catch (error) {
    console.error('Error fetching data:', error);
    // isLoading.value = false;
  }
};
</script>

<template>
  <h2>My Wishlist</h2>

  <ProductList :products="products" />
</template>

<style lang="scss" scoped></style>