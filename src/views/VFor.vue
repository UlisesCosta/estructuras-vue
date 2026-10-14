<script setup>
import { ref } from 'vue'
import CodeBlock from '../components/CodeBlock.vue'

const frutas = ref(['Mango', 'Papaya', 'Plátano'])
const nueva = ref('')

function agregar() {
  const valor = nueva.value.trim()
  if (!valor || frutas.value.includes(valor)) return
  frutas.value.push(valor)
  nueva.value = ''
}

function quitar(indice) {
  frutas.value.splice(indice, 1)
}

const codigo = `<ul>
  <li v-for="(fruta, indice) in frutas" :key="fruta">
    {{ indice + 1 }}. {{ fruta }}
  </li>
</ul>`
</script>

<template>
  <h1>v-for</h1>
  <p>
    Repite un elemento por cada ítem de un arreglo, objeto o rango. La sintaxis
    es <code>item in lista</code>, y opcionalmente se puede obtener el índice
    con <code>(item, indice) in lista</code>.
  </p>

  <h2>Ejemplo</h2>
  <CodeBlock :code="codigo" />

  <h2>Resultado</h2>
  <div class="controls">
    <input v-model="nueva" placeholder="Nueva fruta" @keyup.enter="agregar" />
    <button @click="agregar">Agregar</button>
  </div>

  <ul class="list">
    <li v-for="(fruta, indice) in frutas" :key="fruta">
      <span>{{ indice + 1 }}. {{ fruta }}</span>
      <button @click="quitar(indice)">Quitar</button>
    </li>
  </ul>
  <p v-if="frutas.length === 0" class="muted">La lista está vacía.</p>
</template>
