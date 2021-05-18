<template>
    <v-container>
     <v-row class="text-center">    
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Registro de usuarios</h1>       
      </v-col>     
    </v-row>
    <v-row>
    <v-col>
        <form v-on:submit.prevent="guardarUsuario()">
        
        <v-text-field v-model="usuario.dni"
                label="Cédula"
                outlined
                required   
        ></v-text-field>

        <v-text-field v-model="usuario.nombres"
                label="Nombres"
                outlined
                required   
        ></v-text-field>

        <v-text-field v-model="usuario.apellidos"
                label="Apellidos"
                outlined
                required   
        ></v-text-field>

        <v-text-field v-model="usuario.direccion"
                label="Dirección"
                outlined
                required   
        ></v-text-field>
        <v-text-field v-model="usuario.telefono"
                label="Teléfono"
                outlined
                required   
        ></v-text-field>

        <v-text-field v-model="usuario.correo"
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
    name:'crearUsuario',
    data(){
        return{
            usuario:{
                dni:'',
                nombres:'',
                apellidos:'',
                direccion:'',
                telefono:'',
                correo:''
            }
        };
    },
    methods:{
        guardarUsuario(){
            var router = this.$router;
           const formData = new FormData();

           formData.append('dni',this.usuario.dni);
           formData.append('nombres',this.usuario.nombres);
           formData.append('apellidos',this.usuario.apellidos);
           formData.append('direccion',this.usuario.direccion);
           formData.append('telefono',this.usuario.telefono);
           formData.append('correo',this.usuario.correo);
           axios.post('http://localhost/apirest/usuarios',formData)
           .then(()=>{
               router.push('/usuarios');
                toastr.success('Usuario insertado correctamente');
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