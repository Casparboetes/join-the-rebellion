import { ref } from 'vue';

export default function useApi<T>(url: string) {
  const data = ref<T | null>(null);
  const error = ref<Error | null>(null);
  const loading = ref<boolean>(true);

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((jsonData) => {
      data.value = jsonData;
      loading.value = false;
    })
    .catch((err) => {
      error.value = err;
      loading.value = false;
    });

  return { data, error, loading };
}
