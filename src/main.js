import Vue from 'vue'
import App from './App.vue'
import DetallesPeliculas from './components/DetallesPeliculas.vue'
import Peliculas from './components/Peliculas.vue'
import VueRouter from 'vue-router'
import Principal from "@/components/Principal";


const routes = [
  {path: '/', name:'home', component: Principal},
  {path: '/peliculas', name:'listadoPeliculas', component: Peliculas},
  {path: '/peliculas/:id', name: 'peliculaDetails', component: DetallesPeliculas, props: true},

]

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
  render: h=>h(App),
  router
}).$mount('#app').$router.push({path: '/'})
