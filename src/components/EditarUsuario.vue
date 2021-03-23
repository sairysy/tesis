<template>
  <v-container>
    <v-row class="text-center">    
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Editar usuario</h1>       
      </v-col>     
    </v-row>
    <v-row>
        <v-col>         
            <form v-on:submit.prevent="guardarUsuario()">
            
            <v-text-field
                v-model="usuario.dni"        
                label="DNI"        
                outlined
                required       
            ></v-text-field>

            <v-text-field
                v-model="usuario.nombres"        
                label="Nombre"        
                outlined
                required       
            ></v-text-field>

             <v-text-field
                v-model="usuario.apellidos"        
                label="Apellido"        
                outlined
                required       
            ></v-text-field>

            <v-text-field
                v-model="usuario.direccion"        
                label="Direccion"
               
                outlined
                required        
            ></v-text-field>

            <v-text-field
                v-model="usuario.telefono"        
                label="Telefono"
                
                outlined
                required        
            ></v-text-field>

             <v-text-field
                v-model="usuario.correo"        
                label="Correo"
                
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
    name:'editarUsuario',
    mounted(){
      this.id = this.$route.params.id;
      console.log(this.$route);
      axios.get('http://localhost/apirest/usuarios?id='+this.id)
      .then(r =>{
        this.usuario = r.data;
      })
      .catch(function(error){
        console.log(error);
      });
    },
    data(){
      return{
        id:null,
        usuario:{
          dni:'',
          nombres:'',
          apellidos:'',
          direccion:'',
          telefono:'',
          correo:''
        }
      }
    },
    methods:{
      guardarUsuario(){
         var router =  this.$router;
        axios.put('http://localhost/apirest/usuarios?id='+this.id+'&dni='+this.usuario.dni+'&nombres='+this.usuario.nombres+'&apellidos='+this.usuario.apellidos+'&direccion='+this.usuario.direccion+'&telefono='+this.usuario.telefono+'&correo='+this.usuario.correo)
        .then(function(){
           router.push('/usuarios'); 
            toastr.success('Usuario modificado')
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