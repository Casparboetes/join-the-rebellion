import { ref } from 'vue';

export default async function useAsyncPatchOrPost<T>(
  method: string,
  url: string,
  body: {
    name: string | undefined;
    id: number | undefined;
    products: any[] | undefined;
  }
) {
  const data = ref<T | null>(null);
  const error = ref<Error | null | number>(null);
  const loading = ref<boolean>(true);

  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    if (response.ok) {
      data.value = await response.json();
    } else {
      error.value = response.status;

      console.error('Failed to post the product:', response.status);
    }
  } catch (err) {
    error.value = err as Error;
    loading.value = false;
    console.error('An error occurred while posting the product:', err);
  } finally {
    loading.value = false;
  }

  return { data, error, loading };
}
