<script setup>
import { ref } from 'vue'
import CodeBlock from '../components/CodeBlock.vue'

const items = ref([
  { id: 1, nombre: 'Uno' },
  { id: 2, nombre: 'Dos' },
  { id: 3, nombre: 'Tres' }
])

function invertir() {
  items.value = [...items.value].reverse()
}

const codigo = `<li v-for="item in items" :key="item.id">
  {{ item.nombre }}
  <input placeholder="Escribe algo" />
</li>`
</script>

<template>
  <h1>La importancia de v-bind:key</h1>
  <p>
    La directiva <code>:key</code>, que es la abreviación de <code>v-bind:key</code>, permite identificar de manera única los elementos generados mediante <code>v-for</code>. Esto ayuda a Vue a reconocer qué elementos deben conservarse o cambiar de posición cuando se modifica una lista, evitando que se reutilicen incorrectamente según su ubicación.
  </p>

  <h2>Demostracion</h2>
  <CodeBlock :code="codigo" />

  <h2>Resultado</h2>
  <p>
    Escribe algo en cada campo y pulsa Invertir. Con el índice como clave el
    texto se queda en su posición; con un id único viaja con su elemento.
  </p>
  <div class="controls">
    <button @click="invertir">Invertir orden</button>
  </div>

  <div class="columns">
    <div>
      <h3>Usando el índice como clave :key="indice"</h3>
      <ul class="list">
        <li v-for="(item, indice) in items" :key="indice">
          <span>{{ item.nombre }}</span>
          <input placeholder="Escribe algo" />
        </li>
      </ul>
    </div>
    <div>
      <h3>Usando el identificador único :key="item.id"</h3>
      <ul class="list">
        <li v-for="item in items" :key="item.id">
          <span>{{ item.nombre }}</span>
          <input placeholder="Escribe algo" />
        </li>
      </ul>
    </div>
  </div>
</template>
