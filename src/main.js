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

import listarCategoria from './components/ListarCategoria';
import crearCategoria from './components/CrearCategoria';
import editarCategoria from './components/EditarCategoria';

import listarPedido from './components/ListarPedido';
import crearPedido from './components/CrearPedido';
import editarPedido from './components/EditarPedido';

import './registerServiceWorker'
// creacion de componentes

Vue.component('listarProducto', listarProducto );
Vue.component('crearProducto', crearProducto );
Vue.component('editarProducto', editarProducto );

Vue.component('listarProveedor', listarProveedor );
Vue.component('crearProveedor', crearProveedor );
Vue.component('editarProveedor', editarProveedor);

Vue.component('listarCategoria', listarCategoria );
Vue.component('crearCategoria', crearCategoria );
Vue.component('editarCategoria', editarCategoria);

Vue.component('listarPedido', listarPedido );
Vue.component('crearPedido', crearPedido );
Vue.component('editarPedido', editarPedido);
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
  {path:'/editar/:id', component:editarProveedor, name:'editarProveedor'},

  {path:'/categorias',component:listarCategoria},
  {path:'/crear', component:crearCategoria, name:'crearCategoria'},
  {path:'/editar/:id', component:editarCategoria, name:'editarCategoria'},
  
  {path:'/pedidos',component:listarPedido},
  {path:'/crear', component:crearPedido, name:'crearPedido'},
  {path:'/editar/:id', component:editarPedido, name:'editarPedido'}
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
