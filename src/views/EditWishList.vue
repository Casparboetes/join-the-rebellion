<script lang="ts" setup>
import { ref, UnwrapRef, watch } from 'vue';
import { useRoute } from 'vue-router';
import type {
  WishListInterface,
  WishListsModel
} from '@/models/wish-lists.model.ts';
import ProductList from '@/components/ProductList.vue';
import type { Products } from '@/models/products.model.ts';
import useAsyncApi from '@/composables/use/asyncApi.ts';
import useApi from '@/composables/use/api.ts';
import WishListEmpty from '@/components/WishListEmpty.vue';

const route = useRoute();

const { data } = useApi<WishListInterface>(
  `http://localhost:3000/wishlists/${route.params.id}`
);

const products = ref<Products | null>(null);
const list = ref<WishListsModel | null>(null);
const isEmpty = ref(true);

watch(data, async (newData) => {
  if (newData?.products.length) {
    await fetchData(newData.products);
  }
});

const reFetchAll = async () => {
  const { data: reFetchedData } = await useAsyncApi<WishListInterface>(
    'get',
    `http://localhost:3000/wishlists/${route.params.id}`
  );

  if (!reFetchedData?.value?.products.length) {
    isEmpty.value = !isEmpty.value;
  }

  data.value = reFetchedData.value;
};
const fetchData = async (
  productIds?: UnwrapRef<WishListInterface['products']>
) => {
  const queryParams = productIds?.map((num) => `id=${num}`);
  const queryString = queryParams?.join('&');
  const finalQueryString = `?${queryString}`;

  const { data } = await useAsyncApi<Products>(
    'GET',
    `http://localhost:3000/products${finalQueryString}`
  );
  const { data: wishListArray } = await useAsyncApi<WishListsModel>(
    'GET',
    'http://localhost:3000/wishlists'
  );

  list.value = wishListArray.value;
  products.value = data.value;
};
</script>

<template>
  <ProductList
    v-if="products"
    v-show="isEmpty"
    :list="list"
    :products="products"
    @emit-re-fetch="reFetchAll"
  />

  <WishListEmpty v-if="!isEmpty" />
</template>

<style lang="scss" scoped></style>