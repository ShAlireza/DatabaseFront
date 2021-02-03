<template>
  <div>
    <h1>customers:</h1>
    <ul v-for="(customer,i) in customers" :key="i">
        <li><router-link :to="`/customer/${i}`">{{customer.name}}</router-link></li>
    </ul>
    <!-- <ul>
      <li> <router-link to="/customer/0">customer res at night</router-link></li>
      <li> <router-link to="/customer/1"> food at res </router-link></li>
      <li> <router-link to="/customer/2"> food at neigh range</router-link></li>
      <li><router-link to="/customer/3">all Orders</router-link></li>
      <li><router-link to="/customer/4">favorite food</router-link></li>
      <li><router-link to="/customer/5">favorite res</router-link></li>
      <li><router-link to="/customer/6">PersonWatchTransition</router-link></li>
      <li><router-link to="/customer/7">Discounts</router-link></li>
     </ul> -->
  </div>
</template>

<script>
import {customers} from '../assets/customer'
export default {
    data(){
        return{
            customers
        }
    }
};
</script>