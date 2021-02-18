import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
// erutador de paginas 
import VueRouter from 'vue-router';

// importar componentes
import inicio from './components/Inicio';
import listarProducto from './components/Listarproducto';
import crearProducto from './components/Crearproducto';
import editarProducto from './components/Editarproducto';
import './registerServiceWorker'
// creacion de componentes
Vue.component('inicio', inicio);
Vue.component('listarProducto ', listarProducto );
Vue.component('crearProducto ', crearProducto );
Vue.component('editarProducto ', editarProducto );
// uso de vue-router
Vue.use(VueRouter);
// deninir las rutas
const routes = [
  {path:'/', component:inicio},
  {path:'/inicio', component:inicio},
  {path:'/productos',component:listarProducto},
  {path:'/crear', component:crearProducto, name:'crearProducto'},
  {path:'/editar/:id', component:editarProducto, name:'editarProducto'}

]
// creacion del objeto router

const router = new VueRouter({
  routes,
  mode: 'history'
})



Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
