<template>
    <v-container>
     <v-row class="text-center">    
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Registro de clientes</h1>       
      </v-col>     
    </v-row>
    <v-row>
    <v-col>
        <form v-on:submit.prevent="guardarCliente()">
        
        <v-text-field v-model="cliente.dni"
                label="Cedula"
                outlined
                required   
        ></v-text-field>

        <v-text-field v-model="cliente.nombres"
                label="Nombres"
                outlined
                required   
        ></v-text-field>
        <v-text-field v-model="cliente.apellidos"
                label="Nombres"
                outlined
                required   
        ></v-text-field>

        <v-text-field v-model="cliente.telefono"
                label="Telefono"
                outlined
                required   
        ></v-text-field>

        <v-text-field v-model="cliente.direccion"
                label="Direccion"
                outlined
                required   
        ></v-text-field>

        <v-text-field v-model="cliente.email"
                label="Email"
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
    name:'crearCliente',
    data(){
        return{
            cliente:{
                dni:'',
                nombres:'',
                apellidos:'',
                telefono:'',
                direccion:'',
               
                email:''
            }
        };
    },
    methods:{
        guardarCliente(){
            var router = this.$router;
           const formData = new FormData();
           formData.append('dni',this.cliente.dni);
           formData.append('nombres',this.cliente.nombres);
           formData.append('apellidos',this.cliente.apellidos);
           
           formData.append('telefono',this.cliente.telefono);
           formData.append('direccion',this.cliente.direccion);
         
           formData.append('email',this.cliente.email);
           axios.post('http://localhost/apirest/clientes',formData)
           .then(()=>{
               router.push('/clientes');
                toastr.success('cliente insertado correctamente');
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