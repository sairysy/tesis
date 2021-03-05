<template>
    <v-container>
    <v-row class="text-center">      
      <v-col class="mb-4">
        <h2 class="display-2 font-weight-bold mb-3">
         Proveedores
        </h2>       
      </v-col>        
    </v-row>
    <v-row>
    <v-col class="mb-1">
        <!--crear componente boton-->
       <v-btn :to="{name:'crearProveedor'}" class="mx-2" fab dark color="indigo">
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
            <th class="text-center">ID</th>
            <th class="text-center">Nombre</th>
            <th class="text-center">Direccion</th>
            <th class="text-center">Telefono</th>
            
            </tr>
        </thead>
        <tbody>
            <!--traer los datos de la base-->
            <tr v-for="proveedor in proveedores" :key="proveedor.id">
                <td>{{proveedor.id}}</td>
                <td>{{proveedor.nombre}}</td>
                <td>{{proveedor.direccion}}</td>
                <td>{{proveedor.telefono}}</td>
                <td>  
                    <!--botones dentro de la tabla-->
                    <v-btn :to="{name:'editarProveedor', params:{id:proveedor.id}}" fab small color="primary"><v-icon>mdi-pencil</v-icon></v-btn>
                    <v-btn @click.stop="dialog=true" @click="id=proveedor.id" fab small color="error"><v-icon>mdi-delete</v-icon></v-btn>
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
    name:'listarProveedor',
    // lo que quiero que se cargue apenas se carga el navegador
    mounted(){
        this.obtenerProveedor();
    },
    data(){
        return{            
            dialog:false,
            proveedores:null,
            id:null,
            snackbar:false,
            textsnack:'¡Registro Eliminado!'
        }
    },
    methods:{
        obtenerProveedor(){
            axios.get('http://localhost/apirest/proveedores')
            .then(r => {
                this.proveedores = r.data;
                console.log(this.proveedores);
            })
            .catch(function(error){
                console.log(error);
            })
        },
        confirmarBorrado(id){            
            axios.delete('http://localhost/apirest/proveedores?id='+id)
            .then(()=>{
                    this.obtenerProveedor();
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