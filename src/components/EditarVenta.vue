<template>
  <v-container>
    <v-row class="text-center">    
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Editar venta</h1>       
      </v-col>     
    </v-row>
    <v-row>
        <v-col>         
            <form v-on:submit.prevent="guardarVenta()">
            <v-text-field
                v-model="venta.idcliente"        
                label="Cliente"        
                outlined
                required       
            ></v-text-field>
            <v-text-field
                v-model="venta.idusuario"        
                label="Usuario"
               
                outlined
                required        
            ></v-text-field>
            <v-text-field
                v-model="venta.fecha"        
                label="Fecha"
                
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
    name:'editarVenta',
    mounted(){
      this.id = this.$route.params.id;
      console.log(this.$route);
      axios.get('http://localhost/apirest/ventas?id='+this.id)
      .then(r =>{
        this.venta = r.data;
      })
      .catch(function(error){
        console.log(error);
      });
    },
    data(){
      return{
        id:null,
        venta:{
          idcliente:'',
          idusuario:'',
          fecha:''        }
      }
    },
    methods:{
      guardarVenta(){
         var router =  this.$router;
        axios.put('http://localhost/apirest/ventas?id='+this.id+'&idventa='+this.venta.idventa+'&idusuario='+this.venta.idusuario+'&fecha='+this.venta.fecha)
        .then(function(){
           router.push('/ventas'); 
            toastr.success('Venta modificada')
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