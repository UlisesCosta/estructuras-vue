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
  <h1>v-bind:key</h1>
  <p>
    La directiva <code>:key</code> (forma corta de <code>v-bind:key</code>)
    da a cada elemento de un <code>v-for</code> una identidad única. Gracias a
    ella, Vue reutiliza y reordena los elementos correctos cuando la lista
    cambia, en lugar de reciclar el DOM por posición.
  </p>

  <h2>Ejemplo</h2>
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
      <h3>Con :key="indice"</h3>
      <ul class="list">
        <li v-for="(item, indice) in items" :key="indice">
          <span>{{ item.nombre }}</span>
          <input placeholder="Escribe algo" />
        </li>
      </ul>
    </div>
    <div>
      <h3>Con :key="item.id"</h3>
      <ul class="list">
        <li v-for="item in items" :key="item.id">
          <span>{{ item.nombre }}</span>
          <input placeholder="Escribe algo" />
        </li>
      </ul>
    </div>
  </div>
</template>
