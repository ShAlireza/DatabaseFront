<template>
  <div>
    <h1>Delivery:</h1>
    <ul v-for="(delivery,i) in delivery" :key="i">
        <li><router-link :to="`/delivery/${i}`" class="link">{{delivery.name}}</router-link></li>
    </ul>
  </div>
</template>

<script>
import { delivery } from '../assets/customer';
export default {
    data(){
        return{
            delivery
        }
    }
};
</script>
<style>

</style>