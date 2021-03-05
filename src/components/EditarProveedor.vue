<template>
  <v-container>
    <v-row class="text-center">    
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Editar proveedor</h1>       
      </v-col>     
    </v-row>
    <v-row>
        <v-col>         
            <form v-on:submit.prevent="guardarProveedor()">
            <v-text-field
                v-model="proveedor.nombre"        
                label="Nombre"        
                outlined
                required       
            ></v-text-field>
            <v-text-field
                v-model="proveedor.direccion"        
                label="Direccion"
               
                outlined
                required        
            ></v-text-field>
            <v-text-field
                v-model="proveedor.telefono"        
                label="Tlefono"
                
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
    name:'editarProveedor',
    mounted(){
      this.id = this.$route.params.id;
      console.log(this.$route);
      axios.get('http://localhost/apirest/proveedores?id='+this.id)
      .then(r =>{
        this.proveedor = r.data;
      })
      .catch(function(error){
        console.log(error);
      });
    },
    data(){
      return{
        id:null,
        proveedor:{
          nombre:'',
          direccion:'',
          telefono:''
        }
      }
    },
    methods:{
      guardarProveedor(){
         var router =  this.$router;
        axios.put('http://localhost/apirest/proveedores?id='+this.id+'&nombre='+this.proveedor.nombre+'&direccion='+this.proveedor.direccion+'&telefono='+this.proveedor.telefono)
        .then(function(){
           router.push('/proveedores'); 
            toastr.success('Proveedor modificado')
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