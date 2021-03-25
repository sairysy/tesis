<template>
    <v-container>
     <v-row class="text-center">    
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Generar nueva venta</h1>       
      </v-col>     
    </v-row>
    <v-row>
    <v-col>
        <form v-on:submit.prevent="guardarVenta()">
        
        <v-combobox v-model="venta.idcliente"
                label="Cliente"
                items="sairy"
                outlined
                required   
        ></v-combobox>

        <v-combobox v-model="venta.idusuario"
                label="Usuario"
                items="flavio"
                outlined
                required   
        ></v-combobox>

        <v-date-picker v-model="venta.fecha"
                label="Fecha"
                type="picker"
                outlined
                required   
        ></v-date-picker>

         
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
    name:'crearVenta',
    data(){
        return{
            
            venta:{
                
                idcliente:'',
                idusuario:'',
                fecha:''
            }
        };
    },
    methods:{
        guardarProveedor(){
            var router = this.$router;
           const formData = new FormData();

           formData.append('idcliente',this.venta.idcliente);
           formData.append('idusuario',this.venta.idusuario);
           formData.append('fecha',this.venta.fecha);
           
           axios.post('http://localhost/apirest/ventas',formData)
           .then(()=>{
               router.push('/ventas');
                toastr.success('Venta generada');
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