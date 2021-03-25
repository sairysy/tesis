<template>
  <v-container>
    <v-row class="text-center">    
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Datos del cliente</h1>       
      </v-col>     
    </v-row>
    <v-row>
        <v-col>         
            <form v-on:submit.prevent="guardarCliente()">
            <v-text-field
                v-model="cliente.dni"        
                label="Cedula"        
                outlined
                required       
            ></v-text-field>
            <v-text-field
                v-model="cliente.nombres"        
                label="Nombres"
               
                outlined
                required        
            ></v-text-field>
            <v-text-field
                v-model="cliente.apellidos"        
                label="Apellidos"
                
                outlined
                required        
            ></v-text-field>

            <v-text-field
                v-model="cliente.telefono"        
                label="Telefono"
                
                outlined
                required        
            ></v-text-field>
            <v-text-field
                v-model="cliente.direccion"        
                label="Direccion"
                
                outlined
                required        
            ></v-text-field>
             <v-text-field
                v-model="cliente.email"        
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
    name:'editarCliente',
    mounted(){
      this.id = this.$route.params.id;
      console.log(this.$route);
      axios.get('http://localhost/apirest/clientes?id='+this.id)
      .then(r =>{
        this.cliente = r.data;
      })
      .catch(function(error){
        console.log(error);
      });
    },
    data(){
      return{
        id:null,
        cliente:{
            dni:'',
          nombres:'',
          apellidos:'',
          telefono:'',
          direccion:'',
          email:''
        }
      }
    },
    methods:{
      guardarCliente(){
         var router =  this.$router;
        axios.put('http://localhost/apirest/clientes?id='+this.id+'&dni='+this.cliente.dni+'&nombres='+this.cliente.nombres+'&apellidos='+this.cliente.apellidos+'&telefono='+this.cliente.telefono+'&direccion='+this.cliente.direccion+'&email='+this.cliente.email)
        .then(function(){
           router.push('/clientes'); 
            toastr.success('Cliente modificado')
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