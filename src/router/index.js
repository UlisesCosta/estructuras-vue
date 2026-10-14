import { createRouter, createWebHashHistory } from 'vue-router'
import VIf from '../views/VIf.vue'
import VShow from '../views/VShow.vue'
import VFor from '../views/VFor.vue'
import VKey from '../views/VKey.vue'

// Hash history: evita errores 404 al recargar una ruta en GitHub Pages
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/v-if' },
    { path: '/v-if', name: 'v-if', component: VIf },
    { path: '/v-show', name: 'v-show', component: VShow },
    { path: '/v-for', name: 'v-for', component: VFor },
    { path: '/key', name: 'key', component: VKey }
  ],
  scrollBehavior: () => ({ top: 0 })
})

export default router
