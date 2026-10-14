<script setup>
import { ref } from 'vue'
import CodeBlock from '../components/CodeBlock.vue'

const visible = ref(true)

const codigo = `<button @click="visible = !visible">Alternar</button>
<p v-show="visible">Este texto se oculta con CSS.</p>`
</script>

<template>
  <h1>v-show</h1>
  <p>
    Muestra u oculta un elemento cambiando su estilo
    <code>display</code>. A diferencia de <code>v-if</code>, el elemento
    siempre permanece en el DOM, por lo que conviene usarlo cuando se alterna
    la visibilidad con mucha frecuencia. No admite <code>v-else</code>.
  </p>

  <h2>Ejemplo</h2>
  <CodeBlock :code="codigo" />

  <h2>Resultado</h2>
  <div class="controls">
    <button @click="visible = !visible">
      {{ visible ? 'Ocultar' : 'Mostrar' }}
    </button>
  </div>

  <p v-show="visible">Este texto se oculta con CSS.</p>
  <p class="muted">
    Inspecciona el elemento: al ocultarse sigue en el DOM con
    <code>display: none</code>.
  </p>
</template>
