<script lang="ts" setup>
import "~/assets/style.css";
</script>

<template>
  <div class="poppins-regular min-h-screen">
    <!-- <NavHorizontal />
    <div class="h-24"></div> -->
    <slot />
  </div>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
