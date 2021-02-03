<template>
    <div>
    <h1>Restaurant</h1>
    <ul v-for="(restaurant,i) in restaurants" :key="i">
        <li><router-link :to="`/restaurant/${i}`">{{restaurant.name}}</router-link></li>
    </ul>
    </div>
</template>

<script>
import {restaurants} from '../assets/customer'
export default {
    data(){
        return{
            restaurants
        }
    }
}
</script>