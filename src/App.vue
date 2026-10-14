<script setup>
const links = [
  { to: '/v-if', label: 'v-if' },
  { to: '/v-show', label: 'v-show' },
  { to: '/v-for', label: 'v-for' },
  { to: '/key', label: ':key' }
]
</script>

<template>
  <nav class="nav" aria-label="Principal">
    <router-link v-for="link in links" :key="link.to" :to="link.to">
      {{ link.label }}
    </router-link>
  </nav>

  <main class="page">
    <router-view />
  </main>
</template>
