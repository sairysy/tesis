<template>
    <v-container>
     <v-row class="text-center">    
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Registro de productos</h1>       
      </v-col>     
    </v-row>
    <v-row>
    <v-col>
        <form v-on:submit.prevent="guardarProducto()">  
        <v-select 
        v-model="poducto"
        class="form-control">  
          multiple
          outlined
          dense
        ></v-select>
        <v-combobox 
          v-model="producto.idcategoria"
          :items="items"
          label="Categoria"
          multiple
          outlined
          dense
        ></v-combobox>

        <!--v-text-field v-model="producto.idcategoria"
                label="Categoria"
                outlined
                required   
        ></v-text-field-->

        <v-text-field v-model="producto.nombre"
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

//import Vue from "vue";
//import {ComboBoxPlugin} from '@syncfusion/ej2-vue-dropdowns';
//Vue.use(ComboBoxPlugin);

//import {DataManager, WebApiAdaptor} from "@syncfusion/ej2-data";
import axios from 'axios';
import toastr from 'toastr';


export default {
  
    
    name:'crearProducto',
    

    data(){
        return{
              proveedores: {},
              proveedor:'',
            producto:{
                
                idproveedor:'',
                idcategoria:'',
                nombre:'',
                precio:'',
                stock:''
            }
        };
    },
    methods:{
        guardarProducto(){
            var router = this.$router;
           const formData = new FormData();
           formData.append('idproveedor',this.producto.idproveedor);
           formData.append('idcategoria',this.producto.idcategoria);
           formData.append('nombre',this.producto.nombre);
           formData.append('precio',this.producto.precio);
           formData.append('stock',this.producto.stock);
           axios.post('http://localhost/apirest/productos',formData)
           .then(()=>{
               router.push('/productos');
                toastr.success('Producto insertado correctamente');
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