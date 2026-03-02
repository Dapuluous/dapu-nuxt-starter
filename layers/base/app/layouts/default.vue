<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="border-b border-gray-200 dark:border-gray-800">
      <UContainer class="flex items-center justify-between h-16">
        <div class="font-bold text-xl">My App</div>
        <nav class="flex gap-4">
          <UButton variant="ghost" to="/">Home</UButton>
          <UButton variant="ghost" to="/about">About</UButton>
        </nav>
      </UContainer>
    </header>

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-200 dark:border-gray-800 py-6">
      <UContainer class="text-center text-gray-500 text-sm">
        © {{ new Date().getFullYear() }} My App. All rights reserved.
      </UContainer>
    </footer>
  </div>
</template>
