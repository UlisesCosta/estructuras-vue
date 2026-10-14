<script setup>
import { ref } from 'vue'
import CodeBlock from '../components/CodeBlock.vue'

const estado = ref('cargando')
const estados = ['cargando', 'exito', 'error']

const codigo = `<p v-if="estado === 'cargando'">Cargando datos...</p>
<p v-else-if="estado === 'exito'">Datos cargados correctamente.</p>
<p v-else>Ocurrió un error al cargar.</p>`
</script>

<template>
  <h1>v-if / v-else-if / v-else</h1>
  <p>
    Renderizan un elemento solo si la condición es verdadera. Vue evalúa las
    condiciones en orden y muestra únicamente la primera que se cumple; si
    ninguna lo hace, se usa <code>v-else</code>. Los elementos descartados
    no existen en el DOM.
  </p>

  <h2>Ejemplo</h2>
  <CodeBlock :code="codigo" />

  <h2>Resultado</h2>
  <div class="controls">
    <button
      v-for="e in estados"
      :key="e"
      :class="{ active: estado === e }"
      @click="estado = e"
    >
      {{ e }}
    </button>
  </div>

  <p v-if="estado === 'cargando'">Cargando datos...</p>
  <p v-else-if="estado === 'exito'">Datos cargados correctamente.</p>
  <p v-else>Ocurrió un error al cargar.</p>
</template>
