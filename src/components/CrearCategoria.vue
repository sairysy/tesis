<template>
    <v-container>
     <v-row class="text-center">    
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Registro de categorias</h1>       
      </v-col>     
    </v-row>
    <v-row>
    <v-col>
        <form v-on:submit.prevent="guardarCategoria()">
        
        <v-text-field v-model="categoria.nombre"
                label="Nombre"
                outlined
                required   
        ></v-text-field>

        <v-text-field v-model="categoria.descripcion"
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
    name:'crearCategoria',
    data(){
        return{
            categoria:{
                
                nombre:'',
                descripcion:''
            }
        };
    },
    methods:{
        guardarCategoria(){
            var router = this.$router;
           const formData = new FormData();

           formData.append('nombre',this.categoria.nombre);
           formData.append('descripcion',this.categoria.descripcion);
          
           axios.post('http://localhost/apirest/categorias',formData)
           .then(()=>{
               router.push('/categorias');
                toastr.success('Categoria insertada correctamente');
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