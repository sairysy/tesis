<template>
  <v-container>
    <v-row class="text-center">    
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Editar producto</h1>       
      </v-col>     
    </v-row>
    <v-row>
        <v-col>         
            <form v-on:submit.prevent="guardarProducto()">

               <v-text-field
                v-model="producto.idproveedor"        
                label="Proveedor"        
                outlined
                required       
            ></v-text-field>

            <v-text-field
                v-model="producto.idcategoria"        
                label="Categoria"        
                outlined
                required       
            ></v-text-field>
            <v-text-field
                v-model="producto.nombre"        
                label="Nombre"        
                outlined
                required       
            ></v-text-field>

            <v-text-field
                v-model="producto.precio"        
                label="Precio"
                type="number"                
                prefix="$"
                outlined
                required        
            ></v-text-field>

            <v-text-field
                v-model="producto.stock"        
                label="Stock"
                type="number"
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
    name:'editarProducto',
    mounted(){
      this.id = this.$route.params.id;
      console.log(this.$route);
      axios.get('http://localhost/apirest/productos?id='+this.id)
      .then(r =>{
        this.producto = r.data;
      })
      .catch(function(error){
        console.log(error);
      });
    },
    data(){
      return{
        id:null,
        producto:{
          idproveedor:'',
          idcategoria:'',
          nombre:'',
          precio:'',
          stock:''
        }
      }
    },
    methods:{
      guardarProducto(){
         var router =  this.$router;
        axios.put('http://localhost/apirest/productos?id='+this.id+'&nombre='+this.producto+'&idproveedor='+this.producto+'&idcategoria='+this.producto.nombre+'&precio='+this.producto.precio+'&stock='+this.producto.stock)
        .then(function(){
           router.push('/productos'); 
            toastr.success('Producto modificado')
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