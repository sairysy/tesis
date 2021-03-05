import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
// erutador de paginas 
import VueRouter from 'vue-router';

// importar componentes

import listarProducto from './components/ListarProducto';
import crearProducto from './components/CrearProducto';
import editarProducto from './components/EditarProducto';

import listarProveedor from './components/ListarProveedor';
import crearProveedor from './components/CrearProveedor';
import editarProveedor from './components/EditarProveedor';

import './registerServiceWorker'
// creacion de componentes

Vue.component('listarProducto', listarProducto );
Vue.component('crearProducto', crearProducto );
Vue.component('editarProducto', editarProducto );

Vue.component('listarProveedor', listarProveedor );
Vue.component('crearProveedor', crearProveedor );
Vue.component('editarProveedor', editarProveedor);

// uso de vue-router
Vue.use(VueRouter);
// deninir las rutas
const routes = [
  
  {path:'/productos',component:listarProducto},
  {path:'/crear', component:crearProducto, name:'crearProducto'},
  {path:'/editar/:id', component:editarProducto, name:'editarProducto'},

  //{path:'/', component:inicio},
 // {path:'/inicio', component:inicio},
  {path:'/proveedores',component:listarProveedor},
  {path:'/crear', component:crearProveedor, name:'crearProveedor'},
  {path:'/editar/:id', component:editarProveedor, name:'editarProveedor'}

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
