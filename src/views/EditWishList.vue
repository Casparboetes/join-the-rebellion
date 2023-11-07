<script lang="ts" setup>
import useApi from '@/composables/use/api.ts';
import { ref, UnwrapRef, watch } from 'vue';
import { useRoute } from 'vue-router';
import { WishListInterface } from '@/models/wish-lists.model.ts';
import ProductList from '@/components/ProductList.vue';
import type { Products } from '@/models/products.model.ts';
import useAsyncApi from '@/composables/use/asyncApi.ts';

const route = useRoute();

const { data } = useApi<WishListInterface>(
  `http://localhost:3000/wishlists/${route.params.id}`
);
const products = ref<Products | null>(null);

watch(data, async (newData) => {
  if (newData?.products.length) {
    await fetchData(newData.products);
  }
});

const fetchData = async (
  productIds: UnwrapRef<WishListInterface['products']>
) => {
  const queryParams: string[] = productIds.map((num) => `id=${num}`);
  const queryString: string = queryParams.join('&');
  const finalQueryString = `?${queryString}`;

  const { data } = await useAsyncApi<Products>(
    'GET',
    `http://localhost:3000/products${finalQueryString}`
  );
  products.value = data.value;
};
</script>

<template>
  <ProductList v-if="products" :products="products" />
</template>

<style lang="scss" scoped></style>