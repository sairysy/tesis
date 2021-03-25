<template>
    <v-container>
    <v-row class="text-center">      
      <v-col class="mb-4">
        <h2 class="display-2 font-weight-bold mb-3">
         Clientes
        </h2>       
      </v-col>        
    </v-row>
    <v-row>
    <v-col class="mb-1">
        <!--crear componente boton-->
       <v-btn :to="{name:'crearCliente'}" class="mx-2" fab dark color="indigo">
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
            <th class="text-center">Cedula</th>
            <th class="text-center">Nombres</th>
            <th class="text-center">Apellidos</th>
            
            <th class="text-center">Telefono</th>
            <th class="text-center">Direccion</th>
           
            <th class="text-center">Correo</th>
            <th class="text-center">Acciones</th>
            
            </tr>
        </thead>
        <tbody>
            <!--traer los datos de la base-->
            <tr v-for="cliente in clientes" :key="cliente.id">
                <td>{{cliente.id}}</td>
                <td>{{cliente.dni}}</td>
                <td>{{cliente.nombres}}</td>
                <td>{{cliente.apellidos}}</td>
                <td>{{cliente.telefono}}</td>
                <td>{{cliente.direccion}}</td>
                <td>{{cliente.email}}</td>
                
                <td>
                    <!--botones dentro de la tabla-->
                    <v-btn :to="{name:'editarCliente', params:{id:cliente.id}}" fab small color="primary"><v-icon>mdi-pencil</v-icon></v-btn>
                    <v-btn @click.stop="dialog=true" @click="id=cliente.id" fab small color="error"><v-icon>mdi-delete</v-icon></v-btn>
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
    name:'listarCliente',
    // lo que quiero que se cargue apenas se carga el navegador
    mounted(){
        this.obtenerCliente();
    },
    data(){
        return{            
            dialog:false,
            clientes:null,
            id:null,
            snackbar:false,
            textsnack:'¡Registro Eliminado!'
        }
    },
    methods:{
        obtenerCliente(){
            axios.get('http://localhost/apirest/clientes')
            .then(r => {
                this.clientes = r.data;
                console.log(this.clientes);
            })
            .catch(function(error){
                console.log(error);
            })
        },
        confirmarBorrado(id){            
            axios.delete('http://localhost/apirest/clientes?id='+id)
            .then(()=>{
                    this.obtenerCliente();
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