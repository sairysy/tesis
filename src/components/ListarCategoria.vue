<template>
    <v-container>
    <v-row class="text-center">      
      <v-col class="mb-4">
        <h2 class="display-2 font-weight-bold mb-3">
         Categorias
        </h2>       
      </v-col>        
    </v-row>
    <v-row>
    <v-col class="mb-1">
        <!--crear componente boton-->
       <v-btn :to="{name:'crearCategoria'}" class="mx-2" fab dark color="indigo">
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
            <th class="text-center">Nombre</th>
            <th class="text-center">Descripcion</th>
           
            
            </tr>
        </thead>
        <tbody>
            <!--traer los datos de la base-->
            <tr v-for="categoria in categorias" :key="categoria.id">
                <td>{{categoria.id}}</td>
                <td>{{categoria.nombre}}</td>
                <td>{{categoria.descripcion}}</td>
              
                <td>  
                    <!--botones dentro de la tabla-->
                    <v-btn :to="{name:'editarCategoria', params:{id:categoria.id}}" fab small color="primary"><v-icon>mdi-pencil</v-icon></v-btn>
                    <v-btn @click.stop="dialog=true" @click="id=categoria.id" fab small color="error"><v-icon>mdi-delete</v-icon></v-btn>
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
    name:'listarCategoria',
    // lo que quiero que se cargue apenas se carga el navegador
    mounted(){
        this.obtenerCategoria();
    },
    data(){
        return{            
            dialog:false,
            categorias:null,
            id:null,
            snackbar:false,
            textsnack:'¡Registro Eliminado!'
        }
    },
    methods:{
        obtenerCategoria(){
            axios.get('http://localhost/apirest/categorias')
            .then(r => {
                this.categorias = r.data;
                console.log(this.categorias);
            })
            .catch(function(error){
                console.log(error);
            })
        },
        confirmarBorrado(id){            
            axios.delete('http://localhost/apirest/categorias?id='+id)
            .then(()=>{
                    this.obtenerCategoria();
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