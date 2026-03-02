// Rename to match your feature, e.g. useProducts.ts, useOrders.ts
// Follow the pattern: use[FeatureName].ts

export function useFeatureName() {
  const data = ref(null)
  const loading = ref(false)

  async function fetchData() {
    loading.value = true
    try {
      // ...
    }
    finally {
      loading.value = false
    }
  }

  return {
    data,
    loading,
    fetchData,
  }
}
