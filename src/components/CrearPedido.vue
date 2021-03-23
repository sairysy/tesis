<template>
    <v-container>
     <v-row class="text-center">    
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Registro de entradas de productos</h1>       
      </v-col>     
    </v-row>
    <v-row>
    <v-col>
        <form v-on:submit.prevent="guardarPedido()">
        
        <v-text-field v-model="pedido.idproducto"
                label="Producto"
                outlined
                required   
        ></v-text-field>

        <v-text-field v-model="pedido.idproveedor"
                label="Proveedor"
               
                outlined
                required   
        ></v-text-field>

        <v-text-field v-model="pedido.cantidad"
                label="Cantidad"
                 type="number" 
                outlined
                required   
        ></v-text-field>

        <v-text-field v-model="pedido.precio"
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
    name:'crearPedido',
    data(){
        return{
            pedido:{
                
                idproducto:'',
                idproveedor:'',
                cantidad:'',
                precio:''
               
            }
        };
    },
    methods:{
        guardarPedido(){
            var router = this.$router;
           const formData = new FormData();

           formData.append('idproducto',this.pedido.idproducto);
           formData.append('idproveedor',this.pedido.idproveedor);
           formData.append('cantidad',this.pedido.cantidad);
           formData.append('precio',this.pedido.precio);
           
           axios.post('http://localhost/apirest/pedidos',formData)
           .then(()=>{
               router.push('/pedidos');
                toastr.success('Pedido insertado correctamente');
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