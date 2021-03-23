<template>
  <v-container>
    <v-row class="text-center">    
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Editar categoria</h1>       
      </v-col>     
    </v-row>
    <v-row>
        <v-col>         
            <form v-on:submit.prevent="guardarCategoria()">
            <v-text-field
                v-model="categoria.nombre"        
                label="Nombre"        
                outlined
                required       
            ></v-text-field>
            <v-text-field
                v-model="categoria.descripcion"        
                label="Descripcion"
               
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
    name:'editarCategoria',
    mounted(){
      this.id = this.$route.params.id;
      console.log(this.$route);
      axios.get('http://localhost/apirest/categorias?id='+this.id)
      .then(r =>{
        this.categoria = r.data;
      })
      .catch(function(error){
        console.log(error);
      });
    },
    data(){
      return{
        id:null,
        categoria:{
          nombre:'',
          descripcion:''
        }
      }
    },
    methods:{
      guardarCategoria(){
         var router =  this.$router;
        axios.put('http://localhost/apirest/categorias?id='+this.id+'&nombre='+this.categoria.nombre+'&descripcion='+this.categoria.descripcion)
        .then(function(){
           router.push('/categorias'); 
            toastr.success('Categoria modificada')
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