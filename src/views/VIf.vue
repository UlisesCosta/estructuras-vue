<script setup>
import { ref } from 'vue'
import CodeBlock from '../components/CodeBlock.vue'

const estado = ref('Mayor')
const estados = ['Mayor', 'Menor con Tutor', 'Menor']

const codigo = `<p v-if="estado === 'Mayor'"> Si puede crear cuenta bancaria</p>
<p v-else-if="estado === 'Menor con Tutor'">
  Puede crear una cuenta bancaria siempre y cuando tenga un tutor.
</p>
<p v-else>No puede crear una cuenta bancaria.</p>`
</script>

<template>
  <h1>v-if / v-else-if / v-else</h1>
  <p>
    Renderizan un elemento solo si la condición es verdadera. Vue evalúa las
    condiciones en orden y muestra únicamente la primera que se cumple; si
    ninguna lo hace, se usa <code>v-else</code>. Los elementos descartados
    no existen en el DOM.
  </p>

  <h2>Ejemplo: Edad para crear cuenta bancaria</h2>
  <CodeBlock :code="codigo" />

  <h2></h2>
  <div class="controls">
    <button
      :class="{ active: estado === 'Mayor' }"
      @click="estado = 'Mayor'"
    >Mayor de 18 años</button>
    <button
      :class="{ active: estado === 'Menor con Tutor' }"
      @click="estado = 'Menor con Tutor'"
    >De 15 a 17 años</button>
    <button
      :class="{ active: estado === 'Menor' }"
      @click="estado = 'Menor'"
    >Menor de 15 años</button>
  </div>

  <p v-if="estado === 'Mayor'">Si puede crear una cuenta bancaria</p>
  <p v-else-if="estado === 'Menor con Tutor'">Puede crear una cuenta bancaria siempre y cuando tenga un tutor.</p>
  <p v-else>No puede crear una cuenta bancaria.</p>
</template>
