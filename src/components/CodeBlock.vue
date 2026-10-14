<script setup>
defineProps({ code: { type: String, required: true } })
</script>

<template>
  <pre class="code"><code>{{ code }}</code></pre>
</template>
