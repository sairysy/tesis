<template>
  <v-container>
    <v-row class="text-center">    
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Editar entrada de productos</h1>       
      </v-col>     
    </v-row>
    <v-row>
        <v-col>         
            <form v-on:submit.prevent="guardarPedido()">
            <v-text-field
                v-model="pedido.idproducto"        
                label="Producto"        
                outlined
                required       
            ></v-text-field>
            <v-text-field
                v-model="pedido.idproveedor"        
                label="Proveedor"  
                outlined
                required        
            ></v-text-field>
            <v-text-field
                v-model="pedido.cantidad"        
                label="Cantidad" 
                type="number" 
                outlined
                required        
            ></v-text-field>

            <v-text-field
                v-model="pedido.precio"        
                label="Precio"
                type="number"                
                prefix="$"
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
    name:'editarPedido',
    mounted(){
      this.id = this.$route.params.id;
      console.log(this.$route);
      axios.get('http://localhost/apirest/pedidos?id='+this.id)
      .then(r =>{
        this.pedido = r.data;
      })
      .catch(function(error){
        console.log(error);
      });
    },
    data(){
      return{
        id:null,
        pedido:{
          idproducto:'',
          idproveedor:'',
          cantidad:'',
          precio:''
          
        }
      }
    },
    methods:{
      guardarPedido(){
         var router =  this.$router;
        axios.put('http://localhost/apirest/pedidos?id='+this.id+'&idproducto='+this.pedido.idproducto+'&idproveedor='+this.pedido.idproveedor+'&cantidad='+this.pedido.cantidad+'&precio='+this.pedido.precio)
        .then(function(){
           router.push('/pedidos'); 
            toastr.success('Entrada modificada')
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