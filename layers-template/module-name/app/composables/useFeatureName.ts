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
