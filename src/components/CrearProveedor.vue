<template>
    <v-container>
     <v-row class="text-center">    
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Registro de proveedores</h1>       
      </v-col>     
    </v-row>
    <v-row>
    <v-col>
        <form v-on:submit.prevent="guardarProveedor()">
        
        <v-text-field v-model="proveedor.nombre"
                label="Nombre"
                outlined
                required   
        ></v-text-field>

        <v-text-field v-model="proveedor.direccion"
                label="Direccion"
                outlined
                required   
        ></v-text-field>

        <v-text-field v-model="proveedor.telefono"
                label="Telefono"
                outlined
                required   
        ></v-text-field>

         
            <v-card-actions>
                <v-btn color="warning" class="mr-4" type="submit">Guardar</v-btn>      
            </v-card-actions>
        </form>
    </v-col>
    </v-row>

    </v-container>
</template>
<script>
import axios from 'axios';
import toastr from 'toastr';
export default {
    name:'crearProveedor',
    data(){
        return{
            proveedor:{
                
                nombre:'',
                direccion:'',
                telefono:''
            }
        };
    },
    methods:{
        guardarProveedor(){
            var router = this.$router;
           const formData = new FormData();

           formData.append('nombre',this.proveedor.nombre);
           formData.append('direccion',this.proveedor.direccion);
           formData.append('telefono',this.proveedor.telefono);
           axios.post('http://localhost/apirest/proveedores',formData)
           .then(()=>{
               router.push('/proveedores');
                toastr.success('Proveedor insertado correctamente');
           })
           .catch(function(error){
        console.log(error);
            });
        }
    }
}
</script>
<style>


@import url('https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css');

</style>