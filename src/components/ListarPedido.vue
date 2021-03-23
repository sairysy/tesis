<template>
    <v-container>
    <v-row class="text-center">      
      <v-col class="mb-4">
        <h2 class="display-2 font-weight-bold mb-3">
         Entrada de productos
        </h2>       
      </v-col>        
    </v-row>
    <v-row>
    <v-col class="mb-1">
        <!--crear componente boton-->
       <v-btn :to="{name:'crearPedido'}" class="mx-2" fab dark color="indigo">
         <v-icon dark>mdi-plus</v-icon>
       </v-btn>
    </v-col>
    </v-row>
    <!--crear tabla-->
    <v-row class="text-center">
    <v-col cols="12">
        <v-simple-table fixed-header class="elevation-3">
        <template v-slot:default>
            <!--Encabezado-->
        <thead>
            <tr>
            <th class="text-center">Codigo</th>
            <th class="text-center">Producto</th>
            <th class="text-center">Proveedor</th>
            <th class="text-center">Cantidad</th>
            <th class="text-center">Precio unitario</th>
         
            
            </tr>
        </thead>
        <tbody>
            <!--traer los datos de la base-->
            <tr v-for="pedido in pedidos" :key="pedido.id">
                <td>{{pedido.id}}</td>
                <td>{{pedido.idproducto}}</td>
                <td>{{pedido.idproveedor}}</td>
                <td>{{pedido.cantidad}}</td>
                <td>{{pedido.precio}}</td>
                
                <td>  
                    <!--botones dentro de la tabla-->
                    <v-btn :to="{name:'editarPedido', params:{id:pedido.id}}" fab small color="primary"><v-icon>mdi-pencil</v-icon></v-btn>
                    <v-btn @click.stop="dialog=true" @click="id=pedido.id" fab small color="error"><v-icon>mdi-delete</v-icon></v-btn>
                </td>
            </tr>
         </tbody>   
        </template>
        </v-simple-table>
    </v-col>
    </v-row>
    <!-- ventana de diÃ¡logo para eliminar registros -->
    <v-dialog v-model="dialog" max-width="350">
        <v-card>
            <v-card-title class="headline">¿Desea eliminar el registro?</v-card-title>
            <v-card-actions>
            <v-spacer></v-spacer>
                <v-btn @click="dialog = false">Cancelar</v-btn>
                <v-btn @click="confirmarBorrado(id)" color="error">Aceptar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <!-- componente snackbar para mostrar mensaje de eliminaciÃ³n -->
    <v-snackbar v-model="snackbar" color="success"> {{textsnack}}
        <template v-slot:action="{attrs}">
            <v-btn text v-bind="attrs" @click="snackbar = false">Cerrar</v-btn>
        </template>
    </v-snackbar>
    </v-container>
</template>
<script>
import axios from 'axios';
export default {
    name:'listarPedido',
    // lo que quiero que se cargue apenas se carga el navegador
    mounted(){
        this.obtenerPedido();
    },
    data(){
        return{            
            dialog:false,
            pedidos:null,
            id:null,
            snackbar:false,
            textsnack:'¡Registro Eliminado!'
        }
    },
    methods:{
        obtenerPedido(){
            axios.get('http://localhost/apirest/pedidos')
            .then(r => {
                this.pedidos = r.data;
                console.log(this.pedidos);
            })
            .catch(function(error){
                console.log(error);
            })
        },
        confirmarBorrado(id){            
            axios.delete('http://localhost/apirest/pedidos?id='+id)
            .then(()=>{
                    this.obtenerPedido();
                    this.dialog = false;
                    this.snackbar = true
            })
            .catch(function(error){
                console.log(error);
            });    
        }
    }
}
</script>