<script setup lang="ts">
</script>

<template>
  <div>
    <section class="py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <UContainer class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
          Welcome to My App
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          A modern web application built with Nuxt and UI. Clean, fast, and beautiful.
        </p>
        <div class="flex gap-4 justify-center">
          <UButton size="lg" to="/about">Learn More</UButton>
          <UButton size="lg" variant="outline">Get Started</UButton>
        </div>
      </UContainer>
    </section>

    <section class="py-16">
      <UContainer>
        <h2 class="text-3xl font-bold text-center mb-12">Features</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <UIcon name="i-lucide-rocket" class="w-6 h-6 text-primary" />
                <h3 class="text-lg font-semibold">Fast Performance</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-300">
              Built with Nuxt for optimal performance and server-side rendering.
            </p>
          </UCard>
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <UIcon name="i-lucide-palette" class="w-6 h-6 text-primary" />
                <h3 class="text-lg font-semibold">Beautiful Design</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-300">
              Modern UI components built with Tailwind CSS and Nuxt UI.
            </p>
          </UCard>
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <UIcon name="i-lucide-code" class="w-6 h-6 text-primary" />
                <h3 class="text-lg font-semibold">Developer Friendly</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-300">
              Clean codebase with TypeScript and best practices.
            </p>
          </UCard>
        </div>
      </UContainer>
    </section>

    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <UContainer class="text-center">
        <h2 class="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-8">
          Join us and build amazing web applications.
        </p>
        <UButton size="lg">Start Now</UButton>
      </UContainer>
    </section>
  </div>
</template>