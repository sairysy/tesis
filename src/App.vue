<template>
      <v-app>
      <v-navigation-drawer 
       v-model="drawer"
        absolute
        temporary
        app clipped>
        <v-list>
          <v-list-item :to="{path: '/proveedores'}">
            <v-list-item-action>
              <v-img src="./assets/proveedor.png" width="25" alt=""  /> 
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Proveedores</v-list-item-title>
            </v-list-item-content>
          </v-list-item>   

          <v-list-item :to="{path: '/categorias'}">
            <v-list-item-action>
              <v-img src="./assets/categoria.png" width="25" alt=""  /> 
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Categorias</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

           <v-list-item :to="{path: '/productos'}">
            <v-list-item-action>
            <v-img src="./assets/producto.png" width="25" alt=""  /> 
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Productos</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          

          <v-list-item :to="{path: '/pedidos'}">
            <v-list-item-action>
              <v-img src="./assets/pedido.png" width="25" alt=""  /> 
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Pedidos</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="{path: '/clientes'}">
            <v-list-item-action>
              <v-img src="./assets/cliente.png" width="25" alt=""  /> 
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Cliente</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          
          <v-list-item :to="{path: '/usuarios'}">
            <v-list-item-action>
              <v-img src="./assets/user.png" width="25" alt=""  />  
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Usuario</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

         
          <v-list-item :to="{path: '/ventas'}">
            <v-list-item-action>
              <v-img src="./assets/ventas.png" width="25" alt=""  /> 
             
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Ventas</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="{path: '/producto'}">
            <v-list-item-action>
              <v-img src="./assets/salida.png" width="25" alt=""  /> 
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Salidas</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list>
      </v-navigation-drawer>
      <!--parte izquierda-->
      <v-card class="mx-auto overflow-hidden" height="100%" width="100%">
       <v-system-bar color="deep-purple darken-3"></v-system-bar>      
      <v-app-bar class="deep-purple accent-4 white--text" 
      dark>

      <v-app-bar-nav-icon @click="drawer=true" class="white--text"></v-app-bar-nav-icon>
        <v-toolbar-title>                
        <v-list-item :to="{path: '/'}">                
         <v-img src="./assets/logos.png" width="250" alt=""
         
        />
    
        
        </v-list-item>  
        </v-toolbar-title>

        <!--parte derecha-->
        <v-spacer></v-spacer>
        <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      </v-app-bar>  
      <!--hasta aqui el bar-->
      <v-main>
        <v-container fluid>
          <v-fade-transition mode="out-in">
            <router-view></router-view>
          </v-fade-transition>
        </v-container>
        
      </v-main>  
      </v-card>    
    </v-app>
</template>
<script>

export default {
  
  name: 'App',
  data: () => ({    
    drawer: false,
    icons: [],
  }),
};
</script>